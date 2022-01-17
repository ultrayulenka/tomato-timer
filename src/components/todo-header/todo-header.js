import './todo-header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import TodoTasksContext from '../todo-tasks-context';

function TodoHeader() {
  const {
    tasks,
    setTasks
  } = useContext(TodoTasksContext);

  const done = tasks.filter(item => item.done).length;
  const todo = tasks.length - done;

  const removeDone = () => {
    setTasks(prev => prev.filter(task => !task.done));
  }

  return (
    <div className="todo-header">
        <h3 className="todo-header__text">{`${todo} more to do, ${done} done`}</h3>
        {
          done > 0 && 
          <OverlayTrigger
            placement="right"
            overlay={
              <Tooltip>
                Remove done tasks
              </Tooltip>
            }>
            <Button
              className='btn-clear'
              size='sm'
              variant="dark"
              onClick={removeDone}>
              <FontAwesomeIcon icon={faEraser} />
            </Button>
          </OverlayTrigger>
        }
    </div>
  );
}

export default TodoHeader;
