import React from "react";

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What Is Thy Bidding?
      </button>
    </div>
  );
};

export default Action;
