import './timer-container.scss';
import Timer from '../timer';
import SettingsModal from '../settings-modal';
import TimerContext from '../timer-context';
import { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';


function TimerContainer() {
  const [isSettingsShown, setIsSettingsShown] = useState(false);

  const [isRunning, setIsRunning] = useState(false);

  const [time, setTime] = useState({
    min: 0,
    sec: 30
  });

  const [intervals, setIntervals] = useState([
    {
      name: 'Work',
      duration: {
        min: 0,
        sec: 5
      }
    },
    {
      name: 'Break',
      duration: {
        min: 0,
        sec: 5
      }
    },
    {
      name: 'Rest',
      duration: {
        min: 0,
        sec: 30
      }
    }
  ]);

  const [rounds, setRounds] = useState({
    all: 12,
    done: 0,
    betweenRest: 4,
    current: 'Work'
  });

  useEffect(() => {
    if(!isRunning) {
      setTime({...intervals.find(interval => interval.name === rounds.current).duration})
    }
  }, [intervals])

  return (
    <section className="app__section timer-container">
      <TimerContext.Provider value={{
        time, setTime, intervals, setIntervals, rounds, setRounds, isRunning, setIsRunning
        }}>
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
      </TimerContext.Provider>
    </section>
  );
}

export default TimerContainer;
