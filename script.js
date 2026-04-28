let index = 0;
const dialog = document.getElementById("imageModal");
const dialogImage = document.getElementById("dialogImage");
const dialogTitle = document.getElementById("dialog-headline");
const dialogCounter = document.getElementById("img-counter");

function init() {
    renderImages();
}

function openDialog(i) {
    clearDialog();
    index = i; 
    updateDialog();
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}

function clearDialog() {
    dialogImage.src = "";
    dialogTitle.textContent = "";
    dialogCounter.textContent = "";
}

function updateDialog() {
    dialogImage.src = images[index].img;
    dialogTitle.textContent = images[index].name;
    dialogCounter.textContent = `${index + 1} / ${images.length}`;
}

function nextPic() {
    index++;
    if (index >= images.length) {
        index = 0; 
    }
    updateDialog();
}

function prevPic() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    updateDialog();
}

function renderImages() {
    let contentRef = document.getElementById('imageContent');
    contentRef.innerHTML = "";

    for (let index = 0; index < images.length; index++) {
        contentRef.innerHTML += getImageTemplate(index);
    }
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
    } else if (event.key === "Escape") {
        closeDialog();
    }
}

