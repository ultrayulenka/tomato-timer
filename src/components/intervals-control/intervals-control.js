import { FormControl, Row, Col } from 'react-bootstrap';
import GridLayout from '../grid-layout';
import TimerContext from '../timer-context';
import { useContext } from 'react';
import './intervals-control.scss'

function IntervalsConrol() {
  const { intervals, setIntervals } = useContext(TimerContext);

  const onChange = ({event, name, changableValue}) => {
    
    setIntervals(prev => {
      const index = prev.findIndex(value => value.name === name);
      if(index < 0) return [...prev];

      return [
        ...prev.slice(0, index),
        {...prev[index],
          duration: {
            ...prev[index].duration,
            [changableValue]: event.target.value
          }
        },
        ...prev.slice(index + 1),
      ]
    })
  }

  return (
      <Row className="mb-3">
        <h5>Round duration (min, sec)</h5>
        {
          intervals.map(({name, duration}) => {
            return (
              <Col key={name}>
                <h6>{name}</h6>
                <GridLayout rows={1} col={2}>
                  <FormControl className="pr-0" type="number" defaultValue={duration.min}
                    min={0} 
                    onChange={event => onChange({event, name, changableValue: 'min'})}/>
                  <FormControl className="pr-0" type="number" defaultValue={duration.sec}
                      min={0} 
                      onChange={event => onChange({event, name, changableValue: 'sec'})}/>
                </GridLayout>
              </Col>
            )
          })
        }
      </Row>
  );
}

export default IntervalsConrol;
