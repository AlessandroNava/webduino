var catGameAuxiliary = '<xml><category name="%{BKY_GAMEAUXILIARY}" colour="%{BKY_GAMEAUXILIARY_HUE}">'+
'  <block type="time_delay">'+
'    <value name="secs_">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+      
'    </value>'+     
'  </block>'+ 
'  <block type="image_boundary">'+
'    <value name="left_">'+
'      <block type="math_number">'+
'        <field name="NUM">500</field>'+
'      </block>'+
'    </value>'+ 
'    <value name="top_">'+
'      <block type="math_number">'+
'        <field name="NUM">500</field>'+
'      </block>'+
'    </value>'+    
'  </block>'+  
'  <block type="image_sys_get">'+
'  </block>'+ 
'  <block type="mouse_coordinate_get_start">'+
'  </block>'+    
'  <block type="mouse_coordinate_get">'+
'  </block>'+        
'  <block type="document_timer_novar">'+
'    <value name="intervals_">'+
'      <block type="math_number">'+
'        <field name="NUM">100</field>'+
'      </block>'+
'    </value>'+  
'  </block>'+  
'  <block type="document_timer_once_novar">'+
'    <value name="intervals_">'+
'      <block type="math_number">'+
'        <field name="NUM">1000</field>'+
'      </block>'+
'    </value>'+  
'  </block>'+   
'  <block type="document_timer">'+
'    <value name="intervals_">'+
'      <block type="math_number">'+
'        <field name="NUM">100</field>'+
'      </block>'+
'    </value>'+  
'  </block>'+  
'  <block type="document_timer_once">'+
'    <value name="intervals_">'+
'      <block type="math_number">'+
'        <field name="NUM">1000</field>'+
'      </block>'+
'    </value>'+  
'  </block>'+  
'  <block type="document_timer_stop">'+
'  </block>'+ 
'  <block type="element_event">'+  
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+    
'    </value>'+     
'  </block>'+   
'  <block type="element_event_stop">'+  
'    <value name="id_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+    
'    </value>'+     
'  </block>'+    
'  <block type="elements_collision">'+
'    <value name="id1_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+ 
'    <value name="id2_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+     
'  </block>'+  
'  <block type="elements_collision_color">'+
'    <value name="id1_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+ 
'    <value name="id2_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+  
'    <value name="color_">'+
'      <block type="colour_picker">'+
'        <field name="COLOUR">#000000</field>'+
'      </block>'+
'    </value>'+      
'  </block>'+      
'  <block type="text_to_number">'+
'    <value name="value_text_">'+
'    </value>'+    
'  </block>'+  
'  <block type="loop_break">'+      
'  </block>'+  
'  <block type="loop_continue">'+      
'  </block>'+            
'  <block type="function_return">'+
'    <value name="value_">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+      
'    </value>'+     
'  </block>'+        
'  <block type="music_create">'+ 
'    <value name="url_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="length_">'+
'      <block type="math_number">'+
'        <field name="NUM">20000</field>'+
'      </block>'+
'    </value>'+
'    <value name="loop_">'+
'      <block type="logic_boolean">'+
'        <field name="BOOL">TRUE</field>'+
'      </block>'+
'    </value>'+     
'  </block>'+  
'  <block type="music_delete">'+ 
'  </block>'+        
'  <block type="async_function">'+
'    <value name="name_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+    
'    </value>'+   
'    <value name="parameter_">'+  
'    </value>'+      
'  </block>'+    
'  <block type="call_async_function">'+
'    <value name="name_">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+    
'    </value>'+
'    <value name="parameter_">'+  
'    </value>'+     
'  </block>'+ 
'  <block type="transform_async_function">'+      
'  </block>'+ 
' </category></xml>';
