Blockly.Blocks['esp8266_system'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ESP8266 System");
    this.appendValueInput("url")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("url"); 
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("cmd")
        .appendField(new Blockly.FieldDropdown([["inputPullup","inputpullup"], ["pinMode","pinmode"], ["digitalWrite","digitalwrite"], ["digitalRead","digitalread"], ["analogWrite","analogwrite"], ["analogRead","analogread"]]), "cmd");
    this.appendValueInput("str1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pin");
    this.appendValueInput("str2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("value");
    this.appendValueInput("str3")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("str3(~str9)");
    this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['esp8266_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ESP8266 Custom"); 
    this.appendValueInput("url")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("url");     
    this.appendValueInput("cmd")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("cmd");
    this.appendValueInput("str1")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("str1");
    this.appendValueInput("str2")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("str2");
    this.appendValueInput("str3")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("str3");
    this.appendValueInput("str4")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("str4");
    this.appendValueInput("str5")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("str5");
    this.appendValueInput("str6")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("str6");
    this.appendValueInput("str7")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("str7");
    this.appendValueInput("str8")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("str8");
    this.appendValueInput("str9")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("str9");
    this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['esp8266_car'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ESP8266 Car");  
    this.appendValueInput("url")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("url");       
    this.appendValueInput("cmd")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("cmd");    
    this.appendValueInput("str1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pinL1");
    this.appendValueInput("str2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pinL2");
    this.appendValueInput("str3")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pinR1");
    this.appendValueInput("str4")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pinR2");
    this.appendValueInput("str5")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("L speed");
    this.appendValueInput("str6")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("R speed");
    this.appendValueInput("str7")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Delay(ms)");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("State")
        .appendField(new Blockly.FieldDropdown([["FORWARD","F"], ["BACKWARD","B"], ["LEFT","L"], ["RIGHT","R"], ["STOP","S"]]), "str8");    
    this.setInputsInline(false);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(60);
  }
};

Blockly.Blocks['esp8266_getresponse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Response");
    this.setInputsInline(false);
    this.setOutput(true, null); 
    this.setColour(200);
  }
};

Blockly.Blocks['esp8266_cmd'] = {
  init: function () {    
  this.appendDummyInput()
      .appendField("cmd")
      .appendField(new Blockly.FieldDropdown([
        ["inputPullup","inputpullup"], 
        ["pinMode(pin)","pinmode"], 
        ["digitalWrite(pin,value)","digitalwrite"], 
        ["digitalRead(pin)","digitalread"], 
        ["analogWrite(pin,value)","analogwrite"], 
        ["analogRead(pin)","analogread"]
        ["touchread(pin) for ESP32","touchread"],    
        ["ip","ip"],
        ["mac","mac"],
        ["restart","restart"],
        ["resetwifi(ssid,password)","resetwifi"],
        ["tcp(domain,port,request[/],wait[0,1])","tcp"],
        ["ifttt(event,key,value1,value2,value3)","ifttt"],
        ["thingspeakupdate(key,field1,field2,field3,field4,field5,field6,field7,field8)","thingspeakupdate"],
        ["thingspeakread(request)","thingspeakread"],
        ["linenotify(token,request)","linenotify"],
        ["car(pinL1,pinL2,pinR1,pinR2,L_speed,R_speed,Delay,state)","car"]
      ]), "cmd_");
	this.setInputsInline(true);
	this.setOutput(true, null); 
	this.setColour(65);
  }
};
