import { useRef } from 'react';
import Button from '../button';
import './input-form.scss';

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
                color='info'
                type='submit'>
                Add
            </Button>
        </form>
    );
  }
  
  export default InputForm;