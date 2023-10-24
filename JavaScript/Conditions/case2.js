const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question("Plese enter a letter: ",(userInput)=>{
    // check input length can't >= 1
    if(userInput.length !== 1){
        console.log('please enter single letter.')
    }
    rl.close()

    userInput = userInput.toLowerCase()
    if(userInput >= 'a' && userInput <= 'z'){
        const vowel = ['a','i','u','e','o']
        if(vowel.includes(userInput)){
            console.log('The entered lettet is a vowel')
        }
        else{
            console.log('The entered letter is a consonant')
        }
    }else{
        console.log('Please enter a valid letter (a-z).')
    }
})



/**'
 * ================== Note to Learn ==================
 * 
 */