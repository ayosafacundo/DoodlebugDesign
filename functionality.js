const people = Array.from(document.getElementsByClassName('person')); //array de 
const sayings = {
    quotes: [
        '"Im sick of following my dreams, man. Im just going to ask where theyre going and hook up with em later."',
        '"Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes."',
        '"I love being married. Its so great to find that one special person you want to annoy for the rest of your life."',
        '"Any intelligent fool can make things bigger, more complex, and more violent. It takes a touch of genius -- and a lot of courage -- to move in the opposite direction."',
        '"I want my children to have all the things I couldnt afford. Then I want to move in with them."'
    ],
    names: [
        '- Dixie Normous',
        '- Sam Sung',
        '- Janelle Lawless',
        '- Birb',
        '- Moe Lester'
    ]
}


function handlePersonClick(id) {
    people.forEach((e) => {
        e.classList.replace('active', 'inactive');
    }) // Desactiva el botón que anteriormente estaba activo
    let person = document.getElementById(id); // Busca el elemento que se clickeó
    if (person.classList.contains('inactive')) {
        person.classList.replace('inactive', 'active'); // Activa el elemento reemplazándole el 'inactive' por un 'active'
    }
    let quote = document.getElementById('quote');
    quote.innerText = sayings.quotes[id - 1];
    let name = document.getElementById('name');
    name.innerText = sayings.names[id - 1];
}

function handleShowHideToggle(id) {
    let element = document.getElementById(id);
    if (element.classList.contains('show')) {
        element.classList.replace('show', 'hide');
    } else {
        element.classList.replace('hide', 'show');
    }
}