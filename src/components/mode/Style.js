import React, { useState } from "react";

function Style(props) {
  const [stylePath, setStylePath] = useState(props.path);

  return (
    <div>
      <link rel="stylesheet" type="text/css" href={stylePath} />
    </div>
  );
}

export default Style;