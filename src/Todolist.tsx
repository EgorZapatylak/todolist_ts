import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
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
    addTask: (title: string) => void

}

export function Todolist(props: PropsTodolistType) {
    let [title, setTitle] = useState('')

    const addTask = () => {
        props.addTask(title)
        setTitle('')
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTask()
        }
    }
    const onAllClickHandler = () => {
        props.filteredTask('all')
    }
    const onActiveClickHandler = () => {
        props.filteredTask('active')
    }
    const onCompletedClickHandler = () => {
        props.filteredTask('completed')
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title} onChange={(event) => {
                    setTitle(event.currentTarget.value)
                }}
                       onKeyPress={(event) => {
                           if (event.key === 'Enter') {
                               addTask()
                           }
                       }}/>
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {props.tasks.map((task) => {
                    const onRemoveHandler = () => props.removeTask(task.id)
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