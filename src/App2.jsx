import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import Tooltip from "@material-ui/core/Tooltip";
import { NavLink } from "react-router-dom";
import CancelIcon from "@material-ui/icons/Cancel";

import { addItem, deleteItem, remAll } from "./actions/index";

const App2 = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoreducer.list);
  return (
    <>
      <div className="cDiv">
        <NavLink className="navli" exact to="/">
          Click To Implement Using Hooks
        </NavLink>

        <h1>To Do List</h1>
        <input
          type="text"
          placeholder="Add an Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        ></input>
        <Tooltip title="Add Item">
          <Button
            className="cbtn"
            onClick={() => {
              dispatch(addItem(item),setItem(''));
            }}
          >
            <AddIcon />
          </Button>
        </Tooltip>
        <ol>

        {list.map((val) => {
          return (
            <>
              <div className="rohal">
                <Tooltip title="Mark As Complete">
                  <Button className="btn" onClick={()=>dispatch(deleteItem(val.id))}>
                    <CancelIcon></CancelIcon>
                  </Button>
                </Tooltip>
                <li >{val.data}</li>
              </div>
            </>
          )
        })}
        </ol>

        <Tooltip title="Clear All">
          <Button className="cbtn" onClick={()=>dispatch(remAll())}>
            <ClearAllIcon />
          </Button>
        </Tooltip>
      </div>
    </>
  );
};

export default App2;
