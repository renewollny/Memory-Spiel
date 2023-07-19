const board = document.querySelector(".board");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const time = document.getElementById("time");
const moves = document.getElementById("moves");
const result = document.getElementById("result");
const controls = document.querySelector(".controls");

// hier sollte dann die ausgewählte Spielfeldgröße stehen
// let horizontalSize = 4;
// let verticalSize = 4;

let firstCard = false;
let secondCard = false;
let cards;
let interval;

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
    time.innerHTML = `Abgelaufene: ${minutes} Minute(n): ${seconds} Sekunde(n)`;
};

// Züge zählen
const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `Züge: ${movesCount}`;
};

// zufällige Auswahl der Spielkarten
const randomPick = (size = 4) => {
    // temporäres Array aus der Itemsliste erstellen, damit das Original nicht zerstört wird
    // hier sollte dann das ausgewählte Muster eingefügt werden
    let tmp = [...fruitItems];
    let randomCards = [];
    // Anzahl der benötigten Karten definieren --> Teilung durch 2, da ja 2 Karten zum Zuggewinn führen
    size = (size * size) / 2;
    // Schleife, um zufällige Auswahl der Karten zu treffen
    for (let i = 0; i < size; i++) {
        let randomIndex = Math.floor(Math.random() * tmp.length);
        randomCards.push(tmp[randomIndex]);
        // wenn ein Bild ausgewählt wurde, muss dieses auch aus dem temporären Array gelöscht werden, damit es nicht nochmal ausgewählt werden kann
        tmp.splice(randomIndex, 1);
    };
    return randomCards;
};

// Spielfeld erzeugen
const game = (randomCards, size = 4) => {
    // Spielkarten mischen
    // Array aus den zufälligen Karten * 2 erstellen
    randomCards = [...randomCards, ...randomCards];
    // Mischen
    randomCards.sort(() => Math.random() - 0.5);
    
    // Spielkarten erzeugen
    // leeres HTML-Feld dem "board"-div zuweisen
    board.innerHTML = "";
    for (let i = 0; i < size * size; i++) {
        // entsprechend der Spielfeldgröße unten genannte Werte in das "board"-div schreiben
        // zusätzliches Attribut cardValue mit dem Namen der Karte speichern, um damit später den Vergleich zwischen der 1. und 2. Karte zu machen
        // back = Rückseite der Karte, die stets zu sehen ist, wenn sie nicht aufgedeckt wurde
        // front = Vorderseite der Karte mit dem entsprechenden Bild dieser Karte
        board.innerHTML += `
        <div class="cardsContainer" data-cardValue="${randomCards[i].name}"> 
            <div class="back"></div>
            <div class="front">
            <img src="${randomCards[i].image}" class="image">
            </div>
        </div>
        `;
    };

    // Spielfeld erzeugen
    board.style.gridTemplateColumns = `repeat(${size}, auto)`;

    // Züge machen
    // alle Karten in einer Variable speichern
    cards = document.querySelectorAll(".cardsContainer");
    // über alle karten iterieren
    cards.forEach((card) => {
        // bei Klick auf Karte ausführen
        card.addEventListener("click", () => {
            // prüfen, ob geklickte Karte noch kein "matched"-Tag hat
            if (!card.classList.contains("matched")) {
                // wenn Karte noch kein "matched"-Tag hat, dann "turned"-Tag mitgeben
                card.classList.add("turned");
                // prüfen, ob es die erste geklickte Karte ist und deren Namen erhalten
                if (!firstCard) {
                    firstCard = card;
                    firstCardName = card.getAttribute("data-cardValue");
                } else {
                    // wenn es bereits die 2. geklickte Karte ist, den Spielzugzähler um 1 erhöhen
                    movesCounter();
                    secondCard = card;
                    // den Namen der 2. Karte erhalten
                    let secondCardName = card.getAttribute("data-cardValue");
                    // prüfen, ob der Name der 1. Karte mit dem Namen der 2. Karte übereinstimmt
                    if (firstCardName == secondCardName) {
                        // wenn die Namen der beiden Karten übereinstimmen, beiden Karten den "matched"-Tag mitgeben und den Zähler für die erfolgreichen Züge um 1 erhöhen
                        firstCard.classList.add("matched");
                        secondCard.classList.add("matched");
                        firstCard = false;
                        successfulMoves += 1;
                        // prüfen, ob die erfolgreichen Züge die Hälfte der gesamten Karten ist, und somit das Spiel gewonnen wurde --> Ausgabe der benötigten Züge
                        if (successfulMoves == Math.floor(randomCards.length / 2)) {
                            result.innerHTML = `<h1>Du hast gewonnen!!!</h1>
                            <h2>Benötigte Spielzüge: ${movesCount}</h2>
                            <h2>Benötigte Zeit: ${minutes} Minute(n), ${seconds} Sekunde(n)</h2>`;
                            stopgame();
                        }
                    } else {
                        // wenn die Namen der beiden Karten nicht übereinstimmen, die Karten nach 1 Sekunde wieder zurück auf die Ursprungsansicht (Rückseite) setzen
                        let tmpFirstCard = firstCard;
                        let tmpSecondCard = secondCard;
                        firstCard = false;
                        secondCard = false;
                        let delay = setTimeout(() => {
                            tmpFirstCard.classList.remove("turned");
                            tmpSecondCard.classList.remove("turned");
                        }, 1000);
                    }
                }
            }
        });
    });
};

// Spiel starten
startButton.addEventListener("click", () => {
    movesCount = 0;
    seconds = 0;
    minutes = 0;
    // finalen Bildschirm mit Ergebnissen ausblenden
    controls.classList.add("hide");
    startButton.classList.add("hide");
    // Stop-Button einblenden
    stopButton.classList.remove("hide");
    // Timer nach 1 Sekunde laufen lassen
    interval = setInterval(timer, 1000);
    moves.innerHTML = `Moves: ${movesCount}`;
    // Spielen
    playTheGame();
});

// Spiel anhalten
stopButton.addEventListener("click", (stopgame = () => {
    // // finalen Bildschirm mit Ergebnissen einblenden
    controls.classList.remove("hide");
    startButton.classList.remove("hide");
    // Stop-Button ausblenden
    stopButton.classList.add("hide");
    // Timer zurücksetzen
    clearInterval(interval);
    })
);