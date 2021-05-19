class Snow {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':0.1,
          'density':1.0,
          
      }
      this.snow = Bodies.circle(x, y, 5, options);
     this.image = loadImage("snow4.webp")
      
      World.add(world, this.snow);
    }
    display(){
      var pos =this.snow.position;
      
      var angle = this.snow.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      image(this.image,pos.x,pos.y,20,30)
    
      fill("white");
      ellipse(0, 0, 5);

      pop();

      if(this.snow.position.y>height)
        {
            Matter.Body.setPosition(this.snow,{x:random(0,400),y:random(0,400)})
        }
    }

    
        
  };