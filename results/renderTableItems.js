// import pokemon from '../data.js';
// import { findByUnId } from '../utils.js';
// const POKESTATS = 'POKESTATS';

export function renderTableRow(pokeItem) {

    const tableRow = document.createElement('tr');
    tableRow.classList.add('table-row');

    // const pokemonObj = findByUnId(pokeItem._id, pokemon);
    const pokeName = document.createElement('td');
    pokeName.classList.add('poke-name');
    pokeName.textContent = pokeItem.name;

    const timesSeen = document.createElement('td');
    timesSeen.classList.add('times-seen');
    timesSeen.textContent = pokeItem.seen;

    const timesCaught = document.createElement('td');
    timesCaught.classList.add('times-caught');
    timesCaught.textContent = pokeItem.caught;

    tableRow.append(pokeName, timesSeen, timesCaught);
    return tableRow;

}


