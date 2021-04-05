// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const alpha = {
    a: 11, b: 21, c: 31, d: 41, e: 51, f: 12, g: 22, 
    h: 32, i: 42, j: 42, k: 52, l: 13, m: 23, n: 33,
    o: 43, p: 53, q: 14, r: 24, s: 34, t: 44, u: 54, 
    v: 15, w: 25, x: 35, y: 45, z: 55
  };
  const alphaNum = {
    11: 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e', 
    12: 'f', 22: 'g', 32: 'h', 42: "(i/j)", 52: 'k', 
    13: 'l', 23: 'm', 33: 'n', 43: 'o', 53: 'p', 
    14: 'q', 24: 'r', 34: 's', 44: 't', 54: 'u', 
    15: 'v', 25: 'w', 35: 'x', 45: 'y', 55: 'z' , 99: " "
  }
  function polybius(input, encode = true) {
    // your solution code here
    let code = input.toLowerCase();
    

    if(encode) {
      const answer = [];
      for(let i = 0; i < code.length; i++) {
        //create a variable for the current input
        const lower = code[i];
        //if the current input from the alpha object is undefined 
        if(alpha[lower] === undefined) {
          alpha[lower] = " ";
        } 
        //add the input into the variable answer
        answer.push(alpha[lower]);
      }
      //make the answer into a string
      return answer.join("");
    } else {
      const result = [];
      //add spaces through the .replace method to the input
      input = input.replace(" ", "99");
      //loop through the input
      for(let i = 0; i < input.length; i+= 2) {
        if(input[i + 1] === undefined) {
          return false;
        }
        let answer = input[i] + input[i + 1];
        result.push(alphaNum[answer]);
      }
      //make the answer into a string
      return result.join("");
    };
  };
  

  return {
    polybius,
  };
})();

// //create a variable for the alphabet 
// //make each letter into lowercase
// //
// //make each letter into an object
// //convert all letters to its corresponding numberical pair

module.exports = polybiusModule.polybius;
