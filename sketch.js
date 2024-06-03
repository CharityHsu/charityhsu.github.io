var messages = ["CONGRADUATIONS ON CONGRADUATING", "🎉", "you're a master now", "🎓", "climb up that academic ladder", "watch out world 👀", "sarah kondo? more like sarah intheknow", "such congrats", "🎊", "much grad", "very accomplish", "🔥", "much smart", "wow", "so brains", "🧠", "very impress", "i'll let you be my master in bed"]
var song;

var count = 0;
var time = 64;
var i = 0;

function preload() {
  song = loadSound("song.mp3");
}

function setup() {
  textFont('Comic Sans MS');
  createCanvas(
    window.innerWidth,
    window.innerHeight);

    let playButton = createButton('🎺');
    playButton.position(width / 2 - 30, height / 2);
    playButton.mousePressed(startPlaying);
}

function startPlaying() {
  if (song && song.isLoaded()) {
    song.play();
  }
}

function draw() {
  // after every message has been played, speed up
  count += 1;
  if (count == time) {
    drawText()
    count = 0;
  }
}

function drawText() {
  var r = getRandomInt(0, 255);
  var g = getRandomInt(0, 255);
  var b = getRandomInt(0, 255);

  fill(r, g, b)
  textSize(getRandomInt(12, 40))
  // place text so it won't get truncated
  text(messages[i], getRandomInt(0, window.innerWidth - textWidth(messages[i])), getRandomInt(0, window.innerHeight));
  i += 1;
  if (i == messages.length) { 
    if (time > 8) {
      time = time / 2;
    }
    
    i = 0;
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // the maximum is exclusive and the minimum is inclusive
}