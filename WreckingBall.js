class WreckingBall {

    constructor(x, y, width, height, angle) {
        
        var options = {
            density: 0.2,
            frictionAir: 0.001
        }

        this.body = Bodies.rectangle(x, y, width, height, angle, options);

        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill('green');
        ellipse(0, 0, this.width, this.height);
        pop();
    }

}