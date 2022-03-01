const Input = ({ lbl, type, id, name, formik, ...rest }) => {
  return (
    <fieldset className="flex flex-col mb-5">
      <label htmlFor={id} className="text-white text-lg md:text-2xl capitalize">
        {lbl}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className="bg-transparent border-b text-white border-amber-100 outline-none text-sm md:text-base py-2 px-4"
        {...rest}
      />
      {formik.touched[name] && formik.errors[name] && (
        <span className="mt-2 ml-5 text-xs text-red-500">
          {formik.errors[name]}
        </span>
      )}
    </fieldset>
  );
};

export default Input;
