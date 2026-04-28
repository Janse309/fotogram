function getImageTemplate(index) {
    let image = images[index]
    return `
            <button role="listitem" onclick="openDialog(${image.length})" class="content-btn" aria-haspopup="dialog" aria-label="Bild 1 von 12: Bilder vergrößern"><${image.img}></button>
            `
}