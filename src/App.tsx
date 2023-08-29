import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Reset API", isDone: false},
        {id: 5, title: "GraphQL", isDone: false},
    ])

    let [filter, setFilter] = useState('all');
    let tasksForTodoList = tasks

    if (filter==='active') {
        tasksForTodoList=tasks.filter(tasks => tasks.isDone === false)
    }
    if (filter==='completed') {
        tasksForTodoList=tasks.filter(tasks => tasks.isDone === true)
    }

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(task => task.id != id)
        setTasks(filteredTasks)
    }


    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasksForTodoList} removeTask={removeTask}/>
        </div>
    );
}

export default App;
