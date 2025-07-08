function AS_Button_e270ad554db44745a7a61227dd7cf550(eventobject) {
    kony.application.isImageTurnedOff(imageCb);

    function imageCb(param) {
        if (param === true) {
            Form1.lbl1.text = "Image settings in web browser is disabled";
        } else {
            Form1.lbl1.text = "Image settings in web browser is enabled";
        }
        Form1.forceLayout();
    }
}