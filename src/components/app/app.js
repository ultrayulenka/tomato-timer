import './app.scss';
import TodoContainer from '../todo-container';
import TimerContainer from '../timer-container';

function App() {
  return (
    <div className="app">
      <TodoContainer />
      <TimerContainer />
    </div>
  );
}

export default App;
