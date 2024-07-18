// app/page.js

"use client"
import { useEffect, useState } from 'react';
import Loader from './components/loader'
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Partner from './components/partners';
import Project from './components/project';
import Form from './components/form';
import Footer from './components/footer';
import 'animate.css/animate.min.css';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    AOS.init({
      // You can add global settings here
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
     
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-[#343045]">
          <Hero />
          <About />
          <Services />
          <Partner />
          <Project />
          <Form />
          <Footer />
        </div>
      )}
    </>
  );
}
