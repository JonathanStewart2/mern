

const cows = require('cowsay');

const whatDoesTheCowSay = (string) => console.log(cows.say({'text': string})); 

//console.log(whatDoesTheCowSay("moo"));

module.exports = {
    whatDoesTheCowSay
};