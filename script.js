// Dictionnaire de vocabulaire informatique
const vocabulary = {
    "Cadre de travail": "Framework",
    "Environnement de développement": "Integrated development environment",
    Maintenance: "Maintenance",
    Sauvegarde: "Backup",
    "Base de données": "Database",
    "Flux de données": "Data flow",
    "Stockage de données": "Data storage",
    "Pare-feu": "Firewall",
    "Logiciel espion": "Spyware",
    "Bande passante": "Bandwidth",
    "Interface de programmation": "Application Programming Interface",
    Balise: "Markup",
    "Langage binaire": "Binary language",
    "Système de gestion de contenu": "Content management system",
    Serveur: "Server",
    "Service d'hébergement": "Hosting service",
    "Plan de site / Arborescence": "Sitemap",
    "Site statique": "Static site",
    "Site dynamique": "Dynamic site",
    "Site animé": "Animated site",
    Refonte: "Redesign",
    "Charte graphique": "Graphic charter",
    Bannière: "Banner",
    Référencement: "Referencing",
    "Optimisation pour les moteurs de recherche": "Search Engine Optimization",
    "Référencement payant": "Search Engine Advertising",
    "Référencement abusif": "Spamdexing",
    "Réseau Social": "Social Network",
    "Protocole de transfert de fichier": "File Transfer Protocol",
    "Transfert de fichier": "File transfer",
    "Partage de fichier": "File sharing",
    Télécharger: "To download",
    "Visite virtuelle": "Virtual visit",
    "Objet interactif": "Interactive object",
    "Interface utilisateur graphique": "Graphic user interface",
    "Prototype d'interface utilisateur": "Mock-up",
    "Expérience utilisateur": "User experience",
    "Maquette fonctionnelle d'un site": "Wireframe",
    Logiciel: "Software",
    "Cahier des charges": "Specifications",
    Navigateur: "Browser",
    "Moteur de recherche": "Search engine",
    Programmation: "Programming",
    "Nom de domaine": "Domain name",
    Compte: "Account",
    "Créer un compte": "To sign up",
    "Définir un mot de passe": "To set a password",
    Utilisateur: "User",
    Identifiant: "Username",
    Bibliothèque: "Library",
};

vocabulaire_expressions = {
    "Déclarer une variable en langage java":
        "Declare a variable in java language",
    "Utiliser des tableaux pour stocker plusieurs valeurs dans une seule variable":
        "Use arrays to store multiple values in a single variable",
    "Créer une chaîne en java": "Create a string in java",
    "Exécuter des boucles": "Execute loops",
    "Effectuer une opération d'entrée ou de sortie":
        "Perform an input or output operation",
    "Traiter une information représentée sous sa forme binaire":
        "Process a binary information",
    "Comprendre les principaux livrables, les jalons, ainsi que les rôles et les responsabilités de chaque personne impliquée dans une charte de projet":
        "Understand the main deliverables, milestones, as well as the roles and responsibilities of each person involved in a project charter",
    "Utiliser les opérateurs booléens pour réduire, étendre ou affiner les résultats de recherche":
        "Use Boolean operators to narrow, expand, or refine search results",
    "Créer une procédure stockée dans une base de données":
        "Create a stored procedure in a database",
    "Utiliser les algorithmes les plus efficaces possibles pour résoudre des problèmes":
        "Use the most efficient algorithms possible to solve problems",
    "Développer des solutions logicielles fiables et fonctionnelles":
        "Develop reliable and functional software solutions",
    "Se positionner comme expert technique":
        "Position oneself as a technical expert",
    "Gérer et optimiser la base de données": "Manage and optimize the database",
    "Réaliser une étude logicielle": "Conduct a software study",
    "Concevoir l'architecture des applications":
        "Design application architecture",
    "Assurer la gestion des données": "Ensure data management",
    "Sécuriser les applications": "Secure applications",
    "Implémenter des solutions logicielles": "Implement software solutions",
    "Créer des programmes": "Build programs",
    "Écrire et tester le code": "Write and test code",
    "Collaborer avec des développeurs": "Collaborate with developers",
    "Utiliser des outils de développement": "Use development tools",
    "Créer des applications ergonomiques": "Create ergonomic applications",
    "Ecouter, analyser et rédiger les besoins":
        "Listen, analyze and write needs",
    "Être garant de la pérennité et de l'évolution des solutions":
        "Guarantee the sustainability and evolution of solutions",
    "Respecter les délais, les coûts et la qualité":
        "Meet deadlines, costs and quality",
    "Satisfaire les attentes du client": "Meet client expectations",
    "Piloter une projet d'ingénierie logicielle":
        "Lead a software engineering project",
    "Construire un cahier des charges": "Build specifications",
    "Gérer les données de l'entreprise": "Manage company data",
    "Développer des applications mobiles": "Develop mobile apps",
    "Accompagner la stratégie de l'entreprise":
        "Support the company's strategy",
    "Suivre les principes et bonnes pratiques de développement":
        "Follow development principles and best practices",
    "Analyser et identifier tous les problèmes potentiels":
        "Analyze and identify any potential problems",
    "Améliorer et maintenir le logiciel à long terme":
        "Improve and maintain the software in the long",
    "Traduire le besoin du client en demandes fonctionnelles":
        "Translate the client's need into functional demands",
    "Analyser et décrire les tâches à réaliser par l'ordinateur":
        "Analyze and describe the tasks to be performed by the computer",
    "Déterminer et schématiser les fonctionnalités du logiciel":
        "Determine and schematize the software functionalities",
    "Déceler les défauts de programmation": "Identify programming defects",
    "Effectuer des traitements par lot": "Perform batch processes",
    "Contrôler les évolutions et les différentes versions du logiciel":
        "Control developments and different versions of the software",
    "Maintenir en condition opérationnelle le logiciel":
        "Keep the software in operational condition",
    "Mettre en production à l'issue des phases de qualification et d'intégration":
        "Put into production at the end of the qualification and integration phases",
    "Rédiger le code source qui constitue le corps du logiciel":
        "Write the source code that forms the body of the software",
    "Mettre en oeuvre l'agilité au sein d'une équipe de développeurs":
        "Implement agility as part of a team of developers",
    "Diriger des projets collaboratifs": "Lead collaborative projects",
    "Vérifier que les fonctions offertes par le logiciel correspondent aux attentes du client":
        "Make sure the features offered by the software are in line with the customer's expectations",
    "Définir les étapes clés de cycle de vie du projet":
        "Define key lifecycle milestones for the project",
    "Intégrer les environnements de développement":
        "Integrate development environments",
    "Gérer les modifications apportées au code source":
        "Manage changes to source code",
    "Déployer le logiciel sur un serveur d'applications":
        "Deploy the software to an application server",
};

// Variables globales
let currentMode = "frToEn";
let currentWord = {};
let score = 0;
let totalQuestions = 0;
let askedWords = [];

let testType = "mots"; // "mots" ou "expressions"
const maxQuestions = 50;

document.addEventListener("DOMContentLoaded", function () {
    nextWord();
    document.getElementById("answer").focus();
});

function setMode(mode) {
    currentMode = mode;
    score = 0;
    totalQuestions = 0;
    askedWords = [];

    document.querySelectorAll(".mode-btn").forEach((btn) => {
        btn.classList.remove("active");
    });

    event.target.classList.add("active"); // ou remplace-le par une version plus robuste si tu veux

    document.getElementById("statsBtn")?.remove(); // Supprimer bouton stats s'il existe
    nextWord();
}

function setTestType(type) {
    testType = type;
    document.getElementById("testTitle").textContent =
        type === "mots" ? "Test de vocabulaire" : "Test d'expressions";

    score = 0;
    totalQuestions = 0;
    askedWords = [];

    document.getElementById("feedback").textContent = "";
    document.getElementById("answer").value = "";

    document.getElementById("statsBtn")?.remove();

    nextWord();

    // Mettre en évidence le bouton actif
    document.querySelectorAll(".testtype-btn").forEach((btn) => {
        btn.classList.remove("active");
    });
    document
        .querySelector(`.testtype-btn[data-type="${type}"]`)
        ?.classList.add("active");
}

function nextWord() {
    if (askedWords.length >= 50) {
        endSession();
        return;
    }

    const sourceDict =
        testType === "mots" ? vocabulary : vocabulaire_expressions;
    const allWords = Object.entries(sourceDict);
    let unused = allWords.filter(([fr, en]) => {
        const q = currentMode === "frToEn" ? fr : en;
        return !askedWords.includes(q);
    });

    if (unused.length === 0) {
        endSession();
        return;
    }

    const [fr, en] = unused[Math.floor(Math.random() * unused.length)];
    const question = currentMode === "frToEn" ? fr : en;
    const answer = currentMode === "frToEn" ? en : fr;

    currentWord = { question, answer };
    askedWords.push(question);

    document.getElementById("prompt").textContent = question;
    document.getElementById("answer").value = "";
    document.getElementById("feedback").textContent = "";
    document.getElementById("feedback").className = "feedback";
    document.getElementById("answer").focus();
}

function checkAnswer() {
    const userAnswer = document
        .getElementById("answer")
        .value.trim()
        .toLowerCase();
    const correctAnswer = currentWord.answer.toLowerCase();
    const feedbackElement = document.getElementById("feedback");

    totalQuestions++;

    if (userAnswer === correctAnswer) {
        score++;
        feedbackElement.textContent = `✅ Correct ! (${score}/${totalQuestions})`;
        feedbackElement.className = "feedback correct";
    } else {
        feedbackElement.textContent = `❌ Réponse: "${currentWord.answer}" (${score}/${totalQuestions})`;
        feedbackElement.className = "feedback incorrect";
    }
}

function handleKey(event) {
    if (event.key === "Enter") {
        if (document.getElementById("answer").value.trim()) {
            checkAnswer();
        } else {
            nextWord();
        }
    }
}

function endSession() {
    // Enregistrer score
    const key = testType === "mots" ? "testHistory_mots" : "testHistory_expr";
    const history = JSON.parse(localStorage.getItem(key)) || [];
    const now = new Date().toLocaleString("fr-FR");
    history.unshift({ date: now, score: score });
    if (history.length > 10) history.length = 10;
    localStorage.setItem(key, JSON.stringify(history));

    // Afficher bouton stats
    const container = document.querySelector(".app-container");
    const statsBtn = document.createElement("a");
    statsBtn.id = "statsBtn";
    statsBtn.href = "stats.html";
    statsBtn.className = "btn btn-primary mt-3";
    statsBtn.style.display = "block";
    statsBtn.style.textAlign = "center";
    statsBtn.innerHTML = '<i class="fas fa-chart-line"></i> Voir les stats';
    container.appendChild(statsBtn);
}

// Animation boutons
document.querySelectorAll(".mode-btn, .btn").forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
    el.style.animation = "slideUp 0.6s ease-out both";
});
