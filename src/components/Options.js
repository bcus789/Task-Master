import React from "react";
import Option from "./Option.js";

const Options = props => (
  <div>
    <button onClick={props.handleDeleteOptions}>Dissolve All Tasks</button>
    {props.options.length === 0 && <p>No Tasks. For Now.</p>}
    {props.options.map(option => (
      <Option
        key={option}
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
