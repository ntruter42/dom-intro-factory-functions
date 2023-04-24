describe("calculate bill factory functions", function () {

	describe("set values", function () {
		it("should be able to set total from calls in bill string", function () {
			let calculateBill = calculateBillWidget();
			calculateBill.setTotalCost("call,call");
			assert.equal(2.75 * 2, calculateBill.getTotalCost());

			let calculateBill2 = calculateBillWidget();
			calculateBill2.setTotalCost("call,call,call,call,call");
			assert.equal(2.75 * 5, calculateBill2.getTotalCost());
		});

		it("should be able to set total from sms in bill string", function () {
			let calculateBill = calculateBillWidget();
			calculateBill.setTotalCost("sms,sms,sms");
			assert.equal(0.75 * 3, calculateBill.getTotalCost());

			let calculateBill2 = calculateBillWidget();
			calculateBill2.setTotalCost("sms,sms,sms,sms,sms,sms");
			assert.equal(0.75 * 6, calculateBill2.getTotalCost());
		});

		it("should be able to set total from calls and sms' in bill string", function () {
			let calculateBill = calculateBillWidget();
			calculateBill.setTotalCost("call,sms,call,sms");
			assert.equal((2.75 * 2) + (0.75 * 2), calculateBill.getTotalCost());

			let calculateBill2 = calculateBillWidget();
			calculateBill2.setTotalCost("call,sms,call,call,call,call,sms");
			assert.equal((2.75 * 5) + (0.75 * 2), calculateBill2.getTotalCost());
		});
	});

	describe("warning and critical levels", function () {
		it("should return class name of 'warning' if total is greater than 20 and less than 30", function () {
			let calculateBill = calculateBillWidget();
			calculateBill.setTotalCost("sms,sms,sms,sms,call,sms,call,call,call,sms,sms,call,sms,sms");

			assert.equal(20.50, calculateBill.getTotalCost());
			assert.equal("warning", calculateBill.totalClassName());

			let calculateBill2 = calculateBillWidget();
			calculateBill2.setTotalCost("call,call,sms,sms,sms,call,call,call,sms,sms,sms,call,sms,sms,call,call,sms,sms");

			assert.equal(29.50, calculateBill2.getTotalCost());
			assert.equal("warning", calculateBill2.totalClassName());
		});

		it("should return class name of 'critical' if total is greater than 30", function () {
			let calculateBill = calculateBillWidget();
			calculateBill.setTotalCost("call,call,sms,sms,call,sms,call,call,sms,sms,call,sms,call,call,sms,sms,call,sms,call,sms,sms,call,sms");

			assert.equal(39.25, calculateBill.getTotalCost());
			assert.equal("critical", calculateBill.totalClassName());

			let calculateBill2 = calculateBillWidget();
			calculateBill2.setTotalCost("call,sms,sms,call,call,call,call,sms,call,call,sms,call,sms,call,call,sms,sms");

			assert.equal(32.75, calculateBill2.getTotalCost());
			assert.equal("critical", calculateBill2.totalClassName());
		});

		it("should return undefined if total is less than 20", function () {
			let calculateBill = calculateBillWidget();
			calculateBill.setTotalCost("sms,sms,sms,sms,call,sms,call");

			assert.equal(9.25, calculateBill.getTotalCost());
			assert.equal(undefined, calculateBill.totalClassName());

			let calculateBill2 = calculateBillWidget();
			calculateBill2.setTotalCost("call,sms,sms,sms,call,sms,sms,sms,sms");

			assert.equal(10.75, calculateBill2.getTotalCost());
			assert.equal(undefined, calculateBill2.totalClassName());
		});

		it("should update class name if total is updated", function () {
			let calculateBill = calculateBillWidget();
			calculateBill.setTotalCost("sms,sms,sms,call,sms");

			assert.equal(5.75, calculateBill.getTotalCost());
			assert.equal(undefined, calculateBill.totalClassName());

			calculateBill.setTotalCost("call,call,call,sms,sms,sms,sms,call,sms,sms,sms,sms,call,call,call,sms,call,call,sms,call,sms");

			assert.equal(35.75, calculateBill.getTotalCost());
			assert.equal("critical", calculateBill.totalClassName());

			calculateBill.setTotalCost("call,sms,sms,call,sms,sms,call,call,sms,call,call,sms,call,sms");

			assert.equal(24.50, calculateBill.getTotalCost());
			assert.equal("warning", calculateBill.totalClassName());
		});
	});
});
