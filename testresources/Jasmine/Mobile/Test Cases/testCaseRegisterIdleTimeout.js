it("ApplicationAPI/testCaseRegisterIdleTimeout", async function() {
	await voltmx.automation.playback.waitFor(["Form1","Button0b18a0b2a8d464e"]);
	voltmx.automation.button.click(["Form1","Button0b18a0b2a8d464e"]);
	await voltmx.automation.playback.wait(30000);
	expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("Set idle timeout of 0.30 min successful");
},32000);