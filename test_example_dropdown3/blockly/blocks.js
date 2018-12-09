// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

Blockly.Blocks['dropdown'] = {
  init: function () {
    this.appendDummyInput()
        .appendField("List1")
        .appendField(new Blockly.FieldDropdown([["",""], ["A","A"], ["B","B"]]), "Dropdown")
        .appendField("List2")
        .appendField(new Blockly.FieldDropdown([["",""], ["A1","A1"], ["A2","A2"]]), "DropdownA")
        .appendField(new Blockly.FieldDropdown([["",""], ["B1","B1"], ["B2","B2"]]), "DropdownB")
        .appendField("List3")
        .appendField(new Blockly.FieldDropdown([["",""], ["A1_1","A1_1"], ["A1_2","A1_2"]]), "DropdownA1")
        .appendField(new Blockly.FieldDropdown([["",""], ["A2_1","A2_1"], ["A2_2","A2_2"]]), "DropdownA2")
        .appendField(new Blockly.FieldDropdown([["",""], ["B1_1","B1_1"], ["B1_2","B1_2"]]), "DropdownB1")
        .appendField(new Blockly.FieldDropdown([["",""], ["B2_1","B2_1"], ["B2_2","B2_2"]]), "DropdownB2");
    this.getField('DropdownB').setVisible(false);
    this.getField('DropdownA2').setVisible(false);
    this.getField('DropdownB1').setVisible(false);
    this.getField('DropdownB2').setVisible(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(340);
  },
  mutationToDom: function (workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('d', this.getFieldValue('Dropdown'));
    container.setAttribute('dA', this.getFieldValue('DropdownA'));
    container.setAttribute('dB', this.getFieldValue('DropdownB'));
    container.setAttribute('dA1', this.getFieldValue('DropdownA1'));
    container.setAttribute('dA2', this.getFieldValue('DropdownA2'));
    container.setAttribute('dB1', this.getFieldValue('DropdownB1'));
    container.setAttribute('dB2', this.getFieldValue('DropdownB2'));
    return container;
  },
  domToMutation: function (xmlElement) {
    this.getField('Dropdown').setValue(xmlElement.getAttribute('d'));
    this.getField('DropdownA').setValue(xmlElement.getAttribute('dA'));
    this.getField('DropdownA1').setValue(xmlElement.getAttribute('dA1'));
    this.getField('DropdownA2').setValue(xmlElement.getAttribute('dA2'));
    this.getField('DropdownB').setValue(xmlElement.getAttribute('dB'));
    this.getField('DropdownB1').setValue(xmlElement.getAttribute('dB1'));
    this.getField('DropdownB2').setValue(xmlElement.getAttribute('dB2')); 
    console.log(this.getFieldValue('Dropdown'));
    console.log(this.getFieldValue('DropdownA'));
    console.log(this.getFieldValue('DropdownB'));
    console.log(this.getFieldValue('DropdownA1'));
    console.log(this.getFieldValue('DropdownA2'));
    console.log(this.getFieldValue('DropdownB1'));
    console.log(this.getFieldValue('DropdownB2'));  
    this.updateShape_("refresh");
  },
  onchange: function (event) {
    if (event.element=="field") {
      if (event.name.indexOf("Dropdown")!=-1) {
        this.updateShape_(event.name);
      }
    }
  },
  updateShape_: function(name) {  
    if (name=='Dropdown'&&this.getFieldValue('Dropdown')=='A') {
      this.getField('DropdownA').setVisible(true);
      this.getField('DropdownA1').setVisible(true);
      
      this.getField('DropdownA2').setValue("");
      this.getField('DropdownA2').setVisible(false);
      this.getField('DropdownB').setValue("");
      this.getField('DropdownB').setVisible(false);
      this.getField('DropdownB1').setValue("");
      this.getField('DropdownB1').setVisible(false);
      this.getField('DropdownB2').setValue("");
      this.getField('DropdownB2').setVisible(false);
      console.log("A");
    } else if (name=='Dropdown'&&this.getFieldValue('Dropdown')=='B') {
      this.getField('DropdownB').setVisible(true);
      this.getField('DropdownB1').setVisible(true);
      
      this.getField('DropdownB2').setValue("");
      this.getField('DropdownB2').setVisible(false);
      this.getField('DropdownA').setValue("");
      this.getField('DropdownA').setVisible(false);
      this.getField('DropdownA1').setValue("");
      this.getField('DropdownA1').setVisible(false);
      this.getField('DropdownA2').setValue("");
      this.getField('DropdownA2').setVisible(false);
      console.log("B");
    }
    if (name=='DropdownA'&&this.getFieldValue('DropdownA')=='A1') {
      this.getField('DropdownA1').setValue("");
      this.getField('DropdownA1').setVisible(true);
      
      this.getField('DropdownA2').setValue("");
      this.getField('DropdownA2').setVisible(false);
      this.getField('DropdownB1').setValue("");
      this.getField('DropdownB1').setVisible(false);
      this.getField('DropdownB2').setValue("");
      this.getField('DropdownB2').setVisible(false);
      console.log("A1");
    } else if (name=='DropdownA'&&this.getFieldValue('DropdownA')=='A2') {
      this.getField('DropdownA2').setValue("");
      this.getField('DropdownA2').setVisible(true);
      
      this.getField('DropdownA1').setValue("");
      this.getField('DropdownA1').setVisible(false);
      this.getField('DropdownB1').setValue("");
      this.getField('DropdownB1').setVisible(false);
      this.getField('DropdownB2').setValue("");
      this.getField('DropdownB2').setVisible(false);
      console.log("A2");
    } else if (name=='DropdownB'&&this.getFieldValue('DropdownB')=='B1') {
      this.getField('DropdownB1').setValue("");
      this.getField('DropdownB1').setVisible(true);
      
      this.getField('DropdownA1').setValue("");
      this.getField('DropdownA1').setVisible(false);
      this.getField('DropdownA2').setValue("");
      this.getField('DropdownA2').setVisible(false);
      this.getField('DropdownB2').setValue("");
      this.getField('DropdownB2').setVisible(false);
      console.log("B1");
    } else if (name=='DropdownB'&&this.getFieldValue('DropdownB')=='B2') {
      this.getField('DropdownB2').setValue("");
      this.getField('DropdownB2').setVisible(true);
      
      this.getField('DropdownA1').setValue("");
      this.getField('DropdownA1').setVisible(false);
      this.getField('DropdownA2').setValue("");
      this.getField('DropdownA2').setVisible(false);
      this.getField('DropdownB1').setValue("");
      this.getField('DropdownB1').setVisible(false);
      console.log("B2");
    }    
    if (name=='refresh') {
      if (this.getFieldValue('DropdownA')!="")
        this.getField('DropdownA').setVisible(true);
      else
        this.getField('DropdownA').setVisible(false);
      if (this.getFieldValue('DropdownB')!="")
        this.getField('DropdownB').setVisible(true);
      else
        this.getField('DropdownB').setVisible(false);
      if (this.getFieldValue('DropdownA1')!="")
        this.getField('DropdownA1').setVisible(true);
      else
        this.getField('DropdownA1').setVisible(false);
      if (this.getFieldValue('DropdownA2')!="")
        this.getField('DropdownA2').setVisible(true);
      else
        this.getField('DropdownA2').setVisible(false);
      if (this.getFieldValue('DropdownB1')!="")
        this.getField('DropdownB1').setVisible(true);
      else
        this.getField('DropdownB1').setVisible(false);
      if (this.getFieldValue('DropdownB2')!="")
        this.getField('DropdownB2').setVisible(true);
      else
        this.getField('DropdownB2').setVisible(false);
      console.log(name);
    console.log(this.getFieldValue('Dropdown'));
    console.log(this.getFieldValue('DropdownA'));
    console.log(this.getFieldValue('DropdownB'));
    console.log(this.getFieldValue('DropdownA1'));
    console.log(this.getFieldValue('DropdownA2'));
    console.log(this.getFieldValue('DropdownB1'));
    console.log(this.getFieldValue('DropdownB2'));  
    } 
    this.setNextStatement(true);
  }
};
