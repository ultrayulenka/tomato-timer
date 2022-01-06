import './intervals.scss';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import TimerContext from '../timer-context';
import { useContext } from 'react';

function Intervals({ current = '', onChangeInterval = () => {}}) {
    const { intervals } = useContext(TimerContext);

    return (
        intervals.length?
        <ButtonGroup className="timer__switch">
            {
                intervals.map(interval => {
                    return (
                        <ToggleButton
                            key={interval.name}
                            id={`radio-${interval.name}`}
                            type="radio"
                            name="radio"
                            value={interval.name}
                            checked={interval.name === current}
                            onChange={(e) => onChangeInterval(e.currentTarget.value)}
                            variant="outline-danger"
                            >
                            {interval.name}
                        </ToggleButton>
                    )
                })
            }
        </ButtonGroup>
        : null
    );
}
  
export default Intervals;
