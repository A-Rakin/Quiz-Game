
const questions = [
    {
        question: "What is the Full Form of CSS?",
        answers: [
            {text : "Cascading Style Sheets", correct : true},
            {text : "Cascading Sheets of Style", correct : false},
            {text : "Cascading Styles Sheets", correct : false},
            {text : "Cascaded Style Sheets", correct : false},
        ]
    },
    {
        question: "What is the largest Animal of the Planet?",
        answers: [
            {text : "Shark", correct:false},
            {text : "Blue Whale", correct:true},
            {text : "Elephant", correct:false},
            {text : "Giraffe", correct:false},
        ]
    },
    {
        question: "Which tool is not required in Data Science?",
        answers: [
            {text : "Python",correct : false},
            {text : "TensorFlow",correct : false},
            {text : "HTML",correct : true},
            {text : "Hadoop",correct : false},
        ]
    },
    {
        question: "Which is the most densely populated Country?",
        answers: [
            {text : "Malta",correct : true},
            {text : "China",correct : false},
            {text : "India",correct : false},
            {text : "Bermuda",correct : false},
        ]
    },
    {
        question: "What is the full form of HTML?",
        answers: [
            {text : "Hyper Text Makeup Language",correct : false},
            {text : "Higher Text Makeup Language",correct : false},
            {text : "Hyper Text Markup Language",correct : true},
            {text : "Hyper Text Makeout Language",correct : false},
        ]
    },
    {
        question: "Triton is a moon of which planet?",
        answers: [
            {text : "Uranus", correct:false},
            {text : "Neptune", correct:true},
            {text : "Saturn", correct:false},
            {text : "Venus", correct:false},
        ]
    },
    {
        question: "Which famous physicist wrote a book called 'A Brief History of Time'?",
        answers: [
            {text : "Thomas Alva Edison", correct:false},
            {text : "Albert Einstein", correct:false},
            {text : "Stephen Hawking", correct:true},
            {text : "Alexander Grahambell", correct:false},
        ]
    },
    {
        question: "In which organ of the body is the cerebrum found?",
        answers: [
            {text : "Bone", correct:false},
            {text : "Teeth", correct:false},
            {text : "Heart", correct:false},
            {text : "Brain", correct:true},
        ]
    },
    {
        question: "What is the capital city of Kenya?",
        answers: [
            {text : "Mogadisu", correct:false},
            {text : "Khartoum", correct:false},
            {text : "Nairobi", correct:true},
            {text : "Addis Ababa", correct:false},
        ]
    },
    {
        question: "In which country is the world's highest waterfall?",
        answers: [
            {text : "Canada", correct:false},
            {text : "Venezuela", correct:true},
            {text : "Zimbabwe", correct:false},
            {text : "United States of America", correct:false},
        ]
    },
]

const questionElement  = document.getElementById("question");
const answerbuttons = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextbutton.style.display = "none";
    while (answerbuttons.firstChild) {
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbutton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextbutton.innerHTML = "Play Again";
    nextbutton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextbutton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
startQuiz();
