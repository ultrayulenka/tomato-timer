import './task-list.scss';
import Task from '../task';
import { ListGroup } from 'react-bootstrap'

function TaskList({ list, deleteTask, toggleDone, toggleImportant }) {
  return (
    <ListGroup className="todo-list" as="ul">
        {
            list.length > 0 && 
            list.map(item => {
                return (
                    <ListGroup.Item className={
                        `todo-list__item 
                        text-dark
                        ${item.done? 'done' : ''}
                        ${item.important? 'important' : ''}`} 
                        key={item.id}
                        as="li">
                        <Task 
                            {...item} 
                            deleteTask={deleteTask}
                            toggleDone={toggleDone}
                            toggleImportant={toggleImportant}/>
                    </ListGroup.Item>
                )
            })
        }
    </ListGroup>
  );
}

export default TaskList;
