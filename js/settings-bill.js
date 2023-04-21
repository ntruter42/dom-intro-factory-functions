function BillWithSettings() {
	var theCallCost = 0;
	var theSmsCost = 0;
	var theWarningLevel = 0;
	var theCriticalLevel = 0;
	var theCallTotalCost = 0;
	var theSmsTotalCost = 0;
	var theTotalCost = 0;

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
		theCallTotalCost += theCallCost;
	}

	function getTotalCost() {
		return theCallTotalCost + theSmsTotalCost;
	}

	function getTotalCallCost() {
		return theCallTotalCost;
	}

	function getTotalSmsCost() {
		return theSmsTotalCost;
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
		getTotalCost,
		getTotalCallCost,
		getTotalSmsCost
	}
}