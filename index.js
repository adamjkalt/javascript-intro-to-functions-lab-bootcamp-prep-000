function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
  
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
  
}

function sayHiToGrandma(string) {
  
  if (logWhisper) {
    greeting = "I can\'t hear you!";
} else if (logShout) {
    greeting = "YES INDEED!";
} else {
    greeting = "I love you too";
}
}