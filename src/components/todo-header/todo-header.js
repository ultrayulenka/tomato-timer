import './todo-header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import Button from '../button';

function TodoHeader({ todo = 0, all = 0, clearClick = () => {} }) {
    const done = all - todo;

  return (
    <div className="todo-header">
        <h3 className="todo-header__text">{`${todo} more to do, ${done} done`}</h3>
        {
            done > 0 && 
            <Button
                className='btn-clear'
                size='sm'
                color='info'
                onClick={clearClick}>
                <FontAwesomeIcon icon={faEraser} />
            </Button>
        }
    </div>
  );
}

export default TodoHeader;
