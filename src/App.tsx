import React, { useEffect, useState } from "react";

import "./App.css";
import Form from "./components/Form";
import Back from "./components/LeftCard/Back";
import Front from "./components/LeftCard/Front";
import Response from "./components/Response";
export interface Iforms {
  fields: {
    cardName: string;
    cardNumber: string;
    cvv: string;
    month: string;
    year: string;
  };
}

export type Forms = {
  cardName: string;
  cardNumber: string;
  cvv: string;
  month: string;
  year: string;
};
function App() {
  let [isSubmitted, setIsSubmitted] = useState(false);
  let [fields, setFields] = useState<Forms>({
    cardName: "",
    cardNumber: "",
    cvv: "",
    month: "",
    year: "",
  });

  useEffect(() => {
    setIsSubmitted(false);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  
  };
  const handleContinue = (): void => {
    setIsSubmitted((prev) => !prev);
  };

  return (
    <main className="grid grid-cols-3 App">
      <aside className="card-display col-span-3 lg:col-span-1 lg:h-screen flex items-center justify-center flex-col relative md:static p-6 lg:p-0">
        <Front fields={fields} />
        <Back cvv={fields.cvv} />
      </aside>
      <section className="col-span-3 lg:col-span-2 h-screen flex justify-center items-center px-4 my-3 md:px-0 md:my-0">
        {!isSubmitted ? (
          <Form
            fields={fields}
            setFields={setFields}
            handleChange={handleChange}
            setIsSubmission={setIsSubmitted}
          />
        ) : (
          <Response handleContinue={handleContinue} />
        )}
      </section>
    </main>
  );
}

export default App;
