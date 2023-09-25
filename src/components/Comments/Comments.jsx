import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

function Comments () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState('');


    const addComments = (event) =>{
        setComments(event.target.value);
    }
    let payload = comments

    dispatch({
      type: "ADD_COMMENTS",
      payload,
    });

    const handleNext = () => {
        addComments();
        history.push('/Review')
  }
return (
    <>
    <h1>Any comments you want to leave?</h1>
    <form>
    <p>Comments</p>
    <input type="text" placeholder='Comments' onChange={handleCommentChange} />
    </form>
    <button onClick={handleNext}>Next</button>
</>
);
}


export default Comments;