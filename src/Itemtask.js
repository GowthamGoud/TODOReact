import React from "react";

function Itemtask(props){
    const completedstyle={
      fontstyle:"italic",
      color:"grey",
      textDecoration:"line-through"
    }
    const pendingstyle={
      fontstyle:"bold",
      color:"white",
    }
    const labelStyle = {
      display: 'flex',
      alignItems: 'center',
      borderTop: '1px solid white', // Top border
      borderBottom: '1px solid white', // Bottom border // Add a white border
      padding: '5px' // Add some padding for better visualization
    };

    return(
        <div>   
              <label style={labelStyle}>  
        <input type='checkbox' checked={props.value.completed} onChange={() => props.handlechange(props.value.id)}/>
        <p style={props.value.completed?completedstyle:pendingstyle}>{props.value.text}</p>
        </label> 
        <line ></line>
      </div>
  )
}
export default Itemtask