import './task-list.scss';
import Task from '../task';
import { ListGroup } from 'react-bootstrap'
import { useContext } from 'react';
import TodoTasksContext from '../todo-tasks-context';

function TaskList() {
    const {
        tasks,
        setTasks
    } = useContext(TodoTasksContext);

    const deleteTask = (id) => {
        setTasks(prev => prev.filter(item => item.id !== id))
    }

    const toggleDone = (id) => {
        setTasks(prev => {
            return prev.map(item => {
                if(item.id === id) {
                    return {
                        ...item,
                        done: !item.done,
                        active: !item.done? false : item.active
                    }
                }
                return item;
            })
        })
    }

    const toggleActive = (id) => {
        setTasks(prev => {
            return prev.map(item => {
                if(item.id === id) {
                    return {
                        ...item,
                        active: !item.active
                    }
                }
                return {
                    ...item,
                    active: false
                }
            })
        })
    }

  return (
    <ListGroup className="todo-list" as="ul">
        {
            tasks.length > 0 && 
            tasks.map(item => {
                return (
                    <ListGroup.Item className={
                        `todo-list__item 
                        text-dark
                        ${item.done? 'done' : ''}
                        ${item.active? 'important' : ''}`} 
                        key={item.id}
                        as="li">
                        <Task 
                            {...item} 
                            deleteTask={deleteTask}
                            toggleDone={toggleDone}
                            toggleActive={toggleActive}/>
                    </ListGroup.Item>
                )
            })
        }
    </ListGroup>
  );
}

export default TaskList;
