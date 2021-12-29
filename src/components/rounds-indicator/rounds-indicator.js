import './rounds-indicator.scss';

function RoundsIndicator({ all = 0, done = 0, tillRest = 0}) {
    return (
        <p className="rounds-indicator">
            <span>{`${done}/${all} rounds done`}</span>
            <span>{`Only ${tillRest} more rounds till the rest`}</span>
        </p>
    );
}
  
export default RoundsIndicator;