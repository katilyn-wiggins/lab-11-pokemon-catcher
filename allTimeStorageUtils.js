import { findByUnId } from './utils.js';
import pokemon from './data.js';

const ALLTIMESTATS = 'ALLTIMESTATS';

export function getAllTimeStats() {
    let allStats = JSON.parse(localStorage.getItem(ALLTIMESTATS));

    if (!allStats) {
        allStats = [];
        localStorage.setItem(ALLTIMESTATS, JSON.stringify(allStats));
    }

    return allStats;
}

export function setAllTimeStats(newAllStats) {
    localStorage.setItem(ALLTIMESTATS, JSON.stringify(newAllStats));
}


export function incrementAllTimeSeen(_id) {
    const allStats = getAllTimeStats();

    const poke = findByUnId(_id, allStats);
    if (!poke) {
        const dataPokemon = findByUnId(_id, pokemon);
        const newAllStat = {
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
        allStats.push(newAllStat);
    } else {
        poke.seen++;
    }

    setAllTimeStats(allStats);
}

export function incremementAllTimeCaught(_id) {
    const allStats = getAllTimeStats();

    const poke = findByUnId(_id, allStats);
    poke.caught++;

    setAllTimeStats(allStats);
}

