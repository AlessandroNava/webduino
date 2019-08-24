Blockly.JavaScript['coco_ssd_object'] = function(block) { 
  var value_object_ = block.getFieldValue('object_');
  var code = 'coco_ssd_object("' + value_object_ + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['coco_ssd_video'] = function(block) { 
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_result_ = block.getFieldValue('result_');
  var value_frame_ = block.getFieldValue('frame_');
  var value_mirrorimage_ = block.getFieldValue('mirrorimage_');
  var code = 'posenet_video(' + value_width_ + ',' + value_height_ + ',"' + value_result_ + '","' + value_frame_ + '","' + value_mirrorimage_ + '");';
  return code;
};
