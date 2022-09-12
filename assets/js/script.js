class Quiz {

    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestions() {
        return this.questions[this.questionIndex];
    }

    userChoice(answer) {
        if (this.getQuestions().isCorrect(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    quizEnd() {
        return this.questionIndex === this.questions.length;
    }
}

class Question {

    constructor(text, answers, correctAnswer) {
        this.text = text;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    isCorrect(answers) {
        return this.correctAnswer === answer;
    }
}

function askQuestion() {

    if (quiz.quizEnd()) {
        displayScores();
    } else {
        let questionElement = document.getElementById('question');
        questionElement.innerHTML = quiz.getQuestions().text;

        let answers = quiz.getQuestions().answers;
        for (let i = 0; i < answers.length; i++) {
            let answerElement = documentElementById('answer' + i);
            answerElement.innerHTML = answers[i];
            userChoice('btn' + i, answers[i]);
        }

        showProgress();
    }
}

function userChoice(id, userChoice) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.userChoice(userChoice);
        askQuestion();
    }
}

function progress() {
    let currentQuestion = quiz.questionIndex + 1;
    let progress = document.getElementById('progress');
    progress.innerHTML = `Question ${currentQuestion} of ${quiz.questions.length}`;
}

let questions = [
    new Question('What does HTML stand for?', ['Hypertext Markup Language', 'Hybridtext Markup Langue', 'Hypertext Makeup Language',
    'Hyrbridtext Makeup Language'], 'Hypertext Markup Language'),

    new Question('What does CSS stand for?', ['Creative Style Sheets', 'Cascading Style Slang', 'Creative Style Slang',
    'Cascading Style Sheets'], 'Cascading Style Sheets'),

    new Question('What is an array in Javascript' ['A collection of functions', 'An ordered list of values', 'A list of classes',
    'An ordered list of ids'], 'An ordered list of values'),

    new Question('What are HTML, CSS, and Javascript used for?' ['Crying yourself to sleep', 'Back end development',
    'Accounting', 'Front end development'], 'Front end development')
];

let quiz = new Quiz(questions);

askQuestion();

function scores() {
    let quizEnd =
    `
        
}
let time = 5;