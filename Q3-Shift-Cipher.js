/*
Question - 3

A shift cipher takes a plain text message and shifts each letter forward in the alphabet by a given number. 
For example, a shift cipher with a shift of 1 would turn the string 'hello' to 'ifmmp'.

Create a class ShiftCipher that takes the numerical value of the shift as a constructor parameter. 
The class should have two methods:

encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.

In both methods, any character outside the alphabet should remain the same.
But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. 
For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z.
*/

// Answer
class ShiftCipher {
  constructor(shift) {
    this._shift = shift;
  }

  // Encrypt method
  encrypt(textToShift) {
    return this.letterShift(textToShift, 'forward');
  }

  decrypt(textToShift) {
    return this.letterShift(textToShift, 'backward');
  }

  // Letter shift method
  letterShift(textInput, direction) {
    let newWord = '';

    for(let i = 0; i < textInput.length; i++) {
      const char = textInput[i];

      if(/[a-zA-Z]/.test(char)) {
        const isLowerCase = char === char.toLowerCase();
        const charCode = char.charCodeAt(0)
        let finalCharCode = 0;

        if(direction === 'forward') {
          if(isLowerCase) {
            if((charCode + (this._shift % 26)) > 122) {
              finalCharCode = 96 + (this._shift % 26)
              const newChar = String.fromCharCode(finalCharCode).toUpperCase();

              newWord += newChar;
            } else {
              finalCharCode = charCode + (this._shift % 26);
              const newChar = String.fromCharCode(finalCharCode).toUpperCase();

              newWord += newChar;
            }
          } else {
            if((charCode + (this._shift % 26)) > 90) {
              finalCharCode = 64 + (this._shift % 26)
              const newChar = String.fromCharCode(finalCharCode);

              newWord += newChar;
            } else {
              finalCharCode = charCode + (this._shift % 26);
              const newChar = String.fromCharCode(finalCharCode);

              newWord += newChar;
            };
          };
        } else {
          if(isLowerCase) {
            if(charCode - (this._shift % 26) < 97) {
              finalCharCode = 123 - (this._shift % 26);
              const newChar = String.fromCharCode(finalCharCode);

              newWord += newChar;
            } else {
              finalCharCode = charCode - (this._shift % 26);
              const newChar = String.fromCharCode(finalCharCode);

              newWord += newChar;
            };
          } else {
            if(charCode - (this._shift % 26) < 65) {
              finalCharCode = 91 - (this._shift % 26);
              const newChar = String.fromCharCode(finalCharCode).toLowerCase();

              newWord += newChar;
            } else {
              finalCharCode = charCode - (this._shift % 26);
              const newChar = String.fromCharCode(finalCharCode).toLowerCase();

              newWord += newChar;
            };
          };
        };
      } else {
        //Adding non alphabetic characters
        newWord += char;
      };
    };
    return newWord;
  };
};

// Test
const cipher = new ShiftCipher(3);

console.log(cipher.encrypt('I love to code!')); // Output: 'K NQXG VQ EQFG!'
console.log(cipher.decrypt('K <3 OA RWRRA')); // Output: 'i <3 my puppy'
