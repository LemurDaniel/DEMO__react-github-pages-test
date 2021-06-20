import Vector from './Vector';


class ParticleManager {

    constructor() {
        this.particles = [];
    }


    count() {
        return this.particles.length;
    }

    push(prt) {
        this.particles.push(prt)
    }

    render(canvas) {

        const particles = this.particles;
        const ctx = canvas.getContext('2d');

        let end = particles.length - 1;
        for (let i = 0; i <= end; i++) {

            const prt = particles[i];
            prt.collisions = {}; // reset collisions for this frame.

            if(prt.alive) prt.render(canvas);
            else particles[i--] = particles[end--];

        }

        particles.length = end+1;

    }

    calculateCollsision(collider, afterCollision) {

        const particles = this.particles;

        let end = particles.length-1;
        for (let i = 0; i <= end; i++) {

            const prt = particles[i];

            if (!prt.alive) continue;
            if (prt === collider) continue;
            
            // Prevent double calculating and handling of collisions.
            if(collider.id in prt.collisions) continue;
            
            // Calculate distance.
            const dist = prt.dist(collider);
            if (dist >= prt.radius + collider.radius) {
                prt.collisions[collider.id] = false;
                collider.collisions[prt.id] = false;
                continue;
            }
            prt.collisions[collider.id] = true;
            collider.collisions[prt.id] = true;


            // On Collision.
            const result = collider.onCollision(prt);

            // Remove dead particles.
            if(!prt.alive) particles[i--] = particles[end--];
    
            if(afterCollision) afterCollision(result, collider, prt);
            if(!collider.alive) break;
        }

        particles.length = end+1;

    }

}


export class Particle extends Vector {

    static id = 0;

    constructor(pos, velocity, radius) {
        super(pos.x, pos.y);
        this.id = Particle.id++;
        this.alive = true;
        this.angle = 0;
        this.radius = radius;
        this.velocity = velocity;
        this.collisions = {};
    }

    isOOB(canvas) {
        if (this.x > canvas.width + this.radius * 2) return true;
        if (this.y > canvas.height + this.radius * 2) return true;
        if (this.x < 0 - this.radius * 2) return true;
        if (this.y < 0 - this.radius * 2) return true;
        return false;
    }

    wrapBounds(canvas) {
        if (this.x > canvas.width + this.radius * 2 + 5)
            this.x = -this.radius * 2;
        else if (this.x < -this.radius * 2 - 5)
            this.x = canvas.width + this.radius * 2;

        if (this.y > canvas.height + this.radius * 2 + 5)
            this.y = -this.radius * 2;
        else if (this.y < -this.radius * 2 - 5)
            this.y = canvas.height + this.radius * 2;
    }

    render(canvas) {
        this.move(canvas);
        this.draw(canvas.getContext('2d'));
    }

    move(canvas) {
        this.add(this.velocity);
        this.wrapBounds(canvas);
    }

    draw(ctx) { 
        ctx.setTransform(1, 0, 0, 1, this.x, this.y);
        ctx.rotate(this.angle);
    }

    onCollision(prt) {
        return 0;
    }
}


export default ParticleManager;
