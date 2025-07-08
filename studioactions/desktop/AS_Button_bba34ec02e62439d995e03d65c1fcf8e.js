function AS_Button_bba34ec02e62439d995e03d65c1fcf8e(eventobject) {
    kony.application.isPopupBlocked(popupCb);

    function popupCb(param) {
        if (param === true) {
            Form1.lbl1.text = "Pop-up blocker is enabled. Please do not allow pop-ups from this website.";
        } else {
            Form1.lbl1.text = "Popup blocker is turned off.";
        }
        Form1.forceLayout();
    }
}