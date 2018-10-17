﻿function doGet(e) {
  var token = e.parameter.token.replace(/\s+/g,"+");
  var userid = e.parameter.userid;
  var type = e.parameter.type;  
  var text = e.parameter.text+"";
  var packageId = e.parameter.packageId+"";
  var stickerId = e.parameter.stickerId+"";
  var originalContentUrl = e.parameter.originalContentUrl+"";
  var previewImageUrl = e.parameter.previewImageUrl+"";
  var duration = e.parameter.duration;
  var title = e.parameter.title+"";
  var address = e.parameter.address+"";
  var latitude = e.parameter.latitude+"";
  var longitude = e.parameter.longitude+"";
  
  //console.log("token="+token);
  //console.log("userid="+userid);
  //console.log("type="+type);
  //console.log("text="+text);
  //console.log("packageId="+packageId);
  //console.log("stickerId="+stickerId);
  //console.log("originalContentUrl="+originalContentUrl);
  //console.log("previewImageUrl="+previewImageUrl);
  //console.log("duration="+duration);
  //console.log("title="+title);
  //console.log("address="+address);
  //console.log("latitude="+latitude);
  //console.log("longitude="+longitude);
  
  var url = 'https://api.line.me/v2/bot/message/push';
  
  if (type=="text") {
    UrlFetchApp.fetch(url, {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + token,
      },
      'method': 'post',
      'payload': JSON.stringify({
        'to':  userid,
        'messages': [{
          type:'text',
          text:text
        }]
      }),
    });  
  }
  else if (type=="sticker") {
    UrlFetchApp.fetch(url, {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + token,
      },
      'method': 'post',
      'payload': JSON.stringify({
        'to':  userid,
        'messages': [{
          type:'sticker',
          packageId:packageId,
          stickerId:stickerId
        }]
      }),
    });  
  } 
  else if (type=="image") {
    UrlFetchApp.fetch(url, {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + token,
      },
      'method': 'post',
      'payload': JSON.stringify({
        'to':  userid,
        'messages': [{
          type:'image',
          originalContentUrl:originalContentUrl,
          previewImageUrl:previewImageUrl
        }]
      }),
    });  
  }   
  else if (type=="video") {
    UrlFetchApp.fetch(url, {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + token,
      },
      'method': 'post',
      'payload': JSON.stringify({
        'to':  userid,
        'messages': [{
          type:'video',
          originalContentUrl:originalContentUrl,
          previewImageUrl:previewImageUrl
        }]
      }),
    });  
  }   
  else if (type=="audio") {
    UrlFetchApp.fetch(url, {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + token,
      },
      'method': 'post',
      'payload': JSON.stringify({
        'to':  userid,
        'messages': [{
          type:'audio',
          originalContentUrl:originalContentUrl,
          duration:duration
        }]
      }),
    });  
  }    
  else if (type=="location") {
    UrlFetchApp.fetch(url, {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + token,
      },
      'method': 'post',
      'payload': JSON.stringify({
        'to':  userid,
        'messages': [{
          type:'location',
          title:title,
          address:address,
          latitude:latitude,
          longitude:longitude
        }]
      }),
    });  
  }    
  
  var textOutput = ContentService.createTextOutput("OK");
  return textOutput;
}