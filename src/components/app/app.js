import './app.scss';
import { Col, Row, Container } from 'react-bootstrap';
import TodoContainer from '../todo-container';
import TimerContainer from '../timer-container';
import { useEffect } from 'react';

function App() {

  /*const showNotification = () => {
    const notification = new Notification('Message from Tomato Timer', {
      body: "Time to study"
    })
  }*/

  useEffect(() => {
    if (Notification.permission !== "denied") {
      Notification.requestPermission()
    }
  }, [])

  return (
    <div className="app">
      <Container fluid className="p-0">
        <Row>
          <Col md={4} className="pr-0">
            <TodoContainer />
          </Col>
          <Col md={8}>
            <TimerContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
