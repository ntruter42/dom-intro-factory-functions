describe("radio bill factory functions", function () {

	describe("calculate totals", function () {
		it("should be able to add call cost", function () {
			let radioBill = RadioBill();
			radioBill.makeCall();
			assert.equal(2.75, radioBill.getTotalCallCost());

			let radioBill2 = RadioBill();
			radioBill2.makeCall();
			radioBill2.makeCall();
			radioBill2.makeCall();
			assert.equal(8.25, radioBill2.getTotalCallCost());
		});

		it("should be able to add sms cost", function () {
			let radioBill = RadioBill();
			radioBill.sendSms();
			assert.equal(0.75, radioBill.getTotalSmsCost());

			let radioBill2 = RadioBill();
			radioBill2.sendSms();
			radioBill2.sendSms();
			radioBill2.sendSms();
			assert.equal(2.25, radioBill2.getTotalSmsCost());
		});

		it("should be able to add call and sms cost", function () {
			let radioBill = RadioBill();

			radioBill.makeCall();
			radioBill.sendSms();

			assert.equal(2.75, radioBill.getTotalCallCost());
			assert.equal(0.75, radioBill.getTotalSmsCost());
			assert.equal(3.50, radioBill.getTotalCost());

			let radioBill2 = RadioBill();

			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();

			assert.equal(5.50, radioBill2.getTotalCallCost());
			assert.equal(2.25, radioBill2.getTotalSmsCost());
			assert.equal(7.75, radioBill2.getTotalCost());
		});
	});

	describe("warning and critical levels", function () {
		it("should return class name of 'warning' if total is greater than 30 and less than 50", function () {
			let radioBill = RadioBill();

			radioBill.makeCall();
			radioBill.sendSms();
			radioBill.sendSms();
			radioBill.makeCall();
			radioBill.sendSms();
			radioBill.makeCall();
			radioBill.sendSms();
			radioBill.sendSms();
			radioBill.makeCall();
			radioBill.sendSms();
			radioBill.makeCall();
			radioBill.sendSms();
			radioBill.sendSms();
			radioBill.makeCall();
			radioBill.sendSms();
			radioBill.makeCall();
			radioBill.sendSms();
			radioBill.sendSms();
			radioBill.makeCall();
			radioBill.sendSms();

			assert.equal(31, radioBill.getTotalCost());
			assert.equal("warning", radioBill.totalClassName());

			let radioBill2 = RadioBill();

			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();

			assert.equal(38.75, radioBill2.getTotalCost());
			assert.equal("warning", radioBill2.totalClassName());
		});

		it("should return class name of 'critical' if total is greater than 50", function () {
			let radioBill = RadioBill();

			radioBill.makeCall();
			radioBill.sendSms();
			radioBill.sendSms();
			radioBill.makeCall();
			radioBill.sendSms();
			radioBill.makeCall();
			radioBill.sendSms();
			radioBill.sendSms();
			radioBill.makeCall();
			radioBill.sendSms();
			radioBill.makeCall();
			radioBill.sendSms();
			radioBill.sendSms();
			radioBill.makeCall();
			radioBill.sendSms();
			radioBill.makeCall();
			radioBill.sendSms();
			radioBill.sendSms();
			radioBill.makeCall();
			radioBill.sendSms();
			radioBill.makeCall();
			radioBill.sendSms();
			radioBill.sendSms();
			radioBill.makeCall();
			radioBill.sendSms();
			radioBill.makeCall();
			radioBill.sendSms();
			radioBill.sendSms();
			radioBill.makeCall();
			radioBill.sendSms();
			radioBill.makeCall();
			radioBill.sendSms();
			radioBill.sendSms();

			assert.equal(50.75, radioBill.getTotalCost());
			assert.equal("critical", radioBill.totalClassName());

			let radioBill2 = RadioBill();

			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.sendSms();
			

			assert.equal(62, radioBill2.getTotalCost());
			assert.equal("critical", radioBill2.totalClassName());
		});

		it("should return undefined if total is less than 30", function () {
			let radioBill = RadioBill();

			radioBill.makeCall();
			radioBill.makeCall();
			radioBill.sendSms();

			assert.equal(6.25, radioBill.getTotalCost());
			assert.equal(undefined, radioBill.totalClassName());

			let radioBill2 = RadioBill();

			radioBill2.makeCall();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.makeCall();
			radioBill2.sendSms();
			radioBill2.makeCall();
			radioBill2.makeCall();
			radioBill2.sendSms();

			assert.equal(25, radioBill2.getTotalCost());
			assert.equal(undefined, radioBill2.totalClassName());
		});
	});
});