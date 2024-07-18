import Image from "next/image";
import logo from "../../../public/images/logo.png";

import facebook from "../../../public/images/facebook.png";
import instagram from "../../../public/images/instagram.png";

import linkedin from "../../../public/images/linkedin.png";
import pintrest from "../../../public/images/pinterest.png";
import twitter from "../../../public/images/twitter.png";
import youtube from "../../../public/images/youtube.png";
import '../globals.css'

import Link from "next/link";








export default function Footer() {
  return (
    <>
    <div className=" flex items-center md:justify-center">
      <div className=" flex lg:w-4/5 justify-between py-10 items-center  flex-col md:flex-row border-b "  >
        <div className=" md:mr-4 lg:mr-0" data-aos="fade-up">
          <Image src={logo} alt="logo" />
        </div>
        <div className=" flex  text-white gap-12 md:gap-0 " data-aos="fade-up">
          <div className=" md:border-r md:border-l md:px-8 lg:px-16 flex flex-col gap-3 ">
            <p>About</p>
            <p>Services</p>
            <p>Technologies</p>
            <p>How To</p>
            <p>Join HYDRA</p>
          </div>
          <div className=" md:border-r md:border-l md:px-8 lg:px-16 flex flex-col gap-3 " data-aos="fade-up">
            <p>FAQ</p>
            <p>SITE MAP</p>
            <p>CONDITIONS</p>
            <p>LICENCE</p>
          </div>
        </div>
        
        <div className=" md:ml-6 lg:ml-0" data-aos="fade-up">
            <h4 className=" text-[1.2rem] font-custom font-bold text-white md:my-4 mt-8">Social with HYDRA</h4>
            <div className="flex my-3 gap-2"  >
                <Image src={facebook} alt=""/>
                <Image src={instagram} alt=""/>
                <Image src={linkedin} alt=""/>
                <Image src={pintrest} alt=""/>
                <Image src={twitter} alt=""/>
                <Image src={youtube} alt=""/>
                

            </div>

            <button className="formheadingbutton bg-navbtn-gradient rounded-full px-5 py-3 font-custom font-bold my-3" data-aos="fade-up">
                {" "}
                <Link href="#">Let's Get In Touch</Link>
              </button>
        </div>

      </div>

    
      </div>

      <div className=" py-10 text-white font-custom text-center font-bold"  data-aos="fade-up">
        <p>Clone of HYDRA by @Sania Ashfaq</p>
      </div>
    </>
  );
}
