import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilteredValueType = 'all' | 'active' | 'completed'

type TodolistsType = {
    id: string,
    title: string,
    filter: FilteredValueType
}

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Reset API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ])

    let [todolists, setTodolists] = useState<Array<TodolistsType>>(
        [
            {id: v1(), title: 'What to learn', filter: 'all'},
            {id: v1(), title: 'What to buy', filter: 'completed'},
        ]
    )


    // let [filter, setFilter] = useState<FilteredValueType>('all');


    function addTask(title: string) {
        let task = {id: v1(), title: title, isDone: false}
        let newTask = [task, ...tasks]
        setTasks(newTask)

    }

    function filteredTask(todolistID: string, value: FilteredValueType) {
        setTodolists(todolists.map(el => el.id === todolistID ? {...el, filter: value} : el))
    }

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks)
    }

    function changeTaskStatus(id: string, isDone: boolean) {
        let task = tasks.find(el => el.id === id)
        if (task) {
            task.isDone = isDone;
            setTasks([...tasks])
        }
    }


    return (
        <div className="App">
            {
                todolists.map(todolists => {
                    let tasksForTodoList = tasks

                    if (todolists.filter === 'active') {
                        tasksForTodoList = tasks.filter(tasks => !tasks.isDone)
                    }
                    if (todolists.filter === 'completed') {
                        tasksForTodoList = tasks.filter(tasks => tasks.isDone)
                    }
                    return <Todolist
                        key={todolists.id}
                        todolistID={todolists.id}
                        title={todolists.title}
                        tasks={tasksForTodoList}
                        removeTask={removeTask}
                        filteredTask={filteredTask}
                        addTask={addTask}
                        checkStatusTask={changeTaskStatus}
                        filter={todolists.filter}/>
                })
            }

        </div>
    );
}

export default App;
