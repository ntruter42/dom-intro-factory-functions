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
});