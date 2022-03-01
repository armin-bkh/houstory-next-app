import Input from "components/common/Input/Input";
import Head from "next/head";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "@/providers/AuthProvider/AuthProvider";
import { useRouter } from "next/router";
import { useState } from "react";
import { loginUser } from "services/loginUser";
import Link from "next/link";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("email address is invalid")
    .required("your email is required"),
  password: Yup.string()
    .min(8, "password must equal or bigger than 8")
    .max(16, "password must be equal or smaller then 16")
    .required("password is required"),
});

const LoginPage = () => {
  const { setAuth } = useAuth();
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      setAuth({
        token: data.token,
        ...values,
      });
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
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
        <title>houstory: login</title>
        <meta name="description" content="login in houstory" />
      </Head>
      <main className="bg-neutral-800 min-h-screen flex justify-center p-5">
        <form onSubmit={formik.handleSubmit} className="p-2 w-full md:w-1/2">
          <h1 className="text-amber-200 text-3xl md:text-5xl mb-10">Login</h1>
          <Input
            type="email"
            id="email"
            name="email"
            lbl="email"
            formik={formik}
            {...formik.getFieldProps("email")}
            placeholder="enter your email"
          />
          <Input
            type="password"
            id="password"
            name="password"
            lbl="password"
            formik={formik}
            {...formik.getFieldProps("password")}
            placeholder="enter secure password"
          />
          {error && <span className="text-red-500 text-xs mb-3">{error}</span>}
          <button
            className="bg-amber-200 py-2 w-full rounded-sm mt-20 disabled:opacity-60 transition"
            type="submit"
            disabled={!formik.isValid}
          >
            Login
          </button>
          <div className="flex justify-center items-center h-12">
            <Link href="/auth/register">
              <a className="text-amber-100 hover:text-amber-200 transition">
                create account
              </a>
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default LoginPage;
