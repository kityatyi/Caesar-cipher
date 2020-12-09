// Caesar cipher
// prettier-ignore
function caesarEncrypt(str, num) { // plaintext, key
  str = str.toUpperCase(); // converts plaintext to uppercase letters
  str = str.replace(/[^A-Z]/g, "") // removes non-desired ASCII characters
  let ciphertext = ""; // initializes empty string for ciphertext
  
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i]; // grabs each character iteration
    let asciiChar = currentChar.charCodeAt(); // converts letter to ASCII decimal

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

    let encodedChar = String.fromCharCode(asciiChar); // converts ASCII back to letter   
    ciphertext += encodedChar; // appends letter to ciphertext string
  }
  
  ciphertext = ciphertext.match(/.{1,5}/g).join(' ') // groups string into blocks of five characters   
  return ciphertext; // returns encrypted string
}

const test = caesarEncrypt("Enter text here", 26); // enter plaintext, key
console.log(test); // logs ciphertext to console
