function TextInputBill() {
	let callTotalCost = 0;
	let smsTotalCost = 0;
	let billString = "";

	function addCost(inputString) {
		billString = inputString.trim().toLowerCase();
		if (billString === "call") {
			callTotalCost += 2.75;
		} else if (billString === "sms") {
			smsTotalCost += 0.75;
		}
	}

	function getTotalCallCost() {
		return callTotalCost;
	}

	function getTotalSmsCost() {
		return smsTotalCost;
	}

	function getTotalCost() {
		return callTotalCost + smsTotalCost;
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
		callTotalCost = 0;
		smsTotalCost= 0;
	}

	return {
		addCost,
		getTotalCallCost,
		getTotalSmsCost,
		getTotalCost,
		totalClassName,
		resetTotals
	};
}