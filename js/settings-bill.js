function BillWithSettings() {
	var theCallCost = 0;
	var theSmsCost = 0;
	var theWarningLevel = 0;
	var theCriticalLevel = 0;

	var callCostTotal = 0;
	var smsCostTotal = 0;
	var totalCost = 0;

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

	function makeCall() {
		callCostTotal += theCallCost;
	}

	function sendSms() {
		smsCostTotal += theSmsCost;
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

	return {
		setCallCost,
		getCallCost,
		setSmsCost,
		getSmsCost,
		setWarningLevel,
		getWarningLevel,
		setCriticalLevel,
		getCriticalLevel,
		makeCall,
		sendSms,
		getTotalCost,
		getTotalCallCost,
		getTotalSmsCost
	}
}