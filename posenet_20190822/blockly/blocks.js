Blockly.Blocks['posenet_person'] = {
  init: function() {
  this.appendValueInput("persons_")
      .setCheck("Number")
      .appendField(Blockly.Msg.POSENET_PERSONS_SHOW);  
  this.appendDummyInput()  
      .appendField(Blockly.Msg.POSENET_PART_SHOW)
      .appendField(new Blockly.FieldDropdown([
		["nose","nose"],
		["leftEye","leftEye"],
		["rightEye","rightEye"],
		["leftEar","leftEar"],
		["rightEar","rightEar"],
		["leftShoulder","leftShoulder"],
		["rightShoulder","rightShoulder"],
		["leftElbow","leftElbow"],
		["rightElbow","rightElbow"],
		["leftWrist","leftWrist"],
		["rightWrist","rightWrist"],
		["leftHip","leftHip"],
		["rightHip","rightHip"],
		["leftKnee","leftKnee"],
		["rightKnee","rightKnee"],
		["leftAnkle","leftAnkle"],
		["rightAnkle","rightAnkle"]
  ]), "part_");    
  this.setInputsInline(true);
  this.setOutput(true, null); 
  this.setColour(65);
  }
};