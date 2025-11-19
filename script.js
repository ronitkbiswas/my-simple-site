const btn = document.getElementById('btn');
const title = document.getElementById('title');

btn.addEventListener('click', () => {
	title.textContent = 'clicked';
	alert('good');
});

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const lastNumber = numbers[numbers.length - 1];

console.log("last number was: ", lastNumber);
