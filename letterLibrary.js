window.addEventListener('load', function(){
  document.getElementById("textField").addEventListener('keyup', enterKey);
})

function enterKey(event){
if(event.keyCode === 13){
  //TODO move this to another named function called action() and in the keyCode event enter the function name so both enter and the button work
  // console.log('enter');
  var inputLength = document.getElementById("textField");
  var text = document.getElementsByTagName("h1")[0].innerHTML = inputLength.value;
  // console.log(text.length);


emtyArray = [];
for (var i = 0; i < text.length; i++) {
  emtyArray = text.split('');

  // if (text === " ") {} // TODO add an if statement saying if there is space in array deleat it...

var LetterSwap = {
  a: "!",
  b: "@",
  c: "#",
  d: "$"
}
  tstString = "";
  for (var obj = 0; obj < Object.keys(LetterSwap).length; obj++) {
    // if (emtyArray[i] == Object.keys(LetterSwap)) {
    //   console.log("yeet");

    // }
    tstString = Object.values(obj);
    // console.log(obj);
  //   for (LetterSwap in emtyArray) {
  //   console.log('eyy');
  // }
  }
  // if (LetterSwap) {}
  // if (emtyArray[i] == "a" || emtyArray[i] == "A") {console.log("Swap letter with object array");};//Working simplify code

}
console.log(tstString);
console.log(emtyArray); // shows the array of the typed in string
}
}

// var lett = "";
// for (var i = 0; i < Object.keys(LetterSwap).length; i++) {
  // lett = LetterSwap[i]
// }
// console.log(lett);
// console.log(Object.keys(LetterSwap).length)
