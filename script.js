


function openDialog() {
    const dialogRef = document.getElementById('myDialog');
    dialogRef.showModal();
}

function closeDialog() {
    const dialogRef = document.getElementById('myDialog');
    dialogRef.close();
}

let images = [
    "ducks.jpg",
    "grizzli.jpg",
    "habichtskauz.jpg",
    "hase.jpg",
    "hawk.jpg",
    "horses.jpg",
    "lamm.jpg",
    "merkats.jpg",
    "mole.jpg",
    "puppys.jpg",
    "rhino.jpg",
    "wolves.jpg"
];

for (let index = 0; index < images.length; index++) {
    const element = array[index];
    
}

let currentIndex = 0;

function nextPic() {
    let next = currentIndex + 1;
    if (next >= images.length) next = 0 ;
    showPic(next);
}

function prevPic() {
    let prev = currentIndex - 1;
    if (prev < 0) prev = images.length - 1 ;
    showPic(prev);
}