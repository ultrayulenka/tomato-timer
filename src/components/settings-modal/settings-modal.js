import { Modal, Container, FormCheck, FormControl } from 'react-bootstrap';
import TimerContext from '../timer-context';
import { useContext } from 'react';
import IntervalsControl from '../intervals-control';
import GridLayout from '../grid-layout';

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
                <GridLayout 
                    rows={4} col={2}
                    proportions={[9, 3]}
                    rowGap={3}>
                    <h6>Auto start Breaks</h6>
                    <FormCheck type="switch"  className="lg-switch"/>
                    <h6>Auto start Tomatos</h6>
                    <FormCheck type="switch" className="lg-switch" />
                    <h6>Rest Interval</h6>
                    <FormControl type="number" defaultValue={rounds.betweenRest} 
                        onChange={event => setRounds(prev => {return {...prev, betweenRest: event.target.value}})}/>
                    <h6>Number of rounds</h6>
                    <FormControl type="number" defaultValue={rounds.all} 
                        onChange={event => setRounds(prev => {return {...prev, all: event.target.value}})}/>
                </GridLayout>
            </Container>
        </Modal.Body>
    </Modal>
  );
}

export default SettingsModal;
