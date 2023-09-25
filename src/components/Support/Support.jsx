import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

function Understanding() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [support, setSupport] = useState(0);

  const handleSupportChange = (event) => {
    setSupport(event.target.value);
  };

  const handleNext = () => {
    dispatch({
      type: "ADD_SUPPORT",
      payload: support,
    });

    history.push("/Comments");
  };

  return (
    <div className="form-container">
      <h1>How well are you being supported?</h1>
      <form>
        <p>Support?</p>
        <input type="number" min={1} max={5} onChange={handleSupportChange} />
      </form>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Understanding;
