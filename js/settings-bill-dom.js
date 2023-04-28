// SETTINGS ELEMENTS
const settingsCallCost = document.querySelector("#settings-call-cost");
const settingsSmsCost = document.querySelector("#settings-sms-cost");
const settingsWarningLevel = document.querySelector("#settings-warning-level");
const settingsCriticalLevel = document.querySelector("#settings-critical-level");

// INPUT ELEMENTS
const settingsButton = document.querySelector("#settings-button");
const settingsReset = document.querySelector("#settings-reset");
const settingsUpdate = document.querySelector("#settings-update");

// OUTPUT ELEMENTS
const settingsCallTotal = document.querySelector("#settings-call-total");
const settingsSmsTotal = document.querySelector("#settings-sms-total");
const settingsTotal = document.querySelector("#settings-total");

// SETTINGS INSTANCE
const settingsBill = BillWithSettings();

// ADD BUTTON
function settingsButtonClicked() {
	const settingsChecked = document.querySelector("input[name='settings-bill-item']:checked");

	if (settingsBill.getCallCost() <= 0 ||
		settingsBill.getSmsCost() <= 0 ||
		settingsBill.getWarningLevel() <= 0 ||
		settingsBill.getCriticalLevel() <= 0) {
		alert("Settings are invalid");
		return;
	} else if (settingsChecked) {
		settingsBill.setCheckedValue(settingsChecked.value);

		if (settingsBill.callChecked()) {
			settingsBill.makeCall();
		} else if (settingsBill.smsChecked()) {
			settingsBill.sendSms();
		}
		console.log(settingsBill.getTotalCost());

		settingsCallTotal.innerHTML = "R" + settingsBill.getTotalCallCost().toFixed(2);
		settingsSmsTotal.innerHTML = "R" + settingsBill.getTotalSmsCost().toFixed(2);
		settingsTotal.innerHTML = "R" + settingsBill.getTotalCost().toFixed(2);
	} else {
		alert("Nothing selected");
		return;
	}

	settingsTotal.classList.remove("warning", "critical", "normal");
	settingsTotal.classList.add(settingsBill.totalClassName());
}
settingsButton.addEventListener('click', settingsButtonClicked);

// RESET BUTTON
function resetSettingsTotals() {
	settingsBill.resetTotals();

	settingsCallTotal.innerHTML = "R" + settingsBill.getTotalCallCost().toFixed(2);
	settingsSmsTotal.innerHTML = "R" + settingsBill.getTotalSmsCost().toFixed(2);
	settingsTotal.innerHTML = "R" + settingsBill.getTotalCost().toFixed(2);

	settingsTotal.classList.remove("warning", "critical", "normal");
}
settingsReset.addEventListener('click', resetSettingsTotals);

// UPDATE BUTTON
function updateSettingsValues() {
	let errors = [];

	if (settingsCallCost.value === "" || Number(settingsCallCost.value) <= 0) {
		// settingsCallCost.value = settingsBill.getCallCost();
		errors.push("call cost");
	}
	settingsBill.setCallCost(Number(settingsCallCost.value));

	if (settingsSmsCost.value === "" || Number(settingsSmsCost.value) <= 0) {
		// settingsSmsCost.value = settingsBill.getSmsCost();
		errors.push("sms cost");
	}
	settingsBill.setSmsCost(Number(settingsSmsCost.value));

	if (settingsWarningLevel.value === "" || Number(settingsWarningLevel.value) <= 0) {
		// settingsWarningLevel.value = settingsBill.getWarningLevel();
		errors.push("warning level");
	}
	settingsBill.setWarningLevel(Number(settingsWarningLevel.value));

	if (settingsCriticalLevel.value === "" || Number(settingsCriticalLevel.value) <= 0) {
		// settingsCriticalLevel.value = settingsBill.getCriticalLevel();
		errors.push("critical level");
	}
	settingsBill.setCriticalLevel(Number(settingsCriticalLevel.value));

	if (errors.length > 0) {
		let errMsg = errors[0];
		for (let i = 1; i < errors.length; i++) {
			errMsg += ', ' + errors[i];
		}
		errMsg += " - can't be empty, zero or negative";
		alert(errMsg.charAt(0).toUpperCase() + errMsg.slice(1));
		return;
	}

	settingsTotal.classList.remove("warning", "critical", "normal");
	settingsTotal.classList.add(settingsBill.totalClassName());
}
settingsUpdate.addEventListener('click', updateSettingsValues);

