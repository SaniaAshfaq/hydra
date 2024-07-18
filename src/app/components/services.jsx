
import Image from "next/image";
import Link from "next/link";
import arrow from '../../../public/images/aboutArrow.png';
import card1 from '../../../public/images/card1.png';
import card2 from '../../../public/images/card2.png';
import card3 from '../../../public/images/card3.png';
import card4 from '../../../public/images/card4.png';

export default function Services()
{
    return(
        <>

            <div className=" py-10 lg:py-28"> 
            <div className='flex md:pt-12 flex-col lg:flex-row flex-wrap '>
          <div className=' w-full lg:w-1/2'>
              <div className=' leading-tight '>
             
                <h1 className='text-[1.7rem] md:text-[2.5rem] font-custom font-bold text-white' data-aos="fade-up"
     data-aos-duration="1000">WHY BUILD</h1>
                <div className=' text-white flex items-center gap-8'>
                <h1 className='text-[1.5rem]  md:text-[2rem] font-light'>WITH HYDRA</h1>
                <Image src = {arrow} alt="arrow" className=' hidden md:block' data-aos="zoom-in-up"/>
                </div>
              
            </div>
            </div>

            <div className=' w-full lg:w-1/2' data-aos="zoom-in-up">
                <p className='text-white text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum reiciendis natus necessitatibus rem eos eveniet numquam beatae nihil voluptas nam pariatur officia aspernatur, corporis maiores odio, consectetur, laudantium sequi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum architecto aperiam nobis consectetur at, dolorum fugiat, illum.</p>
            </div>


           </div>
           {/* cards div */}
           <div className=" flex gap-4 py-8 md:flex-row flex-col flex-1 md:justify-normal justify-center md:items-start items-center">
            <Card img={card1} heading = "SIMULATION" />
            <Card img={card2} heading = "EDUCATION" />
            <Card img={card3} heading = "SELF CARE" />
            <Card img={card4} heading = "OUTDOOR" />
           </div>
            </div>
        
        </>
    )
}

function Card(props)
{
    return(
        <>
           <div className=" flex items-center justify-normal flex-col gap-5 cardGradient rounded-2xl p-4 md:w-full w-11/12 " data-aos="fade-up" >
            <Image src={props.img} alt="card-img" />
            <h1 className=" text-[20px] font-custom font-bold text-white border-b border-red pb-4 border-[#C0B7E8]">{props.heading}</h1>
            <p className=" text-[12px] text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, molestias Lorem ipsum dolor sit amet consectetur adipisicin.</p>
            <button className=" bg-navbtn-gradient rounded-full px-5 py-3 font-custom font-bold">
                {" "}
                <Link href="#">TRY IT NOW</Link>
              </button>
           </div>
        </>
    )
}