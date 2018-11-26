// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function ifttt(event,key,value1,value2,value3) {
    
    var input_url="https://maker.ifttt.com/trigger/"+event+"/with/key/"+key;
    var data = $.ajax({
        "type": "POST",
        "dataType": "html",
        "url": input_url,
        "data":{
          "value1": value1, 
          "value2": value2, 
          "value3": value3, 
        },
        success: function(html)
        {
          console.log(html);
        },
        error: function(exception)
        {
          console.log("error");
        }
     });
  }

  window.ifttt = ifttt;

}(window, window.document));
