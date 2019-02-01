var myFirstExtension = function () {};
 
myFirstExtension.prototype.getInfo = function () {
    return {
        id: 'esp8266',
        name: 'ESP8266',
 
        blocks: [
            {
                opcode: 'esp8266_system',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'system',
                    defaultMessage: 'ESP8266 SYSTEM URL[URL] Command[CMD]',
                    description: 'My First Extension'
                }),
		arguments: {
                    URL: {
                        type: 'string'
                    },			
                    CMD: {
                        type: 'string'
                    }
                },
            }
        ],
 
        translation_map: {
            zh: {
                'extensionName': 'ESP8266',
                'esp8266_system': 'ESP8266 系統指令'
            }
        },
    };
};
 
myFirstExtension.prototype.esp8266_system = function (args) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', args.URL + '?' + args.CMD);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var arr = JSON.parse(this.responseText);
        var out = [];
        for(var i = 0; i < arr.length; i++) {
          out.push(arr["data"]);
        }
        console.log(out);
      }
    };	
};
 
Scratch.extensions.register(new myFirstExtension());
