import { FormControl, Container, Row, Col, FormCheck } from 'react-bootstrap';
import './intervals-control.scss'

function IntervalsConrol() {
  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <h6>Work</h6>
          <FormControl type="number" value={0} />
        </Col>
        <Col>
          <h6>Break</h6>
          <FormControl type="number" value={0} />
        </Col>
        <Col>
          <h6>Rest</h6>
          <FormControl type="number" value={0} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h6>Auto start Breaks</h6>
        </Col>
        <Col md={4}>
          <FormCheck type="switch" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h6>Auto start Tomatos</h6>
        </Col>
        <Col md={4}>
          <FormCheck type="switch"/>
        </Col>
      </Row>
      <Row>
        <Col>
          <h6>Rest Interval</h6>
        </Col>
        <Col md={4}>
          <FormControl type="number" value={0} />
        </Col>
      </Row>
    </Container>
  );
}

export default IntervalsConrol;
