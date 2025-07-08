define([], function() {
	describe("ApplicationAPI/Test Suites/testSuiteDW", function() {
		it("ApplicationAPI/testCaseOpenURL", async function() {
			await voltmx.automation.playback.waitFor(["Form1","Button0a4fb69f0aca743"]);
			voltmx.automation.button.click(["Form1","Button0a4fb69f0aca743"]);
			expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("Opened URL successfully");
		});
		
		it("ApplicationAPI/testCaseRegisterIdleTimeout", async function() {
			await voltmx.automation.playback.waitFor(["Form1","Button0b18a0b2a8d464e"]);
			voltmx.automation.button.click(["Form1","Button0b18a0b2a8d464e"]);
			await voltmx.automation.playback.wait(30000);
			expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("Set idle timeout of 0.30 min successful");
		},32000);
		
		it("ApplicationAPI/testCaseUnregisterIdleTimeout", async function() {
			await voltmx.automation.playback.waitFor(["Form1","Button0b5bc2bc09c9a42"]);
			voltmx.automation.button.click(["Form1","Button0b5bc2bc09c9a42"]);
			expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("idle timeout is unregistered");
		});
		
		it("ApplicationAPI/testcaseOpenMediaURL", async function() {
			await voltmx.automation.playback.waitFor(["Form1","Button0e70f41ab68e24b"]);
			voltmx.automation.button.click(["Form1","Button0e70f41ab68e24b"]);
			expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual( "OpenMediaURL Executed");
		});
		
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
		
		it("ApplicationAPI/testCasePopup", async function() {
			await voltmx.automation.playback.waitFor(["Form1","Button0e61f0c8ab75643"]);
			voltmx.automation.button.click(["Form1","Button0e61f0c8ab75643"]);
			await voltmx.automation.playback.wait(2000);
			expect(voltmx.automation.widget.getWidgetProperty(["Form1","lbl1"], "text")).toEqual("Popup blocker is turned off.");
		});
		
		it("ApplicationAPI/testCaseImageTurnedOff", async function() {
			await voltmx.automation.playback.waitFor(["Form1","Button0dbd68394731d4a"]);
			voltmx.automation.button.click(["Form1","Button0dbd68394731d4a"]);
			await voltmx.automation.playback.wait(1000);
			expect(voltmx.automation.widget.getWidgetProperty(["Form1","lbl1"], "text")).toEqual("Image settings in web browser is enabled");
		});
	});
});