﻿Blockly.JavaScript['showtext'] = function (block) {
  var size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_ATOMIC);
  size = "'"+size+"px'";
  var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'document.getElementById("showText").style.fontSize='+size+';\ndocument.getElementById("showText").style.color='+color+';\ndocument.getElementById("showText").innerHTML = '+ text +';\n';
  return code;
};

Blockly.JavaScript['linebreak'] = function (block) {
  var code = "'<br>'";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['comment'] = function (block) {
  var text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  if ((text.indexOf("'")==0)&&(text.lastIndexOf("'")==text.length-1))
    text = text.substring(1,text.length-1);
  if ((text.indexOf("(")==0)&&(text.lastIndexOf(")")==text.length-1))
    text = text.substring(1,text.length-1);
  text.replace("/\\\'/g","'");
  var code = '//' + text+'\n';
  return code;
};
