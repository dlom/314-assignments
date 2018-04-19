["one", "two", "three", "four", "five"].forEach(i => {
	const b = document.getElementById(`scroll-${i}`);
	b.addEventListener("click", _ => {
		document.getElementById(i).scrollIntoView();
	});
});

["blue", "green"].forEach(color => {
	const b = document.getElementById(`1${color}`);
	b.addEventListener("click", _ => {
		const one = document.getElementById("one");
		one.classList.forEach(c => {
			one.classList.remove(c);
		});
		one.classList.add(`${color}-bg`);
	});
});

document.getElementById("2toggle").addEventListener("click", e => {
	const two = document.getElementById("two");
	const isPink = two.classList.contains("pink-bg");
	two.classList[isPink ? "remove" : "add"]("pink-bg");
	two.classList[isPink ? "add" : "remove"]("orange-bg");
	e.target.innerHTML = `Click for ${isPink ? "pink" : "orange"}!`;
});

document.getElementById("3add").addEventListener("click", _ => {
	const list = document.getElementById("3list");
	const input = document.getElementById("3input");
	const newLi = document.createElement("li");
	newLi.appendChild(document.createTextNode(input.value));
	list.appendChild(newLi);
	input.value = "";
});

const fourList = document.getElementById("4list");
for (let i = 0; i < fourList.children.length; i++) {
	const el = fourList.children[i];
	el.addEventListener("click", _ => {
		el.remove();
	});
}

const fiveList = document.getElementById("5list");
for (let i = 0; i < fiveList.children.length; i++) {
	const el = fiveList.children[i];
	el.addEventListener("click", _ => {
		for (let j = 0; j < fiveList.children.length; j++) {
			fiveList.children[j].classList.remove("highlighted");
		}
		el.classList.add("highlighted");
	});
}
