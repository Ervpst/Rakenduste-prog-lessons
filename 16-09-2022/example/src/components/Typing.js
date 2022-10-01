import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

const Typing = (props) => {
  {

  }

  return (
    <div>
      <TextField
        id="textbox"
        variant="outlined"
        onChange={handleChange}
      ></TextField>
      <h2 id="display">Kuvatav tekst</h2>
    </div>
  );
};

function handleChange(event) {
  console.log(event.target.value);
  document.getElementById("display").innerHTML = event.target.value;
}

Typing.propTypes = {};

export default Typing;