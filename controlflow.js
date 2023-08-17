if (true) {
	console.log("Control file loaded");
}

if (0 && 2) {
	console.log("controlflow false condition");
} else {
	console.log("controlflow true condition");
}

let someValue = "tada!";

if (someValue) {
	console.log("someValue has a message it is: \n" + someValue);
}

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

// Ternaary operator

let ternaryResult = true
	? console.log("true is truthy")
	: console.log("It was falsy");
