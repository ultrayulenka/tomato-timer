import './timer-container.scss';
import Timer from '../timer';

function TimerContainer() {

  return (
    <section className="app__section timer-container">
        <h2 className="section-title">Tomato Timer</h2>
        <Timer />
    </section>
  );
}

export default TimerContainer;
