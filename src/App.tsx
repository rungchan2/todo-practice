import React from "react";
import "./App.css";
import Interfaces from "./components/interface";
import TodoList from "./components/TodoList";
import Clock from "./components/Clock";

function App() {
  
  return (
    <div className="App">
      <Interfaces />
      <br/>
      <TodoList/>
      <br/>
      <Clock/>
    </div>
  );
}

export default App;
