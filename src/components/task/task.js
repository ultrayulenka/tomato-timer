import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Badge } from 'react-bootstrap'
import './task.css'
import tomato from './tomato.svg'

function Task({ id, title, estimation = 0, deleteTask, toggleDone, toggleImportant }) {
    return (
        <>
            <span className="text"
                onClick={() => toggleDone(id)}>{title}</span>
            {estimation && 
                <Badge bg="danger" pill>{estimation}</Badge>
            }
            <div className='buttons'>
                <Button size="sm" variant="outline-primary"
                    className="me-1"
                    onClick={() => toggleImportant(id)}>
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