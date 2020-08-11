class garbage{
    constructor(x,y,width,height){
        var options={
            isStatic: true
            
        }
        
        this.body = Bodies.rectangle(x, y, width,height,options);
        this.x = x;
        this.y = y;
        
        this.image=loadImage("dustbingreen.png");
        World.add(world, this.body);
      
    }
  
  display(){
    push ();
    var pos =this.body.position;
    fill("white");
    imageMode(CENTER);
    image( this.image,pos.x, pos.y, 200, 200);
    
    
   
    pop();
  }
  };