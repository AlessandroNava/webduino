// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

var Response="";
var webusb_Response=[];

function webusb_sendCommand(cmd,str1,str2,str3,str4,str5,str6,str7,str8,str9) {
  Response = "";
  document.getElementById("text").value = "?"+cmd+"="+str1+";"+str2+";"+str3+";"+str4+";"+str5+";"+str6+";"+str7+";"+str8+";"+str9;
}

function webusb_getResponse() {
  webusb_Response=[];
  if (Response != "") {
    if (Response.indexOf("[{")!=-1) {
      json = eval(Response);
      //console.log(json);
      for (var i=0;i<json.length;i++) {
        webusb_Response.push(json[i]["data"]);
      }
      Response = "";
    } else {
      webusb_Response.push(null);
    }
    
    var res = webusb_Response;
    webusb_Response=[];
    return res;
  }
  else
    return [];
}

function webusb_clearData() {
  Response = "";
  webusb_Response=[];
}

function webusb_sendCustomCommand(cmd) {
  Response = "";
  document.getElementById("text").value = cmd;
}
