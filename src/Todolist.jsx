import React, { useState } from 'react'

export const Todolist = () => {
    const [tasks, setTasks] = useState(["eat breakfast", "Take a shower", "walk a dog"]);
    const [newTask, setNewTask] = useState("");


    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("")
        }

    }
    function deleteTask(index) {
        const updatedTask = tasks.filter((_, i) => i !== index)
        setTasks(updatedTask);

    }
    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    return (
        <div className='to-do-list'>
            <h1>Todolist</h1>
            <div>
                <input type='text' value={newTask} onChange={handleInputChange} placeholder='Add a new task' />
                <button className='add-button' onClick={addTask} >Add task</button>
            </div>
            <ol>

                {
                    tasks.map((task, index) =>
                        <li key={index}>
                            <span className='text'>{task}</span>
                            <button onClick={() => deleteTask(index)} className='delete-button'>Delete</button>
                            <button onClick={() => moveTaskUp(index)} className='move-button'>Up</button>
                            <button onClick={() => moveTaskDown(index)} className='move-button'>Down</button>
                        </li>
                    )

                }

            </ol>
        </div>

    )
}
