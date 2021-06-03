// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    let alphabet1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let result = ""
     
    if (alphabet){
    for (let i = 0; i < alphabet.length; i++){
      for (let j = i + 1; j < alphabet.length; j++){
        if (alphabet.length < 26 || alphabet[i] === alphabet[j]){
          return false
        }    
      }
    }
  }
    else {
      return false
    }

    if (encode){
      for (let i = 0; i < input.length; i++){
        const str = input[i].toLowerCase()
        const isLetter = alphabet.includes(str)
        
        if (!isLetter){
          result += str
        }
        else{
          const indx = alphabet1.indexOf(input.charAt(i))
          result += alphabet.charAt(indx)
      }
    }
      console.log(result, input, alphabet)
      return result
    }
    else {
      for (let i = 0; i < input.length; i++){
        const alphJoin = alphabet1.join("")            
        const indxDecode = alphabet.indexOf(input.charAt(i))
        if (input.charAt(i) == " "){
          result += " "
        }
        result += alphJoin.charAt(indxDecode) 
      }
    console.log(result, input, alphabet)  
    return result
  }  
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
