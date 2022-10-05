

const cows = require('cowsay');

const whatDoesTheCowSay = (string) => console.log(cows.say({'text': string})); 
const wholeCow = (say, eye, tongue) => {
    console.log(cows.say(
        {text: say,
        e : eye,
        T : tongue
        })); 
}


//console.log(whatDoesTheCowSay("moo"));

module.exports = {
    whatDoesTheCowSay,
    wholeCow
};