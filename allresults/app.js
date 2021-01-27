import { makeLabelArray, makeSeenArray, makeCaughtArray, makeHpArray, makeHeightArray, makeSpeedArray, makeAttackArray } from '../results/mungeUtils.js';
import { getAllTimeStats } from '../allTimeStorageUtils.js';
import { playAgain, backToSingle } from '../localStorageUtils.js';

var ctx = document.getElementById('myChart').getContext('2d');
var ctx2 = document.getElementById('myChart2').getContext('2d');
var ctx3 = document.getElementById('myChart3').getContext('2d');
var ctx4 = document.getElementById('myChart4').getContext('2d');
var ctx5 = document.getElementById('myChart5').getContext('2d');
var ctx6 = document.getElementById('myChart6').getContext('2d');


const allTimeStats = getAllTimeStats();

playAgain();
backToSingle();


// eslint-disable-next-line 
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: makeLabelArray(allTimeStats),
        datasets: [{
            label: 'All Times Encountered',
            data: makeSeenArray(allTimeStats),
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
        labels: makeLabelArray(allTimeStats),
        datasets: [{
            label: 'All Times Captured',
            data: makeCaughtArray(allTimeStats),
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
        labels: makeLabelArray(allTimeStats),
        datasets: [{
            label: 'HP of All Pokemon Encountered',
            data: makeHpArray(allTimeStats),
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
        labels: makeLabelArray(allTimeStats),
        datasets: [{
            label: 'Height of All Pokemon Encountered',
            data: makeHeightArray(allTimeStats),
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
        labels: makeLabelArray(allTimeStats),
        datasets: [{
            label: 'Speed of All Pokemon Encountered',
            data: makeSpeedArray(allTimeStats),
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
        labels: makeLabelArray(allTimeStats),
        datasets: [{
            label: 'Attack Ability of All Pokemon Encountered',
            data: makeAttackArray(allTimeStats),
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