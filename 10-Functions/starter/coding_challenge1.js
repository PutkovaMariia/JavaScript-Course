'use strict';
//my
/*
const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
// This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const userInput = prompt('What is your favourite programming language?\n' +
            '0: JavaScript\n' +
            '1: Python\n' +
            '2: Rust\n' +
            '3: C++\n' +
            '(Write option number)');
        if (userInput >= 0 && userInput <= 3) {
            this.answers[userInput]++;
            this.displayResults("string");
        } else {
            console.log('Incorrect answer, write 0/1/2/3');
        }
    },
    displayResults(type) {
        if (type === "string") {
            console.log(`Poll results are ${this.answers.join(', ')}`)
        } else if (type === "array") {
            console.log(this.answers);
        }
    }
};
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
 */
//his
const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
// This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const userInput = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
        typeof userInput === 'number' && userInput < this.answers.length && this.answers[userInput]++;
        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if (type === "string") {
            console.log(`Poll results are ${this.answers.join(', ')}`)
        } else if (type === "array") {
            console.log(this.answers);
        }
    }
};
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5, 2, 3]}, 'string');
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]});