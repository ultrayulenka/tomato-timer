import './clock.scss';
import { useState, useEffect } from 'react';

function Clock({ min = 0, sec = 0, isRunning = false, changeTime = () => {} }) {

    useEffect(() => {
        if(isRunning) {
            const interval = setInterval(() => {
                changeTime();
            }, 1000)

            return () => clearInterval(interval);
        }
    }, [isRunning]);

    return (
        <div className="clock-box">
            <div className="clock">
                <span className="minutes">{min < 10? `0${min}` : min}</span>
                <span>:</span>
                <span className="seconds">{sec < 10? `0${sec}` : sec}</span>
            </div>
        </div>
    );
}
  
export default Clock;