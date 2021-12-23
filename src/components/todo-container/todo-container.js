import './todo-container.css';
import TaskList from '../tasks-list';
import InputForm from '../input-form';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react/cjs/react.development';

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
        <h2 className="section-title">Todo List</h2>
        <TaskList 
            list={tasks} 
            deleteTask={deleteTask}
            toggleDone={toggleDone}
            toggleImportant={toggleImportant}/>
        <InputForm onSubmit={addTask} />
    </section>
    );
}

export default TodoContainer;
