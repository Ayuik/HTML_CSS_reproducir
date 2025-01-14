const allBoxes = container.querySelectorAll('.box');

allBoxes.forEach((box) => {
    box.addEventListener('click', (event) => {
        box.classList.toggle('hidden')
    });
})