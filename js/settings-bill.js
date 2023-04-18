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

// TOTALS VARIABLES
let callSettingsTotal = 0;
let smsSettingsTotal = 0;
let totalSettingsValue = 0;

// SETTINGS VARIABLES
let callSettingsCost = 2.75;
let smsSettingsCost = 0.75;
let warningLevel = 30;
let criticalLevel = 50;

// SET DEFAULT VALUES
updateSettingsValues(true);

// ADD BUTTON
function settingsButtonClicked() {
	if (totalSettingsValue <= criticalLevel) {
		const settingsChecked = document.querySelector("input[name='settings-bill-item']:checked");

		if (settingsChecked) {
			if (settingsChecked.value === 'call') {
				callSettingsTotal += callSettingsCost;
			} else if (settingsChecked.value === 'sms') {
				smsSettingsTotal += smsSettingsCost;
			}
			totalSettingsValue = callSettingsTotal + smsSettingsTotal;

			settingsTotal.classList.remove("warning", "danger");
			if (totalSettingsValue > criticalLevel) {
				settingsTotal.classList.add("danger");
			} else if (totalSettingsValue > warningLevel) {
				settingsTotal.classList.add("warning");
			}

			settingsCallTotal.innerHTML = "R" + callSettingsTotal.toFixed(2);
			settingsSmsTotal.innerHTML = "R" + smsSettingsTotal.toFixed(2);
			settingsTotal.innerHTML = "R" + totalSettingsValue.toFixed(2);
		} else {
			message.type = "error";
			message.text = "Select a bill type.";
		}
	}

	message.widget = "settings-message";
	displayMessage(message);
}
settingsButton.addEventListener('click', settingsButtonClicked);

// RESET BUTTON
function resetSettingsTotals() {
	callSettingsTotal = 0;
	smsSettingsTotal = 0;
	totalSettingsValue = 0;
	settingsCallTotal.innerHTML = "R0.00";
	settingsSmsTotal.innerHTML = "R0.00";
	settingsTotal.innerHTML = "R0.00";
	settingsTotal.classList.remove("warning", "danger");

	message.type = "success";
	message.text = "Totals have been reset.";
	message.widget = "settings-message";
	displayMessage(message);
}
settingsReset.addEventListener('click', resetSettingsTotals);

//
//
// TODO: FIX THE UPDATE BUTTON
// VALUES NOT CHANGING ON CLICK
//
//

// UPDATE BUTTON
function updateSettingsValues(init = false) {
	const revertedSettings = [];

	if (init === true) {
		settingsCallCost.value = callSettingsCost;
		settingsSmsCost.value = smsSettingsCost;
		settingsWarningLevel.value = warningLevel;
		settingsCriticalLevel.value = criticalLevel;
	}

	if (Number(settingsCallCost.value) > 0) {
		callSettingsCost = Number(settingsCallCost.value).toFixed(2);
	} else {
		message.type = "error";
		revertedSettings.push("Call cost");
		settingsCallCost.value = callSettingsCost;
	}

	if (Number(settingsSmsCost.value) > 0) {
		smsSettingsCost = Number(settingsSmsCost.value).toFixed(2);
	} else {
		message.type = "error";
		revertedSettings.push("SMS cost");
		settingsSmsCost.value = smsSettingsCost;
	}

	if (Number(settingsWarningLevel.value) < Number(settingsCriticalLevel.value)) {
		if (Number(settingsWarningLevel.value) > 0) {
			warningLevel = Number(settingsWarningLevel.value).toFixed(2);
		} else {
			message.type = "error";
			revertedSettings.push("Warning level");
			settingsWarningLevel.value = warningLevel;
		}

		if (Number(settingsCriticalLevel.value) > 0) {
			criticalLevel = Number(settingsCriticalLevel.value).toFixed(2);
		} else {
			message.type = "error";
			revertedSettings.push("Critical level");
			settingsCriticalLevel.value = criticalLevel;
		}
		message.text = "The following settings have been reverted due to invalid input:";
		message.text += "<br>" + revertedSettings + ".";
	} else {
		settingsWarningLevel.value = warningLevel;
		settingsCriticalLevel.value = criticalLevel;
		message.type = "error";
		message.text = "Warning level cannot be less than critical level.";
		message.text += "<br>Both levels have been reverted.";
	}

	settingsTotal.classList.remove("warning", "danger");
	if (totalSettingsValue > criticalLevel) {
		settingsTotal.classList.add("danger");
	} else if (totalSettingsValue > warningLevel) {
		settingsTotal.classList.add("warning");
	}

	if (init !== true && message.type !== "error" && message.type !== "warning") {
		message.type = "success";
		message.text = "Settings have been updated.";
	}
	message.widget = "settings-message";
	displayMessage(message);
}
settingsUpdate.addEventListener('click', updateSettingsValues);
