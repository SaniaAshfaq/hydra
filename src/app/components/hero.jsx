"use client";

import Navbar from "./navbar";
import arrow from "../../../public/images/heroarrow.png";
import hero from "../../../public/images/hero.png";
import vector1 from "../../../public/images/Vector 1.png";
import vector2 from "../../../public/images/Vector 2.png";
import vector3 from "../../../public/images/Vector 3.png";
import vector4 from "../../../public/images/Vector 4.png";
import location from "../../../public/images/location.png";
import phonecall from "../../../public/images/phonecall.png";
import mail from "../../../public/images/mail.png";
import "../globals.css";
import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  const items = [
    {
      title: "Pay Us a Visit",
      content: "Union St, Seattle, WA 98101, United States",
      image: location,
    },
    {
      title: "Give Us a Call",
      content: "(110)-111-1010",
      image: phonecall,
    },
    {
      title: "Send Us a Message",
      content: "Contact@hydraVtech.com",
      image: mail,
    },
  ];

  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem + 1) % items.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className=" relative  ">
        <Navbar />
        <div className="flex lg:flex-row flex-col-reverse justify-between items-center lg:py-20 py-10 ">
          {/* first sectin of hero */}
          <div className=" w-full lg:w-1/2 font-custom relative z-10 pt-10 lg:py-0">
            <h1 className=" text-[2.5rem] text-white font-bold animate__animated animate__bounceInDown" >
              <span className=" bg-navbtn-gradient bg-clip-text text-transparent font-bold">
                Dive
              </span>{" "}
              Into The Depths
            </h1>
            <h1 className=" text-[2.5rem]  bg-navbtn-gradient bg-clip-text text-transparent font-bold   animate__animated animate__bounceInDown">
              <span className=" text-white">of</span> Virtual Reality
            </h1>
            <p className=" text-white w-4/5 my-5  animate__animated animate__bounceInLeft">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              alias ipsam dolores, dolorem iure ad incidunt, labore, aliquid
              suscipit facilis laudantium deleniti.
            </p>

            <div className="flex items-center animate__animated animate__lightSpeedInLeft ">
              <button className=" bg-navbtn-gradient rounded-full px-5 py-3 font-custom font-bold">
                {" "}
                <Link href="#">BUILD YOUR WORLD</Link>
              </button>
              <button>
                <Image
                  src={arrow}
                  alt="heroarrow"
                  className="hidden md:block"
                />
                <Image
                  src={vector4}
                  alt="vector4"
                  className=" absolute top-10  left-10"
                />
              </button>
            </div>
          </div>
          {/* second section of Hero */}
          <div>
            <Image
              src={hero}
              alt="hero"
              className=" w-[250px] md:w-[500px] lg:w-[400px]  z-10 relative animate__animated animate__rollIn"
            />

            <Image
              src={vector1}
              alt="vector1"
              className=" absolute top-0 right-0 z-0 "
            />
            <Image
              src={vector2}
              alt="vector2"
              className=" absolute top-0  z-0 md:block hidden "
            />
            <Image
              src={vector3}
              alt="vector3"
              className=" absolute  top-80 right-0 z-0 "
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          {/* Carousel for small devices */}
          <div className="BackgroundGradient flex rounded-full justify-between relative z-10 w-full sm:w-11/12 p-5 font-custom md:hidden">
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex text-white items-center gap-2 ${
                  currentItem === index ? "block" : "hidden"
                }`}
              >
                <Image src={item.image} alt={item.title} />
                <div>
                  <h3 className="text-[18px] font-bold">{item.title}</h3>
                  <p className="text-[12px]">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Static display for medium and larger devices */}
          <div className="hidden md:flex items-center justify-center w-11/12">
            <div className="BackgroundGradient flex rounded-full justify-between relative z-10 w-full  p-5 font-custom">
              <div className="flex text-white items-center gap-2">
                <Image src={location} alt="location" />
                <div>
                  <h3 className="text-[18px] font-bold">Pay Us a Visit</h3>
                  <p className="text-[12px]">
                    Union St, Seattle, WA 98101, United States
                  </p>
                </div>
              </div>
              <div className="flex items-center text-white gap-2 border-r border-l px-4 lg:px-12 border-[#C0B7E8]">
                <Image src={phonecall} alt="phonecall" />
                <div>
                  <h3 className="text-[18px] font-bold">Give Us a Call</h3>
                  <p className="text-[12px]">(110)-111-1010</p>
                </div>
              </div>
              <div className="flex items-center text-white gap-2">
                <Image src={mail} alt="mail" />
                <div>
                  <h3 className="text-[18px] font-bold">Send Us a Message</h3>
                  <p className="text-[12px] text-wrap">
                    Contact@hydraVtech.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
