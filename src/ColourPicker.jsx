

import React, {useState} from 'react'

function ColourPicker(){

    const [colour,setColour] = useState("#ffffff");

   function handleColourChange(event){
        setColour(event.target.value);

    };

    return(
        <div className='colour-picker-container'>
            
          
          <h2>Choose a colour</h2>
          <div className='colour-display' style={{backgroundColor: colour}}>
          <p>{colour}</p>
          </div>
          <label>
            select a colour :
          </label>
          <input type="color" value={colour} onChange={handleColourChange}/>

{/* /* onchange is help to chane the color values to one to another  on change and onclick is so diffente  */}

        </div>
    )

}

export default ColourPicker;