class ShiftCipher {
  constructor(shift) {
    this._shift = shift;
  }

  encrypt(plainText) {
    return this.shiftText(plainText, 1);
  }

  decrypt(encryptedText) {
    return this.shiftText(encryptedText, -1);
  }

  shiftText(text, direction) {
    let result = '';

    for (let i = 0; i < text.length; i++) {
      const char = text[i];

      // Check if the character is a letter
      if (/[a-zA-Z]/.test(char)) {
        const isUpperCase = char === char.toUpperCase();
        const charCode = char.charCodeAt(0);
        const shiftedCharCode = (charCode - (isUpperCase ? 65 : 97) + this._shift * direction + 26) % 26 + (isUpperCase ? 65 : 97);
        const shiftedChar = String.fromCharCode(shiftedCharCode);

        result += shiftedChar;
      } else {
        // Keep non-alphabetic characters unchanged
        result += char;
      }
    }

    return result;
  }
}

// Example usage:
const cipher = new ShiftCipher(2);

const encryptedMessage = cipher.encrypt('I love to code!z');
console.log(encryptedMessage); // Output: 'K NQXG VQ EQFG!'

const decryptedMessage = cipher.decrypt('BK <3 OA RWRRA');
console.log(decryptedMessage); // Output: 'i <3 my puppy'
