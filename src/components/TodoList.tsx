import React, { useState } from "react";
import styles from "./todolist.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormControl } from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

type Todo = {
  id: number;
  text: string;
  isDone: boolean;
}
export default function TodoList() {//jomssi hi) // jomssijomjomssi hi :)) } = const form = doong

  const [todos, setTodos] = useState<Todo[]>([
    {id: 1, text: "sleep", isDone: false}, 
    {id: 2, text: "eat", isDone: false}, 
    {id: 3, text: "code", isDone: false}
  ]);

  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const form = useForm<Todo>();
  const {register, control, handleSubmit} = form;

  const onSubmit = async (data: Todo) => {
    console.log(data);
    await setTodos([...todos, {id: todos.length + 1, text: data.text, isDone: false}]);
    console.log([{id: todos.length + 1, text: data.text, isDone: false}]);
  }

  const handleCheckboxChange = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo));
  };

  const onDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const handleTodoClick = (todo: Todo) => {
    setShowDetail(true);
    setSelectedTodo(todo);
  }

  const handleCloseDetail = () => {
    setShowDetail(false);
    setSelectedTodo(null);
  }


  return (
    <div className={styles.container}>
      <div style={{textAlign: "center", fontSize: "24px", fontWeight: "bold"}}>TodoList</div>
      <div className={styles.listContainer}> 
        <ul className={styles.todoList}>
            {todos.map((todo, index) => (
              <div key={index} className={styles.todoItem}>
                <div className={styles.todoItemText}>
                  <input type="checkbox" checked={todo.isDone} onChange={() => handleCheckboxChange(todo.id)}/>
                  <div>{todo.text}</div>
                </div>
                <div>
                  <Button variant="text" className="deleteTodo" onClick={() => onDelete(todo.id)}>Delete</Button>
                  <Button variant="text" className="detailTodo" onClick={() => handleTodoClick(todo)}>Detail</Button>
                </div>
              </div>
            ))}
        </ul>
        <form className={styles.inputContainer} onSubmit={handleSubmit(onSubmit)}>
          <TextField 
            label="Add Todo" 
            variant="outlined" 
            required 
            id="todo"
            {...register('text', {required: "this is required"})}
          />
          <Button type="submit" variant="contained" className="addTodo btn">Add</Button>
      </form>
      </div>
      
      <DevTool control={control} />
    </div>
  );
}
