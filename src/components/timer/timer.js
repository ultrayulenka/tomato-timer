import './timer.scss';
import Clock from '../clock';
import Intervals from '../intervals';
import Controls from '../controls';
import RoundsIndicator from '../rounds-indicator';
import { useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TimerContext from '../timer-context';

function Timer() {
    const { rounds, setRounds, time, setTime, intervals, isRunning, setIsRunning } = useContext(TimerContext);

    const notify = () => {
        const notification = new Notification('Message from Tomato Timer', {
            body: rounds.current === 'Work'? 'Time to take a break' : 'Time to work'
        })
    }

    const getNextRound = () => {
        if(rounds.current === 'Break' || rounds.current === 'Rest') {
            return 'Work'
        } else {
            return (rounds.done + 1) % rounds.betweenRest === 0? 'Rest' : 'Break';
        }
    }

    const getUpdatedRounds = (rounds, isWorkCompleted = false) => {
        return {
            ...rounds,
            done: isWorkCompleted? rounds.done + 1 : rounds.done,
            current: getNextRound()
        }
    }

    const skipRound = () => {
        setIsRunning(false);
        setRounds(prev => {
            return getUpdatedRounds(prev, prev.current === 'Work');
        })
    }

    const restartRound = () => {
        setIsRunning(false);
        setTime({...intervals.find(interval => interval.name === rounds.current).duration})
    }

    useEffect(() => {
        if(time.min === 0 && time.sec === 0) {
            setIsRunning(false);
            if(Notification.permission === "granted") {
                notify();
            }
            setRounds(prev => {
                return getUpdatedRounds(prev, prev.current === 'Work');
            })
        }
    }, [time])

    return (
        <Container className="timer p-0">
            <Row>
                <Intervals 
                    current={rounds.current}
                    onChangeInterval={(interval) => {
                        setRounds(prev => {
                            return {
                                ...prev,
                                current: interval
                            }
                        });
                        restartRound();
                    }}/>
                <Col md={5}>
                    <Clock isRunning={isRunning} />
                </Col>
                <Col md={7}>
                    <Controls 
                        isRunning={isRunning}
                        onPauseClick={() => setIsRunning(prev => !prev)}
                        onNextClick={skipRound}
                        onPrevClick={restartRound}/>
                    <RoundsIndicator 
                        all={rounds.all}
                        done={rounds.done}
                        tillRest={rounds.current === 'Rest'? 0 : rounds.betweenRest - rounds.done % rounds.betweenRest}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Timer;
