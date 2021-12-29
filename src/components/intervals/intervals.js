import './intervals.scss';

function Intervals({ intervals = [], current = ''}) {
    //console.log(intervals, current);

    return (
        intervals.length?
        <ul className='timer__switch'>
            {
                intervals.map(({name}) => (
                    <li
                        key={name}
                        className={`timer__state
                        ${current === name? 'timer__state_current' : ''}`}>
                        {name}
                    </li>
                ))
            }
        </ul>
        : null
    );
}
  
export default Intervals;