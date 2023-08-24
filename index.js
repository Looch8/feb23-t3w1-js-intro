const promptSync = require("prompt-sync");

const promptInstance = promptSync({
	sigint: true, // allows user to exit with ctrl+c
});

let userInput = null;
let userEnteredNumber = false;

// Some comment here
// Nodemon will restart the server when you save

do {
	userInput = promptInstance("What is the coolest number in the universe? ");

	let userInputAsNumber = Number(userInput);

	if (userInputAsNumber === 42) {
		console.log("You're right!");
		userEnteredNumber = true;
	} else {
		console.log("You're wrong!");
	}
} while (!userEnteredNumber);

// helloworld(userInput);

// let { messagesToShare } = require("./messageList.js");

// function helloworld(someMessageToSay) {
// 	console.log(someMessageToSay);
// }

// helloworld("Hello World");

// for (const message of messagesToShare) {
// 	helloworld(message);
// }
