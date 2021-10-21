"use strict";
var userInput; //unknown type
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
} // never type
generateError('An error occured', 500);
