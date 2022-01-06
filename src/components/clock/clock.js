import './clock.scss';
import { useEffect, useContext } from 'react';
import TimerContext from '../timer-context';

function Clock({ isRunning = false }) {
    const { time, setTime } = useContext(TimerContext)

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
                        return {
                            min: 0,
                            sec: 0
                        }
                    }
                })
            }, 1000)

            return () => clearInterval(interval);
        }
    }, [isRunning]);

    return (
        <div className="clock-box">
            <div className="clock">
                <span className="minutes">{time.min < 10? `0${time.min}` : time.min}</span>
                <span>:</span>
                <span className="seconds">{time.sec < 10? `0${time.sec}` : time.sec}</span>
            </div>
        </div>
    );
}
  
export default Clock;