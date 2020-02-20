import React from "react";

const Option = props => (
  <div>
    <div className="widget-header">
      <h3>Your Duties</h3>
      {props.optionText}
      <button
        className="button button--link"
        onClick={e => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Dissolve Task
      </button>
    </div>
  </div>
);

export default Option;
