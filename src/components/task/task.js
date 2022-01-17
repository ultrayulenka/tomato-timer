import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Badge } from 'react-bootstrap'
import './task.css'

function Task({ id, title, done, estimation, deleteTask, toggleDone, toggleActive }) {
    return (
        <>
            <span className="text"
                onClick={() => toggleDone(id)}>{title}</span>
            {estimation.total && 
                <Badge bg="danger" pill>{estimation.done}/{estimation.total}</Badge>
            }
            <div className='buttons'>
                <Button size="sm" variant="outline-primary"
                    className="me-1"
                    onClick={() => toggleActive(id)}
                    disabled={done}>
                    <FontAwesomeIcon icon={faExclamation} />
                </Button>
                <Button size="sm" variant="outline-danger"
                    onClick={() => deleteTask(id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
            </div>
        </>
    );
  }
  
  export default Task;