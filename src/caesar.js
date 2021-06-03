// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let acc = ""
    if (shift === 0 || shift >= 25 || shift <= -25 || !shift){
      return false
    }
    if (!encode){
      shift *= -1
    }
    for (let i = 0; i < input.length; i++){      
      const str = input[i].toLowerCase()
      const isLetter = alphabet.includes(str)
      if (!isLetter){
        acc += str
      }
      else{
        const characterIndex = alphabet.findIndex(x => x === str)
        acc += alphabet[characterIndex + shift] || alphabet[characterIndex - 26 * (Math.abs(shift)/shift) + shift]   
      }  
    }
    console.log(acc, input, shift)
    return acc
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
