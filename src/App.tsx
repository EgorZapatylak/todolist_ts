import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    let tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Reset API", isDone: false},
        {id: 5, title: "GraphQL", isDone: false},
    ]

    function removeTask(id: number) {
        tasks1 = tasks1.filter(task => task.id != id)
        console.log(tasks1)
    }


    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1} removeTask={removeTask}/>
        </div>
    );
}

export default App;
