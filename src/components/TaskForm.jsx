import { useState } from 'react';

function TaskForm({ addTask }) {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (taskText.trim() === '') return;

        const newTask = {
            id: new Date().getTime(),
            nombre: taskText,
            completada: false,
        };

        addTask(newTask);

        setTaskText('');
    };

    return (
        <form onSubmit={handleSubmit} className='task__form'>
            <input
                type="text"
                placeholder="Agregá una tarea.."
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                className='task__input'
            />
            <button type="submit" className='task__btn'>Agregar tarea</button>
        </form>
    );
}

export default TaskForm;
