import Head from "next/head";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>houstory: Contact</title>
        <meta
          name="description"
          content="contact us for feedback and suggestions"
        />
      </Head>
      <main className="min-h-[75vh]">
        <div className="p-5">
          <h1 className="text-5xl capitalize mb-5">contact us</h1>
          <p className="text-sm">Email: arminbkh0921@yahoo.com</p>
          <p className="text-sm">Tel: +98 9213506158</p>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
