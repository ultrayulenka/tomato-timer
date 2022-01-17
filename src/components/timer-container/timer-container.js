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
        min: 25,
        sec: 0
      }
    },
    {
      name: 'Break',
      duration: {
        min: 5,
        sec: 0
      }
    },
    {
      name: 'Rest',
      duration: {
        min: 15,
        sec: 0
      }
    }
  ]);

  const [currentRound, setCurrentRound] = useState('Work');

  const [rounds, setRounds] = useState({
    all: 12,
    done: 0,
    betweenRest: 4,
    autoStartWork: false,
    autoStartBreaks: false
  });

  useEffect(() => {
    setTime({...intervals.find(interval => interval.name === currentRound).duration});
    if((currentRound === 'Work' && rounds.autoStartWork)
    || ((currentRound === 'Break' || currentRound === 'Rest') && rounds.autoStartBreaks)) {
        setIsRunning(true)
    }
  }, [intervals, currentRound])

  return (
    <section className="app__section timer-container">
      <TimerContext.Provider value={{
        time, setTime, 
        intervals, setIntervals, 
        rounds, setRounds, 
        isRunning, setIsRunning, 
        currentRound, setCurrentRound
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
