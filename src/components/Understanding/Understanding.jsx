import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'

function Understanding() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [understanding, setUnderstanding] = useState('');
    
        const handleUnderstandingChange = (event) => {
            setUnderstanding(event.target.value);
        }
    
       const addUnderstanding= () => {
        dispatch({ type: 'ADDUNDERSTANDING', payload: understanding })
       }


    const handleNext = () => {
        addUnderstanding(); 
        history.push('/SupportForm');
    }


    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <form>
            <p>Understanding?</p>
            <input type="number" min={1} max={5} onChange={handleUnderstandingChange}/>
            </form>
            <button onClick={handleNext}>Next</button>
        </>
    );
}

export default Understanding;