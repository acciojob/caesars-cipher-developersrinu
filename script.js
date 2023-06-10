
function rot13(encodedStr) {
  let decodedArr = [];

  for (let char of encodedStr) {
    let decodedChar = lookup[char] || char;
    decodedArr.push(decodedChar);
  }

  return decodedArr.join('');
}

console.log(rot13("SERR YBIR? NPPVBWBO"));  // Output: "FREE LOVE? ACCOUNTING"

module.exports = rot13;
