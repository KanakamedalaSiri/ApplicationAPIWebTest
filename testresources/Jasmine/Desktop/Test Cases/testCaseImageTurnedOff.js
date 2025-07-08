it("ApplicationAPI/testCaseImageTurnedOff", async function() {
	await voltmx.automation.playback.waitFor(["Form1","Button0dbd68394731d4a"]);
	voltmx.automation.button.click(["Form1","Button0dbd68394731d4a"]);
	await voltmx.automation.playback.wait(1000);
	expect(voltmx.automation.widget.getWidgetProperty(["Form1","lbl1"], "text")).toEqual("Image settings in web browser is enabled");
});