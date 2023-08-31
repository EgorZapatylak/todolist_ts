import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilteredValueType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Reset API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ])

    let [filter, setFilter] = useState<FilteredValueType>('all');
    let tasksForTodoList = tasks

    if (filter === 'active') {
        tasksForTodoList = tasks.filter(tasks => !tasks.isDone)
    }
    if (filter === 'completed') {
        tasksForTodoList = tasks.filter(tasks => tasks.isDone)
    }

    function addTask(title:string) {
        let task = {id: v1(), title: title, isDone: false}
        let newTask = [task, ...tasks]
        setTasks(newTask)

    }

    function filteredTask(value: FilteredValueType) {
        setFilter(value)
    }

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks)
    }


    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasksForTodoList} removeTask={removeTask}
                      filteredTask={filteredTask} addTask={addTask}/>
        </div>
    );
}

export default App;
