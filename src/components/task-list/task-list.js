import './task-list.scss';
import Task from '../task'

function TaskList({ list, deleteTask, toggleDone, toggleImportant }) {
  return (
    <ul className="todo-list">
        {
            list.length > 0 && 
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
        }
    </ul>
  );
}

export default TaskList;
