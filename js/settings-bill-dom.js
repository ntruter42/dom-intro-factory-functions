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
		console.log("Settings can't be 0");
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
		console.log("Nothing selected");
	}
}
settingsButton.addEventListener('click', settingsButtonClicked);

// RESET BUTTON
function resetSettingsTotals() {
	settingsBill.resetTotals();

	settingsCallTotal.innerHTML = "R" + settingsBill.getTotalCallCost().toFixed(2);
	settingsSmsTotal.innerHTML = "R" + settingsBill.getTotalSmsCost().toFixed(2);
	settingsTotal.innerHTML = "R" + settingsBill.getTotalCost().toFixed(2);
}
settingsReset.addEventListener('click', resetSettingsTotals);

// UPDATE BUTTON
function updateSettingsValues() {
	if (settingsCallCost.value === "" || Number(settingsCallCost.value) <= 0) {
		settingsCallCost.value = settingsBill.getCallCost();
	}
	settingsBill.setCallCost(Number(settingsCallCost.value));

	if (settingsSmsCost.value === "" || Number(settingsSmsCost.value) <= 0) {
		settingsSmsCost.value = settingsBill.getSmsCost();
	}
	settingsBill.setSmsCost(Number(settingsSmsCost.value));

	if (settingsWarningLevel.value === "" || Number(settingsWarningLevel.value) <= 0) {
		settingsWarningLevel.value = settingsBill.getWarningLevel();
	}
	settingsBill.setWarningLevel(Number(settingsWarningLevel.value));

	if (settingsCriticalLevel.value === "" || Number(settingsCriticalLevel.value) <= 0) {
		settingsCriticalLevel.value = settingsBill.getCriticalLevel();
	}
	settingsBill.setCriticalLevel(Number(settingsCriticalLevel.value));
}
settingsUpdate.addEventListener('click', updateSettingsValues);

