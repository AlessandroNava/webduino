Blockly.JavaScript['boardevent'] = function (block) {
  var value_intervals = Blockly.JavaScript.valueToCode(block, 'intervals', Blockly.JavaScript.ORDER_ATOMIC);
  var device = Blockly.JavaScript.valueToCode(block, 'device', Blockly.JavaScript.ORDER_ATOMIC);
  var do_ready = Blockly.JavaScript.statementToCode(block, 'do_ready');
  var do_error = Blockly.JavaScript.statementToCode(block, 'do_error');
  var do_message = Blockly.JavaScript.statementToCode(block, 'do_message');
  var code = 'var BoardEvent = webduino.BoardEvent;\nboard.on(BoardEvent.READY,async function() {'+do_ready+'});\nboard.on(BoardEvent.ERROR,async function() {\n' + do_error + '});\nboard.on(webduino.BoardEvent.STRING_MESSAGE,async function(event) {\n' + do_message + '});\n';
  return code;
};

Blockly.JavaScript['boardevent_sendmessage'] = function (block) {
  var cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'board.send('+cmd+');\n';
  return code;
};

Blockly.JavaScript['boardevent_getmessage'] = function (block) {
  var code = 'event.message.split(",")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
