const board = document.getElementById("board");
const cells = [];
const time = document.getElementById("time");
const moves = document.getElementById("moves");
// hier sollte dann die ausgewählte Spielfeldgröße stehen
let horizontalSize = 4;
let verticalSize = 4;

const buildingItems = [
    { name: "BigBen", image: "/images/Gebäude/BigBen.jpg" },
    { name: "BlaueMoschee", image: "/images/Gebäude/BlaueMoschee.jpg" },
    { name: "BrandenburgerTor", image: "/images/Gebäude/BrandenburgerTor.jpg" },
    { name: "BurjAlArab", image: "/images/Gebäude/BurjAlArab.jpg" },
    { name: "BurjKhalifa", image: "/images/Gebäude/BurjKhalifa.jpg" },
    { name: "Eifelturm", image: "/images/Gebäude/Eifelturm.jpg" },
    { name: "Flatiron", image: "/images/Gebäude/Flatiron.jpg" },
    { name: "Freiheitsstatue", image: "/images/Gebäude/Freiheitsstatue.jpg" },
    { name: "GoldenGateBridge", image: "/images/Gebäude/GoldenGateBridge.jpg" },
    { name: "HancockBuilding", image: "/images/Gebäude/HancockBuilding.jpg" },
    { name: "KölnerDom", image: "/images/Gebäude/KölnerDom.jpg" },
    { name: "Kolosseum", image: "/images/Gebäude/Kolosseum.jpg" },
    { name: "Louvre", image: "/images/Gebäude/Louvre.jpg" },
    { name: "NotreDame", image: "/images/Gebäude/NotreDame.jpg" },
    { name: "OneWorldTradeCenter", image: "/images/Gebäude/OneWorldTradeCenter.jpg" },
    { name: "PetronasTowers", image: "/images/Gebäude/PetronasTowers.jpg" },
    { name: "Pyramide", image: "/images/Gebäude/Pyramide.jpg" },
    { name: "SchiefeTurmPisa", image: "/images/Gebäude/SchiefeTurmPisa.jpg" },
    { name: "SchlossSchönbrunn", image: "/images/Gebäude/SchlossSchönbrunn.jpg" },
    { name: "SpaceNeedle", image: "/images/Gebäude/SpaceNeedle.jpg" },
    { name: "Sphinx", image: "/images/Gebäude/Sphinx.jpg" },
    { name: "SydneyOper", image: "/images/Gebäude/SydneyOper.jpg" },
    { name: "TajMahal", image: "/images/Gebäude/TajMahal.jpg" },
    { name: "TowerBridge", image: "/images/Gebäude/TowerBridge.jpg" },
    { name: "WeisseHaus", image: "/images/Gebäude/WeisseHaus.jpg" },
];

const fruitItems = [
    { name: "Ananas", image: "/images/Obst_Gemüse/Ananas.jpg"},
    { name: "Apfel", image: "/images/Obst_Gemüse/Apfel.jpg"},
    { name: "Banane", image: "/images/Obst_Gemüse/Banane.jpg"},
    { name: "Birne", image: "/images/Obst_Gemüse/Birne.jpg"},
    { name: "Blaubeere", image: "/images/Obst_Gemüse/Blaubeere.jpg"},
    { name: "Blumenkohl", image: "/images/Obst_Gemüse/Blumenkohl.jpg"},
    { name: "Brokkoli", image: "/images/Obst_Gemüse/Brokkoli.jpg"},
    { name: "Brombeere", image: "/images/Obst_Gemüse/Brombeere.jpg"},
    { name: "Erdbeere", image: "/images/Obst_Gemüse/Erdbeere.jpg"},
    { name: "Gurke", image: "/images/Obst_Gemüse/Gurke.jpg"},
    { name: "Himbeere", image: "/images/Obst_Gemüse/Himbeere.jpg"},
    { name: "Johannisbeere", image: "/images/Obst_Gemüse/Johannisbeere.jpg"},
    { name: "Kartoffel", image: "/images/Obst_Gemüse/Kartoffel.jpg"},
    { name: "Kirsche", image: "/images/Obst_Gemüse/Kirsche.jpg"},
    { name: "Lauch", image: "/images/Obst_Gemüse/Lauch.jpg"},
    { name: "Melone", image: "/images/Obst_Gemüse/Melone.jpg"},
    { name: "Pfirsich", image: "/images/Obst_Gemüse/Pfirsich.jpg"},
    { name: "RoteBeete", image: "/images/Obst_Gemüse/RoteBeete.jpg"},
    { name: "Spargel", image: "/images/Obst_Gemüse/Spargel.jpg"},
    { name: "Spinat", image: "/images/Obst_Gemüse/Spinat.jpg"},
    { name: "Stachelbeere", image: "/images/Obst_Gemüse/Stachelbeere.jpg"},
    { name: "Tomate", image: "/images/Obst_Gemüse/Tomate.jpg"},
    { name: "Weintrauben", image: "/images/Obst_Gemüse/Weintrauben.jpg"},
    { name: "Zitrone", image: "/images/Obst_Gemüse/Zitrone.jpg"},
    { name: "Zwiebel", image: "/images/Obst_Gemüse/Zwiebel.jpg"},
];

const animalItems = [
    { name: "Adler", image: "/images/Tiere/Adler.jpg"},
    { name: "Ameise", image: "/images/Tiere/Ameise.jpg"},
    { name: "Bär", image: "/images/Tiere/Bär.jpg"},
    { name: "Clownsfisch", image: "/images/Tiere/Clownsfisch.jpg"},
    { name: "Delfin", image: "/images/Tiere/Delfin.jpg"},
    { name: "Elefant", image: "/images/Tiere/Elefant.jpg"},
    { name: "Fliege", image: "/images/Tiere/Fliege.jpg"},
    { name: "Giraffe", image: "/images/Tiere/Giraffe.jpg"},
    { name: "Hai", image: "/images/Tiere/Hai.jpg"},
    { name: "Hamster", image: "/images/Tiere/Hamster.jpg"},
    { name: "Hase", image: "/images/Tiere/Hase.jpg"},
    { name: "Hund", image: "/images/Tiere/Hund.jpg"},
    { name: "Kamele", image: "/images/Tiere/Kamele.jpg"},
    { name: "Katze", image: "/images/Tiere/Katze.jpg"},
    { name: "Löwe", image: "/images/Tiere/Löwe.jpg"},
    { name: "Nashorn", image: "/images/Tiere/Nashorn.jpg"},
    { name: "Nilpferd", image: "/images/Tiere/Nilpferd.jpg"},
    { name: "Pferd", image: "/images/Tiere/Pferd.jpg"},
    { name: "Qualle", image: "/images/Tiere/Qualle.jpg"},
    { name: "Schmetterling", image: "/images/Tiere/Schmetterling.jpg"},
    { name: "Schwein", image: "/images/Tiere/Schwein.jpg"},
    { name: "Specht", image: "/images/Tiere/Specht.jpg"},
    { name: "Stieglitz", image: "/images/Tiere/Stieglitz.jpg"},
    { name: "Tiger", image: "/images/Tiere/Tiger.jpg"},
    { name: "Wal", image: "/images/Tiere/Wal.jpg"},
];

// Zeit initieren
let seconds = 0;
let minutes = 0;

// Züge initieren
let movesCount = 0;
let successfulMoves = 0;

// Timer
const timer = () => {
    seconds += 1;
    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    };
    time.innerHTML = "Time: ${minutes}:${seconds}";
};

// Züge zählen
const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = "Züge: ${movesCount}";
};

// zufällige Auswahl der Spielkarten
const randomPick = (horizontalSize, verticalSize) => {
    // temporäres Array aus der Itemsliste erstellen, damit das Original nicht zerstört wird
    // hier sollte dann das ausgewählte Muster eingefügt werden
    let tmp = [...fruitItems];
    // Anzahl der benötigten Karten definieren --> Teilung durch 2, da ja 2 Karten zum Zuggewinn führen
    let size = (horizontalSize * verticalSize) / 2;
    let randomCards = [];
    // Schleife, um zufällige Auswahl der Karten zu treffen
    for (let i = 0; i < size; i++) {
        let randomIndex = Math.floor(Math.random() * tmp.length);
        randomCards.push(tmp[randomIndex]);
        // wenn ein Bild ausgewählt wurde, muss dieses auch aus dem temporären Array gelöscht werden, damit es nicht nochmal ausgewählt werden kann
        tmp.splice(randomIndex, 1);
    };
    return randomCards;
};

// Spielkarten mischen
const shuffledCards = (randomCards, horizontalSize, verticalSize) => {
    // Array aus den zufälligen Karten * 2 erstellen
    randomCards = [...randomCards, ...randomCards];
    // Mischen
    randomCards.sort(() => Math.random() - 0.5);
    return randomCards;
}

// Spielfeld erzeugen
function createBoard() {
    // leeres HTML-Feld dem "game"-div zuweisen
    game.innerHTML = "";
    for (let i = 0; i < horizontalSize * verticalSize; i++) {
        // entsprechend der Spielfeldgröße unten genannte Werte in das "game"-div schreiben
        // zusätzliches Attribut cardValue mit dem Namen der Karte speichern, um damit später den Vergleich zwischen der 1. und 2. Karte zu machen
        // back = Rückseite der Karte, die stets zu sehen ist, wenn sie nicht aufgedeckt wurde
        // front = Vorderseite der Karte mit dem entsprechenden Bild dieser Karte
        game.innerHTML = `
        <div class="cardsContainer" data-cardValue="${randomCards[i].name}"> 
            <div class="back"></div>
            <div class="front">
            <img src="${randomCards[i].image}" class="image">
            </div>
        </div>
        `;
    };

    // Spielfeld final erzeugen
    let size = horizontalSize * verticalSize;
    game.style.gridTemplateColumns = `repeat(${size}, auto)`;
};

// Zug machen
function makeMove() {
    
}
