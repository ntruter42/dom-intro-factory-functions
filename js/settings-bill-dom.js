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
}
settingsButton.addEventListener('click', settingsButtonClicked);

// RESET BUTTON
function resetSettingsTotals() {
	//
}
settingsReset.addEventListener('click', resetSettingsTotals);

// UPDATE BUTTON
function updateSettingsValues() {
	//
}
settingsUpdate.addEventListener('click', updateSettingsValues);