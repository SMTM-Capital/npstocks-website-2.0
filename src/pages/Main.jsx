import React from 'react';
import { Nav } from '../components';
import { Experience, Features, Hero, Pricing, Footer } from '../sections';

const Main = () => {
  return (
    <>
      <main className="relative">
        <section className='w-full bg-[#141516] px-4 py-4 md:pl-11'>
          <Nav />
        </section>

        <section className="relative w-full bg-[#141516] overflow-hidden">
          <div className="w-full h-full z-10 absolute background-gradient -bottom-[55%] -left-[75%]" />
          <Hero />
        </section>

        <section>
          <Experience />
        </section>

        <section className="relative w-full bg-[#141516] overflow-hidden">
          <div className="w-full h-full z-10 absolute background-gradient -bottom-[30%] -right-[55%]" />
          <Features />
        </section>

        <section>
          <Pricing />
        </section>

        <section className="relative w-full bg-[#141516] overflow-hidden">
          <div className="w-full h-full z-10 absolute background-gradient -bottom-[70%] -left-[55%]" />
          <Footer />
        </section>
      </main>
    </>
  )
}

export default Main