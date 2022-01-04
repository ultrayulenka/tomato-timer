import './app.scss';
import { Col, Row, Container } from 'react-bootstrap';
import TodoContainer from '../todo-container';
import TimerContainer from '../timer-container';

function App() {
  return (
    <div className="app">
      <Container fluid className="p-0">
        <Row>
          <Col md={4}>
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
