import './input-form.scss';
import { useRef, useState } from 'react';
import { Button, Form, Row, Col, FormCheck } from 'react-bootstrap';

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
            <Row className="mb-3">
                <Col md={9}>
                    <Form.Label>{estimationEnabled? 'Disable' : 'Enable'} estimation</Form.Label>
                </Col>
                <Col md={3}>
                    <FormCheck type="switch" className="lg-switch" value={estimationEnabled} 
                        onChange={() => setEstimationEnabled(prev => !prev)}/>
                </Col>
            </Row>
            {
                estimationEnabled &&
                <Row className="mb-3">
                    <Col md={9}>
                        <Form.Label>Estimation in Tomatos</Form.Label>
                    </Col>
                    <Col md={3}>
                        <Form.Control type="number" min={1} defaultValue={1} ref={estimate}/>
                    </Col>
                </Row>
            }
            <div className="todo-form__buttons">
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