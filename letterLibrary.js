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

    // console.log(Object.keys(LetterSwap)[i]);
    // console.log(new RegExp(/^(a|A)$/));
    // console.log(text);


  // var keys = Object.keys(LetterSwap);

  // for (var value in LetterSwap) {
    // if (emtyArray[i] == Object.keys(LetterSwap)) {
    //   console.log("yeet");

    // }
    // console.log(Object.keys(LetterSwap));
    // console.log(LetterSwap[value]);
    // console.log(value.split(''));
    // console.log(value);
    // if (Object.keys(LetterSwap)) {
    //   // console.log(Object.keys(LetterSwap));
    //   // console.log(value);
    //   // tstString = LetterSwap[value];
    // }
    // tstString += Object.values(obj);
    // console.log(obj);
  //   for (LetterSwap in emtyArray) {
  //   console.log('eyy');
  // }
  // }
  // if (LetterSwap) {}
  // if (emtyArray[i] == "a" || emtyArray[i] == "A") {console.log("Swap letter with object array");};//Working simplify code

}
// console.log(tstString);
console.log(emtyArray); // shows the array of the typed in string
  tstString = "";
  for (var letter = 0; letter < emtyArray.length; letter++) {
// console.log(emtyArray[letter]);
    var LetterSwap = {
  a: "!",
  b: "@",
  c: "#",
  d: "$"
}

// if (LetterSwap) {}
  for (var value in LetterSwap) {
    // console.log(emtyArray[letter] === value);
    // console.log(emtyArray[letter]);
    // console.log(value);
    if (emtyArray[letter] === value) {
      // console.log(LetterSwap[value]);
      // console.log(Object.values(LetterSwap));
      // console.log(LetterSwap[value])
      // tstString = Object.values(LetterSwap);
      tstString += LetterSwap[value];
    }
  }
  }
  console.log(tstString)
}
}

// var lett = "";
// for (var i = 0; i < Object.keys(LetterSwap).length; i++) {
  // lett = LetterSwap[i]
// }
// console.log(lett);
// console.log(Object.keys(LetterSwap).length)
