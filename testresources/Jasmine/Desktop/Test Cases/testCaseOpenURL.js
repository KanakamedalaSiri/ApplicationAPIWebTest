it("ApplicationAPI/testCaseOpenURL", async function() {
	await voltmx.automation.playback.waitFor(["Form1","Button0a4fb69f0aca743"]);
	voltmx.automation.button.click(["Form1","Button0a4fb69f0aca743"]);
	expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("Opened URL successfully");
});