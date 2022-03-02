import About from "public/svg/About us page-bro.svg";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="min-h-[75vh]">
      <section className="min-h-[89vh] flex flex-col justify-center items-center p-5">
        <h1 className="text-5xl font-bold uppercase mb-10">our mision</h1>
        <p className="text-center text-xl">
          Sea Smart delivers fun and solution-based programs and projects to
          people of all ages - inspiring us all to make a positive and lasting
          impact on our oceans.
        </p>
      </section>
      <section className="min-h-[89vh] flex flex-col justify-center items-center bg-slate-100">
        <Image className="drop-shadow-lg" src={About} width={300} height={300} />
        <h3 className="text-5xl mb-5 -mt-10 uppercase">values</h3>
        <p className="mb-5">
          We are passionate in all we do and truly believe in our cause.
        </p>
        <p className="mb-5">
          We are inclusive and believe everyone can be an ocean hero.
        </p>
        <p className="mb-5">
          We are innovative and are always looking for new ways to educate and
          empower.
        </p>
        <p className="">
          We are engaging and will always make learning an enjoyable experience.
        </p>
      </section>
      <section className="text-white bg-stone-600 p-5 flex flex-col justify-center items-center h-[89vh]">
        <h1 className="text-5xl font-bold uppercase mb-10">who we are</h1>
        <p className="text-center text-xl">
          Sea Smart is a charity that delivers a diverse and innovative range of
          educational programs that are empirically-developed and derived from
          current ocean issues to empower youth, businesses, teachers, and
          communities to take action and power our wave of change throughout the
          world. From school workshops, online courses, and summer camps at the
          beach, to team building beach-cleanups and lunch & learns, our
          professional team of marine biologists and environmental educators are
          passionate about educating and inspiring all of us to become ocean
          heroes.
        </p>
      </section>
    </main>
  );
};

export default AboutPage;
