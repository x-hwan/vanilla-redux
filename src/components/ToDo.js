import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

const ToDo = ({ text, id }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(actionCreators.deleteToDo(id));
  };
  return (
    <li>
      <Link to={`/${id}`}>
        {/* {JSON.stringify(text)} */}
        {text}
      </Link>
      <button onClick={onClick}>❌</button>
    </li>
  );
};

export default ToDo;
