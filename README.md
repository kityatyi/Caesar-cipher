Caesar cipher

As a newbie to the language, this Caesar cipher implementation is my greatest achievement in JavaScript to date.

https://en.wikipedia.org/wiki/Caesar_cipher

The cipher first turns the string into uppercase. In the next step, it removes all non-alphabetic characters, before translating all that remains - letters A-Z - to ASCII decimals in order to carry out the transposition. Having completed that, the resulting ciphertext is arranged in blocks of five characters.

The function accepts a string (plaintext) and a number (key) parameter. Add your own text you wish to encrypt, select a key - an integer, most commonly one between 1 and 25. At the moment, decryption works by reversing the value of the key.

Zsolt
