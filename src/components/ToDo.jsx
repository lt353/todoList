import React from "react";

function strike() {
  document.getElementById("todo-text").style.textDecoration = "line-through";
}

function unStrike() {
  document.getElementById("todo-text").style.textDecoration = "none";
}

function ToDo() {
  return (
    <div className="container">
      <h1>To Do List</h1>
      <p id="todo-text">Buy milk</p>
      <button onClick={strike}>Strike through</button>
      <button onClick={unStrike}>Undo</button>
    </div>
  );
}

export default ToDo;
