// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

//   progress


myInterval = setInterval(setColor, 1500);
function setColor() {
    bar = document.querySelector('.progress-bar'),
counter = document.querySelector('.count'),
i = 0,
throttle = 0.7; // 0-1

(function draw() {
if(i <= 82) {
var r = Math.random();

requestAnimationFrame(draw);  
bar.style.width = i + '%';
counter.innerHTML = Math.round(i) + '%';

if(r < throttle) { // Simulate d/l speed and uneven bitrate
  i = i + r;
}
} 
})();
}



myInterval2 = setInterval(setColor2, 1000);

function setColor2() {
    bar2 = document.querySelector('.progress-bar2'),
counter2 = document.querySelector('.count2'),
i2 = 0,
throttle2 = 0.7; // 0-1

(function draw2() {
if(i2 <= 45) {
var r2 = Math.random();

requestAnimationFrame(draw2);  
bar2.style.width = i2 + '%';
counter2.innerHTML = Math.round(i2) + '%';

if(r2 < throttle2) { // Simulate d/l speed and uneven bitrate
  i2 = i2 + r2;
}
} 
})();
  }


  function stopColor() {
    clearInterval(myInterval);
    clearInterval(myInterval2);
  }  


  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


// video

// var myVideo = document.getElementById("ply");
// setInterval(vid, 100);
// function vid(){
//   // myVideo.muted=true;
//   this.play();
// }

// startup
