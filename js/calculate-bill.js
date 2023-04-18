/* KNOWN BUGS
1. clicking too quickly after message display
2. input: ",call"
3. input: "call,"
*/

// INPUT ELEMENTS
const calculateString = document.querySelector("#calculate-string");
const calculateButton = document.querySelector("#calculate-button");
const calculateReset = document.querySelector("#calculate-reset");

// OUTPUT ELEMENTS
const calculateTotal = document.querySelector("#calculate-total");

function calculateButtonClicked() {
	const calculateItems = calculateString.value.split(",");
	const invalidEntries = [];

	let total = 0;
	for (let item of calculateItems) {
		item = item.trim().toLowerCase();
		if (item === "call") {
			total += 2.75;
		} else if (item === "sms") {
			total += 0.75;
		} else if (calculateItems.length === 1 && item === "") {
			message.type = "error";
			message.text = "String must contain at least one entry";
		} else {
			message.type = "warning";
			message.text = "Invalid entries found - ";
			invalidEntries.push(item);
		}
	}
	message.text += invalidEntries;

	calculateTotal.classList.remove("warning", "danger");
	if (total > 30) {
		calculateTotal.classList.add("danger");
	} else if (total > 20) {
		calculateTotal.classList.add("warning");
	}

	calculateTotal.innerHTML = "R" + total.toFixed(2);
	calculateString.focus();

	if (message.type !== null) {
		message.widget = "calculate-message";
		displayMessage(message);
	}
}
calculateButton.addEventListener('click', calculateButtonClicked);

function resetCalculateTotals() {
	total = 0;
	calculateTotal.innerHTML = "R0.00";
	calculateTotal.classList.remove("warning", "danger");
	calculateString.focus();

	message.type = "success";
	message.text = "Totals have been reset.";
	message.widget = "calculate-message";
	displayMessage(message);
}
calculateReset.addEventListener('click', resetCalculateTotals);

calculateString.addEventListener('input', () => {
	calculateString.style.height = 'auto';
	calculateString.style.height = (calculateString.scrollHeight) + 'px';
});
