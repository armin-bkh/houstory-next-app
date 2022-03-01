import { useState } from "react";
import Input from "components/common/Input/Input";
import Head from "next/head";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("your name is required"),
  email: Yup.string()
    .email("email address is  invalid")
    .required("your email is required"),
  password: Yup.string()
    .min(5, "password must equal or bigger than 5")
    .required("password is required"),
});

const Registery = () => {
  const onSubmit = async (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <>
      <Head>
        <title>houstory: registery</title>
        <meta name="description" content="registery in houstory" />
      </Head>
      <main className="bg-neutral-800 min-h-screen flex justify-center p-5">
        <form onSubmit={formik.handleSubmit} className="p-2 w-1/2">
          <Input
            type="text"
            id="name"
            name="name"
            lbl="name"
            formik={formik}
            {...formik.getFieldProps('name')}
            placeholder="enter your name"
          />
          <Input
            type="email"
            id="email"
            name="email"
            lbl="email"
            formik={formik}
            {...formik.getFieldProps('email')}
            placeholder="enter your email"
          />
          <Input
            type="password"
            id="password"
            name="password"
            lbl="password"
            formik={formik}
            {...formik.getFieldProps('password')}
            placeholder="enter secure password"
          />
          <button
            className="bg-amber-200 py-2 w-full rounded-sm mt-20 disabled:opacity-60 transition"
            type="submit"
            disabled={!formik.isValid}
          >
            registery
          </button>
        </form>
      </main>
    </>
  );
};

export default Registery;
