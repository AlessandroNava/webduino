Blockly.JavaScript['trackface_open'] = function (block) {
  var value_left = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_display = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'Trackface_open(' + value_left + ',' + value_top + ',' + value_display + ');\n';
  return code;
};

Blockly.JavaScript['trackface_display'] = function(block) {
  var value_display = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'Trackface_display(' + value_display + ');\n';
  return code;
};

Blockly.JavaScript['trackface_get'] = function(block) {
  var value_property = block.getFieldValue('property_');
  var code = 'Trackface_get("' + value_property + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
