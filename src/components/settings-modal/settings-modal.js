import { Modal, Button, Container, Row, Col, FormCheck, FormControl } from 'react-bootstrap';
import TimerContext from '../timer-context';
import { useContext } from 'react';
import IntervalsControl from '../intervals-control';

function SettingsModal({isShown, onClose}) {
    const { rounds, setRounds } = useContext(TimerContext);

  return (
    <Modal show={isShown} onHide={onClose}>
        <Modal.Header closeButton>
            <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <IntervalsControl />
                <Row className="mb-3">
                    <Col>
                        <h6>Auto start Breaks</h6>
                    </Col>
                    <Col md={3}>
                        <FormCheck type="switch"  className="modal-switch"/>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <h6>Auto start Tomatos</h6>
                    </Col>
                    <Col md={3} className="float-right">
                        <FormCheck type="switch" className="modal-switch" />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <h6>Rest Interval</h6>
                    </Col>
                    <Col md={4}>
                        <FormControl type="number" defaultValue={rounds.betweenRest} 
                            onChange={event => setRounds(prev => {return {...prev, betweenRest: event.target.value}})}/>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <h6>Number of rounds</h6>
                    </Col>
                    <Col md={4}>
                        <FormControl type="number" defaultValue={rounds.all} 
                            onChange={event => setRounds(prev => {return {...prev, all: event.target.value}})}/>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
    </Modal>
  );
}

export default SettingsModal;
