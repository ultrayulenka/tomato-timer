import { useRef } from 'react';
import './input-form.scss';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function InputForm({ onSubmit }) {
    const inputEl = useRef(null);

    return (
        <form className="form" onSubmit={event => {
            event.preventDefault();
            onSubmit(inputEl.current.value);
            inputEl.current.value = '';
        }}>
            <input className="form__input" ref={inputEl} placeholder="Type here" type="text"/>
            <Button
                className='form__btn'
                variant="dark"
                type='submit'>
                <FontAwesomeIcon icon={faPlus}/>
            </Button>
        </form>
    );
  }
  
  export default InputForm;