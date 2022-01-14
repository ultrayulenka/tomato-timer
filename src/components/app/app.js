import './app.scss';
import { Container } from 'react-bootstrap';
import TodoContainer from '../todo-container';
import TimerContainer from '../timer-container';
import { useEffect } from 'react';
import GridLayout from '../grid-layout';

function App() {

  useEffect(() => {
    if (Notification.permission !== "denied") {
      Notification.requestPermission()
    }
  }, [])

  return (
    <div className="app">
      <Container fluid className="p-0">
        <GridLayout
          rows={1} col={2}
          proportions={[4, 8]}>
            <TodoContainer />
            <TimerContainer />
        </GridLayout>
      </Container>
    </div>
  );
}

export default App;
