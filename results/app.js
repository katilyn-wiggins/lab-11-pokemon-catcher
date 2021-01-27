import { getPokeStats } from '../localStorageUtils.js';
import { renderTableRow } from './renderTableItems.js';

const table = document.querySelector('table');
let stats = getPokeStats();


for (const stat of stats) {

    const tableRow = renderTableRow(stat);

    table.append(tableRow);

}