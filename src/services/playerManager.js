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

const countOfFive = () => {
	const arrayOfFive = [];
	const array = randomizedNumber();

	for(let i = 0; i < 10000; i++) {
		if(array[i] === 5)
			arrayOfFive.push(array[i]);
	}

	return arrayOfFive;
};

const PlayerManager = {
	rndNumber,
	randomNumber,
	randomizedNumber,
	countOfFive,
};

export default PlayerManager;
