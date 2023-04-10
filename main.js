//UKOL 1
let clock = 0;
while (clock < 24) {
	let minutes = 0
	while (minutes < 60) {
		console.log(`${clock}:${minutes.toString().padStart(2, '0')}`)
		minutes++
	}
	clock++
};

//UKOL2
const heading = document.querySelector('h1');
const stones = document.querySelectorAll('.kamen');

const playToStone = (stone) => {
	const tone = stone.textContent
	heading.textContent = tone

	const sound = new Audio(`tony/${tone}.mp3`)
	sound.play()
};

const onTouch = (event) => {
	playToStone(event.target)
};

for (let i = 0; i < stones.length; i++) {
	stones[i].addEventListener('click', onTouch)
};


const keyboard = (event) => {
	const { code } = event
	if (code.startsWith('Digit')) {
		const number = parseInt(code.substring(5))
		if (number >= 1 && number <= stones.length) {
			playToStone(stones[number - 1])
		}
	}
};

document.addEventListener('keydown', keyboard);

//UKOL3
const roll = () => {
	return Math.ceil(Math.random() * 6)
};

let counter = 1;
let rolledNumber = roll();
while (rolledNumber !== 6) {
	console.log(`Hodil jsi: ${rolledNumber}`)
	rolledNumber = roll()
	counter += 1
};

console.log(`Šestka se hodila na ${counter}. pokus`);

//UKOL 4
//Vypište na výstup všechna čísla.
numbers.forEach((number) => {
	console.log(number)
}); 

//Vypište na výstup druhé mocniny všech čísel.
numbers.forEach((number) => {
	console.log(number * number)
});

//Vypište na výstup pouze záporná čísla.
numbers.forEach((number) => {
	if (number < 0) {
		console.log(number)
	}
});

//Vypište na výstup absolutní hodnotu všech čísel.
numbers.forEach((number) => {
	if (number < 0) {
		console.log(-1 * number)
	} else {
		console.log(number)
	}
});

numbers.forEach((number) => {
	console.log(Math.abs(number))
});

//Vypište na výstup pouze sudá čísla.
numbers.forEach((number) => {
	if (number % 2 === 0) {
		console.log(number)
	}
});

//Vypište na výstup pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
numbers.forEach((number) => {
	if (Math.abs(number) % 3 === 0) {
		console.log(number)
	}
});

//Vypište na výstup jak daleko je každé číslo v seznamu od čísla 5.
numbers.forEach((number) => {
	console.log(numbers.indexOf(5) - numbers.indexOf(number))
});

//Vypište na výstup druhé mocnicny vzdáleností všech čísel od čísla 5.
numbers.forEach((number) => {
	const distance = numbers.indexOf(5) - numbers.indexOf(number)
	console.log(distance * distance)
});

//Spočítejte, kolik je v seznamu záporných čísel.
let negativeCount = 0;
numbers.forEach((number) => {
	if (number < 0) {
		negativeCount++
	}
});

console.log('Počet záporných:', negativeCount);

//Spočítejte součet všech čísel v poli.
let evenSum = 0;
numbers.forEach((number) => {
	if (number % 2 === 0) {
		evenSum += number
	}
});

console.log('Součet sudých:', evenSum);

//Spočítejte průměr všech čísel v poli.
let sum = 0;
numbers.forEach((number) => {
	sum += number
});

console.log('Průměr všech:', sum / numbers.length);

//Spočítejte součet všech kladných čísel v poli.
let positiveSum = 0;
numbers.forEach((number) => {
	if (number > 0) {
		positiveSum += number
	}
});

console.log('Průměr všech:', positiveSum);