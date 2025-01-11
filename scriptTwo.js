const container = document.getElementById('container');
const allBoxes = Array.from(container.querySelectorAll('.box'));
const allMeaningBoxes = Array.from(container.querySelectorAll('.meaning'));

allBoxes.forEach((box) => {
    box.addEventListener('click', (event) => {
        allBoxes.forEach(innerBox => {
            if (innerBox !== box) {
                innerBox.style.visibility = 'visible';
            }
        });
        box.style.visibility = 'hidden';

        allMeaningBoxes.forEach((meaningBox) => {
            if (meaningBox.id == `${box.id}_meaning`) {
            meaningBox.style.display = 'block';
        }
        })
        event.stopPropagation(); //Sin ayuda de la IA no hubiese sabído que esta línea era necesaria.
    });
});

container.addEventListener('click', (event) => {
    allBoxes.forEach(box => {
            box.style.visibility = 'visible';
        });
    }
);
