let boxes = [];
let slidre;
let cam;
function setup() {
  createCanvas(400, 600, WEBGL);
 
  noStroke();
  frustum(-1, 1, -1, 1, 400, 400);
  
  cam = createCamera();
  cam.setPosition(0,0,(height/2.0) / tan(PI*30.0 / 180.0));
  ortho(-width/2, width/2, -height/2, height/2,0.1,1000);
  angleMode(DEGREES);
  cam.setPosition(300,00,300);
  cam.lookAt(0,0,0);
  for (let i = 0; i < 6; i++)
  {
    for (let j = 0; j < 10; j++)
    {
      let xIndex = i-2.5;
      let yIndex = j-4.5;
      let b = new CustomBox(100*xIndex,100*yIndex,0, 50);
      boxes.push(b)
    }
  }
}

function draw() {
  background('#C4fff8');
  ambientLight(255);
  orbitControl();
  //print(`x: ${cam.eyeX}, y: ${cam.eyeY}, z: ${cam.eyeZ}`);
  if (frameCount%180 == frameCount%180) {
    easeXBoxes(); 
    easeYBoxes();
  }
  for (let i = 0; i < boxes.length; i++)
  {
    boxes[i].draw();
  }
}

function easeXBoxes()
{
  let maxA = 60;
  let arg = map(frameCount%180, 0, 179, 0, 1);
  let ease = map(easeInOutQuad(arg),0,1,0,maxA);
  let result = ease < maxA/2 ? ease : maxA-ease;
  applyToBoxes(CustomBox.prototype.setXAngle, result);
}

function easeInOutQuad(x){
return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
}

function easeYBoxes()
{
  let arg = map(frameCount%180, 0, 179, 0, 1);
  let result = map(easeInOutExpo(arg), 0,1,0,360);
  applyToBoxes(CustomBox.prototype.setYAngle,result);
}

function easeInOutExpo(x) {
return x === 0
  ? 0
  : x === 1
  ? 1
  : x < 0.5 ? pow(2, 20 * x - 10) / 2
  : (2 - pow(2, -20 * x + 10)) / 2;
}

function applyToBoxes(func, variable)
{
  let args = Array.prototype.slice.call(arguments,1);
  for (let i = 0; i < boxes.length; i++)
  {
    func.apply(boxes[i],args);
  }
}