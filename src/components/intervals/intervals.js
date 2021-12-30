import './intervals.scss';

function Intervals({ intervals = [], current = '', onChangeInterval = () => {}}) {

    return (
        intervals.length?
        <ul className='timer__switch'>
            {
                intervals.map((interval) => (
                    <li
                        key={interval.name}
                        className={`timer__state
                        ${current === interval.name? 'timer__state_current' : ''}`}
                        onClick={() => onChangeInterval(interval.name)}>
                        {interval.name}
                    </li>
                ))
            }
        </ul>
        : null
    );
}
  
export default Intervals;