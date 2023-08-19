// /**
//  * This is a function
//  * @param {*} someArgument - Some data given to the function
//  */

// function someFunction(someArgument) {
// 	console.log("This was given to the function:" + someArgument);
// }

// someFunction([1, 2, "banana"]);

//////// CONTROL FLOW ///////
// if (true) {
// 	console.log("Control file loaded");
// }

// if (0 && 2) {
// 	console.log("controlflow false condition");
// } else {
// 	console.log("controlflow true condition");
// }

// let someValue = "tada!";

// if (someValue) {
// 	console.log("someValue has a message it is: \n" + someValue);
// }

// let choice = prompt("What is your favourite colour?");

// switch (choice) {
// 	case "blue":
// 		alert("Blue is a nice colour");

// 		break;
// 	case "green":
// 		alert("Greens not very creative");
// 	case "red":
// 		alert("Thats a speedy colour!");
// 		break;

// 	default:
// 		alert("I don't know that colour");
// 		break;
// }

// // Ternaary operator

// let ternaryResult = true
// 	? console.log("true is truthy")
// 	: console.log("It was falsy");

// /////// WHILE LOOP ///////
// let pokemonTeam = [
// 	"Pikachu",
// 	"Charmander",
// 	"Bulbasaur",
// 	"Squirtle",
// 	"Eevee",
// 	"Mewtwo",
// 	"Mew",
// 	"Snorlax",
// 	"Dragonite",
// 	"Magikarp",
// 	"Jigglypuff",
// 	"Psyduck",
// ];

// // For loops
// for (let i = 0; i < pokemonTeam.length; i++) {
// 	console.log(pokemonTeam[i]);
// }

// //for of
// let counter = 2;
// for (const ofPokemon of pokemonTeam) {
// 	console.log(counter + " " + ofPokemon);
// 	counter++;
// }

// // Logs all pokmon in the array
// for (let pokemon of pokemonTeam) {
// 	console.log(pokemon);
// }
// // while

// // Do while

// do {
// 	console.log("Do while message appears at least once");
// } while (false);

// // For in

// let favouritePokemon = {
// 	name: "Pikachu",
// 	type: "Electric",
// };

// for (let property in favouritePokemon) {
// 	console.log(`${property}: ${favouritePokemon[property]}`);
// }

// //for of
// for (let property of Object.entries(favouritePokemon)) {
// 	console.log(property);
// }

///////// FUNCTIONS /////////

// // traditional
// function greeter() {
// 	console.log("standard message");
// }
// /**
//  *
//  * @param {string} message Required message to display in the console
//  */
// function greeterWithMessage(message) {
// 	console.log("message is: " + message);
// }
// /**
//  *
//  * @param {string} message optional message to display in the console
//  */
// function greeterWithDefault(message = "default message") {
// 	console.log("customMessage is: " + message);
// }

// greeterWithDefault();

// greeterWithDefault("custom message");

// // es6 style
// /**
//  *
//  * @param {string} message Optional. some messafe to display in the console
//  */
// let greeterWithDefaultES6 = (message = "default message") => {
// 	console.log("customMessage is: " + message);
// };

// //Functions executed
// let storedCustomMessage = greeterWithDefaultES6();

// // IIFEs

// (() => {
// 	console.log("custom message from IIFE: " + storedCustomMessage);
// })();

///////// CALLBACKS /////////

// let someFunctionWithCallback = (someMessage, someCallback) => {
// 	someCallback(someMessage);
// };

// someFunctionWithCallback("Hello", console.log);

// let someForm = (inputBox, callback) => {
// 	callback(inputBox);
// };

// someForm(emailBox, validateEmail);

// // Block and scope
// let counter = 0;
// for (let index = 0; index <= 10; index++) {
// 	let counter = 5;
// 	counter++;
// }

///////// CLOSURES /////////

// function gameData() {
// 	let highScore = 0;

// 	function setHighScore(newNumber) {
// 		highScore = newNumber;
// 	}

// 	setHighScore(99):
// 	return highScore;
// }

///////// FUNCTIONS IN OBJECTS /////////
let pikachu = {
	name: "Pikachu",
	type: "Electric",
	attack: function () {
		console.log("Pikachu used thunderbolt!");
	},
	ability: () => {
		console.log("Some ability was triggered!! Woohoo!");
	},
	hobbies: {
		cycling: {
			skillLevel: "high",
		},
	},
};

let pikachuAbility = pikachu.ability;
pikachu.attack();
pikachuAbility.ability();
let pickahuCyclingSkillLevel = pikachu.hobbies.cycling.skillLevel;
let {
	ability,
	attack,
	name,
	type: {
		cycling: { skillLevel },
	},
} = pikachu;

console.log(
	"Pickachuus cycling skill with dot notation: " + pickahuCyclingSkillLevel
);
