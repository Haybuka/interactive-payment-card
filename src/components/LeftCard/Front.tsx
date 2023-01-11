import React from "react";
type Fields = {
  fields: {
    cardName: string;
    cardNumber: string;
    cvv: string;
    month: string;
    year: string;
  };
};
const Front = ({ fields }: Fields) => {
    const {cardName,cardNumber,month,year}= fields
  return (
    <div className="bg-front w-[400px] h-[220px] text-white p-[20px] translate-x-[100px] 2xl:translate-x-[200px] my-6">
      <div className="flex items-center mb-16">
        <span className="w-[35px] h-[35px] bg-white rounded-full inline-block"></span>
        <span className="w-[20px] h-[20px] border rounded-full inline-block ml-3"></span>
      </div>
      <section className="w-full">
        <h3 className="uppercase my-3 text-xl">
          {cardNumber.length === 0 ? "0000  0000  0000  0000" : cardNumber.slice(0,20)}
        </h3>
        <div className="flex justify-between items-center">
          <h3 className="uppercase text-base">
            {cardName.length === 0 ? "Jane Appleseed" : cardName.slice(0,20)}
          </h3>
          <p>
            <span>{month.length === 0 ? "00" : month.slice(0,2)}</span>/
            <span>{year.length === 0 ? "00" : year.slice(0,2)}</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Front;
