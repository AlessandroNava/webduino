var myFirstExtension = function () {};
 
myFirstExtension.prototype.getInfo = function () {
    return {
        id: 'esp8266',
        name: 'ESP8266',
 
        blocks: [
            {
                opcode: 'esp8266esystem',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'system',
                    defaultMessage: 'ESP8266 SYSTEM [CMD]',
                    description: ''
                }),
		arguments: {
                    CMD: {
                        type: 'string'
                    }
                },
            }
        ],
 
        translation_map: {
            zh: {
                'extensionName': 'ESP8266',
                'executesystem': 'ESP8266 系統指令 [CMD]'
            }
        },
    };
};
 
myFirstExtension.prototype.esp8266system = function (args) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', 'https://192.168.201.16?' + args.CMD);
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
