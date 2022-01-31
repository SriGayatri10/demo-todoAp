/* eslint-disable no-console */
/* eslint-disable max-nested-callbacks */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable max-len */
/* eslint-disable no-magic-numbers */

/* eslint-disable max-statements */
import PlayerManager from './playerManager';
import { range } from '@laufire/utils/collection';

// eslint-disable-next-line max-lines-per-function
describe('PlayerManager ', () => {
	const { randomNumber, randomCharacter, randomValue } = PlayerManager;

	test('RndNumber -  to get a random number', () => {
		const max = Symbol('max');
		const min = Symbol('min');
		const rndNumber = Symbol('rndNumber');
		const expectation = Symbol('expectation');

		jest.spyOn(Math, 'random').mockReturnValue(rndNumber);
		jest.spyOn(Math, 'floor').mockReturnValue(expectation);

		const result = PlayerManager.rndNumber(max, min);

		expect(result).toEqual(expectation);
		expect(Math.floor).toHaveBeenCalledWith(rndNumber);
		expect(Math.random).toHaveBeenCalledWith(min, max);
	});
	test('RandomNumber - to get a random number', () => {
		const min = 2;
		const max = 8;
		const floorResult = 38;
		const floorParameter = 38.5;
		const rndResult = 5.5;

		const expectation = floorResult + min;

		jest.spyOn(Math, 'random').mockReturnValue(rndResult);
		jest.spyOn(Math, 'floor').mockReturnValue(floorResult);

		const result = PlayerManager.randomNumber(min, max);

		expect(Math.random).toHaveBeenCalledWith();
		expect(Math.floor).toHaveBeenCalledWith(floorParameter);
		expect(result).toEqual(expectation);
	});

	// eslint-disable-next-line max-lines-per-function
	test('Randomized test', () => {
		const minValue = 0;
		const maxValue = 9;
		const possibilities = range(minValue, maxValue);
		const iterationCount = 100000;
		const acceptableErrorMargin = 0.05;

		const results = range(0, iterationCount).map(() => randomNumber(minValue, maxValue));

		const counts = possibilities.map((possibility) =>
		 results.filter((result) => result === possibility).length);
		const minCount = Math.min(...counts);
		const maxCount = Math.max(...counts);
		const difference = maxCount - minCount;
		const obtainedErrorMargin = (difference / 2) * possibilities.length / iterationCount;

		expect(obtainedErrorMargin).toBeLessThan(acceptableErrorMargin);
	});

	test('Randomized test for character', () => {
		const possibilities = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

		const iterationCount = 100000;
		const acceptableErrorMargin = 0.1;

		const results = range(0, iterationCount).map(() => randomCharacter());

		const counts = possibilities.map((possibility) =>
		 results.filter((result) => result === possibility).length);
		const minCount = Math.min(...counts);
		const maxCount = Math.max(...counts);
		const difference = maxCount - minCount;
		const obtainedErrorMargin = (difference / 2) * possibilities.length / iterationCount;

		console.log(results);
		console.log(counts);
		console.log(possibilities);

		expect(obtainedErrorMargin).toBeLessThan(acceptableErrorMargin);
	});

	test('RandomValue - to get a randomValue', () => {
		const possibilities = ['a', 'g', '5', '9', '7', '3', 'h'];
		const iterationCount = 100000;
		const acceptableErrorMargin = 0.1;

		const results = range(0, iterationCount).map(() => randomValue(possibilities));

		const counts = possibilities.map((possibility) =>
		 results.filter((result) => result === possibility).length);
		const minCount = Math.min(...counts);
		const maxCount = Math.max(...counts);
		const difference = maxCount - minCount;
		const obtainedErrorMargin = (difference / 2) * possibilities.length / iterationCount;

		expect(obtainedErrorMargin).toBeLessThan(acceptableErrorMargin);
	});
});
