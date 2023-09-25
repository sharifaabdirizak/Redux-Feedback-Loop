import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import axios from "axios";


function Understanding() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [support, setSupport] = useState(0);
    

    const handleSupportChange = (event) => {
        setSupport(event.target.value);
    }
    let payload = support

    dispatch({
      type: "ADD_SUPPORT",
      payload: payload,
    });

    history.push("/comments");
  };

  return (
    <div className="form-container">
      <h1>How well are you understanding the content?</h1>
      <form onSubmit={handleSupport}>
        <div className="form-group">
          <label name="understanding">Support?</label>
          <input
            onChange={(event) => setSupport(event.target.value)}
            type="number"
            name="understanding"
            min="0"
            max="5"
            required
            value={support}
          />
        </div>
        <button type="submit">NEXT</button>
      </form>
    </div>
  );
}





export default Support;