import './todo-header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';

function TodoHeader({ todo = 0, all = 0, clearClick = () => {} }) {
    const done = all - todo;

  return (
    <div className="todo-header">
        <h3 className="todo-header__text">{`${todo} more to do, ${done} done`}</h3>
        {
            done > 0 && 
            <button className="btn btn_sm btn_info btn-clear"
                onClick={clearClick}>
                <FontAwesomeIcon icon={faEraser} />
            </button>
        }
    </div>
  );
}

export default TodoHeader;
