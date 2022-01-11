import './todo-header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

function TodoHeader({ todo = 0, all = 0, clearClick = () => {} }) {
    const done = all - todo;

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
              onClick={clearClick}>
              <FontAwesomeIcon icon={faEraser} />
            </Button>
          </OverlayTrigger>
        }
    </div>
  );
}

export default TodoHeader;
