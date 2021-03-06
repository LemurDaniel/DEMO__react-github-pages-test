import React, { useEffect, useRef, useState } from 'react'
import Matter from 'matter-js';


import Timer from './Timer';
import Modal from './Modal';

import Vector from '../modulesJs/Vector';
import Ship from '../modulesJs/Spaceship';
import Asteroid from '../modulesJs/Asteroids';
import ParticleManager from '../modulesJs/Particle';
import useAudio from './useAudio';


const INITIAL_AMOUNT = 4;
const INITIAL_TRESHHOLD = 800;
const TRESHHOLD_INCREASE = 1.3;
const TRESHHOLD_DAMPEN = 0.008;
const SCALE = 2; /// Higher number results in higher canvas resolution.

/*
for (let i = 0, num = 800, ast = 4; i < 33; i++) {
    num = num * (1.3 - ast * 0.008)
    ast++
    console.log(ast + ' ==> ' + Math.round(num))
}
*/

const ENGINE = Matter.Engine.create({
    gravity: {
        x: 0,
        y: 0,
    }
});

Window.Scale = SCALE;
Window.DrawScale = SCALE / 2;
Window.MatterJSWorld = ENGINE.world;
Window.Frames = 0;
Window.DrawRoughJS = true;
Window.RoughJSSetting = {
    roughness: 1.8,
    fill: 'white', stroke: 'white',
    fillWeight: 2, strokeWidth: 3.5,
    bowing: 0.9, curveFitting: 0.2
}

const data = {

    ship: null,
    asteroids: null,
    mousePos: {
        vec: new Vector(0, 0),
        draw: true,
    },

}

const Spacegame = () => {


    const [playSound] = useAudio()
    const canvasRef = useRef(null);
    const [dimension, setDimension] = useState([window.innerWidth, window.innerHeight - 70])

    // Also called on restart game.
    const initializeGame = () => {

        const c = canvasRef.current;

        if (data.ship !== null) data.ship.onInActive();
        if (data.asteroids !== null) data.asteroids.reset();

        data.ship = new Ship(dimension[0] * SCALE / 2, dimension[1] * SCALE / 2);
        data.asteroids = new ParticleManager();
        data.ship.onActive();

        data.ship.onShoot = () => playSound("ship_laser");
        data.ship.onThrust = () => playSound("ship_thrust", 0.15, true);

        window.onkeyup = e => {
            if (e.code === 'Space') data.ship.shoot();
            else if (e.code === 'KeyW' || e.code === 'ArrowUp') data.ship.thrust();
        }

        setTreshhold(INITIAL_TRESHHOLD);
        setAstTarget(INITIAL_AMOUNT);
        setAstAmount(0);
        setAstAmount(1);
        setScore(0);
        setTicks(0);
        setGameRunning(true);
        setPause(false);
    }

    useEffect(() => {
        window.onresize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight - 70;
            setDimension([newWidth, newHeight])
        }

        initializeGame();

        return () => window.onresize = null;
    }, [])


    useEffect(() => {
        const canvas = canvasRef.current;
        const width = dimension[0]
        const height = dimension[1]

        canvas.height = height * SCALE;
        canvas.width = width * SCALE;
        canvas.style.width = width + 'px'
        canvas.style.height = height + 'px';

    }, [canvasRef, dimension]);





    const [pause, setPause] = useState(false);

    const onMouseMove = e => {
        const canvas = canvasRef.current;
        const { ship, mousePos } = data;

        if (!ship || !gameRunning) return;

        if (e.type === 'touchmove' || e.type === 'touchstart') {
            const touch = e.nativeEvent.touches[0]
            mousePos.vec.x = (touch.clientX - canvas.offsetLeft) * SCALE;
            mousePos.vec.y = (touch.clientY - canvas.offsetTop) * SCALE;
            ship.setCursor(mousePos.vec);
            if (pause) setPause(false);
            ship.thrust(true);
        } else if (e.type === 'mousemove') {
            mousePos.vec.x = (e.clientX - canvas.offsetLeft) * SCALE;
            mousePos.vec.y = (e.clientY - canvas.offsetTop) * SCALE;
            ship.setCursor(mousePos.vec);
            if (pause) setPause(false);
        }

        if (e.type === 'touchstart') mousePos.draw = true;
        else if (e.type === 'touchend') mousePos.draw = false;
    }



    const [astAmount, setAstAmount] = useState(0);
    const [astTarget, setAstTarget] = useState(INITIAL_AMOUNT);
    const [treshhold, setTreshhold] = useState(INITIAL_TRESHHOLD);
    const [scores, setScores] = useState([]);
    const [score, setScore] = useState(0);
    useEffect(() => {
        if (score < treshhold) return;
        setTreshhold(score * Math.max(TRESHHOLD_INCREASE - TRESHHOLD_DAMPEN * astAmount, 1.01));
        setAstTarget(amount => amount + 1);
    }, [score])
    useEffect(() => {
        const { ship, asteroids } = data;
        while (asteroids.count + asteroids.limboCount < astTarget) {
            const ast = Asteroid.getRandom(canvasRef.current, ship);
            ast.limbo = Math.random() * 550 + 95;
            asteroids.push(ast);
        }
    }, [astTarget, astAmount]);



    const [gameRunning, setGameRunning] = useState(true);
    const [ticks, setTicks] = useState(0);
    useEffect(() => {
        if (ticks === 0) return;
        else if (ticks % (60 * 5) === 0) setScore(s => s + 125);
        else if (ticks % 60 === 0) setScore(s => s + 25);
        else if (ticks % 30 === 0) setScore(s => s + 5);
    }, [ticks]);

    useEffect(() => {
        if (gameRunning) return;
        scores.push({ score: score, ticks: ticks });
        scores.sort((a, b) => b.score - a.score)
        scores.length = 10;
        setScores(scores);
        setTicks(0);
    }, [gameRunning])


    useEffect(() => {
        const { ship, mousePos, asteroids, delta = 1000 / 60 } = data;

        if (!ship || !asteroids || !gameRunning) return;

        // Collision handeling for bullets hitting asteroids.
        // Asteroids hitting asteroids is done by MatterJS internally.
        Matter.Events.off(ENGINE, 'collisionStart')
        Matter.Events.on(ENGINE, 'collisionStart', ({ pairs }) => {
            pairs.forEach(({ bodyA, bodyB }) => {
                let [sensor, asteroid] = [null, null];

                if (bodyA.label === 'asteroid')
                    [sensor, asteroid] = [bodyB, bodyA];
                else if (bodyB.label === 'asteroid')
                    [sensor, asteroid] = [bodyA, bodyB];
                else return;

                const [sensorPrt, asteroidPrt] = [sensor.plugin.particleRef, asteroid.plugin.particleRef]

                const result = sensorPrt.onCollision(asteroidPrt);

                if (sensor.label === 'bullet') {
                    const points = Math.round(result * (1 / canvasRef.current.width * 1000));
                    setScore(sc => sc + points);
                    playSound("asteroid_explosion", 0.75);
                }
                else if (sensor.label === 'spaceship' && sensorPrt.alive) {
                    playSound("ship_impact");
                }
                else if (sensor.label === 'spaceship' && !sensorPrt.alive) {
                    playSound("game_over", 1);
                    setGameRunning(false);
                    setPause(true);
                }

            })
        });

        // Update displayed asteroid count.
        asteroids.onCountChanged = count => setAstAmount(count);

        const loop = () => {

            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            ctx.strokeStyle = 'white';
            ctx.fillStyle = 'white';
            ctx.lineCap = 'round';
            ctx.lineWidth = 4;

            Window.Frames++;
            Matter.Engine.update(ENGINE, delta);
            const cannon = ship.cannon;
            asteroids.render(canvas);
            cannon.render(canvas)
            ship.render(canvas);

            ship.drawLives(ctx);

            if (mousePos.draw && !pause) {
                ctx.beginPath();
                ctx.arc(mousePos.vec.x, mousePos.vec.y, 5 * Window.DrawScale, 0, Math.PI * 2)
                ctx.fill();
            }

        };

        // Draw on frame to make cursor dissapear.
        if (pause) return loop();

        const ticker = setInterval(() => loop(), delta);
        return () => clearInterval(ticker);
    }, [pause, gameRunning]);


    const [drawType, setDrawType] = useState('Scribbled');
    const changeDrawType = e => {
        Window.DrawRoughJS = !Window.DrawRoughJS;
        if (!Window.DrawRoughJS)
            setDrawType('Standard');
        else
            setDrawType('Scribbled');

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'white';
        ctx.lineCap = 'round';
        ctx.lineWidth = 4;

        // All the underlying movement is done by the physics engine.
        // As long as Engine.update isn't call as many rerenders can be done, without any movement.
        const { asteroids, ship, ship: { cannon } } = data;
        asteroids.render(canvas);
        cannon.render(canvas)
        ship.render(canvas);

        ship.drawLives(ctx);
    }

    return (
        <div className="overflow-hidden select-none" >

            <div className="relative flex justify-evenly font-bold text-brand2-100" >
                <p className="absolute md:left-1/3 top-2">Highscore: {score}</p>
                <p className="absolute md:right-1/3 top-8 md:top-2">Asteroids: {astAmount} / {astTarget}</p>
                <div className="absolute right-4 md:right-12 top-8">
                    <Timer ticks={ticks} setTicks={setTicks} pause={pause || !gameRunning} />
                </div>
                <button type="button" className="btn-decent text-sm  btn-light  absolute right-4 md:right-8 top-2"
                    onClick={changeDrawType}>{drawType}</button>
            </div>

            {gameRunning ? null : <Modal scores={scores} onRestart={initializeGame}/>}

            <div className="rounded-md">
                <canvas style={{ 'touch-action': 'none' }}
                    height={dimension[1]} width={dimension[0]} onMouseMove={onMouseMove} onClick={e => data.ship.shoot()}
                    onTouchMove={onMouseMove} onTouchEnd={onMouseMove} onTouchStart={onMouseMove}
                    onMouseLeave={e => setPause(true)} onMouseEnter={e => setPause(false)}
                    ref={canvasRef} className="" ></canvas>
            </div>


        </div>
    )
}

Spacegame.defaultProps = {
    width: window.innerWidth,
    height: window.innerHeight - 35
}

export default Spacegame
