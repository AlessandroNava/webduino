// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

var FeedBack="";

function esp8266_SendCommand(url,cmd,str1,str2,str3,str4,str5,str6,str7,str8,str9) {
  var data = $.ajax({
      "type": "POST",
      "dataType": "json",
      "url": url+"?"+cmd+"="+str1+";"+str2+";"+str3+";"+str4+";"+str5+";"+str6+";"+str7+";"+str8+";"+str9,
      success: function(json)
      {
        console.log(json);
        json = eval(json);
        FeedBack="";
        for (var i in json) {
          console.log(json[i]["esp8266"]);
          FeedBack += ","+json[i]["esp8266"];
        }
        console.log(FeedBack);
      },
      error: function(jqXHR, textStatus, errorThrown)
      {
        FeedBack="";
        //console.log(errorThrown);
      }
   });
  console.log(data);
}
