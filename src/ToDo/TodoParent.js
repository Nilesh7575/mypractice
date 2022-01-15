import React, { useState } from "react";
import { addTodo, deleteTodo, removeTodo } from "./Action/index";
import { useSelector, useDispatch } from "react-redux";

function TodoParent() {
  const [inputData, setinputData] = useState("");
  const list = useSelector((state)=> state.todoReducer.list)
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div>
          <h2>Add Your Items Here</h2>
          <div>
            <input
              type="text"
              placeholder="Add items"
              value={inputData}
              onChange={(e) => {
                setinputData(e.target.value);
              }}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => {
                dispatch(addTodo(inputData), setinputData(""));
                console.log("clicked");
              }}
            ></i>
          </div>
          <div>
            {list.map((ele)=>{
                return <div key={ele.id}>
                    <h5>{ele.data}</h5>
                    <div>
                        <i className="far fa-trash-alt add-btn"
                        title="Delete Item" onClick={() => {
                        dispatch(deleteTodo(ele.id));
                        console.log("clicked")}}></i>
                    </div>
              </div>
            })}
          </div>
          <div>
              <button data-sm-link-text="remove all" 
              onClick={() => {dispatch(removeTodo())}}
               ><span>Check List</span></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoParent;
