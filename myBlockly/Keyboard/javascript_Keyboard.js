Blockly.JavaScript['keyboard_listener'] = function (block) {
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');  
  var event = block.getFieldValue('event');
  if (event=="keydown")
    var code = 'window.addEventListener("keydown", myKeydown, true);\nfunction myKeydown(event) {\ntry {\n' + statement + '} catch (e) {\nalert(e);\n}\n};\n';
  else if (event=="keyup")
    var code = 'window.addEventListener("keyup", myKeyup, true);\nfunction myKeyup(event) {\ntry {\n' + statement + '} catch (e) {\nalert(e);\n}\n};\n';
  else if (event=="keypress")
    var code = 'window.addEventListener("keypress", myKeypress, true);\nfunction myKeypress(event) {\ntry {\n' + statement + '} catch (e) {\nalert(e);\n}\n};\n';
  return code;
};

Blockly.JavaScript['stop_keyboard_listener'] = function (block) {
  var event = block.getFieldValue('event');
  if (event=="keydown")
    var code = 'window.removeEventListener("keydown", myKeydown, true);\n';
  else if (event=="keyup")
    var code = 'window.removeEventListener("keyup", myKeyup, true);\n';
  else if (event=="keypress")
    var code = 'window.removeEventListener("keypress", myKeypress, true);\n';
  return code;
};

Blockly.JavaScript['get_keycode'] = function(block) {
  var code = 'event.keyCode';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['keyboard_keycode'] = function(block) {
  var keycode = block.getFieldValue('keycode'); 
  var code = 'event.keyCode == ' + keycode;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['hotkey'] = function(block) {
  var keycode = block.getFieldValue('keycode');
  if (keycode=="Ctrl")
    var code = '(event.ctrlKey)';
  else if (keycode=="Shift")
    var code = '(event.shiftKey)';
  else if (keycode=="Alt")
    var code = '(event.altKey)';  
  return [code, Blockly.JavaScript.ORDER_NONE];
};
