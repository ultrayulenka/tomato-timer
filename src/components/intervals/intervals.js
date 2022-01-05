import './intervals.scss';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

function Intervals({ intervals = [], current = '', onChangeInterval = () => {}}) {

    return (
        intervals.length?
        <ButtonGroup className="timer__switch">
            {
                intervals.map(interval => {
                    return (
                        <ToggleButton
                           // className="text-dark"
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
