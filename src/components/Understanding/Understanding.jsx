import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import axios from "axios";


function Understanding() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [understanding, setUnderstanding] = useState('');
    
        const addUnderstanding = (event) => {
        event.preventDefault();
    

        let payload = understanding;

        dispatch({
          type: "ADD_UNDERSTANDING",
          payload: rate,
        });
    
        const handleNext = () => {
            addUnderstanding();
        history.push("/Support");
      };


    return (
        <>
      <div className="form-container">
            <h1>How well are you understanding the content?</h1>
            <form>
            <p>Understanding?</p>
            <input type="number" min={1} max={5} onChange={event}/>
            </form>
            <button onClick={handleNext}>Next</button>
            </div>
        </>
    );
    }

}

export default Understanding;