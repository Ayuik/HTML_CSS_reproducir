//Los recuadros desaparecen al clickear en ellos y reaparecen al clickear sobre otro recuadro o sobre el espacio vacío.

const container = document.getElementById('container');
const allBoxes = Array.from(container.querySelectorAll('.box'));

allBoxes.forEach((box) => {
    box.addEventListener('click', (event) => {
        allBoxes.forEach(innerBox => {
            if (innerBox !== box) {
                innerBox.style.visibility = 'visible';
            }
        });
        box.style.visibility = 'hidden';
        event.stopPropagation(); //Sin ayuda de la IA no hubiese sabído que esta línea era necesaria.
    });
});

container.addEventListener('click', (event) => {
    allBoxes.forEach(box => {
            box.style.visibility = 'visible';
        });
    }
);
