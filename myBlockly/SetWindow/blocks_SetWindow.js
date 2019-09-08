Blockly.Blocks['setwindow'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.SETWINDOW_SHOW);  
  this.appendValueInput("left")
      .setCheck("Number")
      .appendField(Blockly.Msg.SETWINDOW_LEFT_SHOW); 
  this.appendValueInput("top")
      .setCheck("Number")
      .appendField(Blockly.Msg.SETWINDOW_TOP_SHOW);   
  this.appendValueInput("width")
      .setCheck("Number")
      .appendField(Blockly.Msg.SETWINDOW_WIDTH_SHOW); 
  this.appendValueInput("height")
      .setCheck("Number")
      .appendField(Blockly.Msg.SETWINDOW_HEIGHT_SHOW);   
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SETWINDOW_OVERFLOW_SHOW)
      .appendField(new Blockly.FieldDropdown([["auto","auto"], ["visible","visible"], ["hidden","hidden"], ["scroll","scroll"], ["inherit","inherit"]]), "overflow");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(90);
  }
};   
  
Blockly.Blocks['body_set'] = {
  init: function() {    
  this.appendDummyInput()  
      .appendField(Blockly.Msg.SETWINDOW_SHOW)
      .appendField(new Blockly.FieldDropdown([["backgroundColor","backgroundColor"], ["backgroundImage","backgroundImage"], ["overflow","overflow"], ["style","style"], ["droppable","droppable"]]), "property_");
  this.appendValueInput("value_")
      .setCheck(null);    
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};  

Blockly.Blocks['window_reload'] = {
  init: function() {    
  this.appendDummyInput()  
      .appendField(Blockly.Msg.WINDOW_RELOAD_SHOW);   
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(130);
  }
};  
