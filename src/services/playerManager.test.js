import PlayerManager from './playerManager';

test('PlayerManager - to get a random number', () => {
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
