import './timer-container.scss';
import Timer from '../timer';
import SettingsModal from '../settings-modal';
import { useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';


function TimerContainer() {
  const [isSettingsShown, setIsSettingsShown] = useState(false);

  return (
    <section className="app__section timer-container">
        <Container>
          <div className="d-flex justify-content-between">
            <h2 className="section-title">Tomato Timer</h2>
            <Button className="settings-btn" variant="outline-dark"
              onClick={() => setIsSettingsShown(true)}>
              <FontAwesomeIcon icon={faCogs} className="settings-btn__icon"/>
            </Button>
            <SettingsModal isShown={isSettingsShown} onClose={() => setIsSettingsShown(false)}/>
          </div>
          <Timer />
        </Container>
    </section>
  );
}

export default TimerContainer;
