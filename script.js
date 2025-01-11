//Los recuadros desaparecen al clickear en ellos y reaparecen al clickear en el espacio vacío (pero hay un fallo porque ni reaparece el del recuadro clickeado sino en el orden que desaparecieron)

const container = document.getElementById('container');
const allBoxes = container.querySelectorAll('.box');

allBoxes.forEach((box) => {
    box.addEventListener('click', (event) => {
        box.style.visibility = 'hidden';
    });
});

//Para hacer que reaparezcan necesité ayuda. Primero porque pensaba que al darle visibility hidden el elemento seguía ahí; pero no, el segundo click se hace sobre el contenedor. En segundo lugar. Aprendí la diferencia entre HTMLCollection y NodeList; pero no sabía que los NodeList no tienen el método .find y que entonces hay que convertirlos en Array antes.

container.addEventListener('click', (event) => {
    if (event.target === container) { 
        const closestBox = Array.from(allBoxes).find(box => box.style.visibility === 'hidden');
        if (closestBox) {
            closestBox.style.visibility = 'visible';
        }
   }
});

