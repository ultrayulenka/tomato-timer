import './timer-container.css';
import { useState, useEffect } from 'react';

function TimerContainer() {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            if(seconds <= 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000)

        return () => {
            clearInterval(interval)
        }

    }, [minutes, seconds])
  return (
    <div className="timer-container">
        <h2>Timer Container</h2>
        <div>
            <p>
                <span>{minutes >= 10? minutes : `0${minutes}`}:</span>
                <span>{seconds >= 10? seconds : `0${seconds}`}</span>
            </p>
        </div>
    </div>
  );
}

export default TimerContainer;
