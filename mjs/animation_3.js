var horloge = new Image();

function init(){
  horloge.src = './img/clock.png';
  window.requestAnimationFrame(draw);
}

function draw() {

  var ctx = document.getElementsByTagName('canvas')[1].getContext('2d');
  
  ctx.clearRect(0,0,300,300); 
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.strokeStyle = 'rgba(0,0,0,0.0)';
  ctx.save();
  ctx.translate(150,150);

  //Secondes
  var time = new Date();
  ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
  ctx.translate(0,0);
  ctx.fillRect(5,0,90,5); 
  
  ctx.restore();
  ctx.drawImage(horloge,0,0,300,300);
  window.requestAnimationFrame(draw);
}

init();