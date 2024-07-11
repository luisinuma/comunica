const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionElement = document.getElementById('question');
const choicesContainer = document.getElementById('choices');
const progressBar = document.getElementById('progress-bar');
const resultMessage = document.getElementById('result-message');
const resultDescription = document.getElementById('result-description');
const levelIndicator = document.getElementById('level-indicator');
const welcomePopup = document.getElementById('welcome-popup');
const closePopupBtn = document.getElementById('close-popup-btn');

const questions = [
    { question: '¿Quién escribió "Cien años de soledad"?', choices: [ { text: 'Gabriel García Márquez', correct: true }, { text: 'Mario Vargas Llosa', correct: false }, { text: 'Julio Cortázar', correct: false }, { text: 'Pablo Neruda', correct: false } ] },
    { question: '¿En qué obra aparece el personaje de Hamlet?', choices: [ { text: 'Hamlet', correct: true }, { text: 'Macbeth', correct: false }, { text: 'Otelo', correct: false }, { text: 'El rey Lear', correct: false } ] },
    { question: '¿Quién es el autor de "Don Quijote de la Mancha"?', choices: [ { text: 'Miguel de Cervantes', correct: true }, { text: 'Lope de Vega', correct: false }, { text: 'Luis de Góngora', correct: false }, { text: 'Francisco de Quevedo', correct: false } ] },
    { question: '¿Qué figura retórica es una comparación directa usando "como" o "tal"?', choices: [ { text: 'Símil', correct: true }, { text: 'Metáfora', correct: false }, { text: 'Hipérbole', correct: false }, { text: 'Aliteración', correct: false } ] },
    { question: '¿Quién escribió "La Odisea"?', choices: [ { text: 'Homero', correct: true }, { text: 'Virgilio', correct: false }, { text: 'Sófocles', correct: false }, { text: 'Eurípides', correct: false } ] },
    { question: '¿Qué obra escribió William Shakespeare?', choices: [ { text: 'Romeo y Julieta', correct: true }, { text: 'La Ilíada', correct: false }, { text: 'Don Juan Tenorio', correct: false }, { text: 'El lazarillo de Tormes', correct: false } ] },
    { question: '¿Quién escribió "Crimen y Castigo"?', choices: [ { text: 'Fiódor Dostoyevski', correct: true }, { text: 'Lev Tolstói', correct: false }, { text: 'Antón Chéjov', correct: false }, { text: 'Iván Turguénev', correct: false } ] },
    { question: '¿Qué figura retórica exagera una cualidad o acción?', choices: [ { text: 'Hipérbole', correct: true }, { text: 'Símil', correct: false }, { text: 'Metáfora', correct: false }, { text: 'Ironía', correct: false } ] },
    { question: '¿Qué autor escribió "El extranjero"?', choices: [ { text: 'Albert Camus', correct: true }, { text: 'Jean-Paul Sartre', correct: false }, { text: 'Franz Kafka', correct: false }, { text: 'Fiódor Dostoyevski', correct: false } ] },
    { question: '¿Qué obra es conocida como la epopeya nacional de Inglaterra?', choices: [ { text: 'Beowulf', correct: true }, { text: 'La Divina Comedia', correct: false }, { text: 'El Cantar de Mio Cid', correct: false }, { text: 'La Odisea', correct: false } ] },
    { question: '¿Quién escribió "La metamorfosis"?', choices: [ { text: 'Franz Kafka', correct: true }, { text: 'Albert Camus', correct: false }, { text: 'James Joyce', correct: false }, { text: 'Marcel Proust', correct: false } ] },
    { question: '¿Qué figura retórica atribuye cualidades humanas a objetos o animales?', choices: [ { text: 'Personificación', correct: true }, { text: 'Metáfora', correct: false }, { text: 'Hipérbole', correct: false }, { text: 'Ironía', correct: false } ] },
    { question: '¿Quién escribió "Orgullo y prejuicio"?', choices: [ { text: 'Jane Austen', correct: true }, { text: 'Charlotte Brontë', correct: false }, { text: 'Emily Brontë', correct: false }, { text: 'Mary Shelley', correct: false } ] },
    { question: '¿Qué obra es una novela de caballerías española?', choices: [ { text: 'Amadís de Gaula', correct: true }, { text: 'Don Quijote de la Mancha', correct: false }, { text: 'El Conde Lucanor', correct: false }, { text: 'La Celestina', correct: false } ] },
    { question: '¿Quién escribió "1984"?', choices: [ { text: 'George Orwell', correct: true }, { text: 'Aldous Huxley', correct: false }, { text: 'Ray Bradbury', correct: false }, { text: 'Isaac Asimov', correct: false } ] },
    { question: '¿Qué figura retórica usa una palabra o frase para sugerir el significado opuesto?', choices: [ { text: 'Ironía', correct: true }, { text: 'Metáfora', correct: false }, { text: 'Paradoja', correct: false }, { text: 'Aliteración', correct: false } ] },
    { question: '¿Quién escribió "El Gran Gatsby"?', choices: [ { text: 'F. Scott Fitzgerald', correct: true }, { text: 'Ernest Hemingway', correct: false }, { text: 'John Steinbeck', correct: false }, { text: 'William Faulkner', correct: false } ] },
    { question: '¿Qué autor es conocido por el realismo mágico?', choices: [ { text: 'Gabriel García Márquez', correct: true }, { text: 'Jorge Luis Borges', correct: false }, { text: 'Julio Cortázar', correct: false }, { text: 'Mario Vargas Llosa', correct: false } ] },
    { question: '¿Quién es el autor de "La casa de Bernarda Alba"?', choices: [ { text: 'Federico García Lorca', correct: true }, { text: 'Miguel de Unamuno', correct: false }, { text: 'Antonio Machado', correct: false }, { text: 'Rafael Alberti', correct: false } ] },
];

let currentQuestionIndex = 0;
let score = 0;

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);
closePopupBtn.addEventListener('click', closePopup);

function closePopup() {
    welcomePopup.style.display = 'none';
    startBtn.classList.remove('hidden');
}

function startGame() {
    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    levelIndicator.innerText = `Nivel ${currentQuestionIndex + 1}`;
    currentQuestion.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.classList.add('choice');
        button.addEventListener('click', () => selectChoice(choice));
        choicesContainer.appendChild(button);
    });
    progressBar.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;
}

function resetState() {
    while (choicesContainer.firstChild) {
        choicesContainer.removeChild(choicesContainer.firstChild);
    }
}

function selectChoice(choice) {
    if (choice.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    resultMessage.innerText = `¡Juego terminado! Tu puntuación es ${score}/${questions.length}`;
    resultDescription.innerText = 'Gracias por jugar. Esperamos que hayas aprendido algo nuevo sobre literatura.';
}
