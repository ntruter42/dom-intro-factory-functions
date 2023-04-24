function calculateBillWidget() {
	var totalCost = 0;
	var billString = "";

	function setTotalCost(inputString) {
		totalCost = 0;
		billString = inputString.trim().toLowerCase();
		for (let item of billString.split(",")) {
			if (item.trim() === "call") {
				totalCost += 2.75;
			} else if (item.trim() === "sms") {
				totalCost += 0.75;
			}
		}
	}

	function getTotalCost() {
		return totalCost;
	}

	function hasReachedWarningLevel() {
		return getTotalCost() >= 20;
	}

	function hasReachedCriticalLevel() {
		return getTotalCost() >= 30;
	}

	function totalClassName() {
		if (hasReachedCriticalLevel()) {
			return "critical";
		} else if (hasReachedWarningLevel()) {
			return "warning";
		}
	}

	return {
		setTotalCost,
		getTotalCost,
		totalClassName
	};
}
