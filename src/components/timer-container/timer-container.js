import './timer-container.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useMemo } from 'react';

function TimerContainer() {
    const periods = useMemo(() => [
        {
            name: 'Work',
            duration: {
                min: 1,
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

    const [clock, setClock] = useState({
        isRunning: true,
        activePeriod: 0,
        time: {...periods[0].duration}
    });

    useEffect(() => {
        if(clock.isRunning) {
            const interval = setInterval(() => {
                setClock(prev => {
                    const { time: { min, sec } } = prev;
                    if(sec > 0) {
                        return {
                            ...prev,
                            time: {
                                min,
                                sec: sec - 1
                            }
                        }
                    } else if(min > 0) {
                        return {
                            ...prev,
                            time: {
                                min: min - 1,
                                sec: 59
                            }
                        }
                    } else {
                        return {
                            ...prev,
                            isRunning: false,
                            time: {
                                min: 0,
                                sec: 0
                            }
                        }
                    }
                });
            }, 1000)

            return () => clearInterval(interval)
        } else {
            setClock(prev => {
                const newActive = prev.activePeriod < 2? prev.activePeriod + 1 : 0;
                return {
                    prev,
                    isRunning: true,
                    activePeriod: newActive,
                    time: {...periods[newActive].duration}
                }
            })
        }
    }, [clock.isRunning, periods])

  return (
    <section className="app__section timer-container">
        <h2 className="section-title">Tomato Timer</h2>
        <div className="timer">
            <div className="clock-box">
                <div className="clock">
                    <span className="minutes">{clock.time.min < 10? `0${clock.time.min}` : clock.time.min}</span>
                    <span>:</span>
                    <span className="seconds">{clock.time.sec < 10? `0${clock.time.sec}` : clock.time.sec}</span>
                </div>
            </div>
            <div className='timer__controls'>
                <ul className='timer__switch'>
                    {
                        periods.map(({name}, index) => (
                            <li
                                key={name}
                                className={`timer__state
                                ${clock.activePeriod === index? 'timer__state_current' : ''}`}>
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
                        onClick={() => setClock(prev => {return {...prev, isRunning: !prev.isRunning}})}>
                        <FontAwesomeIcon  className='controls__icon' icon={clock.isRunning? faPause : faPlay}/>
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
