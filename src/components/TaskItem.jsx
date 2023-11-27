import { useState } from "react";


function TaskItem({ task, deleteTask, updateTask, toggleTaskCompletion }) {

    const [isEditing, setIsEditing] = useState(false);
    const [editedTaskName, setEditedTaskName] = useState(task.nombre);

    const handleUpdateClick = () => {
        setIsEditing(true);
    }

    const handleSaveClick = () => {
        // Guardar la tarea actualizada 
        updateTask(task.id, editedTaskName);
        setIsEditing(false);
    }

    const handleCancelClick = () => {
        // Cancelar edicion
        setIsEditing(false);
        setEditedTaskName(task.nombre);
    }

    const handleNameChange = e => {
        setEditedTaskName(e.target.value);
    }

    return (

        <>
            <div className="task__items">
                <li className='task__items-list'>
                    <input
                        type="checkbox"
                        checked={task.completada}
                        onChange={() => toggleTaskCompletion(task.id)}
                    />

                    {isEditing ? (
                        <input
                            type="text"
                            value={editedTaskName}
                            onChange={handleNameChange}
                        />
                    ) : (
                        <span style={{ textDecoration: task.completada ? 'line-through' : 'none' }}>{task.nombre}</span>
                    )}
                </li>

                <div className="task__buttons">

                    {!isEditing && (
                        <button
                            onClick={() => deleteTask(task.id)}
                            className='task__btn-delete'
                        >Eliminar</button>
                    )}

                    {!isEditing ? (
                        <button
                            onClick={handleUpdateClick}
                            className='task__btn-update'
                        >Editar</button>
                    ) : (
                        <>
                            <button onClick={handleSaveClick} className='task__btn-save'>
                                Guardar
                            </button>
                            <button onClick={handleCancelClick} className='task__btn-cancel'>
                                Cancelar
                            </button>
                        </>
                    )}

                </div>
            </div>
        </>
    );
}

export default TaskItem;
