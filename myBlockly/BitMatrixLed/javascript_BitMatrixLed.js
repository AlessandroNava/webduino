Blockly.JavaScript['BitMatrixLed_host'] = function (block) {
  var value_host_ = Blockly.JavaScript.valueToCode(block, 'host_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BitMatrixLed_host(' + value_host_ + ');\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_showstate'] = function(block) {
  var value_showstate_ = block.getFieldValue('value_showstate_');
  var code = 'BitMatrixLed_showstate('+value_showstate_+');\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_char'] = function(block) {
  var value_char_ = Blockly.JavaScript.valueToCode(block, 'value_char_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BitMatrixLed_char('+ value_char_ +');\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_marquee_time'] = function(block) {
  var value_marquee_time_ = Blockly.JavaScript.valueToCode(block, 'value_marquee_time_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BitMatrixLed_marquee_time('+ value_marquee_time_ +');\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_marquee'] = function(block) {
  var value_marquee_ = Blockly.JavaScript.valueToCode(block, 'value_marquee_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BitMatrixLed_marquee('+ value_marquee_ +');\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_marquee_once'] = function(block) {
  var value_marquee_ = Blockly.JavaScript.valueToCode(block, 'value_marquee_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_times_ = Blockly.JavaScript.valueToCode(block, 'value_times_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BitMatrixLed_marquee_times('+ value_marquee_ +','+value_times_+');\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_marquee_color'] = function(block) {
  var value_marquee_ = Blockly.JavaScript.valueToCode(block, 'value_marquee_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BitMatrixLed_marquee_color('+ value_marquee_ +');\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_marquee_color_once'] = function(block) {
  var value_marquee_ = Blockly.JavaScript.valueToCode(block, 'value_marquee_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BitMatrixLed_marquee_color_once('+ value_marquee_ +');\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_marquee_degree'] = function(block) {
  var value_marquee_direction_ = block.getFieldValue('value_marquee_direction_');
  var value_marquee_degree_ = Blockly.JavaScript.valueToCode(block, 'value_marquee_degree_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BitMatrixLed_marquee_degree('+ value_marquee_direction_ +','+ value_marquee_degree_ +');\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_marquee_color_degree'] = function(block) {
  var value_marquee_direction_ = block.getFieldValue('value_marquee_direction_');
  var value_marquee_degree_ = Blockly.JavaScript.valueToCode(block, 'value_marquee_degree_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BitMatrixLed_marquee_color_degree('+ value_marquee_direction_ +','+ value_marquee_degree_ +');\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_marquee_stop'] = function(block) {
  var code = 'BitMatrixLed_marquee_stop();\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_marquee_resume'] = function(block) {
  var code = 'BitMatrixLed_marquee_resume();\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_marquee_reverse'] = function(block) {
  var code = 'BitMatrixLed_marquee_reverse();\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_color'] = function(block) {
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'value_color_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BitMatrixLed_color('+ value_color_ +');\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_texttocode'] = function(block) {
  var value_text_ = Blockly.JavaScript.valueToCode(block, 'value_text_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BitMatrixLed_texttocode('+value_text_+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['BitMatrixLed_sample'] = function(block) {
  var value_sample_ = block.getFieldValue('value_sample_');
  var code = 'BitMatrixLed_sample("'+ value_sample_ +'");\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_code'] = function(block) {
  var value_code_ = Blockly.JavaScript.valueToCode(block, 'value_code_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BitMatrixLed_code('+ value_code_ +');\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_matrix'] = function(block) {
  var L01 = (block.getFieldValue('L01') == 'TRUE')?"1":"0";
  var L02 = (block.getFieldValue('L02') == 'TRUE')?"1":"0";
  var L03 = (block.getFieldValue('L03') == 'TRUE')?"1":"0";
  var L04 = (block.getFieldValue('L04') == 'TRUE')?"1":"0";
  var L05 = (block.getFieldValue('L05') == 'TRUE')?"1":"0";
  var L06 = (block.getFieldValue('L06') == 'TRUE')?"1":"0";
  var L07 = (block.getFieldValue('L07') == 'TRUE')?"1":"0";
  var L08 = (block.getFieldValue('L08') == 'TRUE')?"1":"0";
  var L09 = (block.getFieldValue('L09') == 'TRUE')?"1":"0";
  var L10 = (block.getFieldValue('L10') == 'TRUE')?"1":"0";
  var L11 = (block.getFieldValue('L11') == 'TRUE')?"1":"0";
  var L12 = (block.getFieldValue('L12') == 'TRUE')?"1":"0";
  var L13 = (block.getFieldValue('L13') == 'TRUE')?"1":"0";
  var L14 = (block.getFieldValue('L14') == 'TRUE')?"1":"0";
  var L15 = (block.getFieldValue('L15') == 'TRUE')?"1":"0";
  var L16 = (block.getFieldValue('L16') == 'TRUE')?"1":"0";
  var L17 = (block.getFieldValue('L17') == 'TRUE')?"1":"0";
  var L18 = (block.getFieldValue('L18') == 'TRUE')?"1":"0";
  var L19 = (block.getFieldValue('L19') == 'TRUE')?"1":"0";
  var L20 = (block.getFieldValue('L20') == 'TRUE')?"1":"0";
  var L21 = (block.getFieldValue('L21') == 'TRUE')?"1":"0";
  var L22 = (block.getFieldValue('L22') == 'TRUE')?"1":"0";
  var L23 = (block.getFieldValue('L23') == 'TRUE')?"1":"0";
  var L24 = (block.getFieldValue('L24') == 'TRUE')?"1":"0";
  var L25 = (block.getFieldValue('L25') == 'TRUE')?"1":"0";
  var code = 'BitMatrixLed_matrix("'+L01+L02+L03+L04+L05+L06+L07+L08+L09+L10+L11+L12+L13+L14+L15+L16+L17+L18+L19+L20+L21+L22+L23+L24+L25+'");\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_matrix_color'] = function(block) {
  var L01 = block.getFieldValue('L01');
  var L02 = block.getFieldValue('L02');
  var L03 = block.getFieldValue('L03');
  var L04 = block.getFieldValue('L04');
  var L05 = block.getFieldValue('L05');
  var L06 = block.getFieldValue('L06');
  var L07 = block.getFieldValue('L07');
  var L08 = block.getFieldValue('L08');
  var L09 = block.getFieldValue('L09');
  var L10 = block.getFieldValue('L10');
  var L11 = block.getFieldValue('L11');
  var L12 = block.getFieldValue('L12');
  var L13 = block.getFieldValue('L13');
  var L14 = block.getFieldValue('L14');
  var L15 = block.getFieldValue('L15');
  var L16 = block.getFieldValue('L16');
  var L17 = block.getFieldValue('L17');
  var L18 = block.getFieldValue('L18');
  var L19 = block.getFieldValue('L19');
  var L20 = block.getFieldValue('L20');
  var L21 = block.getFieldValue('L21');
  var L22 = block.getFieldValue('L22');
  var L23 = block.getFieldValue('L23');
  var L24 = block.getFieldValue('L24');
  var L25 = block.getFieldValue('L25');
  var code = 'BitMatrixLed_matrix_color(["'+L01+'","'+L02+'","'+L03+'","'+L04+'","'+L05+'","'+L06+'","'+L07+'","'+L08+'","'+L09+'","'+L10+'","'+L11+'","'+L12+'","'+L13+'","'+L14+'","'+L15+'","'+L16+'","'+L17+'","'+L18+'","'+L19+'","'+L20+'","'+L21+'","'+L22+'","'+L23+'","'+L24+'","'+L25+'"]);\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_matrixcode'] = function(block) {
  var L01 = (block.getFieldValue('L01') == 'TRUE')?"1":"0";
  var L02 = (block.getFieldValue('L02') == 'TRUE')?"1":"0";
  var L03 = (block.getFieldValue('L03') == 'TRUE')?"1":"0";
  var L04 = (block.getFieldValue('L04') == 'TRUE')?"1":"0";
  var L05 = (block.getFieldValue('L05') == 'TRUE')?"1":"0";
  var L06 = (block.getFieldValue('L06') == 'TRUE')?"1":"0";
  var L07 = (block.getFieldValue('L07') == 'TRUE')?"1":"0";
  var L08 = (block.getFieldValue('L08') == 'TRUE')?"1":"0";
  var L09 = (block.getFieldValue('L09') == 'TRUE')?"1":"0";
  var L10 = (block.getFieldValue('L10') == 'TRUE')?"1":"0";
  var L11 = (block.getFieldValue('L11') == 'TRUE')?"1":"0";
  var L12 = (block.getFieldValue('L12') == 'TRUE')?"1":"0";
  var L13 = (block.getFieldValue('L13') == 'TRUE')?"1":"0";
  var L14 = (block.getFieldValue('L14') == 'TRUE')?"1":"0";
  var L15 = (block.getFieldValue('L15') == 'TRUE')?"1":"0";
  var L16 = (block.getFieldValue('L16') == 'TRUE')?"1":"0";
  var L17 = (block.getFieldValue('L17') == 'TRUE')?"1":"0";
  var L18 = (block.getFieldValue('L18') == 'TRUE')?"1":"0";
  var L19 = (block.getFieldValue('L19') == 'TRUE')?"1":"0";
  var L20 = (block.getFieldValue('L20') == 'TRUE')?"1":"0";
  var L21 = (block.getFieldValue('L21') == 'TRUE')?"1":"0";
  var L22 = (block.getFieldValue('L22') == 'TRUE')?"1":"0";
  var L23 = (block.getFieldValue('L23') == 'TRUE')?"1":"0";
  var L24 = (block.getFieldValue('L24') == 'TRUE')?"1":"0";
  var L25 = (block.getFieldValue('L25') == 'TRUE')?"1":"0";
  var code = '"'+L01+L02+L03+L04+L05+L06+L07+L08+L09+L10+L11+L12+L13+L14+L15+L16+L17+L18+L19+L20+L21+L22+L23+L24+L25+'"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['BitMatrixLed_matrixcode_line'] = function(block) {
  var L01 = (block.getFieldValue('L01') == 'TRUE')?"1":"0";
  var L02 = (block.getFieldValue('L02') == 'TRUE')?"1":"0";
  var L03 = (block.getFieldValue('L03') == 'TRUE')?"1":"0";
  var L04 = (block.getFieldValue('L04') == 'TRUE')?"1":"0";
  var L05 = (block.getFieldValue('L05') == 'TRUE')?"1":"0";
  var code = '"'+L01+L02+L03+L04+L05+'"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['BitMatrixLed_matrixcode_color'] = function(block) {
  var L01 = block.getFieldValue('L01');
  var L02 = block.getFieldValue('L02');
  var L03 = block.getFieldValue('L03');
  var L04 = block.getFieldValue('L04');
  var L05 = block.getFieldValue('L05');
  var L06 = block.getFieldValue('L06');
  var L07 = block.getFieldValue('L07');
  var L08 = block.getFieldValue('L08');
  var L09 = block.getFieldValue('L09');
  var L10 = block.getFieldValue('L10');
  var L11 = block.getFieldValue('L11');
  var L12 = block.getFieldValue('L12');
  var L13 = block.getFieldValue('L13');
  var L14 = block.getFieldValue('L14');
  var L15 = block.getFieldValue('L15');
  var L16 = block.getFieldValue('L16');
  var L17 = block.getFieldValue('L17');
  var L18 = block.getFieldValue('L18');
  var L19 = block.getFieldValue('L19');
  var L20 = block.getFieldValue('L20');
  var L21 = block.getFieldValue('L21');
  var L22 = block.getFieldValue('L22');
  var L23 = block.getFieldValue('L23');
  var L24 = block.getFieldValue('L24');
  var L25 = block.getFieldValue('L25');
  var code = '"'+L01+L02+L03+L04+L05+L06+L07+L08+L09+L10+L11+L12+L13+L14+L15+L16+L17+L18+L19+L20+L21+L22+L23+L24+L25+'"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['BitMatrixLed_matrixcode_line_color'] = function(block) {
  var L01 = block.getFieldValue('L01');
  var L02 = block.getFieldValue('L02');
  var L03 = block.getFieldValue('L03');
  var L04 = block.getFieldValue('L04');
  var L05 = block.getFieldValue('L05');
  var code = '"'+L01+L02+L03+L04+L05+'"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['BitMatrixLed_clear'] = function(block) {
  var code = 'BitMatrixLed_clear();\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_on'] = function(block) {
  var value_x_on_ = Blockly.JavaScript.valueToCode(block, 'value_x_on_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_on_ = Blockly.JavaScript.valueToCode(block, 'value_y_on_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BitMatrixLed_on('+value_x_on_+','+value_y_on_+');\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_color_on'] = function(block) {
  var value_x_on_ = Blockly.JavaScript.valueToCode(block, 'value_x_on_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_on_ = Blockly.JavaScript.valueToCode(block, 'value_y_on_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color_on_ = Blockly.JavaScript.valueToCode(block, 'value_color_on_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BitMatrixLed_color_on('+value_x_on_+','+value_y_on_+','+value_color_on_+');\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_off'] = function(block) {
  var value_x_off_ = Blockly.JavaScript.valueToCode(block, 'value_x_off_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_off_ = Blockly.JavaScript.valueToCode(block, 'value_y_off_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BitMatrixLed_off('+value_x_off_+','+value_y_off_+');\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_reverse'] = function(block) {
  var value_x_reverse_ = Blockly.JavaScript.valueToCode(block, 'value_x_reverse_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_reverse_ = Blockly.JavaScript.valueToCode(block, 'value_y_reverse_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BitMatrixLed_reverse('+value_x_reverse_+','+value_y_reverse_+');\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_state'] = function(block) {
  var value_x_state_ = Blockly.JavaScript.valueToCode(block, 'value_x_state_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_state_ = Blockly.JavaScript.valueToCode(block, 'value_y_state_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BitMatrixLed_state('+value_x_state_+','+value_y_state_+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['BitMatrixLed_indentcode'] = function(block) {
  var value_indentcode_ = Blockly.JavaScript.valueToCode(block, 'value_indentcode_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BitMatrixLed_indentcode('+value_indentcode_+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['BitMatrixLed_linechart'] = function(block) {
  var value_value1 = Blockly.JavaScript.valueToCode(block, 'value_value1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value2 = Blockly.JavaScript.valueToCode(block, 'value_value2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value3 = Blockly.JavaScript.valueToCode(block, 'value_value3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value4 = Blockly.JavaScript.valueToCode(block, 'value_value4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value5 = Blockly.JavaScript.valueToCode(block, 'value_value5', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BitMatrixLed_linechart('+value_value1+','+value_value2+','+value_value3+','+value_value4+','+value_value5+');\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_barchart'] = function(block) {
  var value_value1 = Blockly.JavaScript.valueToCode(block, 'value_value1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value2 = Blockly.JavaScript.valueToCode(block, 'value_value2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value3 = Blockly.JavaScript.valueToCode(block, 'value_value3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value4 = Blockly.JavaScript.valueToCode(block, 'value_value4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value5 = Blockly.JavaScript.valueToCode(block, 'value_value5', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BitMatrixLed_barchart('+value_value1+','+value_value2+','+value_value3+','+value_value4+','+value_value5+');\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_clockwise'] = function(block) {
  var code = 'BitMatrixLed_clockwise();\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_counterclockwise'] = function(block) {
  var code = 'BitMatrixLed_counterclockwise();\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_verticalflip'] = function(block) {
  var code = 'BitMatrixLed_verticalflip();\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_horizontalflip'] = function(block) {
  var code = 'BitMatrixLed_horizontalflip();\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_invert'] = function(block) {
  var code = 'BitMatrixLed_invert();\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_getcolor'] = function(block) {
  var value_x_state_ = Blockly.JavaScript.valueToCode(block, 'value_x_state_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_state_ = Blockly.JavaScript.valueToCode(block, 'value_y_state_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BitMatrixLed_getcolor('+value_x_state_+','+value_y_state_+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['BitMatrixLed_backcolor'] = function(block) {
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'value_color_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'BitMatrixLed_backcolor('+ value_color_ +');\n';
  return code;
};

Blockly.JavaScript['BitMatrixLed_system'] = function(block) {
  var value_cmd = block.getFieldValue('cmd');
  var value_P1 = Blockly.JavaScript.valueToCode(block, 'P1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P2 = Blockly.JavaScript.valueToCode(block, 'P2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "BitMatrixLed_sendCommand('?"+value_cmd+"="+value_P1+";"+value_P2+"');\n";
  return code;
};

Blockly.JavaScript['BitMatrixLed_custom'] = function(block) {
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P1 = Blockly.JavaScript.valueToCode(block, 'P1', Blockly.JavaScript.ORDER_ATOMIC);
  if (value_P1.toLowerCase().indexOf("0x")!=-1) {
    if ((value_P1.indexOf("'")==0)&&(value_P1.lastIndexOf("'")==value_P1.length-1))
    value_P1 = value_P1.substring(1,value_P1.length-1);
    if ((value_P1.indexOf("(")==0)&&(value_P1.lastIndexOf(")")==value_P1.length-1))
      value_P1 = value_P1.substring(1,value_P1.length-1);
    value_P1=parseInt(value_P1, 16);
  }
  var value_P2 = Blockly.JavaScript.valueToCode(block, 'P2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P3 = Blockly.JavaScript.valueToCode(block, 'P3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P4 = Blockly.JavaScript.valueToCode(block, 'P4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P5 = Blockly.JavaScript.valueToCode(block, 'P5', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P6 = Blockly.JavaScript.valueToCode(block, 'P6', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P7 = Blockly.JavaScript.valueToCode(block, 'P7', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P8 = Blockly.JavaScript.valueToCode(block, 'P8', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P9 = Blockly.JavaScript.valueToCode(block, 'P9', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "BitMatrixLed_sendCommand('?"+value_cmd+"="+value_P1+";"+value_P2+";"+value_P3+";"+value_P4+";"+value_P5+";"+value_P6+";"+value_P7+";"+value_P8+";"+value_P9+"');\n";
  return code;
};

Blockly.JavaScript['BitMatrixLed_car'] = function(block) {
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P1 = Blockly.JavaScript.valueToCode(block, 'P1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P2 = Blockly.JavaScript.valueToCode(block, 'P2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P3 = Blockly.JavaScript.valueToCode(block, 'P3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P4 = Blockly.JavaScript.valueToCode(block, 'P4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P5 = Blockly.JavaScript.valueToCode(block, 'P5', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P6 = Blockly.JavaScript.valueToCode(block, 'P6', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P7 = Blockly.JavaScript.valueToCode(block, 'P7', Blockly.JavaScript.ORDER_ATOMIC);
  var value_P8 = Blockly.JavaScript.valueToCode(block, 'P8', Blockly.JavaScript.ORDER_ATOMIC);
  if (value_P8=="FORWARD") value_P8="F";
  if (value_P8=="BACKWARD") value_P8="B";
  if (value_P8=="TURNLEFT") value_P8="L";
  if (value_P8=="TURNRIGHT") value_P8="R";
  if (value_P8=="STOP") value_P8="S";
  var code = "BitMatrixLed_sendCommand('?"+value_cmd+"="+value_P1+";"+value_P2+";"+value_P3+";"+value_P4+";"+value_P5+";"+value_P6+";"+value_P7+";"+value_P8+"');\n";
  return code;
};

Blockly.JavaScript['BitMatrixLed_car_state'] = function(block) {
  var value_state = block.getFieldValue('state');
  var code = "'"+value_state+"'";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['BitMatrixLed_getresponse'] = function(block) {
  var code = "BitMatrixLed_getResponse()";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['BitMatrixLed_cmd'] = function(block) {
  var value_cmd = block.getFieldValue('cmd');
  var code = "'"+value_cmd+"'";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['BitMatrixLed_clearresponse'] = function(block) {
  var code = "BitMatrixLed_clearData();\n";
  return code;
};

Blockly.JavaScript['BitMatrixLed_custom_cmd'] = function(block) {
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "BitMatrixLed_sendCommand("+value_cmd+");\n";
  return code;
};
