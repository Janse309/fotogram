function getImageTemplate(index) {
    return `
            <div id="imageContent" class="album" role="list">
                <button role="listitem" onclick="openDialog(0)" class="content-btn" aria-haspopup="dialog" aria-label="Bild 1 von 12: Bilder vergrößern"><<img>${images[index].img}></button>
            </div>`
}