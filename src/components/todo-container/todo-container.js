import './todo-container.scss';
import TaskList from '../task-list';
import InputForm from '../input-form';
import TodoHeader from '../todo-header';
import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoTasksContext from '../todo-tasks-context';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function TodoContainer() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const {
        setTasks
    } = useContext(TodoTasksContext);

    const addTask = ({ title, totalEstimation = null}) => {
        setTasks(prev => {
            return [
                ...prev,
                {
                    title,
                    id: uuidv4(),
                    active: false,
                    done: false,
                    estimation: {
                        done: 0,
                        total: totalEstimation
                    }
                }
            ]
        })
        setIsFormVisible(false);
    }

    return (
    <section className="app__section todo-container">
        <Container>
            <h2 className="section-title">Todo List</h2>
            <TodoHeader />
            <TaskList />
            {
                isFormVisible?
                <InputForm 
                    onSubmit={addTask}
                    onClose={() => setIsFormVisible(false)}/>
                :
                <Button
                    variant="outline-dark" 
                    className="w-100"
                    onClick={() => setIsFormVisible(true)}>
                    <FontAwesomeIcon icon={faPlusCircle}/>
                    <span className="btn-text">Add Task</span>
                </Button>
            }
        </Container>
    </section>
    );
}

export default TodoContainer;
