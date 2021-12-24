import { useRef } from 'react';
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
            <button className="form__btn btn btn_info" type="submit">Add</button>
        </form>
    );
  }
  
  export default InputForm;