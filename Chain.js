class Chain{
    constructor(body1, body2, offsetX, offsetY) {

        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {
                x: offsetX,
                y: offsetY
            }
        }
        this.chain = Constraint.create(options)
        World.add(world, this.chain)
    }

    display() {
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
        stroke("red")
        strokeWeight(4)
        line(posA.x, posA.y, posB.x + this.offsetX, posB.y + this.offsetY)
    }
}