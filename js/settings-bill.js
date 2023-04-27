function BillWithSettings() {
	let theCallCost = 0;
	let theSmsCost = 0;
	let theWarningLevel = 0;
	let theCriticalLevel = 0;

	let callCostTotal = 0;
	let smsCostTotal = 0;

	let checkedValue = "";

	function setCallCost(callCost) {
		theCallCost = callCost;
	}

	function getCallCost() {
		return theCallCost;
	}
	
	function setSmsCost(smsCost) {
		theSmsCost = smsCost;
	}

	function getSmsCost() {
		return theSmsCost;
	}

	function setWarningLevel(warningLevel) {
		theWarningLevel = warningLevel;
	}

	function getWarningLevel() {
		return theWarningLevel;
	}

	function setCriticalLevel(criticalLevel) {
		theCriticalLevel = criticalLevel;
	}

	function getCriticalLevel() {
		return theCriticalLevel;
	}

	function setCheckedValue(value) {
		checkedValue = value;
	}

	function getCheckedValue() {
		return checkedValue;
	}

	function callChecked() {
		if (getCheckedValue() === "call")
			return true;
		return false;
	}

	function smsChecked() {
		if (getCheckedValue() === "sms")
			return true;
		return false;
	}

	function makeCall() {
		if (!hasReachedCriticalLevel()) {
			callCostTotal += theCallCost;
		}
	}

	function sendSms() {
		if (!hasReachedCriticalLevel()) {
			smsCostTotal += theSmsCost;
		}
	}

	function getTotalCost() {
		return callCostTotal + smsCostTotal;
	}

	function getTotalCallCost() {
		return callCostTotal;
	}

	function getTotalSmsCost() {
		return smsCostTotal;
	}

	function hasReachedWarningLevel() {
		return getTotalCost() >= getWarningLevel();
	}

	function hasReachedCriticalLevel() {
		return getTotalCost() >= getCriticalLevel();
	}

	function totalClassName() {
		if (hasReachedCriticalLevel()) {
			return "critical";
		} else if (hasReachedWarningLevel()) {
			return "warning";
		}
	}

	function resetTotals() {
		callCostTotal = 0;
		smsCostTotal = 0;
	}

	return {
		setCallCost,
		getCallCost,
		setSmsCost,
		getSmsCost,
		setWarningLevel,
		getWarningLevel,
		setCriticalLevel,
		getCriticalLevel,
		setCheckedValue,
		callChecked,
		smsChecked,
		makeCall,
		sendSms,
		getTotalCost,
		getTotalCallCost,
		getTotalSmsCost,
		totalClassName,
		resetTotals
	};
}
