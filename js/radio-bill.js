function RadioBill() {
	let callCostTotal = 0;
	let smsCostTotal = 0;

	function makeCall() {
		callCostTotal += 2.75;
	}

	function sendSms() {
		smsCostTotal += 0.75;
	}

	function getTotalCallCost() {
		return callCostTotal;
	}

	function getTotalSmsCost() {
		return smsCostTotal;
	}

	function getTotalCost() {
		return getTotalCallCost() + getTotalSmsCost();
	}

	function hasReachedWarningLevel() {
		return getTotalCost() >= 30;
	}

	function hasReachedCriticalLevel() {
		return getTotalCost() >= 50;
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
		makeCall,
		sendSms,
		getTotalCallCost,
		getTotalSmsCost,
		getTotalCost,
		totalClassName,
		resetTotals
	};
}