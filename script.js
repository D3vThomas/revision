const vocab = [
    ["Cadre de travail", "Framework"],
    [
        "Environnement de développement (IDE)",
        "Integrated development environment",
    ],
    ["Maintenance", "Maintenance"],
    ["Sauvegarde", "Backup"],
    ["Base de données", "Database"],
    ["Flux de données", "Data flow"],
    ["Stockage de données", "Data storage"],
    ["Pare-feu", "Firewall"],
    ["Logiciel espion", "Spyware"],
    ["Bande passante", "Bandwidth"],
    ["Interface de programmation (API)", "Application Programming Interface"],
    ["Balise", "Markup"],
    ["Langage binaire", "Binary language"],
    ["Système de gestion de contenu (CMS)", "Content management system"],
    ["Serveur", "Server / Host"],
    ["Service d'hébergement", "Hosting service"],
    ["Plan de site / Arborescence", "Sitemap"],
    ["Site statique", "Static site"],
    ["Site dynamique", "Dynamic site"],
    ["Site animé", "Animated site"],
    ["Refonte", "Redesign"],
    ["Charte graphique", "Graphic charter"],
    ["Bannière", "Banner"],
    ["Référencement", "Referencing"],
    [
        "Optimisation pour les moteurs de recherche (SEO)",
        "Search Engine Optimization",
    ],
    ["Référencement payant (SEA)", "Search Engine Advertising"],
    ["Référencement abusif", "Spamdexing"],
    ["Réseau Social", "Social Network"],
    ["Protocole de transfert de fichier", "File Transfer Protocol"],
    ["Transfert de fichier", "File transfer"],
    ["Partage de fichier", "File sharing"],
    ["Télécharger", "To download"],
    ["Visite virtuelle", "Virtual visit"],
    ["Objet interactif", "Interactive object"],
    ["Interface utilisateur graphique", "Graphic user interface"],
    ["Prototype d'interface utilisateur", "Mock-up"],
    ["Expérience utilisateur", "User experience"],
    ["Maquette fonctionnelle d'un site", "Wireframe"],
    ["Logiciel", "Software"],
    ["Cahier des charges", "Specifications"],
    ["Navigateur", "Browser"],
    ["Moteur de recherche", "Search engine"],
    ["Programmation", "Programming"],
    ["Nom de domaine", "Domain name"],
    ["Compte", "Account"],
    ["Créer un compte", "To sign up"],
    ["Définir un mot de passe", "To set a password"],
    ["Utilisateur", "User"],
    ["Identifiant", "Username"],
    ["Bibliothèque", "Library"],
];

let shuffledVocab = [];
let currentIndex = 0;
let mode = "frToEn"; // ou "enToFr"

// Fonction de mélange aléatoire
function shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function setMode(newMode) {
    mode = newMode;
    currentIndex = 0;
    shuffledVocab = shuffleArray(vocab); // On mélange à chaque changement de mode
    nextWord();
}

function incrementIndex() {
    currentIndex = (currentIndex + 1) % shuffledVocab.length;
}

function nextWord() {
    incrementIndex();
    document.getElementById("feedback").innerText = "";
    document.getElementById("answer").value = "";
    const pair = shuffledVocab[currentIndex];
    const prompt = mode === "frToEn" ? pair[0] : pair[1];
    document.getElementById("prompt").innerText = prompt;
}

function checkAnswer() {
    const pair = shuffledVocab[currentIndex];
    const expected = mode === "frToEn" ? pair[1] : pair[0];
    const userInput = document.getElementById("answer").value.trim();
    const feedback = document.getElementById("feedback");

    if (userInput.toLowerCase() === expected.toLowerCase()) {
        feedback.innerText = "✅ Bonne réponse !";
        feedback.style.color = "green";
    } else {
        feedback.innerText = `❌ Mauvaise réponse. C'était : ${expected}`;
        feedback.style.color = "red";
    }
}

function handleKey(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
}

window.onload = () => {
    shuffledVocab = shuffleArray(vocab); // Mélange initial
    setMode("frToEn");
};
