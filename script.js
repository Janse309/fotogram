
let images = [
    { src: "./img/wolves.jpg", title: 'Two wolves' },
    { src: "./img/lamm.jpg", title: "Baby sheep" },
    { src: "./img/ducks.jpg", title: "Baby duck" },
    { src: "./img/habichtskauz.jpg", title: "Owl" },
    { src: "./img/puppys.jpg", title: "Two dogs" },
    { src: "./img/hase.jpg", title: "Rabbit" },
    { src: "./img/merkats.jpg", title: "Merkats" },
    { src: "./img/mole.jpg", title: "Mole" },
    { src: "./img/rhino.jpg", title: "Rhino" },
    { src: "./img/hawk.jpg", title: "Hawk" },
    { src: "./img/grizzli.jpg", title: "Two bears" },
    { src: "./img/horses.jpg", title: "Two horses" }
];

let Index = 0;
const dialog = document.getElementById('imageModal');
const dialogImage = document.getElementById("dialogImage");
const dialogTitle = document.getElementById("dialog-headline");
const dialogCounter = document.getElementById("img-counter");

function openDialog(i) {
    clearDialog();
    Index = i; // weil dein erstes Bild 1 ist
    updateDialog();
    dialog.showModal();
}

// 4. Schließen
function closeDialog() {
    dialog.close();
}

function clearDialog() {
    dialogImage.src = "";
    dialogTitle.textContent = "";
    dialogCounter.textContent = "";
}

function updateDialog() {
    dialogImage.src = images[Index].src;
    dialogTitle.textContent = images[Index].title;
    dialogCounter.textContent = `${Index + 1}/${images.length}`;
}

function nextPic() {
    Index++;
    if (Index >= images.length) {
        Index = 0; // wieder zum Anfang
    }

    updateDialog();
}


function prevPic() {
    Index--;
    if (Index < 0) {
        Index = images.length - 1; // zum letzten Bild
    }
    updateDialog();
}

function outsideClick(event) {
    if (event.target.id === "imageModal") {
        dialog.close();
    }
}
function outsideClick() {
    dialog.close();
}

document.onkeydown = function (event) {
    if (!dialog.open) return;

    if (event.key === "ArrowRight") {
        nextPic(); // Name korrigiert
    } else if (event.key === "ArrowLeft") {
        prevPic(); // Name korrigiert
    } else if (event.key === "Escape"){
        closeDialog();
    }
}

