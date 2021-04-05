// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
 
  function caesar(input, shift, encode = true) {
    // your solution code here
    let answer = "";
    let lower = input.toLowerCase();
    let origin = 
    ["a", "b", "c", "d", "e", 
    "f", "g", "h", "i", "j", 
    "k", "l", "m", "n", "o", 
    "p", "q", "r", "s", "t", 
    "u", "v", "w", "x", "y", "z"];
    
    //console.log(lower)
    if(!encode) {
      shift *= -1;
    }
    if(!input || !shift) {
        return false;
    }

    if( shift > 25 || shift < -25 || shift === 0) {
      return false;
    }


    if(encode) {
      //create a for loop to go through the input
      for(let i = 0; i < lower.length; i++) {
        //translate the letter into a ascii number
        let char = lower[i].charCodeAt()
        //console.log(char)
        //create a variable for the input asccii number that is shifted
        let shifter = char + shift;
        if(char === 32 || char === 33 || char === 46) {
          answer += String.fromCharCode(char);
        }
        console.log(shifter)
        //if the ascii number is between 96 - 123 (a - b) convert the current letter into a string
        if(shifter < 123 && shifter > 96) {
          answer += String.fromCharCode(shifter) || String.fromCharCode(shifter + 26)
        } else if(shifter > 122) {
          //string the positive shifted letter 
          answer += String.fromCharCode(shifter - 26)
        } else if(shifter < 97 && shifter > 71) {
            answer += String.fromCharCode(shifter + 26)
        }
      }
      return answer;
     // decode the current letter into a string
    } 
    
    if(!encode){
      
      for(let i = 0; i < lower.length; i++) {
        //translate the letter into a ascii number
        let char = lower[i].charCodeAt()
        let shifter = char + shift;
        if(char === 32 || char === 33 || char === 46) {
          answer += String.fromCharCode(char);
        }
        if(shifter < 123 && shifter > 96) {
          answer += String.fromCharCode(shifter) || String.fromCharCode(shifter + 26)
        }
        if(shifter > 122) {
            answer += String.fromCharCode(shifter - 26)
        } else if(shifter < 97 && shifter > 71) {
            answer += String.fromCharCode(shifter + 26)
        }
        console.log(shifter)
      }
      return answer.replace(/[0-9]/g, '');
    }
   
  };
  return {
    caesar,
  };
})();
 // if the encode is true loop through the abcs 
    // move the the letter index to the shift number
    // current index 
//else 
module.exports = caesarModule.caesar;



