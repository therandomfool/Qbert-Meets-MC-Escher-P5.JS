class CustomBox {
    constructor(x,y,z,size){
      this.x = x;
      this.y = y;
      this.z = z;
      this.size = size;
      this.xAngle = 0;
      this.yAngle = 0;
      this.zAngle = 0;
    }
    
    setAngle(x, y, z)
    {
      this.xAngle = x;
      this.yAngle = y;
      this.zAngle = z;
    }
    
    setXAngle(x){ this.xAngle = x;}
    setYAngle(y){ this.yAngle = y;}
    setZAngle(z){ this.zAngle = z;}
    
    
    draw(){
      
      push();
      translate(this.x,this.y,this.z);
      rotateX(this.xAngle);
      rotateY(this.yAngle);
     
      
      //y axis
      push();
        //outside
        ambientMaterial(116, 92, 151);
        translate(0,this.size/2,0);
        rotateX(90);
        plane(this.size);
        
        //inside
        push();
          translate(0,0,1);
          ambientMaterial(57, 55, 91);
          plane(this.size-0.05);
        pop();
      
        //outside
        translate(0,0,this.size);
        plane(this.size);
      
        //inside
        translate(0,0,-1)
        ambientMaterial(245, 176, 203);
        plane(this.size-10);
      pop();
      
      //x axis
      push();
        translate(this.size/2, 0, 0);
        rotateY(90);
        ambientMaterial(245, 176, 203);
        plane(this.size);
      
        //inside
        push();
          translate(0,0,-1);
          ambientMaterial(245, 176, 203);
          plane(this.size-0.05);
        pop();
      
        //outside
        translate(0,0,-(this.size));
        ambientMaterial(57, 55, 91);
        plane(this.size);
      
        //inside
        translate(0,0,1);
        ambientMaterial(57, 55, 91);
        plane(this.size-0.05);
      pop();
      pop();
    }
  }