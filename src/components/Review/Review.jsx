import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Review() {
    const history = useHistory();
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);
}

const handleSubmit = () => {
    let newfeedBack = {
      feeling,
      understanding,
      support,
      comments
    };


    axios
      .post("/feedback", newfeedBack)
      .then((result) => {
        console.log("POST /feedBack success", result.data);
      })
      .catch((error) => {
        console.log("POST /feedBack fail", error);
      });
      history.push("/thankYou");
  

      return (
        <div>
          <h2>Review Your Feedback</h2>
          <p>Feelings: {feeling}</p>
          <p>Understanding: {understanding}</p>
          <p>Support: {support}</p>
          <p>Comments: {comments}</p>
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </div>
      );
    };
    
  
export default Review;