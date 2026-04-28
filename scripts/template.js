function getImageTemplate(index) {
    let image = images[index]
    return `
            <button role="listitem" onclick="openDialog(${index})" class="content-btn" aria-haspopup="dialog" aria-label="Bild ${index + 1} von ${images.length}: Bilder vergrößern">
            <img src="${image.img}" alt="${image.name}"
            </button>
            `
}