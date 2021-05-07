import React, { useState } from 'react'
import CancelIcon from '@material-ui/icons/Cancel';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const List = (props) => {

    const [line, setLine] = useState(false)
    
    const deletey = () => {
        setLine(true)
    }
    return (

        <>
          <div className="rohal">
          <Tooltip title = "Mark As Complete">  
            <Button className="btn" onClick = {deletey}>
                <CancelIcon ></CancelIcon>
            </Button>
            </Tooltip>
            <li style = {{textDecoration : line ? "line-through" : "none" }}>{props.itemVal}</li>
            
          </div>  
        </>
        );
};

export default List