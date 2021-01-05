class Ball {
    constructor(x,y,radius) {
      var options = {
        'restitution':0.4,
        'frictionAir':0.05,
        'density':1
      }
      this.body = Bodies.circle(x,y,radius,options)
      this.r = radius
      World.add(world,this.body)
  
    }
  
    display() {
      var pos = this.body.position
      var angle = this.body.angle
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      ellipseMode(RADIUS)
      strokeWeight(4)
      stroke("green")
      fill("blue")
      ellipse(0,0,this.r,this.r)
      pop()
    }
  }