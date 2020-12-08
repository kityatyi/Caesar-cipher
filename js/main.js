// Caesar cipher
// prettier-ignore
function caesarEncrypt(str, num) { // plaintext, key
  str = str.toUpperCase(); // converts plaintext to uppercase letters
  str = str.replace(/[^A-Z]/g, "") // removes non-desired ASCII characters
  var ciphertext = ""; // initializes empty string for ciphertext
  
  for (var i = 0; i < str.length; i++) {
    var currentChar = str[i]; // grabs each character iteration
    asciiChar = currentChar.charCodeAt(); // converts letter to ASCII decimal

    asciiChar += num; // transposes ASCII decimal with value of key
    
    // prettier-ignore
    if (asciiChar > 90) { // checks whether ASCII exceeds of range 65-90
      asciiChar -= 26; // subtracts 26 if ASCII falls outside of range 65-90
    }
    else if (asciiChar < 65) {
      asciiChar += 26;
    }
    else {
      asciiChar = asciiChar;
    }

    encodedChar = String.fromCharCode(asciiChar); // converts ASCII back to letter   
    ciphertext += encodedChar; // appends letter to ciphertext string
  }
  
  ciphertext = ciphertext.match(/.{1,5}/g).join(' ') // groups string into blocks of five characters   
  return ciphertext; // returns encrypted string
}

var test = caesarEncrypt("Andika baba pici", 9); // enter plaintext, key
console.log(test); // logs ciphertext to console
