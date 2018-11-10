Blockly.Blocks['boardevent'] = {
  init: function () {
    this.appendValueInput("device")
      .setCheck("String")
      .appendField("BoardEvent.READY   Device ID"); 
    this.appendDummyInput()  
      .appendField("Sampling Interval (ms)")
      .appendField(new Blockly.FieldDropdown([["20","20"], ["50","50"], ["75","75"], ["100","100"], ["250","250"], ["500","500"], ["1000","1000"]]), "samplingInterval");    
    this.appendStatementInput("do_ready");
    this.appendDummyInput()
      .appendField("BoardEvent.ERROR");
    this.appendStatementInput("do_error");
    this.appendDummyInput()
      .appendField("BoardEvent.STRING_MESSAGE");
    this.appendStatementInput("do_message");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  },
  onload: function () {
    this.getField('samplingInterval').setValue('250');
  }
};

Blockly.Blocks['boardevent_sendmessage'] = {
  init: function () {
    this.appendValueInput("cmd")
      .setCheck("String")
      .appendField("Send Command");    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.Blocks['boardevent_getmessage'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Get Message");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(200);
  }
};
