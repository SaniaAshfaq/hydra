import arrow from '../../../public/images/aboutArrow.png';
import hero from '../../../public/images/abouthero.png';
import vector7 from '../../../public/images/Vector 7.png';
import vector8 from '../../../public/images/Vector 8.png';
import Link from 'next/link';
import Image from 'next/image';


export default function About()
{
    return(
        <>
        <div className='pt-24' data-aos="zoom-in-up">
           <div className='flex md:py-10 flex-col lg:flex-row '>
          <div className=' w-full lg:w-1/2'>
              <div className=' leading-tight '>
             
                <h1 className='text-[2rem] md:text-[2.5rem] font-custom font-bold text-white'>INTRODUCTION</h1>
                <div className='text-white flex items-center gap-8'>
                <h1 className=' text-[1.5rem ]md:text-[2rem] font-light'>TO HYDRA VR</h1>
                <Image src = {arrow} alt="arrow" className=' hidden md:block'/>
                </div>
              
            </div>
            </div>

            <div className=' w-full lg:w-1/2'>
                <p className='text-white text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum reiciendis natus necessitatibus rem eos eveniet numquam beatae nihil voluptas nam pariatur officia aspernatur, corporis maiores odio, consectetur, laudantium sequi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum architecto aperiam nobis consectetur at, dolorum fugiat, illum.</p>
            </div>


           </div>






           <div className=' flex justify-between items-center  flex-col lg:flex-row py-10 lg:py-2 relative'>
             <div className=' w-[250px] md:w-[400px] lg:h-[400px] relative z-10 ' >
                <Image src={hero} alt='abouthero' data-aos="zoom-in-up"/>
               

             </div>
             
             <Image src={vector7} alt='vector' className='absolute bottom-30 z-0'/>
             <Image src={vector8} alt='vector' className='absolute bottom-28 z-0'/>

             <div className=" w-full lg:w-1/2 font-custom relative z-10 pt-10 lg:py-0">
          
             <div className=' leading-tight '>
             
             <h1 className='text-[2rem] md:text-[2.5rem] font-custom font-bold text-white'>ABOUT</h1>
             <h1 className='text-[1.5rem] md:text-[2rem] font-light text-white'>TO HYDRA VR</h1>
            
           
         </div>


            <p className=" text-white text-justify my-5" data-aos="zoom-in-up">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              alias ipsam dolores, dolorem iure ad incidunt, labore, aliquid
              suscipit facilis laudantium deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus blanditiis maiores excepturi optio eum labore aspernatur itaque sapiente quos nam suscipit quod, cupiditate dicta vitae pariatur a sit enim illum.
            </p>

            <div className="flex items-center ">
              <button className=" bg-navbtn-gradient rounded-full px-5 py-3 font-custom font-bold">
                {" "}
                <Link href="#">Let's Get In Touch</Link>
              </button>
             
            </div>
          </div>
           </div>

        




           </div>
        </>
    )
}