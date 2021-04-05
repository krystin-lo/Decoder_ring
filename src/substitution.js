// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function multiples(str) {
    let result = [];
    for(let idx in str) {
      let letter = str[idx]
      if(result.includes(letter)) {
        return false;
      } else {
        result.push(letter);
      }
    }
    return true;
  }

  function substitution(input, alphabet, encode = true) {
    //your solution code here
    let answer = "";
    let alpha = [
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
      "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];
  
    let origin = input.toLowerCase(); 

    if(!alphabet || alphabet.length !== 26 || !input || !multiples(alphabet)) {
      return false;
    }
   
    if(encode) {
      //grab the current input with a for loop
      for(let idx in origin) {
        let chara = origin[idx];
        if (chara === " ") {
          answer += chara;
        }
        for( let idx in alpha) {
          let letter = alpha[idx]; 
          //check if character in the 2nd loop is the same as the index in the first loop 
          if(letter === chara) {
           
            let index = alpha.indexOf(letter);
            answer += alphabet[index];
          }
        }
      }
      return answer;
    }

      //decode the characters back to the original abc
    if(!encode) {
      //grab current input with a for loop
      for(let idx in origin) {
        let chara = origin[idx];
        if (chara === " ") {
          answer += chara;
        }
        for( let idx in alphabet) {
          let letter = alphabet[idx]; 
          //check if character in the 2nd loop is the same as the index in the first loop 
          if(letter === chara) {
            // create a variable that checks the index
            let index = alphabet.indexOf(letter);
            answer += alpha[index];
          }
        }
      }
      return answer;
    }



  }
  return {
    substitution,

  };
})();

//

module.exports = substitutionModule.substitution;
