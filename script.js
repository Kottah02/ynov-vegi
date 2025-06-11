// Données du quiz
const quizQuestions = [
    {
        question: "Quelle est la source d'énergie fossile la plus polluante ?",
        options: [
            "Le pétrole",
            "Le charbon",
            "Le gaz naturel",
            "Le nucléaire"
        ],
        correctAnswer: 1
    },
    {
        question: "Quel est le principal gaz à effet de serre émis par la combustion des énergies fossiles ?",
        options: [
            "Le méthane",
            "Le dioxyde de carbone (CO2)",
            "Le protoxyde d'azote",
            "L'ozone"
        ],
        correctAnswer: 1
    },
    {
        question: "Quelle est la principale source d'énergie renouvelable en France ?",
        options: [
            "L'énergie solaire",
            "L'énergie éolienne",
            "L'énergie hydraulique",
            "La biomasse"
        ],
        correctAnswer: 2
    },
    {
        question: "Quel est l'impact principal des énergies fossiles sur les océans ?",
        options: [
            "La montée des eaux",
            "L'acidification des océans",
            "La pollution plastique",
            "La surpêche"
        ],
        correctAnswer: 1
    },
    {
        question: "Quelle est la solution la plus efficace pour réduire les émissions de CO2 ?",
        options: [
            "Planter des arbres",
            "Utiliser des énergies renouvelables",
            "Réduire la consommation d'énergie",
            "Toutes ces réponses"
        ],
        correctAnswer: 3
    }
];

// Variables globales pour le quiz
let currentQuestion = 0;
let score = 0;
let quizStarted = false;

// Animation du header au scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animation des éléments au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.addEventListener('DOMContentLoaded', () => {
    // Animer les cartes de fonctionnalités
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });

    // Animer les sections de cours
    document.querySelectorAll('.course-section').forEach(section => {
        observer.observe(section);
    });

    // Ajouter des animations de défilement fluides
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Ajouter un effet de parallaxe subtil à la section hero
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
        });
    }
});

// Fonction pour démarrer le quiz avec animation
function startQuiz() {
    quizStarted = true;
    currentQuestion = 0;
    score = 0;
    
    const startSection = document.getElementById('quiz-start');
    const questionsSection = document.getElementById('quiz-questions');
    
    startSection.style.opacity = '0';
    setTimeout(() => {
        startSection.classList.remove('active');
        questionsSection.classList.add('active');
        questionsSection.style.opacity = '0';
        setTimeout(() => {
            questionsSection.style.opacity = '1';
            showQuestion();
        }, 50);
    }, 300);
}

// Fonction pour afficher une question avec animation
function showQuestion() {
    const quizQuestionsDiv = document.getElementById('quiz-questions');
    const question = quizQuestions[currentQuestion];
    
    let html = `
        <div class="question" style="opacity: 0; transform: translateY(20px);">
            <h2>Question ${currentQuestion + 1} sur ${quizQuestions.length}</h2>
            <p>${question.question}</p>
            <div class="options">
    `;

    question.options.forEach((option, index) => {
        html += `
            <div class="option" onclick="selectAnswer(${index})" style="opacity: 0; transform: translateX(-20px); transition-delay: ${index * 0.1}s">
                ${option}
            </div>
        `;
    });

    html += `
            </div>
            <div class="quiz-controls">
                ${currentQuestion > 0 ? '<button class="button" onclick="previousQuestion()">Question précédente</button>' : ''}
                <button class="button" onclick="nextQuestion()">${currentQuestion === quizQuestions.length - 1 ? 'Terminer' : 'Question suivante'}</button>
            </div>
        </div>
    `;

    quizQuestionsDiv.innerHTML = html;

    // Animer l'apparition des éléments
    setTimeout(() => {
        const questionElement = quizQuestionsDiv.querySelector('.question');
        const options = quizQuestionsDiv.querySelectorAll('.option');
        
        questionElement.style.opacity = '1';
        questionElement.style.transform = 'translateY(0)';
        
        options.forEach(option => {
            option.style.opacity = '1';
            option.style.transform = 'translateX(0)';
        });
    }, 50);
}

// Fonction pour sélectionner une réponse avec animation
function selectAnswer(optionIndex) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.remove('selected');
        option.style.transform = 'translateX(0)';
    });
    
    const selectedOption = options[optionIndex];
    selectedOption.classList.add('selected');
    selectedOption.style.transform = 'translateX(5px)';
}

// Fonction pour passer à la question suivante avec animation
function nextQuestion() {
    const selectedOption = document.querySelector('.option.selected');
    if (!selectedOption && currentQuestion < quizQuestions.length - 1) {
        // Animation de secousse pour indiquer qu'une réponse est requise
        const quizContainer = document.querySelector('.quiz-container');
        quizContainer.style.animation = 'shake 0.5s';
        setTimeout(() => {
            quizContainer.style.animation = '';
        }, 500);
        return;
    }

    if (selectedOption) {
        const selectedIndex = Array.from(document.querySelectorAll('.option')).indexOf(selectedOption);
        if (selectedIndex === quizQuestions[currentQuestion].correctAnswer) {
            score++;
            selectedOption.classList.add('correct');
        } else {
            selectedOption.classList.add('incorrect');
            // Montrer la bonne réponse
            const correctOption = document.querySelectorAll('.option')[quizQuestions[currentQuestion].correctAnswer];
            correctOption.classList.add('correct');
        }
    }

    // Attendre l'animation avant de passer à la question suivante
    setTimeout(() => {
        if (currentQuestion < quizQuestions.length - 1) {
            currentQuestion++;
            showQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

// Fonction pour revenir à la question précédente avec animation
function previousQuestion() {
    if (currentQuestion > 0) {
        const currentSection = document.getElementById('quiz-questions');
        currentSection.style.opacity = '0';
        setTimeout(() => {
            currentQuestion--;
            showQuestion();
        }, 300);
    }
}

// Fonction pour afficher les résultats avec animation
function showResults() {
    const questionsSection = document.getElementById('quiz-questions');
    const resultsSection = document.getElementById('quiz-results');
    const finalScore = document.getElementById('final-score');
    
    questionsSection.style.opacity = '0';
    setTimeout(() => {
        questionsSection.classList.remove('active');
        resultsSection.classList.add('active');
        resultsSection.style.opacity = '0';
        
        finalScore.innerHTML = `
            <p style="opacity: 0; transform: translateY(20px);">Votre score : ${score} sur ${quizQuestions.length}</p>
            <p style="opacity: 0; transform: translateY(20px);">${getScoreMessage()}</p>
        `;
        
        setTimeout(() => {
            resultsSection.style.opacity = '1';
            const scoreElements = finalScore.querySelectorAll('p');
            scoreElements.forEach((element, index) => {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }, 50);
    }, 300);
}

// Fonction pour obtenir un message personnalisé selon le score
function getScoreMessage() {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) {
        return "🎉 Excellent ! Vous êtes un expert en écologie !";
    } else if (percentage >= 60) {
        return "🌟 Bien ! Vous avez une bonne connaissance du sujet.";
    } else if (percentage >= 40) {
        return "👍 Pas mal ! Continuez à apprendre sur l'écologie.";
    } else {
        return "📚 N'hésitez pas à consulter nos cours pour en apprendre davantage !";
    }
}

// Fonction pour recommencer le quiz avec animation
function restartQuiz() {
    const resultsSection = document.getElementById('quiz-results');
    const startSection = document.getElementById('quiz-start');
    
    resultsSection.style.opacity = '0';
    setTimeout(() => {
        resultsSection.classList.remove('active');
        startSection.classList.add('active');
        startSection.style.opacity = '0';
        setTimeout(() => {
            startSection.style.opacity = '1';
        }, 50);
        quizStarted = false;
    }, 300);
}

// Ajouter l'animation de secousse
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style); 