import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Footer from './components/Footer';

function App() {
  // Persistencia de las tareas en el local storage
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Escuchando el estado de las tareas
  const [tasks, setTasks] = useState(initialTasks.length ? initialTasks : [
    { id: 1, nombre: 'Hacer guiso', completada: false },
    { id: 2, nombre: 'Sacar a pasear al perro', completada: true },
  ]);

  const [editMessage, setEditMessage ] = useState('');

  useEffect(() => {
    // Guardar tareas en localStorage cada vez que el estado tasks cambie
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    if (editMessage) {
      // Mostrar una alerta indicando que se realizo la accion
      alert(editMessage);
      // Limpiar el mensaje
      setEditMessage('');
    }
  }, [tasks]); 
  // El segundo argumento es un array de dependencias, en este caso, solo tasks

  // Agregar tareas
  const addTask = task => {
    setTasks([...tasks, task]);
  };

  // Borrar tareas
  const deleteTask = taskId => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setEditMessage('Tarea eliminada exitosamente');
  };

  // Actualizar tareas
  const updateTask = (taskId, updatedName) => {
    const updatedTasks = tasks.map( task => (
      task.id === taskId ? {...task, nombre: updatedName } : task
    ))
    setTasks(updatedTasks);
    setEditMessage('Cambios guardados exitosamente');
  } 

  const toggleTaskCompletion = taskId => {
    const updatedTasks = tasks.map(task => (
      task.id === taskId ? { ...task, completada: !task.completada } : task
    ))
    setTasks(updatedTasks);
    setEditMessage('Has completado la tarea !');
  }

  return (
    <div className="task__container">
      <h1 className='task__title'>Gestor de Tareas</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        updateTask={updateTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
      <Footer />
    </div>
  );
}

export default App;
