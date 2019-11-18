// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

'use strict';
  
var region = document.getElementById('region');
var video = document.getElementById('video');
var canvas = document.getElementById('gamecanvas_azurefacedetection'); 
var context = canvas.getContext('2d');
var result = document.getElementById('result');
var faceDetection_key = "";
var faceDetection_url = "";  
var faceDetection_result = ""; 
var faceDetection_returnResult = "";
var imageUrl = "";	
var showTime = 3000;

function azurefacedetection_settings(input_resourceName, input_key){
  if (input_resourceName.toLowerCase().indexOf("http")==0)
    faceDetection_url = input_resourceName;
  else
    faceDetection_url = "https://" + input_resourceName + "/face/v1.0/detect?returnFaceAttributes=age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise&returnFaceLandmarks=true";
  faceDetection_key = input_key;
}

function azurefacedetection_detect(input_showtime){
  imageUrl = "";
  showTime = input_showtime*1000;
  result.innerHTML = "";
  faceDetection_result = "";
  faceDetection_returnResult = "";
  DetectVideo();
}
	
function azurefacedetection_detect_url(input_url,input_showtime){
  imageUrl = input_url;
  showTime = input_showtime*1000;
  result.innerHTML = "";
  faceDetection_result = "";
  faceDetection_returnResult = "";
  DetectVideo();
}
  
function azurefacedetection_get(){
  return faceDetection_returnResult.split("<br>");
}
		
function azurefacedetection_get_persondata(input_index){
  if (faceDetection_returnResult=="nobody"||faceDetection_returnResult=="")
    return "";
  else {
    if (faceDetection_returnResult.split("<br>")[input_index-1])
      return faceDetection_returnResult.split("<br>")[input_index-1].split(",");
    else
      return "";
  }
}
	
function azurefacedetection_get_persons(){
  if (faceDetection_returnResult=="nobody"||faceDetection_returnResult=="")
    return 0;
  else {
    return faceDetection_returnResult.split("<br>").length;
  }
}

function azurefacedetection_video(input_width, input_height, input_result, input_opacity) {
  video.width = input_width;
  video.height = input_height;
  result.style.display = input_result;
  region.style.opacity = input_opacity;
}
  
function DetectVideo() {
  if (faceDetection_key == ""||faceDetection_url == "") return;    

  video.style.display = "none";
  canvas.style.display = "block";
  if (imageUrl=="") {
    context.drawImage(video, 0, 0, video.width, video.height);
    const DataURL = canvas.toDataURL('image/png');
    const Binary = atob(DataURL.split(',')[1]);
    const Mime = DataURL.split(',')[0].split(':')[1].split(';')[0];
    const Unicode = [];
    for (let i = 0; i < Binary.length; i++) {
      Unicode.push(Binary.charCodeAt(i));
    }
    var Uint8 = new Uint8Array(Unicode);
    var photo = new Blob([Uint8],{type:Mime});
    var processData = false;
    var contentType = "application/octet-stream";
  }
  else {
    var photo = '{"url": ' + '"' + imageUrl + '"}';
    var processData = true;
    var contentType = "application/json";
    var img = document.createElement("img");
    img.setAttribute("src", imageUrl);
    img.setAttribute("width", video.width);
    img.setAttribute("height", video.height);  
    img.onload = function(event) {
      context.drawImage(img, 0, 0, img.width, img.height);
      img.remove();
    }
  }

  // Perform the REST API call.
  $.ajax({
    url: faceDetection_url,
    beforeSend: function(xhrObj){
    xhrObj.setRequestHeader("Content-Type",contentType);
    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", faceDetection_key);     
    },
    type: "POST",
    data: photo,
    processData: processData
  })
  .done(function(json) {
    json = eval(json);	  
    result.innerHTML = "";
    faceDetection_result = "";
    faceDetection_returnResult = "";

	try {
		for (var i in json) 
		{
		  var max="";
		  var maxName="";
		  
		  faceDetection_result += i;      
		  faceDetection_result += ",";	    
		  faceDetection_result += json[i]["faceId"]; 
		  faceDetection_result += ",";
		  faceDetection_result += json[i]["faceRectangle"]["top"];
		  faceDetection_result += ",";
		  faceDetection_result += json[i]["faceRectangle"]["left"];
		  faceDetection_result += ",";	    
		  faceDetection_result += json[i]["faceRectangle"]["width"];
		  faceDetection_result += ",";	    
		  faceDetection_result += json[i]["faceRectangle"]["height"];
		  faceDetection_result += ",";	    
		  faceDetection_result += json[i]["faceAttributes"]["gender"]; 
		  faceDetection_result += ",";	    
		  faceDetection_result += json[i]["faceAttributes"]["age"]; 

			
		  if (Number(json[i]["faceAttributes"]["emotion"]["anger"])>Number(max)) { 
			maxName="anger";
			max = json[i]["faceAttributes"]["emotion"]["anger"];
		  }
		  if (Number(json[i]["faceAttributes"]["emotion"]["contempt"])>Number(max)) { 
			maxName="contempt";
			max = json[i]["faceAttributes"]["emotion"]["contempt"];
		  }      
		  if (Number(json[i]["faceAttributes"]["emotion"]["disgust"])>Number(max)) { 
			maxName="disgust";
			max = json[i]["faceAttributes"]["emotion"]["disgust"];
		  }      
		  if (Number(json[i]["faceAttributes"]["emotion"]["fear"])>Number(max)) { 
			maxName="fear";
			max = json[i]["faceAttributes"]["emotion"]["fear"];
		  }      
		  if (Number(json[i]["faceAttributes"]["emotion"]["happiness"])>Number(max)) { 
			maxName="happiness";
			max = json[i]["faceAttributes"]["emotion"]["happiness"];
		  }      
		  if (Number(json[i]["faceAttributes"]["emotion"]["neutral"])>Number(max)) { 
			maxName="neutral";
			max = json[i]["faceAttributes"]["emotion"]["neutral"];
		  }      
		  if (Number(json[i]["faceAttributes"]["emotion"]["sadness"])>Number(max)) { 
			maxName="sadness";
			max = json[i]["faceAttributes"]["emotion"]["sadness"];
		  }      
		  if (Number(json[i]["faceAttributes"]["emotion"]["surprise"])>Number(max)) { 
			maxName="surprise";
			max = json[i]["faceAttributes"]["emotion"]["surprise"];
		  } 
		  faceDetection_result += ",";	    
		  faceDetection_result += maxName;
			
		  context.lineWidth = "3";
		  context.strokeStyle = "red";
		  context.beginPath();
		  context.rect(json[i]["faceRectangle"]["left"], json[i]["faceRectangle"]["top"], json[i]["faceRectangle"]["width"], json[i]["faceRectangle"]["height"]);
		  context.stroke(); 
		  context.font = "16px Arial";
		  context.fillStyle = "#99FF99";
		  context.fillText(json[i]["faceAttributes"]["gender"]+", "+json[i]["faceAttributes"]["age"]+", "+maxName, json[i]["faceRectangle"]["left"],  json[i]["faceRectangle"]["top"]);     			
			
		  faceDetection_result += ",";	    
		  faceDetection_result += json[i]["faceAttributes"]["smile"]; 
		  faceDetection_result += ",";	    
		  faceDetection_result += json[i]["faceAttributes"]["headPose"]["pitch"]+"_"+json[i]["faceAttributes"]["headPose"]["roll"]+"_"+json[i]["faceAttributes"]["headPose"]["yaw"]; 
		  faceDetection_result += ",";	    
		  faceDetection_result += json[i]["faceAttributes"]["facialHair"]["moustache"]+"_"+json[i]["faceAttributes"]["facialHair"]["beard"]+"_"+json[i]["faceAttributes"]["facialHair"]["sideburns"]; 

		  faceDetection_result += ",";	    
		  faceDetection_result += json[i]["faceAttributes"]["glasses"]; 
		  faceDetection_result += ",";	    
		  faceDetection_result += json[i]["faceAttributes"]["blur"]["blurLevel"]+"_"+json[i]["faceAttributes"]["blur"]["value"]; 	
		  faceDetection_result += ",";	    
		  faceDetection_result += json[i]["faceAttributes"]["exposure"]["exposureLevel"]+"_"+json[i]["faceAttributes"]["exposure"]["value"];
		  faceDetection_result += ",";	    
		  faceDetection_result += json[i]["faceAttributes"]["noise"]["noiseLevel"]+"_"+json[i]["faceAttributes"]["noise"]["value"]; 			
		  faceDetection_result += ",";	    
		  faceDetection_result += json[i]["faceAttributes"]["makeup"]["eyeMakeup"]+"_"+json[i]["faceAttributes"]["makeup"]["lipMakeup"]; 
		  faceDetection_result += ",";
		  if (json[i]["faceAttributes"]["accessories"][0])
		    faceDetection_result += json[i]["faceAttributes"]["accessories"][0]["type"]+"_"+json[i]["faceAttributes"]["accessories"][0]["confidence"]; 	
		  else 
		    faceDetection_result += "null_0"; 	    
		  faceDetection_result += ",";
		  faceDetection_result += json[i]["faceAttributes"]["occlusion"]["foreheadOccluded"]+"_"+json[i]["faceAttributes"]["occlusion"]["eyeOccluded"]+"_"+json[i]["faceAttributes"]["occlusion"]["mouthOccluded"]; 			
		  
		  max=json[i]["faceAttributes"]["hair"]["hairColor"][0]["confidence"];
		  maxName=json[i]["faceAttributes"]["hair"]["hairColor"][0]["color"];
			
		  if (Number(json[i]["faceAttributes"]["hair"]["hairColor"][1]["confidence"])>Number(max)) {
			maxName = json[i]["faceAttributes"]["hair"]["hairColor"][1]["color"];
			max = json[i]["faceAttributes"]["hair"]["hairColor"][1]["confidence"];  
		  }
		  if (Number(json[i]["faceAttributes"]["hair"]["hairColor"][2]["confidence"])>Number(max)) {
			maxName = json[i]["faceAttributes"]["hair"]["hairColor"][2]["color"];
			max = json[i]["faceAttributes"]["hair"]["hairColor"][2]["confidence"];  
		  }
		  if (Number(json[i]["faceAttributes"]["hair"]["hairColor"][3]["confidence"])>Number(max)) {
			maxName = json[i]["faceAttributes"]["hair"]["hairColor"][3]["color"];
			max = json[i]["faceAttributes"]["hair"]["hairColor"][3]["confidence"];  
		  }
		  if (Number(json[i]["faceAttributes"]["hair"]["hairColor"][4]["confidence"])>Number(max)) {
			maxName = json[i]["faceAttributes"]["hair"]["hairColor"][4]["color"];
			max = json[i]["faceAttributes"]["hair"]["hairColor"][4]["confidence"];  
		  }
		  if (Number(json[i]["faceAttributes"]["hair"]["hairColor"][5]["confidence"])>Number(max)) {
			maxName = json[i]["faceAttributes"]["hair"]["hairColor"][5]["color"];
			max = json[i]["faceAttributes"]["hair"]["hairColor"][5]["confidence"];  
		  }				
			
		  faceDetection_result += ",";	    
		  faceDetection_result += json[i]["faceAttributes"]["hair"]["bald"]+"_"+json[i]["faceAttributes"]["hair"]["invisible"]+"_"+maxName+"_"+max; 
		
		  if (i<json.length-1) faceDetection_result += "<br>";
		}
		
	}
	catch (e) {
          faceDetection_result = "";
	  console.log(e);
	}


    if (faceDetection_result=="") faceDetection_result = "nobody";
    console.log(JSON.stringify(json));
    faceDetection_returnResult = faceDetection_result;
    result.innerHTML = JSON.stringify(json);
    setTimeout(function(){canvas.style.display = "none"; video.style.display = "block";}, showTime);
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    faceDetection_result = "nobody";
    faceDetection_returnResult = faceDetection_result;	  
    result.innerHTML = "nobody";
    setTimeout(function(){canvas.style.display = "none"; video.style.display = "block";}, 0);
  });
}

window.azurefacedetection_settings = azurefacedetection_settings;
window.azurefacedetection_detect = azurefacedetection_detect;
window.azurefacedetection_detect_url = azurefacedetection_detect_url;
window.azurefacedetection_get = azurefacedetection_get;
window.azurefacedetection_get_persondata = azurefacedetection_get_persondata;	
window.azurefacedetection_get_persons = azurefacedetection_get_persons;
window.azurefacedetection_video = azurefacedetection_video;
window.DetectVideo = DetectVideo;

}(window, window.document));
