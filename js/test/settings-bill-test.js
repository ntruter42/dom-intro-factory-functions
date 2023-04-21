describe("set values", function () {
	it("should be able to set the call cost", function () {

		let settingsBill = BillWithSettings();
		settingsBill.setCallCost(1.85);
		assert.equal(1.85, settingsBill.getCallCost());

		let settingsBill2 = BillWithSettings();
		settingsBill2.setCallCost(2.75);
		assert.equal(2.75, settingsBill2.getCallCost());

	});
});