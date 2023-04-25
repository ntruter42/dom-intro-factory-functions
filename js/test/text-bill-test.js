describe("text input bill factory functions", function () {

	describe("calculate totals", function () {
		it("should be able to add 'call' from bill string", function () {
			let textInputBill = TextInputBill();
			textInputBill.addCost("call");
			assert.equal(2.75, textInputBill.getTotalCost());
			assert.equal(2.75, textInputBill.getTotalCallCost());
		});

		it("should be able to add 'call' from bill string multiple times", function () {
			let textInputBill = TextInputBill();

			textInputBill.addCost("call");
			textInputBill.addCost("call");

			assert.equal(5.50, textInputBill.getTotalCost());
			assert.equal(5.50, textInputBill.getTotalCallCost());

			let textInputBill2 = TextInputBill();

			textInputBill2.addCost("call");
			textInputBill2.addCost("call");

			assert.equal(5.50, textInputBill2.getTotalCost());
			assert.equal(5.50, textInputBill2.getTotalCallCost());

			textInputBill2.addCost("call");

			assert.equal(8.25, textInputBill2.getTotalCost());
			assert.equal(8.25, textInputBill2.getTotalCallCost());
		});

		it("should be able to add 'sms' from bill string", function () {
			let textInputBill = TextInputBill();
			textInputBill.addCost("sms");
			assert.equal(0.75, textInputBill.getTotalCost());
			assert.equal(0.75, textInputBill.getTotalSmsCost());
		});

		it("should be able to add 'sms' from bill string multiple times", function () {
			let textInputBill = TextInputBill();

			textInputBill.addCost("sms");
			textInputBill.addCost("sms");

			assert.equal(1.50, textInputBill.getTotalCost());
			assert.equal(1.50, textInputBill.getTotalSmsCost());

			let textInputBill2 = TextInputBill();

			textInputBill2.addCost("sms");
			textInputBill2.addCost("sms");

			assert.equal(1.50, textInputBill2.getTotalCost());
			assert.equal(1.50, textInputBill2.getTotalSmsCost());

			textInputBill2.addCost("sms");

			assert.equal(2.25, textInputBill2.getTotalCost());
			assert.equal(2.25, textInputBill2.getTotalSmsCost());
		});

		it("should be able to add 'call' and 'sms' from bill string", function () {
			let textInputBill = TextInputBill();

			textInputBill.addCost("call");
			textInputBill.addCost("sms");

			assert.equal(3.50, textInputBill.getTotalCost());
			assert.equal(2.75, textInputBill.getTotalCallCost());
			assert.equal(0.75, textInputBill.getTotalSmsCost());

			let textInputBill2 = TextInputBill();

			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("sms");

			assert.equal(6.25, textInputBill2.getTotalCost());
			assert.equal(5.50, textInputBill2.getTotalCallCost());
			assert.equal(0.75, textInputBill.getTotalSmsCost());

			textInputBill2.addCost("sms");
			textInputBill2.addCost("call");

			assert.equal(9.75, textInputBill2.getTotalCost());
			assert.equal(8.25, textInputBill2.getTotalCallCost());
			assert.equal(1.50, textInputBill2.getTotalSmsCost());
		});
	});

	describe("warning and critical levels", function () {
		it("should return class name of 'warning' if total is greater than 30 and less than 50", function () {
			let textInputBill = TextInputBill();

			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");

			assert.equal("warning", textInputBill.totalClassName());
			assert.equal(30.25, textInputBill.getTotalCost());
			assert.equal(30.25, textInputBill.getTotalCallCost());
			assert.equal(0, textInputBill.getTotalSmsCost());

			let textInputBill2 = TextInputBill();

			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("sms");
			textInputBill2.addCost("sms");
			textInputBill2.addCost("sms");
			textInputBill2.addCost("sms");

			assert.equal("warning", textInputBill2.totalClassName());
			assert.equal(49.75, textInputBill2.getTotalCost());
			assert.equal(46.75, textInputBill2.getTotalCallCost());
			assert.equal(3, textInputBill2.getTotalSmsCost());
		});

		it("should return class name of 'critical' if total is greater than 50", function () {
			let textInputBill = TextInputBill();

			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");
			textInputBill.addCost("call");

			assert.equal("critical", textInputBill.totalClassName());
			assert.equal(52.25, textInputBill.getTotalCost());
			assert.equal(52.25, textInputBill.getTotalCallCost());
			assert.equal(0, textInputBill.getTotalSmsCost());

			let textInputBill2 = TextInputBill();

			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("sms");

			assert.equal("critical", textInputBill2.totalClassName());
			assert.equal(50.25, textInputBill2.getTotalCost());
			assert.equal(49.50, textInputBill2.getTotalCallCost());
			assert.equal(0.75, textInputBill2.getTotalSmsCost());
		});

		it("should return undefined if total is less than 30", function () {
			let textInputBill = TextInputBill();

			textInputBill.addCost("call");

			assert.equal(undefined, textInputBill.totalClassName());
			assert.equal(2.75, textInputBill.getTotalCost());
			assert.equal(2.75, textInputBill.getTotalCallCost());
			assert.equal(0, textInputBill.getTotalSmsCost());

			let textInputBill2 = TextInputBill();

			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("call");
			textInputBill2.addCost("sms");

			assert.equal(undefined, textInputBill2.totalClassName());
			assert.equal(28.25, textInputBill2.getTotalCost());
			assert.equal(27.50, textInputBill2.getTotalCallCost());
			assert.equal(0.75, textInputBill2.getTotalSmsCost());
		});
	});
});