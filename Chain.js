class Chain {
    constructor(bodyA,pointB) {
        var options = {
            'bodyA':bodyA,
            'pointB':pointB,
            'stiffness':1.2,
            'lenght':0.2
        }
        this.pointB = pointB
        this.chain = Constraint.create(options)

        World.add(world,this.chain)
    }

    display() {
        var posA = this.chain.bodyA.position
        var posB = this.pointB
        push()
        strokeWeight(4)
        stroke("red")
        line(posA.x,posA.y,posB.x,posB.y)
        pop()
    }
}