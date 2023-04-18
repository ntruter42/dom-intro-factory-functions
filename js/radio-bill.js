// INPUT ELEMENTS
const radioButton = document.querySelector("#radio-button");
const radioReset = document.querySelector("#radio-reset");

// OUTPUT ELEMENTS
const radioCallTotal = document.querySelector("#radio-call-total");
const radioSmsTotal = document.querySelector("#radio-sms-total");
const radioTotal = document.querySelector("#radio-total");

let callRadioTotal = 0;
let smsRadioTotal = 0;

function radioButtonClicked() {
	const radioChecked = document.querySelector("input[name='radio-bill-item']:checked");

	if (radioChecked) {
		if (radioChecked.value === 'call') {
			callRadioTotal += 2.75;
		} else if (radioChecked.value === 'sms') {
			smsRadioTotal += 0.75;
		}
		const total = callRadioTotal + smsRadioTotal;

		radioTotal.classList.remove("warning", "danger");
		if (total > 50) {
			radioTotal.classList.add("danger");
		} else if (total > 30) {
			radioTotal.classList.add("warning");
		}

		radioCallTotal.innerHTML = "R" + callRadioTotal.toFixed(2);
		radioSmsTotal.innerHTML = "R" + smsRadioTotal.toFixed(2);
		radioTotal.innerHTML = "R" + total.toFixed(2);
	} else {
		message.type = "error";
		message.text = "Select a bill type.";
	}

	message.widget = "radio-message";
	displayMessage(message);
}
radioButton.addEventListener('click', radioButtonClicked);

function resetRadioTotals() {
	callRadioTotal = 0;
	smsRadioTotal = 0;
	radioCallTotal.innerHTML = "R0.00";
	radioSmsTotal.innerHTML = "R0.00";
	radioTotal.innerHTML = "R0.00";
	radioTotal.classList.remove("warning", "danger");

	message.type = "success";
	message.text = "Totals have been reset.";
	message.widget = "radio-message";
	displayMessage(message);
}
radioReset.addEventListener('click', resetRadioTotals);
