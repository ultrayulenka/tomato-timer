import { Modal, Button, Container, Row, Col, FormCheck, FormControl } from 'react-bootstrap';
import IntervalsControl from '../intervals-control';

function SettingsModal({isShown, onClose, onSave}) {
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
                        <FormControl type="number" value={0} />
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-primary" onClick={onSave}>
            OK
            </Button>
        </Modal.Footer>
    </Modal>
  );
}

export default SettingsModal;
