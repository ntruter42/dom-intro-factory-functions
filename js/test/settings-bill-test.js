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