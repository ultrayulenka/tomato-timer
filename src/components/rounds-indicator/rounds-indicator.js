import './rounds-indicator.scss';

function RoundsIndicator({ all = 0, done = 0, tillRest = 0}) {
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