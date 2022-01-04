import './todo-container.scss';
import TaskList from '../task-list';
import InputForm from '../input-form';
import TodoHeader from '../todo-header';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

function TodoContainer() {
    const [tasks, setTasks ] = useState([]);

    const addTask = (title) => {
        setTasks(prev => {
            return [
                ...prev,
                {
                    title,
                    id: uuidv4(),
                    important: false,
                    done: false
                }
            ]
        })
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
            <InputForm onSubmit={addTask} />
        </Container>
    </section>
    );
}

export default TodoContainer;
