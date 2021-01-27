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
            hp: dataPokemon.hp,
            height: dataPokemon.height,
            speed: dataPokemon.speed,
            attack: dataPokemon.attack,
            shape: dataPokemon.shape,
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

}


export function playAgain() {
    const button = document.getElementById('play-again');

    button.classList.add('poke-button');
    button.addEventListener('click', () => {
        //increment or set 
        clearPokeStats();
        window.location = '../index.html';
    });
}

export function allTimeResults() {
    const allTimeButton = document.getElementById('all-time-results');

    allTimeButton.classList.add('all-time-button');
    allTimeButton.addEventListener('click', () => {
        //increment or set 
        window.location.href = '../allresults/index.html';
    });
}


export function backToSingle() {
    const backToButton = document.getElementById('single-results');

    backToButton.classList.add('single-results-button');
    backToButton.addEventListener('click', () => {
        //increment or set 
        window.location.href = '../results/index.html';
    });
}