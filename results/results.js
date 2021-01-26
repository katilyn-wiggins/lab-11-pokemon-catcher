import { makeLabelArray, makeSeenArray, makeCaughtArray } from './mungeUtils.js';
import { getPokeStats } from '../localStorageUtils.js';

var ctx = document.getElementById('myChart').getContext('2d');
var ctx2 = document.getElementById('myChart2').getContext('2d');



const pokeStats = getPokeStats();

// eslint-disable-next-line 
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: makeLabelArray(pokeStats),
        datasets: [{
            label: 'times encountered',
            data: makeSeenArray(pokeStats),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//eslint-disable-next-line
var mySecondChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: makeLabelArray(pokeStats),
        datasets: [{
            label: 'times captured',
            data: makeCaughtArray(pokeStats),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});