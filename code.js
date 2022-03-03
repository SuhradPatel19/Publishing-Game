var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var c1 = createSprite(110, 200,20,20);
c1.shapeColor="red";
var c2 = createSprite(160, 250,20,20);
c2.shapeColor="red";
var c3 = createSprite(210, 200,20,20);
c3.shapeColor="red";
var c4 = createSprite(260, 250,20,20);
c4.shapeColor="red";

var edges 

var boundry1 = createSprite(200, 70,400,10);
var boundry2 = createSprite(200, 330,400,10);
var start = createSprite(10, 200,125,250);
start.shapeColor="lightblue";
var end = createSprite(390, 200,125,250);
end.shapeColor="yellow";
var Sam= createSprite(30, 200,20,20);
Sam.shapeColor="green";

c1.setVelocity(0,9);
c2.setVelocity(0,-9);
c3.setVelocity(0,9);
c4.setVelocity(0,-9);

var chances=0;
playSound("assets/category_background/repitition.mp3");
function draw() {
  background("white");
  drawSprites();
  edges=createEdgeSprites();
  
  if (keyDown(LEFT_ARROW)) {
    Sam.x-=10;
  }
  
  if (keyDown(RIGHT_ARROW)) {
    Sam.x+=10;
  }
  
  Sam.bounceOff(edges);
  Sam.bounceOff(boundry1);
  Sam.bounceOff(boundry2);
  
  c1.bounceOff(boundry1);
  c1.bounceOff(boundry2);
  c2.bounceOff(boundry1);
  c2.bounceOff(boundry2);
  c3.bounceOff(boundry1);
  c3.bounceOff(boundry2);
  c4.bounceOff(boundry1);
  c4.bounceOff(boundry2);
  
  if (Sam.isTouching(c1) || Sam.isTouching(c2) || Sam.isTouching(c3) || Sam.isTouching(c4)) {
    Sam.x=30;
    Sam.y=200;
    chances+=1;
  }
  
  if (Sam.isTouching(end)) {
    textSize(30);
    fill("blue");
    text("You Have Won the Game! \n It took "+chances+" chances",50,350);
    c1.setVelocity(0,0);
    c2.setVelocity(0,0);
    c3.setVelocity(0,0);
    c4.setVelocity(0,0);
    Sam.setVelocity(0,0);
    Sam.x=380;
    Sam.y=200;
    // stopSound("assets/category_background/repitition.mp3");
    // playSound("assets/category_alerts/vibrant_game_life_lost_1.mp3",false);
  }
  textSize(30);
  text("Chances: "+chances, 20,30);
  
  
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
