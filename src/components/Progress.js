import React from "react";

function Progress({ current, total }) {
  return (
    <h2>
      Question {current} of {total}
    </h2>
  );
}

export default Progress;
