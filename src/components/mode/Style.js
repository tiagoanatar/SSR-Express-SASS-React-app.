import React from "react";

function Style(props) {

  return (
    <div>
      <link rel="stylesheet" type="text/css" href={props.path} />
    </div>
  );
}

export default Style;