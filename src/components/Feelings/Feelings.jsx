import React, { useState } from "react";
import "./Feelings.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Feelings() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [feeling, setFeelings] = useState(0);

  const handleFeelingChange = (event) => {
  
    let payload = feeling;

    dispatch({
      type: "ADD_FEELINGS",
      payload: payload,
    });

    history.push("/understanding");
  };

  return (
    <>
      <div className="form-container">
        <h1>How are you feeling today?</h1>
        <form onSubmit={handleFeelingChange}>
          <div className="form-group">
            <input
              onChange={(event) => setFeelings(event.target.value)}
              type="number"
              min="0"
              max="5"
              required
              value={feeling}
            ></input>
          </div>
          <button type="submit">NEXT</button>
        </form>
      </div>
    </>
  );
}

export default Feelings;
