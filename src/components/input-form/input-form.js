import './input-form.scss';
import { useRef, useState } from 'react';
import { Button, Form, FormCheck } from 'react-bootstrap';
import GridLayout from '../grid-layout';

function InputForm({ onSubmit = () => {}, onClose = () => {} }) {
    const [value, setValue] = useState('');
    const [estimationEnabled, setEstimationEnabled] = useState(true);
    const estimate = useRef(null);

    return (
        <Form className="todo-form"
            onSubmit={e => {
                e.preventDefault();
                onSubmit({ 
                    title: value, 
                    estimation: estimationEnabled? estimate.current.value : null
                });
            }}>
            <Form.Control className="mb-2" type="text" placeholder="What needs to be done?"
                onChange={e => setValue(e.target.value)}/>
            <GridLayout
                rows={estimationEnabled? 2 : 1} col={2}
                proportions={[9, 3]}
                rowGap={3}>
                <Form.Label>{estimationEnabled? 'Disable' : 'Enable'} estimation</Form.Label>
                <FormCheck type="switch" className="lg-switch" value={estimationEnabled} 
                    onChange={() => setEstimationEnabled(prev => !prev)}/>
                {
                    estimationEnabled &&
                    <Form.Label>Estimation in Tomatos</Form.Label>
                }
                {
                    estimationEnabled &&
                    <Form.Control type="number" min={1} defaultValue={1} ref={estimate}/>
                }
            </GridLayout>
            <div className="todo-form__buttons mt-3">
                <Button size="sm" variant="light"
                    onClick={onClose}>
                    Close
                </Button>
                <Button size="sm" variant="dark" type="submit"
                    disabled={!value}>
                    Add
                </Button>
            </div>
        </Form>
    );
  }
  
  export default InputForm;