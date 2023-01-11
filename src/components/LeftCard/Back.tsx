import React from "react";

type Fields = {
    cvv : string;
};

const Back = ({cvv}:Fields) => {
  return (
    <div className="bg-back w-[400px] h-[220px] text-white p-[20px] translate-x-[150px] 2xl:translate-x-[250px] flex justify-end items-center">
      <h3 className="uppercase my-3 text-xl pr-6">
        {cvv.length === 0 ? "000" : cvv.slice(0, 3)}
      </h3>
    </div>
  );
};

export default Back;
