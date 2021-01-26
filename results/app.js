import * as pokemon from '../data.js';
import { findByUnId } from '../utils.js';
import { renderTable } from './renderTableItems.js';


const POKESTATS = 'POKESTATS';

let stats = JSON.parse(localStorage.getItem(POKESTATS));
let id = stats._id;


for (let stat of stats) {
    const poke = findByUnId(id, pokemon);

    const tableRow = renderTable(stat, poke);

    tableRow.append(tableRow);
}