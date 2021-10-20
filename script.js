

var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";


var transformLetter = (letter,origin, destination) => {
   var letterIndex = origin.indexOf(letter); 
   if(letterIndex === -1) {
     return letter; 
   } return destination[letterIndex]; 
   }

   document.getElementById('encrypt').addEventListener('click', () => {
   var encrypted = '';
   document.getElementById('typeText1').value.split('').forEach((symbol)=> { 
   encrypted += transformLetter(symbol,plainAlphabet,encryptedAlphabet); 
    })
   document.getElementById('typeText2').value = encrypted; 
   })



   document.getElementById('decrypt').addEventListener('click', () => {
    var decrypted = '';
    document.getElementById('typeText2').value.split('').forEach((symbol)=> { 
    decrypted += transformLetter(symbol,encryptedAlphabet,plainAlphabet); 
   })
   document.getElementById('typeText1').value = decrypted; 
  })
 



console.log ('Generador Aleatorio'); 

var randomPick = (n, min, max) => {
  var randomNumbers = new Set(); 
  while (randomNumbers.size < n) { 
  randomNumbers.add(Math.trunc(Math.random() * (max - min) + min));
  }
return randomNumbers; 
}

console.log(randomPick(5, 1, 10)); 