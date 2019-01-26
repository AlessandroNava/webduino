Blockly.JavaScript['esp8266_system'] = function(block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cmd = block.getFieldValue('cmd');
  var value_P1 = Blockly.JavaScript.valueToCode(block, 'P1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P2 = Blockly.JavaScript.valueToCode(block, 'P2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "esp8266_sendCommand("+value_url+",'"+value_cmd+"',"+value_P1+","+value_P2+",'','','','','','','');\n";
  return code;
};

Blockly.JavaScript['esp8266_custom'] = function(block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P1 = Blockly.JavaScript.valueToCode(block, 'P1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P2 = Blockly.JavaScript.valueToCode(block, 'P2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P3 = Blockly.JavaScript.valueToCode(block, 'P3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P4 = Blockly.JavaScript.valueToCode(block, 'P4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P5 = Blockly.JavaScript.valueToCode(block, 'P5', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P6 = Blockly.JavaScript.valueToCode(block, 'P6', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P7 = Blockly.JavaScript.valueToCode(block, 'P7', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P8 = Blockly.JavaScript.valueToCode(block, 'P8', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P9 = Blockly.JavaScript.valueToCode(block, 'P9', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "esp8266_sendCommand("+value_url+","+value_cmd+","+value_P1+","+value_P2+","+value_P3+","+value_P4+","+value_P5+","+value_P6+","+value_P7+","+value_P8+","+value_P9+");\n";
  return code;
};

Blockly.JavaScript['esp8266_car'] = function(block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P1 = Blockly.JavaScript.valueToCode(block, 'P1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P2 = Blockly.JavaScript.valueToCode(block, 'P2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P3 = Blockly.JavaScript.valueToCode(block, 'P3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P4 = Blockly.JavaScript.valueToCode(block, 'P4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P5 = Blockly.JavaScript.valueToCode(block, 'P5', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P6 = Blockly.JavaScript.valueToCode(block, 'P6', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P7 = Blockly.JavaScript.valueToCode(block, 'P7', Blockly.JavaScript.ORDER_ATOMIC);  
  var dropdown_P8 = block.getFieldValue('P8');
  var code = "esp8266_sendCommand("+value_url+","+value_cmd+","+value_P1+","+value_P2+","+value_P3+","+value_P4+","+value_P5+","+value_P6+","+value_P7+",'"+dropdown_P8+"','');\n";
  return code;
};

Blockly.JavaScript['esp8266_getresponse'] = function(block) {
  var code = "esp8266_getResponse()";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['esp8266_cmd'] = function(block) {
  var value_cmd = block.getFieldValue('cmd');
  var code = "'"+value_cmd+"'";
  return [code, Blockly.JavaScript.ORDER_NONE];
};
