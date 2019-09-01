Blockly.Blocks['azure_classifyimage_settings'] = {
  init: function() {
  this.appendDummyInput() 
      .appendField(Blockly.Msg.AZURECLASSIFYIMAGE_SETTINGS_SHOW);
  this.appendValueInput("resourcename_")
      .setCheck("String")
      .appendField(Blockly.Msg.AZURECLASSIFYIMAGE_RESOURCENAME_SHOW);
  this.appendValueInput("predictionkey_")
      .setCheck("String")
      .appendField(Blockly.Msg.AZURECLASSIFYIMAGE_PREDICTIONKEY_SHOW);
  this.appendValueInput("projectid_")
      .setCheck("String")
      .appendField(Blockly.Msg.AZURECLASSIFYIMAGE_PROJECTID_SHOW);
  this.appendValueInput("publishedname_")
      .setCheck("String")
      .appendField(Blockly.Msg.AZURECLASSIFYIMAGE_PUBLISHEDNAME_SHOW);
  this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['azure_classifyimage_detect'] = {
  init: function() {
  this.appendDummyInput() 
      .appendField(Blockly.Msg.AZURECLASSIFYIMAGE_DETECT_SHOW);
  this.appendValueInput("showtime_")
      .setCheck("Number")
      .appendField(Blockly.Msg.AZURECLASSIFYIMAGE_SHOWTIME_SHOW);  
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['azure_classifyimage_get'] = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AZURECLASSIFYIMAGE_GET_SHOW); 	  
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['azure_classifyimage_video'] = {
  init: function() {
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.AZURECLASSIFYIMAGE_WIDTH_SHOW);  
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.AZURECLASSIFYIMAGE_HEIGHT_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AZURECLASSIFYIMAGE_RESULT_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["show","block"],
		["hide","none"]	  
  ]), "result_"); 	  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.AZURECLASSIFYIMAGE_OPACITY_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["1","1"],
		["0.9","0.9"],
		["0.8","0.8"],
		["0.7","0.7"],
		["0.6","0.6"],	  
		["0.5","0.5"],
		["0.4","0.4"],
		["0.3","0.3"],
		["0.2","0.2"],
		["0.1","0.1"],	
		["0","0"]	   
  ]), "opacity_"); 	  
  this.setInputsInline(true);	  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};
