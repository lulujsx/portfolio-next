import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-black text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Luana Vallejos</title>
      </Head>
      <Header/>
      <section id="hero" className="snap-start">
        <Hero/>
      </section>
      <section id="about" className="snap-center">
        <About/>
      </section>
    </div>
  )
}
