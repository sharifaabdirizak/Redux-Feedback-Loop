import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import axios from "axios";


function Understanding() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [understanding, setUnderstanding] = useState('');
    
        const handleUnderstandingChange = (event) => {
            setUnderstanding(event.target.value);
        }
        let payload = understanding;

        dispatch({
          type: "ADD_UNDERSTANDING",
          payload: payload,
        });
    
        history.push("/Support");
      };


    return (
        <>
      <div className="form-container">
            <h1>How well are you understanding the content?</h1>
            <form>
            <p>Understanding?</p>
            <input type="number" min={1} max={5} onChange={handleUnderstandingChange}/>
            </form>
            <button onClick={handleNext}>Next</button>
            </div>
        </>
    );
}

export default Understanding;