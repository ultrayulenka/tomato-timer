import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Task({ id, title, deleteTask, toggleDone, toggleImportant }) {
    return (
        <>
            <span className="text"
                onClick={() => toggleDone(id)}>{title}</span>
            <div className="btn-group">
                <button className="btn btn-sm btn_success"
                    onClick={() => toggleImportant(id)}>
                    <FontAwesomeIcon icon={faExclamation} />
                </button>
                <button className="btn btn-sm btn_danger"
                    onClick={() => deleteTask(id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </div>
        </>
    );
  }
  
  export default Task;