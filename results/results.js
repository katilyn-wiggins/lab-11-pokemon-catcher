import { makeLabelArray, makeSeenArray, makeCaughtArray, makeHpArray, makeHeightArray, makeSpeedArray, makeAttackArray } from './mungeUtils.js';
import { getPokeStats, playAgain } from '../localStorageUtils.js';

var ctx = document.getElementById('myChart').getContext('2d');
var ctx2 = document.getElementById('myChart2').getContext('2d');
var ctx3 = document.getElementById('myChart3').getContext('2d');
var ctx4 = document.getElementById('myChart4').getContext('2d');
var ctx5 = document.getElementById('myChart5').getContext('2d');
var ctx6 = document.getElementById('myChart6').getContext('2d');


const pokeStats = getPokeStats();

playAgain();

// eslint-disable-next-line 
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: makeLabelArray(pokeStats),
        datasets: [{
            label: 'Times Encountered',
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
            label: 'Times Captured',
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


//eslint-disable-next-line
var myThirdChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: makeLabelArray(pokeStats),
        datasets: [{
            label: 'HP of Pokemon Encountered',
            data: makeHpArray(pokeStats),
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
var myFourthChart = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: makeLabelArray(pokeStats),
        datasets: [{
            label: 'Height of Pokemon Encountered',
            data: makeHeightArray(pokeStats),
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
var myFifthChart = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: makeLabelArray(pokeStats),
        datasets: [{
            label: 'Speed of Pokemon Encountered',
            data: makeSpeedArray(pokeStats),
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
var mySixthChart = new Chart(ctx6, {
    type: 'bar',
    data: {
        labels: makeLabelArray(pokeStats),
        datasets: [{
            label: 'Attack Ability of Pokemon Encountered',
            data: makeAttackArray(pokeStats),
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