import React, { useEffect, useRef, useState } from 'react'

import Vector from '../modulesJs/Vector';
import Ship from '../modulesJs/Spaceship';
import Asteroid from '../modulesJs/Asteroids';
import ParticleManager from '../modulesJs/Particle';



const MAX_ASTEROIDS = 30;
const SCALE = 2;
const ship = new Ship(0, 0, 0)
const asteroids = new ParticleManager();
const mousePos = {
    vec: new Vector(0, 0),
    draw: true,
}


const Spacegame = ({ width, height }) => {

    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;

        canvas.height = height * SCALE;
        canvas.width = width * SCALE;
        canvas.style.width = width + 'px'
        canvas.style.height = height + 'px';

        // Scale and translate origin once.
        canvas.getContext('2d').scale(SCALE, SCALE);
        ship.x = width * SCALE / 2
        ship.y = height * SCALE / 2;

        ship.x = width * SCALE / 2;
        ship.y = height * SCALE / 2;

        return () => canvas.getContext('2d').scale(-SCALE, -SCALE);
    }, [canvasRef, width, height]);





    const [gameRunning, setGameRunning] = useState(true);
    const [pause, setPause] = useState(false);

    const onMouseMove = e => {
        const canvas = canvasRef.current;

        if (e.type === 'touchmove' || e.type === 'touchstart') {
            const touch = e.nativeEvent.touches[0]
            mousePos.vec.x = (touch.clientX - canvas.offsetLeft) * SCALE;
            mousePos.vec.y = (touch.clientY - canvas.offsetTop) * SCALE;
            ship.setCursor(mousePos.vec);
            ship.thrust(true);
        } else if (e.type === 'mousemove') {
            mousePos.vec.x = (e.clientX - canvas.offsetLeft) * SCALE;
            mousePos.vec.y = (e.clientY - canvas.offsetTop) * SCALE;
            ship.setCursor(mousePos.vec);
        }

        if(e.type === 'touchstart') mousePos.draw = true;
        else if(e.type === 'touchend') mousePos.draw = false;
    }



    const [astAmount, setAstAmount] = useState(0);
    const [astTarget, setAstTarget] = useState(0);
    const [score, setScore] = useState(0);
    useEffect(() => {
        const amount = Math.max(4, Math.ceil(score / 75))
        setAstTarget(Math.min(MAX_ASTEROIDS, amount))
    }, [score])
    useEffect(() => {
        while (asteroids.count(true) < astTarget) {
            const ast = Asteroid.getRandom(canvasRef.current, ship);
            ast.setLimbo(Math.random() * 750 + 150, () => setAstAmount(asteroids.count()));
            asteroids.push(ast);
        }
    }, [astTarget, astAmount]);





    useEffect(() => {
        if (!ship || !asteroids || !gameRunning) return;
        let localScore = score;

        const loop = () => {

            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            ctx.strokeStyle = 'white';
            ctx.fillStyle = 'white';
            ctx.lineCap = 'round';
            ctx.lineWidth = 4;

            const cannon = ship.cannon;
            asteroids.render(canvas);
            cannon.render(canvas)
            ship.render(canvas)

            ctx.setTransform(1, 0, 0, 1, 0, 0);

            if (mousePos.draw) {
                ctx.beginPath();
                ctx.arc(mousePos.vec.x, mousePos.vec.y, 5, 0, Math.PI * 2)
                ctx.fill();
            }


            // Collision dedection.
            asteroids.particles.forEach(prt => {
                asteroids.calculateCollsision(ship, () => {
                    // setGameRunning(false);
                    setAstAmount(asteroids.count());
                })
                asteroids.calculateCollsision(prt);
            });

            cannon.particles.forEach(bullet => {
                asteroids.calculateCollsision(bullet, result => {
                    localScore += result;
                    setScore(localScore);
                    setAstAmount(asteroids.count());
                })
            })

        };

        // Draw on frame to make cursor dissapear.
        if (pause) return loop();

        const ticker = setInterval(() => loop(), 1000 / 60);
        return () => clearInterval(ticker);
    }, [pause, gameRunning]);




    return (
        <div className="overflow-hidden" >

            <div className="relative flex justify-evenly font-bold text-brand2-100" >
                <p className="absolute md:left-1/3 top-2">Highscore: {score}</p>
                <p className="absolute md:right-1/3 top-8 md:top-2">Asteroids: {astAmount} / {astTarget}</p>
            </div>

            <div className="rounded-md">
                <canvas style={{ 'touch-action': 'none' }}
                    height={height} width={width} onMouseMove={onMouseMove} onClick={e => ship.shoot()}
                    onTouchMove={onMouseMove} onTouchEnd={onMouseMove} onTouchStart={onMouseMove}
                    onMouseLeave={e => setPause(true)} onMouseEnter={e => setPause(false)}
                    ref={canvasRef} className=" " ></canvas>
            </div>

        </div>
    )
}

Spacegame.defaultProps = {
    width: window.innerWidth,
    height: window.innerHeight - 35
}

export default Spacegame
