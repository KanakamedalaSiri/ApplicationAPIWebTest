function AS_Button_ja7ed2a829544086b0d547c6324ecb6e(eventobject) {
    function test() {
        Form1.LabelOutput.text = "Set idle timeout of 0.30 min successful";
    }
    //alert("idle timeout set for 1 min.wait for")
    Form1.LabelOutput.text = "idle timeout set for 0.30 min.wait for";
    kony.application.registerForIdleTimeout(0.30, test);
}