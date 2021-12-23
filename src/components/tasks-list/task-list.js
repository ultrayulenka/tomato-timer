//import './todo-container.css';
import Task from '../task'

function TaskList({ list, deleteTask, toggleDone, toggleImportant }) {
  return (
    <ul className="todo-list">
        {
            list.length?
            list.map(item => {
                return (
                    <li className={
                        `todo-list__item 
                        ${item.done? 'done' : ''}
                        ${item.important? 'important' : ''}`} 
                        key={item.id}>
                        <Task 
                            {...item} 
                            deleteTask={deleteTask}
                            toggleDone={toggleDone}
                            toggleImportant={toggleImportant}/>
                    </li>
                )
            })
            : <p>Nothing left to do...</p>
        }
    </ul>
  );
}

export default TaskList;
