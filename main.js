//console.log('Hello World!');

var none = document.querySelector('audio');
  none.style.display = 'none';
  
var music = document.querySelector(".sound");
document.addEventListener("dblclick", function(){
    music.play();
    });
alert(`Double tap on screen to play sound!\n\n\nFor a better experience, use earphones and increase the volume!`);

