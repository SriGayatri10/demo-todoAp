/* eslint-disable max-len */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */
/* eslint-disable max-statements */
import PlayerManager from './playerManager';
import { range } from '@laufire/utils/collection';

// eslint-disable-next-line max-lines-per-function
describe('PlayerManager ', () => {
	test('RndNumber -  to get a random number', () => {
		const max = Symbol('max');
		const min = Symbol('min');
		const randomNumber = Symbol('randomNumber');
		const expectation = Symbol('expectation');

		jest.spyOn(Math, 'random').mockReturnValue(randomNumber);
		jest.spyOn(Math, 'floor').mockReturnValue(expectation);

		const result = PlayerManager.rndNumber(max, min);

		expect(result).toEqual(expectation);
		expect(Math.floor).toHaveBeenCalledWith(randomNumber);
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
		const arrayOfRandomNumbers = range(0, 100000)
			.map(() => PlayerManager.randomNumber(0, 9));
		const uniqueValues = arrayOfRandomNumbers
			.filter((
				value, index, array
			) => array.indexOf(value) === index);
		const count = (array, number) => array.filter((value) => number === value).length;

		console.log(uniqueValues);
		const dictionary = {};

		uniqueValues.forEach((value) => {
			dictionary[value] = count(arrayOfRandomNumbers, value);
		});

		const valuesOfDictionary = range(0, 9).map((value) => dictionary[value]);
		const minValue = Math.min(...valuesOfDictionary);
		const maxValue = Math.max(...valuesOfDictionary);

		const minNoOfTimes = range(0, 9).filter((value) => dictionary[value] === minValue);
		const maxNoOfTimes = range(0, 9).filter((value) => dictionary[value] === maxValue);

		console.log(
			'number-', ...minNoOfTimes, 'count-', minValue
		);
		console.log(
			'number-', ...maxNoOfTimes, 'count-', maxValue
		);

		console.log(dictionary);
	});
});
