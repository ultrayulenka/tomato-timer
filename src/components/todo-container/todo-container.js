import './todo-container.scss';
import TaskList from '../task-list';
import InputForm from '../input-form';
import TodoHeader from '../todo-header';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function TodoContainer() {
    const [tasks, setTasks ] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const addTask = ({ title, estimation = null}) => {
        console.log(title, estimation);
        setTasks(prev => {
            return [
                ...prev,
                {
                    title,
                    id: uuidv4(),
                    important: false,
                    done: false,
                    estimation
                }
            ]
        })
        setIsFormVisible(false)
    }

    const deleteTask = (id) => {
        setTasks(prev => prev.filter(item => item.id !== id))
    }

    const removeDone = () => {
        setTasks(prev => prev.filter(task => !task.done));
    }

    const toggleProperty = (({property, id}) => {
        setTasks(prev => {
            return prev.map(item => {
                if(item.id === id) {
                    return {
                        ...item,
                        [property]: !item[property]
                    }
                }
                return item;
            })
        })
    })

    const toggleDone = (id) => toggleProperty({property: 'done', id});
    const toggleImportant = (id) => toggleProperty({property: 'important', id});

    return (
    <section className="app__section todo-container">
        <Container>
            <h2 className="section-title">Todo List</h2>
            <TodoHeader 
                todo={tasks.filter(task => !task.done).length}
                all={tasks.length}
                clearClick={removeDone}/>
            <TaskList 
                list={tasks} 
                deleteTask={deleteTask}
                toggleDone={toggleDone}
                toggleImportant={toggleImportant}/>
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
