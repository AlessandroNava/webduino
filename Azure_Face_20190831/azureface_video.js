document.write('<div id="region"><div id="faceApi_ResourceName" style="display:none"></div><div id="faceApi_Key" style="display:none"></div><video id="video" width="320" height="240" preload autoplay loop muted></video><canvas id="gamecanvas_azureface"></canvas><br>Frame<select id="frame"><option value="1">show</option><option value="0">hide</option></select>MirrorImage<select id="mirrorimage"><option value="1">yes</option><option value="0">no</option></select>Opacity<select id="opacity"><option value="1">1</option><option value="0.9">0.9</option><option value="0.8">0.8</option><option value="0.7">0.7</option><option value="0.6">0.6</option><option value="0.5">0.5</option><option value="0.4">0.4</option><option value="0.3">0.3</option><option value="0.2">0.2</option><option value="0.1">0.1</option><option value="0">0</option></select><br><div id="result" style="width:320px;color:red"></div></div>');

window.onload = function () {
  var video = document.getElementById('video');
  var canvas = document.getElementById('gamecanvas_azureface'); 
  var context = canvas.getContext('2d');
  var result = document.getElementById('result');
  var faceApi_result = "";

	video.style.visibility="hidden";
	video.style.position="absolute";
	navigator.mediaDevices
	.getUserMedia({
	audio: false,
	video: {
	  facingMode: "user"
	}
	})
	.then(stream => {
	video.srcObject = stream
	video.onloadedmetadata = () => {       
	  video.play();
	  canvas.setAttribute("width", video.width);
	  canvas.setAttribute("height", video.height); 
	  setTimeout(function(){ DetectVideo(); }, 2000);
	}
	})   
	                    
  function DetectVideo() {

    var mirrorimage = Number(document.getElementById("mirrorimage").value);
    if (mirrorimage==1) {
      context.translate((canvas.width + video.width) / 2, 0);
      context.scale(-1, 1);
      context.drawImage(video, 0, 0, video.width, video.height);
      context.setTransform(1, 0, 0, 1, 0, 0);
    }
    else
      context.drawImage(video, 0, 0, video.width, video.height);
    document.getElementById("region").style.opacity = Number(document.getElementById("opacity").value);
 
    var faceApi_key = document.getElementById('faceApi_Key').innerHTML ;
    var faceApi_url = document.getElementById('faceApi_ResourceName').innerHTML;
    if (faceApi_key == ""||faceApi_url == "") return;	  

	const dataURL = canvas.toDataURL('image/png');
	const blobBin = atob(dataURL.split(',')[1]);
	const mime = dataURL.split(',')[0].split(':')[1].split(';')[0];
	const arr = [];
	for (let i = 0; i < blobBin.length; i++) {
		arr.push(blobBin.charCodeAt(i));
	}
	const u8 = new Uint8Array(arr);
	const imagefile = new Blob([u8], { type: mime });

    // Perform the REST API call.
	$.ajax({
	    url: faceApi_url,
	    // Request headers.
	    beforeSend: function(xhrObj){
		xhrObj.setRequestHeader("Content-Type","application/octet-stream");
		xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", faceApi_key);
		xhrObj.setRequestHeader("Content-Length", imagefile.length);		    
	    },
	    type: "POST",
	    // Request body.
	    data: imagefile,
	    processData: false
	})
	.done(function(data) {
	    result.innerHTML = JSON.stringify(data);
	    setTimeout(function(){ DetectVideo(); }, 100);
		
	})
	.fail(function(jqXHR, textStatus, errorThrown) {
	    // Display error message.
	    var errorString = (errorThrown === "") ?
		"Error. " : errorThrown + " (" + jqXHR.status + "): ";
	    errorString += (jqXHR.responseText === "") ?
		"" : (jQuery.parseJSON(jqXHR.responseText).message) ?
		    jQuery.parseJSON(jqXHR.responseText).message :
			jQuery.parseJSON(jqXHR.responseText).error.message;
	    result.innerHTML = errorString;
	    setTimeout(function(){ DetectVideo(); }, 100);
	});
	  
	  

    /*
	var frame = Number(document.getElementById("frame").value);
	if (frame==1) {
	  context.lineWidth = "3";
	  context.strokeStyle = "#00FFFF";
	  context.beginPath();
	  context.rect(x, y, width, height);
	  context.stroke(); 
	  context.lineWidth = "2";
	  context.fillStyle = "red";
	  context.font = "12px Arial";
	  context.fillText(predictions[i].class, x, y);
	}
    */
  }
}
