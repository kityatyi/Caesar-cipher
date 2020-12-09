Caesar Cipher

As a newbie to the language, this Caesar cipher implementation is my greatest achievement in JavaScript so far.

The cipher first turns the string into uppercase. In the next step, it removes all non-alphabetic characters, before translating all that remains  uppercase letters A-Z to ASCII decimals in order to carry out the transposition. Having completed that, the resulting ciphertext is arranged in blocks of five characters.

The function accepts a string (plaintext) and a number (key) parameter. At the moment, decryption works by reversing the value of the key.

Zsolt