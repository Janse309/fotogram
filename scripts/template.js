function getImageTemplate(index) {
    return `
            <div id="content" class="album" role="list">
                <button role="listitem" onclick="openDialog(0)" class="content-btn" aria-haspopup="dialog" aria-label="Bild 1 von 12: Wölfe vergrößern"><img src="./img/wolves.jpg" alt="wolf image"></button>
                <button role="listitem" onclick="openDialog(1)" class="content-btn" aria-haspopup="dialog" aria-label="Bild 2 von 12: Schafe vergrößern"><img src="./img/lamm.jpg" alt="sheep puppy image"></button>
                <button role="listitem" onclick="openDialog(2)" class="content-btn" aria-haspopup="dialog" aria-label="Bild 3 von 12: Enten vergrößern"><img src="./img/ducks.jpg" alt="ducks image"></button>
                <button role="listitem" onclick="openDialog(3)" class="content-btn" aria-haspopup="dialog" aria-label="Bild 4 von 12: Habichtskauz vergrößern"><img src="./img/habichtskauz.jpg" alt="habichtskauz image"></button>
                <button role="listitem" onclick="openDialog(4)" class="content-btn" aria-haspopup="dialog" aria-label="Bild 5 von 12: Hundewelpen vergrößern"><img src="./img/puppys.jpg" alt="dog image"></button>
                <button role="listitem" onclick="openDialog(5)" class="content-btn" aria-haspopup="dialog" aria-label="Bild 6 von 12: Hase vergrößern"><img src="./img/hase.jpg" alt="rabbit image"></button>
                <button role="listitem" onclick="openDialog(6)" class="content-btn" aria-haspopup="dialog" aria-label="Bild 7 von 12: Erdmännchen vergrößern"><img src="./img/merkats.jpg" alt="meerkat Image"></button>
                <button role="listitem" onclick="openDialog(7)" class="content-btn" aria-haspopup="dialog" aria-label="Bild 8 von 12: Maulwurf vergrößern"><img src="./img/mole.jpg" alt="mole image"></button>
                <button role="listitem" onclick="openDialog(8)" class="content-btn" aria-haspopup="dialog" aria-label="Bild 9 von 12: Nashorn vergrößern"><img src="./img/rhino.jpg" alt="rhino"></button>
                <button role="listitem" onclick="openDialog(9)" class="content-btn" aria-haspopup="dialog" aria-label="Bild 10 von 12: Falke vergrößern"><img src="./img/hawk.jpg" alt="hawk image"></button>
                <button role="listitem" onclick="openDialog(10)" class="content-btn" aria-haspopup="dialog" aria-label="Bild 11 von 12: Bär vergrößern"><img src="./img/grizzli.jpg" alt="grizzlies image"></button>
                <button role="listitem" onclick="openDialog(11)" class="content-btn" aria-haspopup="dialog" aria-label="Bild 12 von 12: Pferde vergrößern"><img src="./img/horses.jpg" alt="horses image"></button>
            </div>`
}