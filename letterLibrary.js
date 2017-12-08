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

  var LetterSwap = {
  a: "!",
  b: "@",
  c: "#",
  d: "$"
}


emtyArray = [];
for (var i = 0; i < text.length; i++) {
  emtyArray = text.split('');
  if (emtyArray[i] == "a" || emtyArray[i] == "A") {console.log("Swap letter with object array");};//Working simplify code

}
console.log(emtyArray);
}
}

// var lett = "";
// for (var i = 0; i < Object.keys(LetterSwap).length; i++) {
  // lett = LetterSwap[i]
// }
// console.log(lett);
// console.log(Object.keys(LetterSwap).length)
