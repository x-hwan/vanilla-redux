import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

const Home = () => {
  const [text, setText] = useState("");
  // input text 변화 시 호출
  function onChange(e) {
    setText(e.target.value);
  }
  // mapStateToProps 대체 (useSelector == getState)
  const toDos = useSelector((state) => state);
  // mapDispatchToProps 대체
  const dispatch = useDispatch();
  // form 제출 시 호출
  function onSubmit(e) {
    e.preventDefault();
    // reducer 함수에게 action을 송신
    dispatch(actionCreators.addToDo(text));
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
};

// function mapStateToProps(state) {
//   return {
//     toDos: state,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     addToDo: (text) => dispatch(actionCreators.addToDo(text)),
//   };
// }
// connect(mapStateToProps, mapDispatchToProps)
export default Home;
