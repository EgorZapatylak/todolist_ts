import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type FilteredValueType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Reset API", isDone: false},
        {id: 5, title: "GraphQL", isDone: false},
    ])

    let [filter, setFilter] = useState<FilteredValueType>('all');
    let tasksForTodoList = tasks

    if (filter === 'active') {
        tasksForTodoList = tasks.filter(tasks => !tasks.isDone)
    }
    if (filter === 'completed') {
        tasksForTodoList = tasks.filter(tasks => tasks.isDone)
    }

    function filteredTask(value: FilteredValueType) {
        setFilter(value)
    }

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks)
    }


    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasksForTodoList} removeTask={removeTask}
                      filteredTask={filteredTask}/>
        </div>
    );
}

export default App;
