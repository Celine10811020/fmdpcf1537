var inputString;
var outputString;
var seed;

var char;
var index;
var newIndex;
var refStr = "0123456789abcdefghijklmnopqrstuvwxyz._~ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var password;

document.getElementById("Encode").onclick = function() {encode()};
document.getElementById("Copy").onclick = function() {copyContent()};

document.getElementById("InputString").addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    clearSeed()
    document.getElementById("Seed").focus();
  }
});
document.getElementById("Seed").addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    document.getElementById("Encode").click();
  }
});

document.getElementById("InputString").onclick = function() {clearString()};
document.getElementById("Seed").onclick = function() {clearSeed()};
