import './timer-container.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

function TimerContainer() {
    const [time, setTime] = useState({min: 1, sec: 10})
    const [periods, setPeriods] = useState([
        {
            name: 'Work',
            isOn: true
        },
        {
            name: 'Break',
            isOn: false
        },
        {
            name: 'Rest',
            isOn: false
        }
    ]);

    const [isRunning, setIsRunning] = useState(true);
    
    useEffect(() => {
        if(isRunning) {
            const interval = setInterval(() => {
                setTime(prev => {
                    const { min, sec } = prev;

                    if(sec > 0) {
                        return {
                            min,
                            sec: sec - 1
                        }
                    } else if(min > 0) {
                        return {
                            min: min - 1,
                            sec: 59
                        }
                    } else {
                        setIsRunning(false);
                        return {
                            min: 0,
                            sec: 0
                        }
                    }
                })
            }, 1000)

            return () => clearInterval(interval)
        } 

        return undefined;

    }, [isRunning])


  return (
    <section className="app__section timer-container">
        <h2 className="section-title">Tomato Timer</h2>
        <div className="timer">
            <div className="clock-box">
                <div className="clock">
                    <span className="minutes">{time.min < 10? `0${time.min}` : time.min}</span>
                    <span>:</span>
                    <span className="seconds">{time.sec < 10? `0${time.sec}` : time.sec}</span>
                </div>
            </div>
            <div className='timer__controls'>
                <ul className='timer__switch'>
                    {
                        periods.map(({name, isOn}) => (
                            <li
                                key={name}
                                className={`timer__state
                                ${isOn? 'timer__state_current' : ''}`}>
                                {name}
                            </li>
                        ))
                    }
                </ul>
                <div className='controls'>
                    <button className='play-btn'>
                        <FontAwesomeIcon className='controls__icon' icon={faBackward}/>
                    </button>
                    <button className='pause-btn'
                        onClick={() => setIsRunning(prev => !prev)}>
                        <FontAwesomeIcon  className='controls__icon' icon={isRunning? faPause : faPlay}/>
                    </button>
                    <button className='play-btn'>
                        <FontAwesomeIcon className='controls__icon' icon={faForward}/>
                    </button>
                </div>
                <p className='progress'></p>
            </div>
        </div>
    </section>
  );
}

export default TimerContainer;
