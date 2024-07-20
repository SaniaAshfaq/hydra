"use client"
import Image from "next/image";

import logo from '../../../public/images/logo.png';
import logotext from '../../../public/images/logo-text.png';
import resbtn from '../../../public/images/resbtn.png';
import cross from '../../../public/images/cross.jpg';
import Link from "next/link";
import '../globals.css';
import { useState } from "react";
export default function Navbar()
{
    let[showDiv , SetShowDiv]= useState(true);
    let ShowNav = ()=>{
      SetShowDiv(!showDiv);
    }
    return(
        <>
        <div className="flex justify-between items-center relative z-10">
            <div className="flex items-center">
                <Image src={logo} alt="logo" width={80} height={80}/>
                <Image src={logotext} alt="logotext" width={50} height={50}/>
            </div>
            <div className=" font-custom text-white lg:flex gap-6 xl:gap-10 lg:gap-8 hidden ">
               <Link href= "/about" className="text-[12px] font-bold">ABOUT</Link>
               <Link href= "#" className="text-[12px] font-bold">SERVICES</Link>
               <Link href= "#" className="text-[12px] font-bold">TECHNOLOGY</Link>
               <Link href= "#" className="text-[12px] font-bold">HOW TO</Link>
            </div>

            <div className=" hidden md:flex gap-2 xl:gap-7 lg:gap-2  font-custom font-bold text-[14px]">
                <button className=" border border-white rounded-full text-white px-5 py-3">
                    <Link href = "#"> CONTACT US</Link>
                </button>
                <button className=" bg-navbtn-gradient rounded-full px-5 py-3 relative z-10 "> <Link href = "#">JOIN HYDRA</Link></button>
             








            </div>

            <button className=" md:hidden mr-4" onClick={ShowNav}>
                     <Image src={resbtn}/>
                </button>
        </div>

{/* md responisve links */}
        <div className=" hidden md:block lg:hidden relative z-10">
        <div className=" font-custom text-white flex items-center justify-center py-3 gap-10 b border-t border-white">
         
               <Link href= "#" className="text-[12px] font-bold">ABOUT</Link>
               <Link href= "#" className="text-[12px] font-bold">SERVICES</Link>
               <Link href= "#" className="text-[12px] font-bold">TECHNOLOGY</Link>
               <Link href= "#" className="text-[12px] font-bold">HOW TO</Link>
            </div>

        </div>



        {/* navbar for mobile devices */}
        <div className={ ` z-50 w-4/5 left-0 h-screen bg-[#C0B7E8] absolute top-0 flex-col items-center py-16 gap-4  border-t-2 border-blue-950 md:hidden ${showDiv ? 'hidden' : 'flex'}`}>
        <Image src={cross} alt="cross" width={30} height={30} onClick={ShowNav}/>

        <Link href= "#" className="text-[12px] font-bold">ABOUT</Link>
               <Link href= "#" className="text-[12px] font-bold">SERVICES</Link>
               <Link href= "#" className="text-[12px] font-bold">TECHNOLOGY</Link>
               <Link href= "#" className="text-[12px] font-bold">HOW TO</Link>
               <button className=" border border-white rounded-full text-white px-5 py-3">
                    <Link href = "#"> CONTACT US</Link>
                </button>
                <button className=" bg-navbtn-gradient rounded-full px-5 py-3"> <Link href = "#">JOIN HYDRA</Link></button>


</div>
        </>
    )
}