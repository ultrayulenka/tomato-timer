import './clock.scss';
import { useEffect, useContext } from 'react';
import TimerContext from '../timer-context';
import ProgressBar from '../progress-bar';

function Clock({ isRunning = false }) {
    const { time, setTime, intervals, currentRound } = useContext(TimerContext);

    const getProgress = () => {
        const {min, sec} = intervals.find(interval => interval.name === currentRound).duration;
        const total = min * 60 + sec;
        const current = time.min * 60 + time.sec;
        return (total - current) / total * 100;
    }

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
            <ProgressBar 
                progress={getProgress()}/>
            <div className="clock">
                <span className="minutes">{time.min < 10? `0${time.min}` : time.min}</span>
                <span>:</span>
                <span className="seconds">{time.sec < 10? `0${time.sec}` : time.sec}</span>
            </div>
        </div>
    );
}
  
export default Clock;