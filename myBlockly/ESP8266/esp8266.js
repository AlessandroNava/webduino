// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

var FeedBack="";

function esp8266_SendCommand(url,cmd,str1,str2,str3,str4,str5,str6,str7,str8,str9) {
  FeedBack="";
  var data = $.ajax({
      "type": "POST",
      "dataType": "html",
      "url": url+"?"+cmd+"="+str1+";"+str2+";"+str3+";"+str4+";"+str5+";"+str6+";"+str7+";"+str8+";"+str9,
      success: function(html)
      {
        FeedBack = html;
        return html;
      },
      error: function(jqXHR, textStatus, errorThrown)
      {
        //console.log(errorThrown);
        return "error";
      }
   });
  console.log(data);
  console.log(FeedBack);
}
