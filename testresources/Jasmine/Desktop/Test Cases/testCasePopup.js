it("ApplicationAPI/testCasePopup", async function() {
	await voltmx.automation.playback.waitFor(["Form1","Button0e61f0c8ab75643"]);
	voltmx.automation.button.click(["Form1","Button0e61f0c8ab75643"]);
	await voltmx.automation.playback.wait(2000);
	expect(voltmx.automation.widget.getWidgetProperty(["Form1","lbl1"], "text")).toEqual("Popup blocker is turned off.");
});