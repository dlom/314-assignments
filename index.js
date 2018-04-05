// 1. Char Swap
const charSwap = str => {
	if (typeof str !== "string") {
		throw new TypeError("not a string");
	}
	if (str.length < 1) {
		throw new Error("string must have a length of at least 1");
	}
	return `${str[str.length - 1]}${str.slice(1, -1)}${str[0]}`;
};
// alert(charSwap(prompt("Enter a string (at least 1 character)")));

// 2. Hi String
const hiString = str => {
	if (typeof str !== "string") {
		throw new TypeError("not a string");
	}
	if (str.length < 1) {
		throw new Error("string must have a length of at least 1");
	}
	if (str.toLowerCase().startsWith("hi ")) {
		return str;
	}
	return `Hi ${str}`;
};
// alert(hiString(prompt("Enter a string (at least 1 character)")));

// 3. Three Chars to Front
const threeCharsToFront = str => {
	if (typeof str !== "string") {
		throw new TypeError("not a string");
	}
	if (str.length < 3) {
		throw new Error("string must have a length of at least 3");
	}
	return `${str.slice(-3)}${str}`;
};
// alert(threeCharsToFront(prompt("Enter a string (at least 3 characters)")));

// 4. Strings to Sentence
const stringsToSentence = str => {
	if (typeof str !== "string") {
		throw new TypeError("not a string");
	}
	const array = str.split(",").map(x => x.trim());
	if (array.length != 3) {
		throw new Error("array must have exactly 3 items");
	}
	return `My favorite color is ${array[0]}, ${array[1]} are awesome, and I love ${array[2]}!`;
};
// alert(stringsToSentence(prompt("Enter 3 items seperated by commas")));

// 5. Upper or Lower
const upperOrLower = str => {
	if (typeof str !== "string") {
		throw new TypeError("not a string");
	}
	if (str.length < 3) {
		return str.toUpperCase();
	}
	return `${str.slice(0, 3).toLowerCase()}${str.slice(3)}`;
};
// alert(upperOrLower(prompt("Enter a string")));

// 6. Integer Swap
const integerSwap = str => {
	if (typeof str !== "string") {
		throw new TypeError("not a string");
	}
	const array = str.split(",").map(x => x.trim());
	if (array.length < 1) {
		throw new Error("array must have more than 0 elements");
	}
	const intArray = array.map(x => parseInt(x, 10));
	intArray.forEach(x => {
		if (isNaN(x)) throw new TypeError("not a valid int!");
	});
	const temp = array[0];
	array[0] = array[array.length - 1];
	array[array.length - 1] = temp;
	return array.join(", ");
};
// alert(integerSwap(prompt("Enter a comma seperated list of numbers")));

// 7. Longest String
const longestString = str => {
	if (typeof str !== "string") {
		throw new TypeError("not a string");
	}
	const array = str.split(",").map(x => x.trim());
	if (array.length < 1) {
		throw new Error("array must have more than 0 elements");
	}
	return array.reduce((l, r) => l.length > r.length ? l : r);
};
// alert(longestString(prompt("Enter a comma seperated list of strings")));

// 8. Largest Even Number
const largestEvenNumber = str => {
	if (typeof str !== "string") {
		throw new TypeError("not a string");
	}
	const array = str.split(",").map(x => x.trim());
	if (array.length < 1) {
		throw new Error("array must have more than 0 elements");
	}
	const intArray = array.map(x => parseInt(x, 10));
	intArray.forEach(x => {
		if (isNaN(x)) throw new TypeError("not a valid int!");
	});
	return intArray.reduce((l, r) => (l > r && l % 2 === 0) ? l : r, 0);
};
// alert(largestEvenNumber(prompt("Enter a comma seperated list of numbers")));

// 9. Current Day Time
const currentDayTime = () => {
	const days = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const day = days[now.getDay()];
	return `Today is ${day}day. It is ${hours % 12}:${minutes}${hours >= 12 ? "PM" : "AM"}.`;
};
// alert(currentDayTime());

// 10. Unlimited Function
const unlimitedFunction = (...args) => {
	return args.join(", ");
};
// alert(unlimitedFunction(1, 2, 3, "a", "b", "c"));
