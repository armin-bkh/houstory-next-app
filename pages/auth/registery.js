import { useState } from "react";
import Input from "components/common/Input/Input";
import Head from "next/head";

const Registery = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Head>
        <title>houstory: registery</title>
        <meta name="description" content="registery in houstory" />
      </Head>
      <main className="bg-neutral-800 min-h-screen flex justify-center p-5">
        <form className="p-2 w-1/2">
          <Input
            type="text"
            id="name"
            name="name"
            lbl="name"
            onChange={changeHandler}
            value={formValues.name}
            placeholder="enter your name"
          />
          <Input
            type="email"
            id="email"
            name="email"
            lbl="email"
            onChange={changeHandler}
            value={formValues.email}
            placeholder="enter your email"
          />
          <Input
            type="password"
            id="password"
            name="password"
            lbl="password"
            onChange={changeHandler}
            value={formValues.password}
            placeholder="enter secure password"
          />
          <button className="bg-amber-200 py-2 w-full rounded-sm mt-20" type="submit">registery</button>
        </form>
      </main>
    </>
  );
};

export default Registery;
