import * as pokemon from '../data.js';
import { findByUnId } from '../utils.js';
const POKESTATS = 'POKESTATS';

let stats = JSON.parse(localStorage.getItem(POKESTATS));

const id = stats._id;

export function renderTable(stats, pokemon) {

    const tableRow = document.createElement('tr');
    tableRow.classList.add('table-row');

    // const pokeName = document.createElement('td');
    // pokeName.classList.add('pokemon-name');
    // pokeName.textContent = name(pokemon, id);

    const pokeId = document.createElement('td');
    pokeId.classList.add('poke-id');
    pokeId.textContent = findByUnId(id, pokemon);

    const timesSeen = document.createElement('td');
    timesSeen.classList.add('times-seen');
    timesSeen.textContent = stats.seen;

    const timesCaught = document.createElement('td');
    timesCaught.classList.add('times-caught');
    timesCaught.textContent = stats.caught;

    tableRow.append(pokeId, timesSeen, timesCaught);
    return tableRow;
}