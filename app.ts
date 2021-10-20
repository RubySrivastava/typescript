let userInput: unknown; //unknown type
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number){
    throw {message:message, errorCode:code}
} // never type
generateError('An error occured',500);