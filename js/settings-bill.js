function BillWithSettings() {
	var theCallCost = 0;
	var theSmsCost = 0;

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

	return {
		setCallCost,
		getCallCost,
		setSmsCost,
		getSmsCost
	}
}