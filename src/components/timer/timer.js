import './timer.scss';
import Clock from '../clock';
import Intervals from '../intervals';
import Controls from '../controls';
import RoundsIndicator from '../rounds-indicator';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

function Timer() {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState({
        min: 0,
        sec: 30
    });
    const intervals = [{
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
    }];

    const [rounds, setRounds] = useState({
        all: 12,
        done: 0,
        betweenRest: 4,
        current: 'Work'
    });

    const getUpdatedRounds = (rounds) => {
        if(rounds.current === 'Break' || rounds.current === 'Rest') {
            return {
                ...rounds,
                current: 'Work'
            }
        } else {
            const newCurrent = (rounds.done + 1) % rounds.betweenRest === 0? 'Rest' : 'Break';
            return {
                ...rounds,
                done: rounds.done + 1,
                current: newCurrent
            }
        }
    }

    const skipRound = () => {
        setIsRunning(false);
        setRounds(prev => {
            return getUpdatedRounds(prev);
        })
    }

    const restartRound = () => {
        setIsRunning(false);
        setTime({...intervals.find(interval => interval.name === rounds.current).duration})
    }

    useEffect(() => {
        setTime({...intervals.find(interval => interval.name === rounds.current).duration})
    }, [rounds]);

    useEffect(() => {
        if(time.min === 0 && time.sec === 0) {
            setIsRunning(false);
            setRounds(prev => {
                return getUpdatedRounds(prev);
            })
        }
    }, [time])

    const changeTime = () => {
        setTime(prev => {
            const { min, sec } = prev;

            if(sec > 1) {
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
    }

    return (
        <div className="timer">
            <Clock 
                min={time.min}
                sec={time.sec}
                isRunning={isRunning}
                changeTime={changeTime} />
            <div className='timer__controls'>
                <Intervals 
                    intervals={intervals}
                    current={rounds.current}/>
                <Controls 
                    isRunning={isRunning}
                    onPauseClick={() => setIsRunning(prev => !prev)}
                    onNextClick={skipRound}
                    onPrevClick={restartRound}/>
                <RoundsIndicator 
                    all={rounds.all}
                    done={rounds.done}
                    tillRest={rounds.current === 'Rest'? 0 : rounds.betweenRest - rounds.done % rounds.betweenRest}/>
            </div>
        </div>
    );
}

export default Timer;
