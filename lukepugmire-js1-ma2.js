//Question 1
const myFunctionExpression = function() {
	console.log("Luke Pugmire");
};

myFunctionExpression();

//Question 2
const button = document.querySelector(".btn");
const clickListner = function() {
	console.log("I was clicked");
};
button.addEventListener("click", clickListner);

//Question 3
const textInput = document.querySelector("#firstName");

function keydownListner(event) {
	console.log("value: ", event.target.value);
}
textInput.addEventListener("keydown", keydownListner);

//Question 4
const dogs = document.querySelector("button");

const dogButton = function(hoverEvent) {
	hoverEvent.target.classList.add("hover");
};
dogs.addEventListener("mouseover", dogButton);

//Question 5
const dogData = document.querySelector("[data-animal='dog']");

function hoverRemovalMouseout(mousingOut) {
	mousingOut.target.classList.remove("hover");
}
dogData.addEventListener("mouseout", hoverRemovalMouseout);

//Question 6
const listListener = document.querySelectorAll("li");

function callListData(listEvent) {
	console.log(listEvent.target);
}

for (let i = 0; i < listListener.length; i++) {
	listListener[i].addEventListener("mouseover", callListData);
}

//Question 7
const animal = "cow";

switch (animal) {
	case "cat":
		console.log("Meow");
		break;
	case "cow":
		console.log("Moo");
		break;
	case "bird":
		console.log("Tweet");
		break;
	default:
		console.log("Harrumph");
}

//Question 8
const sheep = ["Malcolm", "Anders", "Marie"];
function forEachSheep(sheep) {
	console.log(sheep);
}
sheep.forEach(forEachSheep);

//Question 9
function timer() {
	console.log("Hello");

	if (counter === 5) {
		clearInterval(timerId);
	}
	counter++;
}
let counter = 0;
const timerId = setInterval(timer, 500);

//Question 10
const newDivText = document.querySelector(".container");

function newDiv() {
	newDivText.innerText = "Text updated";
}

setTimeout(newDiv, 2000);
