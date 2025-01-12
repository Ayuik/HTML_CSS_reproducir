//Al Hacer click en un recuadro aparece el significado del idiom. Luego, el recuadro desaparece y finalmente, con un 3er click, vuelve a aparecer.
//NO FUNCIONA
const container = document.getElementById('container');
const allBoxes = Array.from(container.querySelectorAll('.box'));
const meanings = {
    pear: "If a plan goes pear-shaped, it fails: We'd planned to go away for the weekend, but it all went pear-shaped.",
    banana: "To go crazy both in a good way and a bad way about something: Archana went bananas when she heard that I had lost her key",
}

allBoxes.forEach((box) => {
    let originalContent = box.innerHTML;
    let state = "original";
    box.addEventListener('click', (event) => {
        if (state == "original") {
        box.innerHTML = " "
        let meaningText = document.createElement('p')
        meaningText.className = 'meaning'
        meaningText.innerHTML =
        `
        ${meanings[box.id]}
        `
        box.appendChild(meaningText);
        state = "changed";
        } else if (state == "changed") {
        box.style.visibility = "hidden";
        state = "hidden";
    }
    });
});


container.addEventListener('click', (event) => {
    allBoxes.forEach(box => {
        if (state == "hidden")
            box.style.visibility = 'visible';
        });
    }
);