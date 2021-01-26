import { findByUnId } from './utils.js';
import pokemon from './data.js';

const POKESTATS = 'POKESTATS';

export function getPokeStats() {
    let stats = JSON.parse(localStorage.getItem(POKESTATS));

    if (!stats) {
        stats = [];
        localStorage.setItem(POKESTATS, JSON.stringify(stats));
    }

    return stats;
}

export function setPokeStats(newStats) {
    localStorage.setItem(POKESTATS, JSON.stringify(newStats));
}


export function incrementSeen(_id) {
    const stats = getPokeStats();

    const poke = findByUnId(_id, stats);
    if (!poke) {
        const dataPokemon = findByUnId(_id, pokemon);
        const newStat = {
            name: dataPokemon.pokebase,
            _id: _id,
            seen: 1,
            caught: 0,
        };
        stats.push(newStat);
    } else {
        poke.seen++;
    }

    setPokeStats(stats);
}

export function incremementCaught(_id) {
    const stats = getPokeStats();

    const poke = findByUnId(_id, stats);
    poke.caught++;

    setPokeStats(stats);
}

export function clearPokeStats() {
    let stats = [];
    localStorage.setItem(POKESTATS, JSON.stringify(stats));
    window.location = '../index.html';
}



export function playAgain() {
    const button = document.getElementById('play-again');

    button.classList.add('poke-button');
    button.addEventListener('click', () => {
        //increment or set 
        clearPokeStats();
    });
}