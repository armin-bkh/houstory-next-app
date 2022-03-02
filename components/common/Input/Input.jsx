import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

const Input = ({ lbl, type, id, name, formik, ...rest }) => {
  const [inputType, setInputType] = useState(type);

  const changeTypeHandler = () => {
    if (inputType === "text") setInputType("password");
    else setInputType("text");
  };

  return (
    <fieldset className="flex flex-col mb-5 relative">
      <label htmlFor={id} className="text-white text-lg md:text-2xl capitalize">
        {lbl}
      </label>
      <input
        id={id}
        name={name}
        type={inputType}
        className="bg-transparent border-b text-white border-amber-100 outline-none text-sm md:text-base py-2 px-4"
        {...rest}
      />{" "}
      {type === "password" ? (
        <span
          className="absolute right-2 top-10 text-amber-200 w-5 cursor-pointer"
          onClick={changeTypeHandler}
        >
          {inputType === "text" ? <EyeOffIcon /> : <EyeIcon />}
        </span>
      ) : null}
      {formik.touched[name] && formik.errors[name] && (
        <span className="mt-2 ml-5 text-xs text-red-500">
          {formik.errors[name]}
        </span>
      )}
    </fieldset>
  );
};

export default Input;
