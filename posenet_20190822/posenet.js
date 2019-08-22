// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

 function posenet_person(input_person){
    var result = document.getElementById("result").innerHTML.split("<br>");
    if (result.length>0) {
      for (var i=0;i<result.length;i++) {
	var result_detail = result[i].split(",");
	if (result_detail[0]==input_person) {
	  //console.log(result_detail[0]+", "+input_person);
	  return result_detail;
	}
      }
    }
    return "";
  }

  window.posenet_person = posenet_person;

}(window, window.document));
