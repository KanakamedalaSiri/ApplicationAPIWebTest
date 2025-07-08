it("ApplicationAPI/testCaseNavigateFormCurrentPrevious", async function() {
	await voltmx.automation.playback.waitFor(["Form1","Button0f2cf52d252c541"]);
	voltmx.automation.button.click(["Form1","Button0f2cf52d252c541"]);
	await voltmx.automation.playback.waitFor(["Form2","Button0dea8dd45c94a43"]);
	voltmx.automation.button.click(["Form2","Button0dea8dd45c94a43"]);
	expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("Current form is Form2");
	await voltmx.automation.playback.waitFor(["Form2","Button0g8e1f3478a9b42"]);
	voltmx.automation.button.click(["Form2","Button0g8e1f3478a9b42"]);
	expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("Current form is Form1" );
	await voltmx.automation.playback.waitFor(["Form2","Button0h5e76123e5934a"]);
	voltmx.automation.button.click(["Form2","Button0h5e76123e5934a"]);
},7000);