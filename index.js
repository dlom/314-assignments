function confirm1() {
	const input = confirm("Are you sure?");
	if (input) {
		alert("yes they were");
	} else {
		alert("no they weren't");
	}
};

function confirm2() {
	const input = confirm("Are you REALLY sure?");
	alert(input ? "yes they really were" : "no they really weren't");
};

confirm1();
confirm2();

function askForNumber() {
	const input = prompt("Enter a number");
	const num = parseInt(input, 10);
	if (input === null) {
		alert("You hit cancel!");
	} else if (input.length === 0) {
		alert("You didn't enter anything!");
	} else if (isNaN(num)) {
		alert("That wasn't a number!");
	} else {
		alert("You entered: " + num);
	}
};

askForNumber();

function personFactory(name, color) {
	return {
		name: name,
		color: color,
		greet: function() {
			alert("My name is " + name + " and my favorite color is " + color);
		}
	};
};

function copier(input, key, value) {
	const copy = Object.assign({}, input);
	if (key != null) {
		copy[key] = value;
	}
	return copy;
};

const person1 = personFactory("Owen Wilson", "blue");
const person2 = copier(person1, "wow", "Wow!");
console.log("Person 1:", person1);
console.log("Person 2:", person2);

person1.greet();
person2.greet();

function concatenate1(str1, str2, str3) {
	if (str3 == null) {
		str3 = "tail";
	}
	// :o
	return `${str1}${str2}${str3}`;
};

const concatenate2 = function(str1, str2, str3) {
	if (str3 == null) {
		str3 = "tail";
	}
	// :o
	return `${str1}${str2}${str3}`;
};

const concatenate3 = (s1, s2, s3) => `${s1}${s2}${s3 == null ? "tail" : s3}`;
