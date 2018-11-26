// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function createIframe(key,field1,field2,field3,field4,field5,field6,field7,field8) {
    
    key = escape(key+"");
    field1 = escape(field1+"");
    field2 = escape(field2+"");
    field3 = escape(field3+"");
    field4 = escape(field4+"");
    field5 = escape(field5+"");
    field6 = escape(field6+"");
    field7 = escape(field7+"");
    field8 = escape(field8+"");
    
    var input_url =" api.thingspeak.com/update.json";
    var data = $.ajax({
        type: "POST",
        dataType: "application/json",
        url: input_url,
        api_key: key,
        created_at: "DATETIME_STAMP",
        dataset:[
          field1: field1, 
          field2: field2, 
          field3: field3, 
          field4: field4, 
          field5: field5, 
          field6: field6, 
          field7: field7, 
          field8: field8
        }
        success: function(json)
        {
          console.log(json);
        },
        error: function(exception)
        {
          console.log("Sorry");
        }
     });
  }

  window.createIframe = createIframe;

}(window, window.document));
