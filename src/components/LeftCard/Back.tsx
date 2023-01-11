import React from "react";

type Fields = {
    cvv : string;
};

const Back = ({cvv}:Fields) => {
  return (
    <div className="bg-back">
      <h3 className="uppercase lg:my-3 text-base lg:text-xl pr-3 lg:pr-6">
        {cvv.length === 0 ? "000" : cvv.slice(0, 3)}
      </h3>
    </div>
  );
};

export default Back;
