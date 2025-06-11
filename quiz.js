// Définition des quiz pour chaque cours
const quizzes = {
    'cours-ecologie': {
        title: 'Quiz sur l\'Écologie',
        questions: [
            {
                question: 'Qu\'est-ce que l\'écologie ?',
                options: [
                    'L\'étude des relations entre les êtres vivants et leur environnement',
                    'L\'étude uniquement des animaux',
                    'L\'étude des plantes uniquement',
                    'L\'étude de la météo'
                ],
                correct: 0
            },
            {
                question: 'Quel est le terme grec à l\'origine du mot "écologie" ?',
                options: [
                    'Bios (vie)',
                    'Oikos (maison)',
                    'Physis (nature)',
                    'Gaia (terre)'
                ],
                correct: 1
            },
            {
                question: 'Qu\'est-ce qu\'un écosystème ?',
                options: [
                    'Uniquement les animaux d\'une région',
                    'L\'ensemble des êtres vivants et leur environnement',
                    'Uniquement les plantes d\'une région',
                    'Un système de recyclage'
                ],
                correct: 1
            },
            {
                question: 'Quelle est la principale cause de la perte de biodiversité ?',
                options: [
                    'Les activités humaines',
                    'Les catastrophes naturelles',
                    'Les épidémies',
                    'Les changements climatiques naturels'
                ],
                correct: 0
            },
            {
                question: 'Qu\'est-ce que la biodiversité ?',
                options: [
                    'La diversité des espèces vivantes',
                    'Uniquement la diversité des plantes',
                    'Uniquement la diversité des animaux',
                    'La diversité des paysages'
                ],
                correct: 0
            }
        ]
    },
    'cours-energies-fossiles': {
        title: 'Quiz sur les Énergies Fossiles',
        questions: [
            {
                question: 'Quelles sont les principales énergies fossiles ?',
                options: [
                    'Pétrole, charbon, gaz naturel',
                    'Soleil, vent, eau',
                    'Bois, biomasse, déchets',
                    'Uranium, thorium, plutonium'
                ],
                correct: 0
            },
            {
                question: 'Comment se forment les énergies fossiles ?',
                options: [
                    'Par la photosynthèse',
                    'Par la décomposition de matières organiques sur des millions d\'années',
                    'Par la fusion nucléaire',
                    'Par l\'action du vent et de l\'eau'
                ],
                correct: 1
            },
            {
                question: 'Quel est le principal inconvénient des énergies fossiles ?',
                options: [
                    'Elles sont renouvelables',
                    'Elles émettent des gaz à effet de serre',
                    'Elles sont gratuites',
                    'Elles sont inépuisables'
                ],
                correct: 1
            },
            {
                question: 'Quelle est l\'énergie fossile la plus utilisée dans le monde ?',
                options: [
                    'Le charbon',
                    'Le pétrole',
                    'Le gaz naturel',
                    'Le nucléaire'
                ],
                correct: 1
            },
            {
                question: 'Qu\'est-ce que le pic pétrolier ?',
                options: [
                    'Le moment où le pétrole est le moins cher',
                    'Le moment où la production de pétrole atteint son maximum',
                    'Le moment où le pétrole est le plus pur',
                    'Le moment où le pétrole est découvert'
                ],
                correct: 1
            }
        ]
    },
    'cours-energies-renouvelables': {
        title: 'Quiz sur les Énergies Renouvelables',
        questions: [
            {
                question: 'Quelles sont les principales énergies renouvelables ?',
                options: [
                    'Pétrole, charbon, gaz',
                    'Soleil, vent, eau, biomasse',
                    'Uranium, thorium, plutonium',
                    'Déchets, ordures, compost'
                ],
                correct: 1
            },
            {
                question: 'Qu\'est-ce que l\'énergie solaire photovoltaïque ?',
                options: [
                    'L\'énergie produite par la chaleur du soleil',
                    'L\'énergie produite par la lumière du soleil',
                    'L\'énergie produite par le vent',
                    'L\'énergie produite par l\'eau'
                ],
                correct: 1
            },
            {
                question: 'Quel est l\'avantage principal des énergies renouvelables ?',
                options: [
                    'Elles sont non renouvelables',
                    'Elles sont inépuisables et peu polluantes',
                    'Elles sont très chères',
                    'Elles sont difficiles à stocker'
                ],
                correct: 1
            },
            {
                question: 'Qu\'est-ce que l\'énergie éolienne ?',
                options: [
                    'L\'énergie produite par le soleil',
                    'L\'énergie produite par le vent',
                    'L\'énergie produite par l\'eau',
                    'L\'énergie produite par la biomasse'
                ],
                correct: 1
            },
            {
                question: 'Qu\'est-ce que la biomasse ?',
                options: [
                    'L\'énergie produite par le soleil',
                    'L\'énergie produite par le vent',
                    'L\'énergie produite par la matière organique',
                    'L\'énergie produite par l\'eau'
                ],
                correct: 2
            }
        ]
    },
    'cours-empreinte-carbone': {
        title: 'Quiz sur l\'Empreinte Carbone',
        questions: [
            {
                question: 'Qu\'est-ce que l\'empreinte carbone ?',
                options: [
                    'La quantité de CO2 émise par une personne ou une activité',
                    'La quantité d\'oxygène produite',
                    'La quantité d\'eau consommée',
                    'La quantité de déchets produits'
                ],
                correct: 0
            },
            {
                question: 'Quelle activité a généralement la plus grande empreinte carbone ?',
                options: [
                    'Manger des légumes locaux',
                    'Prendre l\'avion',
                    'Marcher à pied',
                    'Faire du vélo'
                ],
                correct: 1
            },
            {
                question: 'Comment réduire son empreinte carbone ?',
                options: [
                    'Augmenter sa consommation d\'énergie',
                    'Réduire sa consommation d\'énergie et privilégier les transports doux',
                    'Manger plus de viande',
                    'Voyager plus en avion'
                ],
                correct: 1
            },
            {
                question: 'Qu\'est-ce que la compensation carbone ?',
                options: [
                    'Augmenter ses émissions de CO2',
                    'Financer des projets qui réduisent les émissions de CO2',
                    'Ignorer ses émissions de CO2',
                    'Calculer ses émissions de CO2'
                ],
                correct: 1
            },
            {
                question: 'Quel secteur émet le plus de CO2 en France ?',
                options: [
                    'Le transport',
                    'L\'agriculture',
                    'L\'industrie',
                    'Le résidentiel'
                ],
                correct: 0
            }
        ]
    }
};

// Fonction pour créer et afficher le quiz
function createQuiz(courseId) {
    const quiz = quizzes[courseId];
    if (!quiz) return;

    // Créer le conteneur du quiz
    const quizContainer = document.createElement('div');
    quizContainer.className = 'quiz-container';
    quizContainer.innerHTML = `
        <div class="quiz-overlay">
            <div class="quiz-content">
                <h2>${quiz.title}</h2>
                <div class="quiz-questions"></div>
                <button class="quiz-submit">Valider</button>
                <div class="quiz-results" style="display: none;">
                    <h3>Résultats</h3>
                    <p class="quiz-score"></p>
                    <button class="quiz-restart">Recommencer</button>
                </div>
            </div>
        </div>
    `;

    // Ajouter le quiz à la page
    document.body.appendChild(quizContainer);

    // Remplir les questions
    const questionsContainer = quizContainer.querySelector('.quiz-questions');
    quiz.questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        questionDiv.innerHTML = `
            <h3>Question ${index + 1}</h3>
            <p>${q.question}</p>
            <div class="quiz-options">
                ${q.options.map((option, i) => `
                    <label>
                        <input type="radio" name="q${index}" value="${i}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        `;
        questionsContainer.appendChild(questionDiv);
    });

    // Gérer la soumission du quiz
    const submitButton = quizContainer.querySelector('.quiz-submit');
    const resultsDiv = quizContainer.querySelector('.quiz-results');
    const scoreP = quizContainer.querySelector('.quiz-score');
    const restartButton = quizContainer.querySelector('.quiz-restart');

    submitButton.addEventListener('click', () => {
        let score = 0;
        quiz.questions.forEach((q, index) => {
            const selected = quizContainer.querySelector(`input[name="q${index}"]:checked`);
            if (selected && parseInt(selected.value) === q.correct) {
                score++;
            }
        });

        // Afficher les résultats
        questionsContainer.style.display = 'none';
        submitButton.style.display = 'none';
        resultsDiv.style.display = 'block';
        scoreP.textContent = `Vous avez obtenu ${score} sur ${quiz.questions.length} points !`;
    });

    // Gérer le redémarrage du quiz
    restartButton.addEventListener('click', () => {
        document.body.removeChild(quizContainer);
        createQuiz(courseId);
    });

    // Gérer la fermeture du quiz
    quizContainer.addEventListener('click', (e) => {
        if (e.target === quizContainer) {
            document.body.removeChild(quizContainer);
        }
    });
}

// Ajouter le style CSS pour le quiz
const style = document.createElement('style');
style.textContent = `
    .quiz-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .quiz-content {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        max-width: 600px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
    }

    .quiz-question {
        margin-bottom: 2rem;
    }

    .quiz-options {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
    }

    .quiz-options label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 6px;
        transition: background-color 0.3s;
    }

    .quiz-options label:hover {
        background-color: #f0f0f0;
    }

    .quiz-submit,
    .quiz-restart {
        background: #2c5282;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 6px;
        cursor: pointer;
        font-size: 1rem;
        margin-top: 1rem;
        transition: background-color 0.3s;
    }

    .quiz-submit:hover,
    .quiz-restart:hover {
        background: #2a4365;
    }

    .quiz-results {
        text-align: center;
    }

    .quiz-score {
        font-size: 1.2rem;
        margin: 1rem 0;
        color: #2c5282;
    }

    @media (max-width: 768px) {
        .quiz-content {
            width: 95%;
            padding: 1rem;
        }
    }
`;
document.head.appendChild(style); 