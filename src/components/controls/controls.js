import './controls.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

function Controls({ isRunning = false, onPauseClick = () => {}, onNextClick = () => {}, onPrevClick = () => {} }) {
    return (
        <div className='controls'>
            <button className='play-btn'
                onClick={onPrevClick}>
                <FontAwesomeIcon className='controls__icon' icon={faBackward}/>
            </button>
            <button className='pause-btn'
                onClick={onPauseClick}>
                <FontAwesomeIcon  className='controls__icon' icon={isRunning? faPause : faPlay}/>
            </button>
            <button className='play-btn'
                onClick={onNextClick}>
                <FontAwesomeIcon className='controls__icon' icon={faForward}/>
            </button>
        </div>
    );
}
  
export default Controls;