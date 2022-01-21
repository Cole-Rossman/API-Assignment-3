import { getPokedex } from './fetch.js';

// import functions
console.log('app.js');
// grab DOM elements
const template = document.querySelector('#template');
const list = document.querySelector('#list');
const selectEl = document.querySelector('select');
console.log(template, selectEl);

async function renderPokemon() {
    const pokedex = await getPokedex();
    list.classList.add('pokemon');
    for (let pokemon of pokedex) {
        const clone = template.content.cloneNode(true);
        const name = clone.querySelector('#name');
        const image = clone.querySelector('#image');
        const type = clone.querySelector('#type');

        name.textContent = 'Name: ' + pokemon.pokemon;
        type.textContent = 'Egg:' + pokemon.egg_group_1;
        image.src = pokemon.url_image;
        image.alt = pokemon.pokedex;

        list.appendChild(clone);

    }
}
selectEl.addEventListener('change', async() => {
    console.log('user click');
});


// set event listeners 
window.addEventListener('load', async() => {
    await renderPokemon();
});
// get user input
    // use user input to update state 
    // update DOM to reflect the new state
