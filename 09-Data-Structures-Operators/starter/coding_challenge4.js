'use strict';

/*
const transition = function (text){
    const words = text.split('\n');
    for (let i = 0; i < words.length; i++){
        const [firstWord, lastWord] = words[i].toLowerCase().trim().split('_');
        const result = [firstWord, lastWord[0].toUpperCase(), lastWord.slice(1)].join('').padEnd(20, '-');
        console.log(`${result} ${'✈ '.repeat(i+1)}`);
    }
}
transition('underscore_case\n' +
    'first_name\n' +
    'Some_Variable\n' +
    'calculate_AGE\n' +
    'delayed_departure');
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function (){
    const text = document.querySelector('textarea').value;
    const words = text.split('\n');
    for (let i = 0; i < words.length; i++){
        const [firstWord, lastWord] = words[i].toLowerCase().trim().split('_');
        const result = [firstWord, lastWord[0].toUpperCase(), lastWord.slice(1)].join('').padEnd(20, '-');
        console.log(`${result} ${'✈ '.repeat(i+1)}`);
    }
})