//Type your code here
function appCallback()
{
    alert("inside preappinit");
    
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
}

 

/*****************************************************************
*    Name    : 
*    Author  : Kony Solutions
*    Purpose : 
******************************************************************/

 

function opneUrl()
{
    kony.application.openURL("http://www.google.co.in");
    Form1.LabelOutput.text = "Opened URL successfully";
}

 


/*****************************************************************
*    Name    : 
*    Author  : Kony Solutions
*    Purpose : 
******************************************************************/

 

function openMediaURL()
{
    //kony.application.openMediaURL("http://r2---sn-cvh7sn7s.c.youtube.com/videoplayback?cp=U0hVTlFQVl9GUkNONV9JSlpGOko0MENiRUhjMlpD&expire=1369158518&source=youtube&sver=3&mv=m&upn=8MrjoQUVRFo&id=b4ff215cc767cd69&itag=18&ms=au&mt=1369135824&ipbits=8&ratebypass=yes&fexp=928016%2C911632%2C929222%2C916613%2C901478%2C924605%2C901208%2C929123%2C929915%2C929906%2C925714%2C929119%2C931202%2C932802%2C928017%2C912518%2C911416%2C906906%2C904476%2C930807%2C919373%2C906836%2C933701%2C900345%2C900816%2C912711%2C929606%2C910075%2C906098&newshard=yes&sparams=cp%2Cid%2Cip%2Cipbits%2Citag%2Cratebypass%2Csource%2Cupn%2Cexpire&ip=115.113.211.130&key=yt1&signature=A3D965E5E4F0E19AEC0402062FB57CFEEB1B1C72.C9FCAFA2E7FF022ABBBA9A067D827FE69B88507B&title=Manish%20at%20KonyLabs%20%2827th%20Feb%202013%29");
    kony.application.openMediaURL("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4");
    
    kony.print("&&&&&&&&&&& OpenMediaURL Executed &&&&&&&&&&&&");
    Form1.LabelOutput.text = "OpenMediaURL Executed";
}

 


function callbackGetCurrentForm()
{
    try{
        var currentForm = kony.application.getCurrentForm();
        //alert("Current form is " +currentForm["id"]);
        Form2.LabelOutput.text = "Current form is " +currentForm["id"];
       }
    catch(err){
        alert(typeof err);
        alert("error in function callbackGetCurrentForm: "+err.message);
    }
}

 

/*****************************************************************
*    Name    : 
*    Author  : Kony Solutions
*    Purpose : 
******************************************************************/

 

function callbackGetPreviousForm()
{
    try{
        var previousForm = kony.application.getPreviousForm();
        //alert("Previous form is " +previousForm["id"]);
        Form2.LabelOutput.text = "Current form is " +previousForm["id"];
       }
    catch(err){
        alert(typeof err);
        alert("error in function callbackGetPreviousForm: "+err.message);
    }
}

 


/*****************************************************************
*    Name    : 
*    Author  : Kony SolutionscallbackPostAppInit
*    Purpose : 
******************************************************************/

 

function callbackAppService()
{
    alert("Inside AppService");
}

 

function callbackPostAppInit()
{
    alert("Inside post appinit");
    Form1.lblpost.text = "postappinit executed";
}

