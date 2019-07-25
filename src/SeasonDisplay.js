import React from "react";

const SeasonDisplay = props => {
  console.log(props.p);
  let a = [<li>abc</li>, <li>abc</li>, <li>abc</li>];
  let b = a.map(ac => ac);
  return (
    <div>
      <ul>{b}</ul>Season Display
    </div>
  );
};

export default SeasonDisplay;
