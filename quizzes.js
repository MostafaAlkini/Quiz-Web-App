function Quizes() {
    const quizzes = [
        {
            title: "Math Quiz",
            questions: [
                { question: "2 + 2?", options: ["3", "4", "5"], answer: "4" },
                { question: "10 / 2?", options: ["2", "5", "10"], answer: "5" },
                { question: "3 x 3?", options: ["6", "9", "12"], answer: "9" }
            ]
        },
        {
            title: "Science Quiz",
            questions: [
                { question: "H2O is?", options: ["Water", "Oxygen", "Hydrogen"], answer: "Water" },
                { question: "Sun is a?", options: ["Planet", "Star", "Asteroid"], answer: "Star" },
                { question: "Human body has ___ bones?", options: ["206", "208", "210"], answer: "206" }
            ]
        }
    ];
    localStorage.setItem("quizzes", JSON.encode(quizzes));
}
const quizzesContainer = document.getElementById("listOfQuizzes");
const selectedQuizContainer = document.getElementById("quizContainer");
const submitQuiz = document.getElementsByClassName("submitQuiz")[0];

const userEmail = localStorage.getItem("email");
function displayQuizzes() {
    const quizzes = JSON.parse(localStorage.getItem("quizzes"));
    console.log(quizzes);
    // quizzesContainer.innerHTML = quizzes[0].title;
    // quizzesContainer.innerHTML += quizzes[1].title;

    quizzes.forEach(element => {
        quizzesContainer.innerHTML += '<a class="quizTopic" href="http://127.0.0.1:3000/quiz.html">' + element.title + '</a>';
        quizzesContainer.innerHTML += '<br>';
    });

}
if (quizzesContainer) {
    displayQuizzes();
    const quizTopic = document.querySelectorAll('.quizTopic');

    quizTopic.forEach((topic, index) => {
        topic.addEventListener('click', function () {
            localStorage.setItem('quiz', index)
        });
    });
}

const quiz = localStorage.getItem('quiz');
const quizzes = JSON.parse(localStorage.getItem('quizzes'));
const selectedQuiz = quizzes[quiz];
const questions = selectedQuiz.questions;

console.log(questions);

// questions.forEach(element=>{
// console.log(element.options);
// selectedQuizContainer.innerHTML+=element.question;
// selectedQuizContainer.innerHTML+='<br>';
// selectedQuizContainer.innerHTML+=element.options;
// selectedQuizContainer.innerHTML+='<br>';

// });

questions.forEach((element, questionIndex) => {
   
    const questionBlock = document.createElement('div');
    questionBlock.classList.add('question-block');

    const questionElem = document.createElement('h3');
    questionElem.textContent = element.question;
    questionBlock.appendChild(questionElem);


    element.options.forEach((opt, optIndex) => {
        const label = document.createElement('label');
        label.classList.add('option-label');

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'question_'+questionIndex; 
        radio.value = opt;

        label.appendChild(radio);
        label.appendChild(document.createTextNode(opt));
        questionBlock.appendChild(label);
    });

  
    selectedQuizContainer.appendChild(questionBlock);
});



submitQuiz.addEventListener('click', (event) => {
    let score = 0;
    const selected = document.querySelectorAll("input:checked")

    selected.forEach((inputUser, index) => {
        const selectedAnswer = inputUser.value;
        const correctAnswer = questions[index].answer;

        // console.log("answer "+selectedAnswer);
        // console.log("Correct answer "+correctAnswer);


        if (selectedAnswer === correctAnswer) {
            score++;
        }



    })
    const userResult = {
        email: userEmail,
        score: score
    };

    let result = JSON.parse(localStorage.getItem("Result"));
    if (!result) {
        result = [];
    }

    result.push(userResult);

    localStorage.setItem("Result", JSON.stringify(result))
    alert("Your Score is: " + score);



    console.log(userResult);

});



