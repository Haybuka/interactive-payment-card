import { useFormik, FormikProvider } from "formik";
import React, { ChangeEventHandler } from "react";
import { Iforms as Props } from "../App";
import * as yup from "yup";
import ErrorForm from "./ErrorForm";
import FormLabel from "./FormLabel";

type FormProps = {
  fields: {
    cardName: string;
    cardNumber: string;
    cvv: string;
    month: string;
    year: string;
  };
  setFields: React.Dispatch<React.SetStateAction<Props["fields"]>>;
  handleChange: ChangeEventHandler<HTMLInputElement>;
};

const Form = ({ fields, setFields, handleChange }: FormProps) => {
  // const Form: React.FC= ({ fields,setFields }) => {
  let { cardName, cardNumber, cvv, month, year } = fields;

  let formik = useFormik({
    initialValues: {
      cardName: cardName,
      cardNumber: cardNumber,
      cvv: cvv,
      month: month,
      year: year,
    },
    validationSchema: yup.object().shape({
      cardName: yup.string().required("can't be blank"),
      cardNumber: yup.string().required("can't be blank").max(16,'card number cant exceed 16'),
      cvv: yup
        .string()
        .max(3, "error not morethan 3")
        .required("can't be blank"),
      month: yup
        .string()
        .max(2, "error not more than 2")
        .required("can't be blank"),
      year: yup
        .string()
        .max(2, "error not more than 2")
        .required("can't be blank"),
    }),
    onSubmit: (values) => {
      setFields(values);
    },
  });

  let { handleSubmit, handleBlur, setFieldValue, values, errors } = formik;
  // console.log(errors);
  return (
    <FormikProvider value={formik}>
      <form className="w-[500px]" onSubmit={handleSubmit}>
        <FormLabel
          type="text"
          fieldLabel="CardHolder Name"
          fieldName="cardName"
          fieldValue={values.cardName}
          placeholder="e.g  Jane Appleseed"
          error={errors.cardName}
          handleChange={handleChange}
          handleBlur={handleBlur}
          setFieldValue={setFieldValue}
        />
        <FormLabel
          type="text"
          fieldLabel="Card Number"
          fieldName="cardNumber"
          fieldValue={values.cardNumber}
          placeholder="e.g 1234 56789 000"
          error={errors.cardNumber}
          handleChange={handleChange}
          handleBlur={handleBlur}
          setFieldValue={setFieldValue}
        />
        <div className="flex justify-between items-start">
          <section className="w-[250px] relative">
            <p className="mb-3 absolute">EXP.DATE (MM/YY)</p>
            <div className="flex items-center gap-2">
              <FormLabel
                type="number"
                fieldName="month"
                fieldValue={values.month}
                placeholder="MM"
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
              />
              <FormLabel
                type="number"
                fieldName="year"
                fieldValue={values.year}
                // error="_"
                placeholder="YY"
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
              />
            </div>
            {errors.month && (
              <p className="-translate-y-8">
                <ErrorForm error={errors.month} />
              </p>
            )}
          </section>
          <FormLabel
            type="number"
            fieldName="cvv"
            fieldLabel="cvv"
            fieldValue={values.cvv}
            placeholder="e.g 123"
            handleChange={handleChange}
            handleBlur={handleBlur}
            setFieldValue={setFieldValue}
            className="w-[200px] my-0"
            error={errors.cvv}
          />
          {/* <label className="block my-8 w-[200px]">
            <p className="uppercase my-2">Cvv</p>
            <input
              className="rounded-md py-2 border border-gray-400 outline-none px-3 w-full"
              type="number"
              name="cvv"
              value={values.cvv}
              placeholder="e.g  123"
              onBlur={handleBlur}
              onChange={(e) => setFieldValue("cvv", e.target.value)}
            />
            {errors?.cvv && <ErrorForm error={errors?.cvv} />}
          </label> */}
        </div>

        <button
          type="submit"
          className="w-full bg-[#21092f] text-white rounded-md py-3"
        >
          Confirm
        </button>
      </form>
    </FormikProvider>
  );
};

export default Form;

{
  /* <label className="block">
<p className="uppercase my-2">year</p>
<input
  className="rounded-md py-2 border border-gray-400 outline-none px-3 w-full"
  type="number"
  name="year"
  value={values.year}
  placeholder="YY"
  onBlur={handleBlur}
  onChange={(e) => setFieldValue("year", e.target.value)}
/>
{errors?.year && <ErrorForm error={errors?.year} />}
</label> */
}
