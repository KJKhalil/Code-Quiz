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
        askQuestion():
    }
}