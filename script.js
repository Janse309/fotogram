


function openDialog() {
    const dialogRef = document.getElementById('myDialog');
    dialogRef.showModal();
}

function closeDialog() {
    const dialogRef = document.getElementById('myDialog');
    dialogRef.close();
}

let imageTitles = [
    "two wolves",
    "baby sheep",
    "baby duck",
    "owl",
    "two dogs",
    "rabbit",
    "erdmännchen",
    "mowl",
    "rhino",
    "hawk",
    "two bears",
    "two horses"
]

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


let currentIndex = 0;

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
    
}