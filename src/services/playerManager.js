/* eslint-disable no-magic-numbers */
// import { range } from '@laufire/utils/collection';
// const ranges = range(0, three);
const rndNumber = (max, min) =>
	Math.floor(Math.random(min, max));

const randomNumber = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

const randomizedNumber = () => {
	const array = [];

	for(let i = 0; i < 10000; i++)
		array.push(randomNumber(0, 100));
	return array;
};
const randomCharacter = () => {
	const number = randomNumber(65, 90);
	const character = String.fromCharCode(number);

	return character;
};

const character = (number) => String.fromCharCode(number);

const PlayerManager = {
	rndNumber,
	randomNumber,
	randomizedNumber,
	character,
	randomCharacter,
};

export default PlayerManager;
