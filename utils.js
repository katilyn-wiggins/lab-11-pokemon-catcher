import pokemon from './data.js';
import { incremementCaught, incrementSeen } from './localStorageUtils.js';

let numberOfTurns = 0;

//gets one random pokemon by index number
export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemon.length);

    return pokemon[randomIndex];
}


export function findByUnId(id, array) {

    for (let item of array) {

        if (item._id === id) {
            return item;
        }
    }
}

//renders one image by creating an img element inside of the div and adds click handler to the images 
//where on click, the function increments pokemon caught
export function renderPokeImage(pokemonItem) {
    const image = document.createElement('img');

    image.src = pokemonItem.url_image;

    image.classList.add('poke-img');
    image.addEventListener('click', () => {
        //increment or set 
        incremementCaught(pokemonItem._id);

        if (numberOfTurns < 11) {
            setThreePokemon();
        } else {
            window.location = 'results';
        }

    });

    return image;
}

//this function gets and displays THREE random pokemon by utilizing the getRandomPokemon and renderPokemon functions 
//this function also increments the number of turns as soon as the images are displayed
export function setThreePokemon() {
    numberOfTurns++;
    let pokeOne = getRandomPokemon();
    let pokeTwo = getRandomPokemon();
    let pokeThree = getRandomPokemon();

    //while loop, executes IF two of the three pokemon are matching and ENDS when all pokemon are unique 
    while (pokeOne._id === pokeTwo._id || pokeOne._id === pokeThree._id || pokeTwo._id === pokeThree._id) {
        pokeOne = getRandomPokemon();
        pokeTwo = getRandomPokemon();
        pokeThree = getRandomPokemon();
    }

    //setting the rendered pokemon images to a constant so they are easier to read
    const img1 = renderPokeImage(pokeOne);
    const img2 = renderPokeImage(pokeTwo);
    const img3 = renderPokeImage(pokeThree);

    //increments the pokemon seen in local data     
    incrementSeen(pokeOne._id);
    incrementSeen(pokeTwo._id);
    incrementSeen(pokeThree._id);


    //back to the image, this part grabs the div and nests the images inside the div
    const div = document.getElementById('pokemon');

    //this sets the div content to empty when clicked again/basically refreshes the page so images are not stacked 
    div.textContent = '';

    //appends the new images to the div
    div.append(img1, img2, img3);
}



// export function name(array, id) {
//     for (let item of array) {
//         if (item._id === id) return item.pokemon;
//     }
// }










