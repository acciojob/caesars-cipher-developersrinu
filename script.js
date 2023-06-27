function rot13(encodedString) {
  const decodedChars = [];

  for (let i = 0; i < encodedString.length; i++) {
    const char = encodedString[i];
    const charCode = encodedString.charCodeAt(i);

    if (isUppercaseLetter(char)) {
      const decodedCharCode = ((charCode - 65 + 13) % 26) + 65;
      const decodedChar = String.fromCharCode(decodedCharCode);
      decodedChars.push(decodedChar);
    } else {
      decodedChars.push(char);
    }
  }

  return decodedChars.join("");
}

function isUppercaseLetter(char) {
  return /^[A-Z]$/.test(char);
}

