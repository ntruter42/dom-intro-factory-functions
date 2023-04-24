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
	console.log(totalCost);
}

setTotalCost(process.argv[2]);