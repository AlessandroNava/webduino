// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

'use strict';
  
var region = document.getElementById('region');
var video = document.getElementById('video');
var canvas = document.getElementById('gamecanvas_azurefacedetection'); 
var context = canvas.getContext('2d');
var result = document.getElementById('result');
var faceApi_key = "";
var faceApi_url = "";  
var faceApi_result = ""; 
var faceApi_returnResult = "";
var showTime = 3000;

function azurefacedetection_settings(input_resourceName, input_key){
  if (input_resourceName.toLowerCase().indexOf("http")==0)
    faceApi_url = input_resourceName;
  else
    faceApi_url = "https://" + input_resourceName + "/face/v1.0/detect?returnFaceAttributes=age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise&returnFaceLandmarks=true";
  faceApi_key = input_key;
}

function azurefacedetection_detect(input_showtime){
  showTime = input_showtime*1000;
  result.innerHTML = "";
  faceApi_result = "";
  faceApi_returnResult = "";
  DetectVideo();
}
  
function azurefacedetection_get(){
  return faceApi_returnResult.split("<br>");
}
	
function azurefacedetection_get_persons(){
  if (faceApi_returnResult=="nobody"||faceApi_returnResult=="")
    return 0;
  else {
    return faceApi_returnResult.split("<br>").length;
  }
}

function azurefacedetection_video(input_width, input_height, input_result, input_opacity) {
  video.width = input_width;
  video.height = input_height;
  result.style.display = input_result;
  region.style.opacity = input_opacity;
}
  
function DetectVideo() {
  if (faceApi_key == ""||faceApi_url == "") return;    

  video.style.display = "none";
  canvas.style.display = "block";
  context.drawImage(video, 0, 0, video.width, video.height);
  const DataURL = canvas.toDataURL('image/png');
  const Binary = atob(DataURL.split(',')[1]);
  const mime = DataURL.split(',')[0].split(':')[1].split(';')[0];
  const Unicode = [];
  for (let i = 0; i < Binary.length; i++) {
    Unicode.push(Binary.charCodeAt(i));
  }
  const Uint8 = new Uint8Array(Unicode);
  const photo = new Blob([Uint8], { type: mime });

  // Perform the REST API call.
  $.ajax({
    url: faceApi_url,
    beforeSend: function(xhrObj){
    xhrObj.setRequestHeader("Content-Type","application/octet-stream");
    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", faceApi_key);     
    },
    type: "POST",
    data: photo,
    processData: false
  })
  .done(function(json) {
    json = eval(json);	  
    result.innerHTML = "";
    faceApi_result = "";
    faceApi_returnResult = "";

	try {
		for (var i in json) 
		{
		  var max="";
		  var maxName="";
		  
		  faceApi_result += i;      
		  faceApi_result += ",";	    
		  faceApi_result += json[i]["faceId"]; 
		  faceApi_result += ",";
		  faceApi_result += json[i]["faceRectangle"]["top"];
		  faceApi_result += ",";
		  faceApi_result += json[i]["faceRectangle"]["left"];
		  faceApi_result += ",";	    
		  faceApi_result += json[i]["faceRectangle"]["width"];
		  faceApi_result += ",";	    
		  faceApi_result += json[i]["faceRectangle"]["height"];
		  faceApi_result += ",";	    
		  faceApi_result += json[i]["faceAttributes"]["gender"]; 
		  faceApi_result += ",";	    
		  faceApi_result += json[i]["faceAttributes"]["age"]; 

			
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
		  faceApi_result += ",";	    
		  faceApi_result += maxName;
			
		  context.lineWidth = "3";
		  context.strokeStyle = "red";
		  context.beginPath();
		  context.rect(json[i]["faceRectangle"]["left"], json[i]["faceRectangle"]["top"], json[i]["faceRectangle"]["width"], json[i]["faceRectangle"]["height"]);
		  context.stroke(); 
		  context.font = "16px Arial";
		  context.fillStyle = "#99FF99";
		  context.fillText(json[i]["faceAttributes"]["gender"]+", "+json[i]["faceAttributes"]["age"]+", "+maxName, json[i]["faceRectangle"]["left"],  json[i]["faceRectangle"]["top"]);     			
			
		  faceApi_result += ",";	    
		  faceApi_result += json[i]["faceAttributes"]["smile"]; 
		  faceApi_result += ",";	    
		  faceApi_result += json[i]["faceAttributes"]["headPose"]["pitch"]+"_"+json[i]["faceAttributes"]["headPose"]["roll"]+"_"+json[i]["faceAttributes"]["headPose"]["yaw"]; 
		  faceApi_result += ",";	    
		  faceApi_result += json[i]["faceAttributes"]["facialHair"]["moustache"]+"_"+json[i]["faceAttributes"]["facialHair"]["beard"]+"_"+json[i]["faceAttributes"]["facialHair"]["sideburns"]; 

		  faceApi_result += ",";	    
		  faceApi_result += json[i]["faceAttributes"]["glasses"]; 
		  faceApi_result += ",";	    
		  faceApi_result += json[i]["faceAttributes"]["blur"]["blurLevel"]+"_"+json[i]["faceAttributes"]["blur"]["value"]; 	
		  faceApi_result += ",";	    
		  faceApi_result += json[i]["faceAttributes"]["exposure"]["exposureLevel"]+"_"+json[i]["faceAttributes"]["exposure"]["value"];
		  faceApi_result += ",";	    
		  faceApi_result += json[i]["faceAttributes"]["noise"]["noiseLevel"]+"_"+json[i]["faceAttributes"]["noise"]["value"]; 			
		  faceApi_result += ",";	    
		  faceApi_result += json[i]["faceAttributes"]["makeup"]["eyeMakeup"]+"_"+json[i]["faceAttributes"]["makeup"]["lipMakeup"]; 
		  faceApi_result += ",";	    
		  faceApi_result += json[i]["faceAttributes"]["accessories"][0]["type"]+"_"+json[i]["faceAttributes"]["accessories"][0]["confidence"]; 	
		  faceApi_result += ",";	    
		  faceApi_result += json[i]["faceAttributes"]["occlusion"]["foreheadOccluded"]+"_"+json[i]["faceAttributes"]["occlusion"]["eyeOccluded"]+"_"+json[i]["faceAttributes"]["occlusion"]["mouthOccluded"]; 			
		  
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
			
		  faceApi_result += ",";	    
		  faceApi_result += json[i]["faceAttributes"]["hair"]["bald"]+"_"+json[i]["faceAttributes"]["hair"]["invisible"]+"_"+maxName+"_"+max; 
		
		  if (i<json.length-1) faceApi_result += "<br>";
		}
		
	}
	catch (e) {
          faceApi_result = "";
	  console.log(e);
	}


    if (faceApi_result=="") faceApi_result = "nobody";
    console.log(JSON.stringify(json));
    faceApi_returnResult = faceApi_result;
    result.innerHTML = JSON.stringify(json);
    setTimeout(function(){canvas.style.display = "none"; video.style.display = "block";}, showTime);
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    faceApi_result = "nobody";
    faceApi_returnResult = faceApi_result;	  
    result.innerHTML = "nobody";
    setTimeout(function(){canvas.style.display = "none"; video.style.display = "block";}, 0);
  });
}

window.azurefacedetection_settings = azurefacedetection_settings;
window.azurefacedetection_detect = azurefacedetection_detect;
window.azurefacedetection_get = azurefacedetection_get;
window.azurefacedetection_get_persons = azurefacedetection_get_persons;
window.azurefacedetection_video = azurefacedetection_video;
window.DetectVideo = DetectVideo;

}(window, window.document));
