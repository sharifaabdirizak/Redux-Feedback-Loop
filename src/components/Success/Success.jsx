import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";


function Support () {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({
          type: "RESET_DATA",
        });
        history.push("/");
      };

      
    return (
        <>
        <h1>Feedback!</h1>
        <h1>Thank you!</h1>
        <button onClick={handleClick}>Leave New Feedback</button>
        </>
    );
}


export default Success;