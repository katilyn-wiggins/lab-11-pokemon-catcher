// IMPORT MODULES under test here:
import { makeCaughtArray, makeSeenArray, makeLabelArray } from '../results/mungeUtils.js';

const test = QUnit.test;

const pokeStats = [
    { _id: '5cef3501ef6005a77cd4fd1a', seen: 2, caught: 1 },
    { _id: '5cef3501ef6005a77cd4fd24', seen: 4, caught: 1 },
    { _id: '5cef3501ef6005a77cd4fd27', seen: 4, caught: 3 },
    { _id: '5cef3501ef6005a77cd4fd21', seen: 3, caught: 1 },
    { _id: '5cef3501ef6005a77cd4fd1b', seen: 4, caught: 2 },
    { _id: '5cef3501ef6005a77cd4fd20', seen: 3, caught: 0 },
    { _id: '5cef3501ef6005a77cd4fd17', seen: 2, caught: 0 },
    { _id: '5cef3501ef6005a77cd4fd19', seen: 4, caught: 1 },
    { _id: '5cef3501ef6005a77cd4fd25', seen: 2, caught: 0 },
    { _id: '5cef3501ef6005a77cd4fd29', seen: 1, caught: 0 },
    { _id: '5cef3501ef6005a77cd4fd1c', seen: 2, caught: 2 },
    { _id: '5cef3501ef6005a77cd4fd26', seen: 1, caught: 0 },
    { _id: '5cef3501ef6005a77cd4fd23', seen: 1, caught: 0 },
];


const statsWithName = [
    { name: 'beedrill', _id: '5cef3501ef6005a77cd4fd25', seen: 4, caught: 0 },
    { name: 'ivysaur', _id: '5cef3501ef6005a77cd4fd19', seen: 1, caught: 1 },
    { name: 'blastoise', _id: '5cef3501ef6005a77cd4fd21', seen: 2, caught: 0 },
    { name: 'caterpie', _id: '5cef3501ef6005a77cd4fd23', seen: 3, caught: 1 },
];


test('makeLabelArray should take in an array of objects and return an array of numbers (or Pokemon seen)', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const expected = ['beedrill', 'ivysaur', 'blastoise', 'caterpie'];

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeLabelArray(statsWithName);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('makeSeenArray should take in an array of objects and return an array of numbers (or Pokemon seen)', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const expected = [2, 4, 4, 3, 4, 3, 2, 4, 2, 1, 2, 1, 1];

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeSeenArray(pokeStats);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});



test('makeCaughtArray should take in an array of objects and return an array of numbers (or items caught)', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const expected = [1, 1, 3, 1, 2, 0, 0, 1, 0, 0, 2, 0, 0];

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeCaughtArray(pokeStats);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
