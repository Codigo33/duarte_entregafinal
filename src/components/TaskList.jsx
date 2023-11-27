import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, updateTask, toggleTaskCompletion }) {
    return (
        <ul className='task__list'>
            {tasks.map( task => (
                <TaskItem 
                    key={task.id} 
                    task={task} 
                    deleteTask={deleteTask} 
                    updateTask={updateTask}
                    toggleTaskCompletion={toggleTaskCompletion}
                />
            ))}
        </ul>
    );
}

export default TaskList;
