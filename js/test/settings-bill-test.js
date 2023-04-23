describe("bill with settings factory functions", function () {

	describe("set values", function () {
		it("should be able to set the call cost", function () {
			let settingsBill = BillWithSettings();
			settingsBill.setCallCost(1.85);
			assert.equal(1.85, settingsBill.getCallCost());

			let settingsBill2 = BillWithSettings();
			settingsBill2.setCallCost(2.75);
			assert.equal(2.75, settingsBill2.getCallCost());
		});

		it("should be able to set the sms cost", function () {
			let settingsBill = BillWithSettings();
			settingsBill.setSmsCost(0.85);
			assert.equal(0.85, settingsBill.getSmsCost());

			let settingsBill2 = BillWithSettings();
			settingsBill2.setSmsCost(0.75);
			assert.equal(0.75, settingsBill2.getSmsCost());
		});

		it("should be able to set the call and sms costs", function () {
			let settingsBill = BillWithSettings();

			settingsBill.setCallCost(2.85);
			settingsBill.setSmsCost(0.85);

			assert.equal(2.85, settingsBill.getCallCost());
			assert.equal(0.85, settingsBill.getSmsCost());

			let settingsBill2 = BillWithSettings();

			settingsBill2.setCallCost(3.75);
			settingsBill2.setSmsCost(1.75);

			assert.equal(3.75, settingsBill2.getCallCost());
			assert.equal(1.75, settingsBill2.getSmsCost());
		});

		it("should be able to set the warning level", function () {
			let settingsBill = BillWithSettings();
			settingsBill.setWarningLevel(30);
			assert.equal(30, settingsBill.getWarningLevel());

			let settingsBill2 = BillWithSettings();
			settingsBill2.setWarningLevel(42);
			assert.equal(42, settingsBill2.getWarningLevel());
		});

		it("should be able to set the critical level", function () {
			let settingsBill = BillWithSettings();
			settingsBill.setCriticalLevel(50);
			assert.equal(50, settingsBill.getCriticalLevel());

			let settingsBill2 = BillWithSettings();
			settingsBill2.setCriticalLevel(64);
			assert.equal(64, settingsBill2.getCriticalLevel());
		});

		it("should be able to set the warning and critical levels", function () {
			let settingsBill = BillWithSettings();

			settingsBill.setWarningLevel(20);
			settingsBill.setCriticalLevel(35);

			assert.equal(20, settingsBill.getWarningLevel());
			assert.equal(35, settingsBill.getCriticalLevel());

			let settingsBill2 = BillWithSettings();

			settingsBill2.setWarningLevel(40);
			settingsBill2.setCriticalLevel(80);

			assert.equal(40, settingsBill2.getWarningLevel());
			assert.equal(80, settingsBill2.getCriticalLevel());
		});
	});

	describe("use values", function () {
		it("should be able to use the call cost set", function () {
			let settingsBill = BillWithSettings();

			settingsBill.setCallCost(2.25);
			settingsBill.setSmsCost(0.85);
			settingsBill.setCriticalLevel(10);

			settingsBill.makeCall();
			settingsBill.makeCall();
			settingsBill.makeCall();

			assert.equal(2.25 * 3, settingsBill.getTotalCost());
			assert.equal(2.25 * 3, settingsBill.getTotalCallCost());
			assert.equal(0.00, settingsBill.getTotalSmsCost());
		});

		it("should be able to use the call set for 2 calls at 1.35 each", function () {
			let settingsBill = BillWithSettings();

			settingsBill.setCallCost(1.35);
			settingsBill.setSmsCost(0.85);
			settingsBill.setCriticalLevel(10);

			settingsBill.makeCall();
			settingsBill.makeCall();

			assert.equal(1.35 * 2, settingsBill.getTotalCost());
			assert.equal(1.35 * 2, settingsBill.getTotalCallCost());
			assert.equal(0.00, settingsBill.getTotalSmsCost());
		});

		it("should be able to send 2 sms' at 0.85 each", function () {
			let settingsBill = BillWithSettings();

			settingsBill.setCallCost(1.35);
			settingsBill.setSmsCost(0.85);
			settingsBill.setCriticalLevel(10);

			settingsBill.sendSms();
			settingsBill.sendSms();

			assert.equal(0.85 * 2, settingsBill.getTotalCost());
			assert.equal(0.00, settingsBill.getTotalCallCost());
			assert.equal(0.85 * 2, settingsBill.getTotalSmsCost());
		});

		it("should be able to send 2 sms' at 0.85 each and make 1 at 1.35", function () {
			let settingsBill = BillWithSettings();

			settingsBill.setCallCost(1.35);
			settingsBill.setSmsCost(0.85);
			settingsBill.setCriticalLevel(10);

			settingsBill.sendSms();
			settingsBill.makeCall();
			settingsBill.sendSms();

			assert.equal(0.85 * 2 + 1.35, settingsBill.getTotalCost());
			assert.equal(1.35, settingsBill.getTotalCallCost());
			assert.equal(0.85 * 2, settingsBill.getTotalSmsCost());
		});
	});

	describe("warning and critical levels", function () {
		it("should return a class name of 'warning' if warning level is reached", function () {
			let settingsBill = BillWithSettings();

			settingsBill.setCallCost(1.35);
			settingsBill.setSmsCost(0.85);
			settingsBill.setWarningLevel(5);
			settingsBill.setCriticalLevel(10);

			settingsBill.makeCall();
			settingsBill.makeCall();
			settingsBill.makeCall();
			settingsBill.makeCall();

			assert.equal("warning", settingsBill.totalClassName());
		});

		it("should return a class name of 'critical' if critical level is reached", function () {
			let settingsBill = BillWithSettings();

			settingsBill.setCallCost(2.50);
			settingsBill.setSmsCost(0.85);
			settingsBill.setWarningLevel(5);
			settingsBill.setCriticalLevel(10);

			settingsBill.makeCall();
			settingsBill.makeCall();
			settingsBill.makeCall();
			settingsBill.makeCall();

			assert.equal("critical", settingsBill.totalClassName());
		});

		it("should stop total call cost from increasing when critical level is reached", function () {
			let settingsBill = BillWithSettings();

			settingsBill.setCallCost(2.50);
			settingsBill.setSmsCost(0.85);
			settingsBill.setWarningLevel(5);
			settingsBill.setCriticalLevel(10);

			settingsBill.makeCall();
			settingsBill.makeCall();
			settingsBill.makeCall();
			settingsBill.makeCall();
			settingsBill.makeCall();

			assert.equal("critical", settingsBill.totalClassName());
			assert.equal(10, settingsBill.getTotalCallCost());
		});

		it("should allow the total to increase after updating the critical level greater than total", function () {
			let settingsBill = BillWithSettings();

			settingsBill.setCallCost(2.50);
			settingsBill.setSmsCost(0.85);
			settingsBill.setWarningLevel(8);
			settingsBill.setCriticalLevel(10);

			settingsBill.makeCall();
			settingsBill.makeCall();
			settingsBill.makeCall();
			settingsBill.makeCall();
			settingsBill.makeCall();

			assert.equal("critical", settingsBill.totalClassName());
			assert.equal(10, settingsBill.getTotalCallCost());

			settingsBill.setCriticalLevel(20);

			assert.equal("warning", settingsBill.totalClassName());

			settingsBill.makeCall();
			settingsBill.makeCall();

			assert.equal(15, settingsBill.getTotalCallCost());
		});
	});
});