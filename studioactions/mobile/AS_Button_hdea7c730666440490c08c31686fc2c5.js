function AS_Button_hdea7c730666440490c08c31686fc2c5(eventobject) {
    function test() {
        Form1.LabelOutput.text = "Set idle timeout of 0.30 min successful";
    }
    //alert("idle timeout set for 1 min.wait for")
    Form1.LabelOutput.text = "idle timeout set for 0.30 min.wait for";
    kony.application.registerForIdleTimeout(0.30, test);
}