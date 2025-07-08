it("ApplicationAPI/testcaseOpenMediaURL", async function() {
	await voltmx.automation.playback.waitFor(["Form1","Button0e70f41ab68e24b"]);
	voltmx.automation.button.click(["Form1","Button0e70f41ab68e24b"]);
	expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual( "OpenMediaURL Executed");
});