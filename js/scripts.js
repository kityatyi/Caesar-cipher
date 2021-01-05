// Caesar cipher

function standardize(msg) {
  //
  msg = msg.toUpperCase(); // converts plaintext to uppercase letters
  msg = msg.replace(/[^A-Z]/g, ""); // removes non-desired ASCII characters
  //
  return msg;
}

function arrange(ciphertext) {
  //
  ciphertext = ciphertext.match(/.{1,5}/g).join(" "); // groups string into blocks of five characters
  //
  return ciphertext; // returns encrypted string
}

// prettier-ignore
function encrypt(msg, key) { // plaintext(string), key(number)
  //
  msg = standardize(msg);
  key = parseInt(key, 10);
  let ciphertext = ""; // initializes empty string for ciphertext
  
  for (let i = 0; i < msg.length; i++) {
    let currentChar = msg[i]; // grabs each character iteration
    let asciiChar = currentChar.charCodeAt(); // converts letter to ASCII decimal

    asciiChar += key; // transposes ASCII decimal with value of key
    
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
  
  return arrange(ciphertext);
}

// main function to be called by button click
function caesar() {
  //
  let msg = document.getElementById("plaintext").value; // reads user-entered string
  let key = document.getElementById("key").value; // identifies user-entered key
  let output = encrypt(msg, key); // calls for encryption
  document.getElementById("ciphertext").innerHTML = output; // returns encrypted
}
