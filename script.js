


function openDialog() {
    const dialogRef = document.getElementById('myDialog');
    dialogRef.showModal();
}

function closeDialog() {
    const dialogRef = document.getElementById('myDialog');
    dialogRef.close();
}

let images = [
    "./img/wolves.jpg",
    "./img/lamm.jpg",
    "./img/ducks.jpg",
    "./img/habichtskauz.jpg",
    "./img/puppys.jpg",
    "./img/hase.jpg",
    "./img/merkats.jpg",
    "./img/mole.jpg",
    "./img/rhino.jpg",
    "./img/hawk.jpg",
    "./img/grizzli.jpg",
    "./img/horses.jpg"
];

let imageTitles = [
    "Two wolves",
    "Baby sheep",
    "Baby duck",
    "Owl",
    "Two dogs",
    "Rabbit",
    "Merkats",
    "Mowl",
    "Rhino",
    "Hawk",
    "Two bears",
    "Two horses"
];

let currentIndex = 0;

function openDialog(index) {
    currentIndex = index; // Setze den Index auf das geklickte Bild
    const dialog = document.getElementById('myDialog');
    updateDialogContent(); // Funktion zum Befüllen des Inhalts
    dialog.showModal();
}

function nextPic() {
    // Wenn wir am Ende sind, fangen wir wieder bei 0 an
    currentIndex = (currentIndex + 1) % images.length;
    updateDialogContent();
}

function prevPic() {
    // Geht einen Schritt zurück
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateDialogContent();
}

function updateDialogContent() {
    const imgElement = document.getElementById('dialog-main-content');
    const counterElement = document.getElementById('img-counter'); // ID angepasst auf dein HTML
    const headline = document.querySelector('.dialogContent h2'); // Findet dein h2 Element
    
    imgElement.src = images[currentIndex];
    headline.innerText = imageTitles[currentIndex]; // Setzt den Titel
    counterElement.innerText = `${currentIndex + 1} / ${images.length}`; // Ändert den Text
}

function closeDialog() {
    document.getElementById('myDialog').close();
}