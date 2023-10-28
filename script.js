const questions = [
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Whale"
    },
    {
        question: "Which element does 'O' represent on the periodic table?",
        options: ["Oxygen", "Gold", "Carbon", "Iron"],
        correctAnswer: "Oxygen"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        correctAnswer: "Leonardo"
    },
    {
        question: "What is the capital city of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        correctAnswer: "Tokyo"
    },
    {
        question: "Which famous scientist developed the theory of general relativity?",
        options: ["Isaac Newton", "Einstein", "Stephen Hawking", "Marie Curie"],
        correctAnswer: "Einstein"
    }
];

let currentQuestion = 0;

const showQuestion = document.querySelector('.question-output');
const showSelectedAnswer = document.querySelector('.select-answer');
const showCorrectAnswer = document.querySelector('.correct-answer');


function displayQuestion () {
  let score = 0;
  let correctAns = 20;
  let wrongAnswer = 0;


  let output = '';
  
  const showOutput = questions.forEach((quest) => {
    
    output += `
    <div class="col-12 col-md-10 col-lg-7 m-auto bg-dark-blue p-4 ">
                <div class="card bg-dark-blue ">
                    <div class="select-answer  ">
                        <p class="text-white question-output">${quest.question}</p>
                         <select class="form-select" aria-label="Default select example">
                        <option selected>Select Answer</option>
                        ${quest.options.map((option) => {
                          return `<option value=${option}>${option}</option>`;
                        })}
                        
                        </select>
                        <p class="text-white mt-2 selected-answer"></p>
                        <p class="text-white correct-answer"></p>
                        <p class="text-white status"></p>
                    </div>
                </div>
            </div>
    `
  });
  document.querySelector('.row').innerHTML = output;

  const formSelect = document.querySelectorAll('select');
  formSelect.forEach((select, index) => {
          select.addEventListener("change", (event) => {
            let selectValue = event.target.value;
            let selectedAnswer = document.querySelectorAll(".selected-answer")[index];
            selectedAnswer.innerHTML = `Selected Answer: ${selectValue}`; 
            let correct = document.querySelectorAll('.correct-answer') [index];
            correct.innerHTML =  `Correct Answer: ${questions[index].correctAnswer}` 
            let answer = questions[index].correctAnswer;
            console.log(answer);
            
          if (selectValue === answer) {
                let status = document.querySelectorAll('.status');
                status[index].innerHTML = `Status: Correct`;
                score += correctAns;
                let outputResult = document.querySelector('.output-result ').innerHTML = score;
            } else {
                let status = document.querySelectorAll('.status');
                status[index].innerHTML = `Status: Wrong`;
                score +- wrongAnswer;
                let outputResult = document.querySelector('.output-result ').innerHTML = score;
            }
    });
            
});

    let scoreResult = '';
    scoreResult += `<h2 class="text-center text-white">Score</h2>
    <div class="show-score rounded-circle m-auto border border-secondary text-center  text-white w-25 p-2 ">
        <p class="output-result ">${score}</p>
    </div>`;
     document.querySelector('.showResult').innerHTML = scoreResult;

 }
displayQuestion();
       
    







