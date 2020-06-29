function buttonListener(event) {
	let output = document.querySelector("textarea");
	try {
		if (event.srcElement.value === "=") {
			if (output.value !== "") {
				output.value = eval(output.value);
			}
		} else if (event.srcElement.value === "Clear") {
			output.value = "";
		} else {
			if (output.value !== "ERROR") {
				output.value += event.srcElement.value;
			}
		}
	} catch (error) {
		console.log(error);
		output.value = "ERROR";
	}
}

function main() {	
	const BUTTONS = document.querySelectorAll("input");
	BUTTONS.forEach((button) => button.addEventListener("click", buttonListener));
}

window.onload = main;