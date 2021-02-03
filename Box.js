//const { FILL } = require("./p5");

class Box {

    constructor(x, y, width, height) {

        var options = {
            restitution: 1,
            friction: 1,
            density: 1,
            isStatic: false
        };

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }


    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill('white');
        stroke('black');
        strokeWeight(2);
        rect(0, 0, this.width, this.height);
        pop();
    }
}