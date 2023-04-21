let color = "black";
let click = true;

function resetBoard() {
	const container = document.querySelector("#container");
	let divs = container.querySelectorAll("div");
	divs.forEach((div) => (div.style.backgroundColor = "white"));
}

function populateBoard(size) {
	const container = document.querySelector("#container");
	let divs = container.querySelectorAll("div");
	divs.forEach((div) => div.remove());
	container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	const amount = size * size;
	for (let i = 0; i < amount; i++) {
		let div = document.createElement("div");
		div.addEventListener("mouseover", colorDiv);
		div.classList.add("child-div");
		div.style.backgroundColor = "white";
		container.appendChild(div);
	}
}

populateBoard(8);

function changeSize(size) {
	if (size > 1 && size <= 100) {
		populateBoard(size);
	} else {
		console.error("Please select a value between 2 and 100");
	}
}

function colorDiv() {
	if (click) {
		if (color === "random") {
			const randomR = Math.floor(Math.random() * 256);
			const randomG = Math.floor(Math.random() * 256);
			const randomB = Math.floor(Math.random() * 256);
			this.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
		} else {
			this.style.backgroundColor = color;
		}
	}
}

function changeColor(choice) {
	color = choice;
}

document.querySelector("body").addEventListener("click", (e) => {
	let mode = document.querySelector(".mode");
	if (e.target.tagName != "BUTTON") {
		click = !click;
		if (click) {
			mode.textContent = "Coloring";
			mode.style.color = "blue";
		} else {
			mode.textContent = "Not Coloring";
			mode.style.color = "white";
		}
	}
});
