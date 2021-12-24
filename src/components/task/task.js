import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../button';
import './task.css'

function Task({ id, title, deleteTask, toggleDone, toggleImportant }) {
    return (
        <>
            <span className="text"
                onClick={() => toggleDone(id)}>{title}</span>
            <div className="btn-group">
                <Button
                    size='sm'
                    color='success'
                    onClick={() => toggleImportant(id)}>
                    <FontAwesomeIcon icon={faExclamation} />
                </Button>
                <Button
                    size='sm'
                    color='danger'
                    onClick={() => toggleImportant(id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
            </div>
        </>
    );
  }
  
  export default Task;