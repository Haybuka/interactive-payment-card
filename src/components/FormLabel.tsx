import { FormikValues } from "formik";
import React, { ChangeEvent } from "react";
import ErrorForm from "./ErrorForm";

type Label = {
  type:string;
  fieldLabel? : string;
  fieldName: string;
  fieldValue: string;
  placeholder: string;
  className?:string;
  error? : string;
  setFieldValue: FormikValues['setFieldValue'];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
};

const FormLabel = ({
  type,
  fieldLabel,
  fieldName,
  setFieldValue,
  handleChange,
  fieldValue,
  placeholder,
  handleBlur,
  error,
  className
}: Label) => {
  return (
    <label className={`block my-8 ${className}`}>
      <p className="uppercase my-2">{fieldLabel}</p>
      <input
        className="rounded-md py-2 border border-gray-400 outline-none px-3 w-full"
        type={type}
        name={fieldName}
        value={fieldValue}
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={(e) => {
          setFieldValue(fieldName, e.target.value);
          handleChange(e);
        }}
        // onChange={handleChange}
      />
      {error && <ErrorForm error={error} />}

    </label>
  );
};

export default FormLabel;
