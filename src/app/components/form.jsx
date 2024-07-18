import Link from "next/link";
import "../globals.css";
export default function Form() {
  return (
    <>
      <div className=" flex items-center justify-center py-10 md:py-20 "  data-aos="fade-up">
        <div className=" flex items-center justify-center flex-col formgradient w-4/5 rounded-2xl py-10 md:py-16" data-aos="fade-up">
          <div data-aos="fade-up">
            <h1 className="formheadingbutton text-[2rem] md:text-[2.5rem] font-custom font-bold text-white border-b pb-2 text-center ">
              {" "}
              JOIN HYDRA
            </h1>
            <h3 className=" text-center text-[1.5rem] md:text-[2rem] text-[white] font-custom font-thin py-3">
              {" "}
              Lets Build Your VR Experience
            </h3>
          </div>
          <div className=" w-4/5 text-white" data-aos="fade-up">
            <div className=" text-white ">
              <div className=" md:m-4 flex gap-2 w-full flex-col md:flex-row">
                <input type="text" placeholder="First Name" className=" bg-transparent border-2 border-[#d6d6d9] rounded-2xl p-2 md:w-1/2 text-white "/>
                <input type="text" placeholder="Second Name" className=" bg-transparent border-2 border-[#d6d6d9] rounded-2xl p-2 md:w-1/2 text-white " />
              </div>
            </div>
            <div>
              <div className="my-3 md:my-0 md:m-4 flex gap-2 w-full flex-col md:flex-row">
              <input type="text" placeholder="E-mail" className=" bg-transparent border-2 border-[#d6d6d9] rounded-2xl p-2 md:w-1/2"/>
                <input type="text" placeholder = "Phone Number" className=" bg-transparent border-2 border-[#d6d6d9] rounded-2xl p-2 md:w-1/2 " />

              </div>
            </div>
            <div className=" md:m-4 w-full">
              <input type="text" placeholder="Subject" className=" bg-transparent border-2 border-[#d6d6d9] rounded-2xl w-full p-2"/>
            </div>
            <div className=" my-3 md:my-0 md:m-4 w-full">
              <textarea name="message" id="message" placeholder = "tell us something...." rows = {10} cols = {10} className=" bg-transparent border-2 border-[#d6d6d9] rounded-2xl w-full p-2"></textarea>
            </div>
          </div>

          <button className=" bg-navbtn-gradient rounded-full px-5 py-5 font-custom font-bold mt-6 sm:text-[14px] md:text-[16px]" data-aos="fade-up">
            {" "}
            <Link href="#">Send To Hydra</Link>
          </button>
        </div>
      </div>
    </>
  );
}
