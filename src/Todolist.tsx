import React, {useState} from "react";
import {FilteredValueType} from "./App";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsTodolistType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    filteredTask: (value: FilteredValueType) => void
    addTask: ()=>void

}

export function Todolist(props: PropsTodolistType) {
    let [title,setTitle]= useState('')
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title} onChange={(event)=>{setTitle(event.currentTarget.value)}}/>
                <button onClick={()=>(props.addTask())}>+</button>
            </div>
            <ul>
                {props.tasks.map((task) => {
                    return (
                        <li key={task.id}><input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                            <button onClick={() => (props.removeTask(task.id))}>X</button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => (props.filteredTask('all'))}>All</button>
                <button onClick={() => (props.filteredTask('active'))}>Active</button>
                <button onClick={() => (props.filteredTask('completed'))}>Completed</button>
            </div>
        </div>
    )
}