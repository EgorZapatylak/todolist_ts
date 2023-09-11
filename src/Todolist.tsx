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
    checkStatusTask: (id: string, isDone: boolean) => void
    filter: FilteredValueType
}

export function Todolist(props: PropsTodolistType) {
    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim())
            setTitle('')
        } else {
            setError('Title is required')
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
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
                <input value={title} onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       className={error ? 'error' : ''}/>
                <button onClick={addTask}>+</button>
                {error && <div className='error_message'>{error}</div>}
            </div>
            <ul>
                {props.tasks.map((task) => {
                    const onRemoveHandler = () => props.removeTask(task.id)
                    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = event.currentTarget.checked
                        props.checkStatusTask(task.id, newIsDoneValue)
                    }
                    return (
                        <li key={task.id} className={task.isDone ? 'isDone_true' : ''}>
                            <input type="checkbox"
                                   checked={task.isDone}
                                   onChange={onChangeHandler}/>
                            <span>{task.title}</span>
                            <button onClick={onRemoveHandler}>X</button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button className={props.filter === 'all' ? 'active_filter' : ''}
                        onClick={onAllClickHandler}>All
                </button>
                <button className={props.filter === 'active' ? 'active_filter' : ''}
                        onClick={onActiveClickHandler}>Active
                </button>
                <button className={props.filter === 'completed' ? 'active_filter' : ''}
                        onClick={onCompletedClickHandler}>Completed
                </button>
            </div>
        </div>
    )
}