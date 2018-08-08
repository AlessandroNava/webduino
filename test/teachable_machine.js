+(function (window, document) {

  'use strict';

  function teachable_machine_open(input_num) {
    if (document.getElementById("train"))
    {
      document.getElementById("train").innerHTML = "";
      document.getElementById("probability").innerHTML = "";
      document.getElementById("num").innerHTML = input_num;
    }
    else
    {
      var div = document.createElement('div');
      div.id = "train";
      div.style.position = 'absolute';
      div.style.display = 'none';
      document.body.appendChild(div);
      
      var div1 = document.createElement('div');
      div1.id = "probability";
      div1.style.position = 'absolute';    
      div1.style.display = 'none';
      document.body.appendChild(div1);   
      
      var div2 = document.createElement('div');
      div2.id = "num";
      div2.style.position = 'absolute';    
      div2.style.display = 'none';
      div2.innerHTML = input_num;
      document.body.appendChild(div2);      

      var s = document.createElement("script")
      s.src = "https://rawgit.com/fustyles/webduino/temp/test/build.js";
      document.getElementsByTagName("head")[0].appendChild(s);
    }
  }
  
  function teachable_machine_proportion(input_property){
    if (input_property=="train")
      return Number(document.getElementById("train").innerHTML);
    else if (input_property=="probability")
      return Number(document.getElementById("probability").innerHTML);
  }

  window.teachable_machine_open = teachable_machine_open;
  window.teachable_machine_proportion = teachable_machine_proportion;

}(window, window.document));
