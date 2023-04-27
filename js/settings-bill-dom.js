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

// FACTORY FUNCTIONS INSTANCE
const settingsBill = BillWithSettings();

// ADD BUTTON
function settingsButtonClicked() {
	const settingsChecked = document.querySelector("input[name='settings-bill-item']:checked");

	if (settingsChecked) {
		settingsBill.setCheckedValue(settingsChecked.value);

		if (settingsBill.callSelected()) {
			settingsBill.makeCall();
			settingsCallTotal.innerHTML = "R" + settingsBill.getTotalCallCost();
		} else if (settingsBill.smsSelected()) {
			settingsBill.sendSms();
			settingsSmsTotal.innerHTML = "R" + settingsBill.getTotalSmsCost();
		}

		settingsTotal.innerHTML = "R" + settingsBill.getTotalCost();
	} else {
		console.log("Nothing selected");
	}
}
settingsButton.addEventListener('click', settingsButtonClicked);

// RESET BUTTON
function resetSettingsTotals() {
	//
}
settingsReset.addEventListener('click', resetSettingsTotals);

// UPDATE BUTTON
function updateSettingsValues() {
	if (settingsCallCost.value === "") {
		settingsCallCost.value = 2.75;
	}
	settingsBill.setCallCost(Number(settingsCallCost.value));

	if (settingsSmsCost.value === "") {
		settingsSmsCost.value = 0.75;
	}
	settingsBill.setSmsCost(Number(settingsSmsCost.value));

	if (settingsWarningLevel.value === "") {
		settingsWarningLevel.value = 30;
	}
	settingsBill.setWarningLevel(Number(settingsWarningLevel.value));

	if (settingsCriticalLevel.value === "") {
		settingsCriticalLevel.value = 50;
	}
	settingsBill.setCriticalLevel(Number(settingsCriticalLevel.value));
}
settingsUpdate.addEventListener('click', updateSettingsValues);

