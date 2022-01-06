import './rounds-indicator.scss';
import TimerContext from '../timer-context';
import { useContext } from 'react';

function RoundsIndicator() {
    const {rounds: { done, all, betweenRest, current }} = useContext(TimerContext);

    const tillRest = current === 'Rest'? 0 : betweenRest - done % betweenRest
    
    return (
        <p className="rounds-indicator">
            <span className="rounds-indicator__main">{`${done}/${all} rounds done`}</span>
            {
                tillRest?
                <span>{`Only ${tillRest} more rounds till the rest`}</span>
                : <span>Take a long break and relax :)</span>
            }
        </p>
    );
}
  
export default RoundsIndicator;