import './app.scss';
import { Container } from 'react-bootstrap';
import TodoContainer from '../todo-container';
import TimerContainer from '../timer-container';
import GridLayout from '../grid-layout';
import { useEffect, useState } from 'react';
import TodoTasksContext from '../todo-tasks-context';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (Notification.permission !== "denied") {
      Notification.requestPermission()
    }
  }, [])

  return (
    <div className="app">
      <Container fluid className="p-0">
        <TodoTasksContext.Provider value={{tasks, setTasks}}>
          <GridLayout
            rows={1} col={2}
            proportions={[4, 8]}>
            <TodoContainer />
            <TimerContainer />
          </GridLayout>
        </TodoTasksContext.Provider>
      </Container>
    </div>
  );
}

export default App;
