// Variables globales
let currentMode = "frToEn";
let currentWord = {};
let score = 0;
let totalQuestions = 0;
let askedWords = [];

// Dictionnaire de vocabulaire informatique
const vocabulary = {
    "Cadre de travail": "Framework",
    "Environnement de développement (IDE)":
        "Integrated development environment",
    Maintenance: "Maintenance",
    Sauvegarde: "Backup",
    "Base de données": "Database",
    "Flux de données": "Data flow",
    "Stockage de données": "Data storage",
    "Pare-feu": "Firewall",
    "Logiciel espion": "Spyware",
    "Bande passante": "Bandwidth",
    "Interface de programmation (API)": "Application Programming Interface",
    Balise: "Markup",
    "Langage binaire": "Binary language",
    "Système de gestion de contenu (CMS)": "Content management system",
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
    "Optimisation pour les moteurs de recherche (SEO)":
        "Search Engine Optimization",
    "Référencement payant (SEA)": "Search Engine Advertising",
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
    event.target.classList.add("active");

    document.getElementById("statsBtn")?.remove(); // Supprimer bouton stats s'il existe
    nextWord();
}

function nextWord() {
    if (askedWords.length >= 50) {
        endSession();
        return;
    }

    const allWords = Object.entries(vocabulary);
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
    const history = JSON.parse(localStorage.getItem("testHistory")) || [];
    const now = new Date().toLocaleString("fr-FR");
    history.unshift({ date: now, score: score });
    if (history.length > 10) history.length = 10;
    localStorage.setItem("testHistory", JSON.stringify(history));

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
