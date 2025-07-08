it("ApplicationAPI/testCaseUnregisterIdleTimeout", async function() {
	await voltmx.automation.playback.waitFor(["Form1","Button0b5bc2bc09c9a42"]);
	voltmx.automation.button.click(["Form1","Button0b5bc2bc09c9a42"]);
	expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("idle timeout is unregistered");
});