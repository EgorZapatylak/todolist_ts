import React from "react";
import {FilteredValueType} from "./App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsTodolistType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    filteredTask: (value:FilteredValueType) => void

}

export function Todolist(props: PropsTodolistType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
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
                <button onClick={()=> (props.filteredTask('all'))}>All</button>
                <button onClick={()=> (props.filteredTask('active'))}>Active</button>
                <button onClick={()=> (props.filteredTask('completed'))}>Completed</button>
            </div>
        </div>
    )
}