import React, { useState } from "react";

import "./App.css";
import Form from "./components/Form";
import Back from "./components/LeftCard/Back";
import Front from "./components/LeftCard/Front";
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
  let [fields, setFields] = useState<Forms>({
    cardName: "",
    cardNumber: "",
    cvv: "",
    month: "",
    year: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
    // return {}
  };
  return (
    <main className="grid grid-cols-3 App">
      <aside className="card-display col-span-3 lg:col-span-1 lg:h-screen flex items-center justify-center flex-col relative md:static p-6 lg:p-0">
        <Front fields={fields} />
        <Back cvv={fields.cvv}/>
      </aside>
      <section className="col-span-3 lg:col-span-2 h-screen flex justify-center items-center px-4 my-4 md:px-0 md:my-0">
        <Form
          fields={fields}
          setFields={setFields}
          handleChange={handleChange}
        />
      </section>
    </main>
  );
}

export default App;
