// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

 function coco_ssd_object(input_object){
    var result = document.getElementById("result").innerHTML.split("<br>");
    if (result.length>0) {
      for (var i=0;i<result.length;i++) {
	var result_detail = result[i].split(",");
	if (result_detail[0]==input_object) {
	  return result_detail;
	}
      }
    }
    return "";
  }
	
  function coco_ssd_video(input_width, input_height, input_result, input_frame, input_mirrorimage) {
    document.getElementById('video').width = input_width;
    document.getElementById('video').height = input_height;
    document.getElementById('result').style.display = input_result;
    document.getElementById('frame').value = input_frame;
    document.getElementById('mirrorimage').value = input_mirrorimage;
  }	

  window.coco_ssd_object = coco_ssd_object;
  window.coco_ssd_video = coco_ssd_video;

}(window, window.document));
