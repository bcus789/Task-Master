import React from "react";

const Action = props => (
  <div>
    <button 
    className="big-button"
    onClick={props.handlePick} disabled={!props.hasOptions}>
      What Is Thy Bidding?
    </button>
  </div>
);

export default Action;
