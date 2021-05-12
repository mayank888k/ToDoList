import React, { useState } from 'react'
import List from './List'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import Tooltip from '@material-ui/core/Tooltip';
import {NavLink} from 'react-router-dom'



const App = () => {

    const [item, setItem] = useState('')

    const [itemList, setnewItem] = useState([])

    const itemAdding = (event) => {
        setItem(event.target.value)
    }

    const adding = () => {

        setnewItem((oldArray) => {
            return [...oldArray, item]
        })
        setItem("")

    }

    const clear = () => {
        setnewItem([])
    }


    return (

        <div className="cDiv">
            <NavLink className='navli' exact to = '/app2'>Click To Implement Using Redux</NavLink>
            <h1>
                To Do List
                </h1>
            <input type="text" placeholder="Add an Item" onChange={itemAdding} value={item}></input>
            <Tooltip title = "Add Item">
                <Button className="cbtn" onClick={adding}>
                <AddIcon />
                </Button>
            </Tooltip>    
            <ol>

                {
                    itemList.map((cvalue, index) => {
                        return <List key={index} id={index} itemVal={cvalue}  />;
                    })
                }

            </ol>
            <Tooltip title = "Clear All">

                <Button className="cbtn" onClick ={clear} >
                <ClearAllIcon />
                </Button>
            </Tooltip>


        </div>
    )
}

export default App