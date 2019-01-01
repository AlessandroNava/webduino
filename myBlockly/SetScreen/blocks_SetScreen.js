Blockly.Blocks['setscreen'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.SETSCREEN_SHOW);  
  this.appendValueInput("left")
      .setCheck("Number")
      .appendField(Blockly.Msg.SETSCREEN_LEFT_SHOW); 
  this.appendValueInput("top")
      .setCheck("Number")
      .appendField(Blockly.Msg.SETSCREEN_TOP_SHOW);   
  this.appendValueInput("width")
      .setCheck("Number")
      .appendField(Blockly.Msg.SETSCREEN_WIDTH_SHOW); 
  this.appendValueInput("height")
      .setCheck("Number")
      .appendField(Blockly.Msg.SETSCREEN_HEIGHT_SHOW);   
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(90);
  }
};   
  
Blockly.Blocks['body_set'] = {
  init: function() {    
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SETSCREEN_SHOW)
      .appendField(new Blockly.FieldDropdown([["backgroundColor","backgroundColor"], ["backgroundImage","backgroundImage"]]), "property_");
  this.appendValueInput("value_")
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};  
