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
  const { cardName, cardNumber, month, year } = fields;

  const splitNumber = (cardNumber: string): string => {
    let newCardNumber:string = `0${cardNumber.slice(0,16)}`
    let total: string[] = [];
    for (let i: number = 1; i < newCardNumber.length; i++) {
      if (i % 4 === 0) {
        total.push(newCardNumber[i]);
        total.push(" ");
      } else {
        total.push(newCardNumber[i]);
      }
    }

    return total.toString().split(",").join("");
  };

  return (
    <div className="bg-front ">
      <div className="flex items-center mb-10 lg:mb-16">
        <span className="w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] bg-white rounded-full inline-block"></span>
        <span className="w-[10px] h-[10px] lg:w-[20px] lg:h-[20px] border rounded-full inline-block ml-3"></span>
      </div>
      <section className="w-full">
        <h3 className="uppercase my-3 lg:text-xl">
          {cardNumber.length === 0
            ? "0000  0000  0000  0000"
            : splitNumber(cardNumber)}
        </h3>
        <div className="flex justify-between items-center">
          <h3 className="uppercase text-base">
            {cardName.length === 0 ? "Jane Appleseed" : cardName.slice(0, 20)}
          </h3>
          <p>
            <span>{month.length === 0 ? "00" : month.slice(0, 2)}</span>/
            <span>{year.length === 0 ? "00" : year.slice(0, 2)}</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Front;
