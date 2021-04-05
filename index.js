
function validatePassword(password) {
    const numerics = "0123456789"
    const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const specialCharacters = "!@#$%"
    
    for (let i = 0; i < password.length; i++ ) {
        
        if (password.length < 8)
            return false
        if (lowerCase.password)
            return true
        if (upperCase.password)
            return true
        if (specialCharacters.password)
            return true
    

    }
        
}
      
    // Must be a minimum of 8 characters
     // length = [>= 8] 
    // Must contain at least one lower case letter
     // lowerCase = [a-z]
    // Must contain at least one upper case letter
     // upperCase = [A-Z]
    // Must contain at least one numeric value
     // numbers = [0-9]
    // Must contain at least one special character
    // specialCharacter = [@#$!]


module.exports = validatePassword