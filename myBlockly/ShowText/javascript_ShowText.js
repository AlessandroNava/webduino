Blockly.JavaScript['showtext'] = function (block) {
  var size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_ATOMIC);
  var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);  
  if ((text.indexOf("'")==0)&&(text.lastIndexOf("'")==text.length-1))
    text = text.substring(1,text.length-1);
  var code = 'document.getElementById("showText").innerHTML = "<font size='+size+' color='+color+'>'+ text +'</font>";\n';
  return code;
};
