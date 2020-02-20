import React from "react";
import Option from "./Option.js";

const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Duties</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Dissolve All Tasks
      </button>
    </div>

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
