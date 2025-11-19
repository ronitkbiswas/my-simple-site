/* const btn = document.getElementById('btn');
const title = document.getElementById('title');

btn.addEventListener('click', () => {
	title.textContent = 'clicked';
	alert('good');
});
*/
const userName = String(prompt("Your name please: "));
console.log("User: ", userName);

// just trying newly learn js

const numbers = [1, 2, 3];
let m = 0;
do {
	console.log(numbers[m]);
	m++;
} while (m < numbers.length);

const ronitkbiswas = {
	fullName: "Ronit Kumar Biswas",
	age: 30,
	city: "Kolkata",
	friends: ['sujoy', 'mihir', 'supratik'],
	calculateBirthYear: function () {
		return 2025 - this.age;
	},
	showAllFriends: function () {
		return this.friends;
	}
};
console.log("birth year: ", ronitkbiswas.calculateBirthYear());
console.log("friends: ", ronitkbiswas.showAllFriends());