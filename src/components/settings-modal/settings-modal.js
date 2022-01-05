import { Modal, Button } from 'react-bootstrap';
import IntervalsControl from '../intervals-control';

function SettingsModal({isShown, onClose, onSave}) {
  return (
    <Modal show={isShown} onHide={onClose}>
        <Modal.Header closeButton>
            <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!
            <IntervalsControl />
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-primary" onClick={onSave}>
            Save
            </Button>
        </Modal.Footer>
    </Modal>
  );
}

export default SettingsModal;
