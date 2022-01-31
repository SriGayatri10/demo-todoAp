/* eslint-disable no-magic-numbers */
// import { range } from '@laufire/utils/collection';
// const ranges = range(0, three);
const rndNumber = (max, min) =>
	Math.floor(Math.random(min, max));

const randomNumber = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

const randomCharacter = () => {
	const number = randomNumber(65, 90);
	const character = String.fromCharCode(number);

	return character;
};

const randomValue = (array) => array[randomNumber(0, array.length - 1)];

const PlayerManager = {
	rndNumber,
	randomNumber,
	randomCharacter,
	randomValue,
};

export default PlayerManager;
