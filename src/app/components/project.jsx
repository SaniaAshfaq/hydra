import Image from "next/image";
import arrow from '../../../public/images/aboutArrow.png';
import arrow2 from '../../../public/images/heroarrow.png';
import vector15 from '../../../public/images/vector15.png';
export default function Project()
{
    return(
        <>
        <div className=" lg:py-20">
        <div className='flex md:py-10 flex-col lg:flex-row '>
          <div className=' w-full lg:w-1/2 ' data-aos="fade-up">
              <div className=' leading-tight '>
             
                <h1 className='text-[2rem] md:text-[2.5rem] font-custom font-bold text-white'>HOW WE BUILD</h1>
                <div className='text-white flex items-center gap-8'>
                <h1 className=' text-[1.5rem ]md:text-[2rem] font-light'>WITH HYDRA VR</h1>
                <Image src = {arrow} alt="arrow" className=' hidden md:block'/>
                </div>
              
            </div>
            </div>

            <div className=' w-full lg:w-1/2'  data-aos="fade-up">
                <p className='text-white text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum reiciendis natus necessitatibus rem eos eveniet numquam beatae nihil voluptas nam pariatur officia aspernatur, corporis maiores odio, consectetur, laudantium sequi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum architecto aperiam nobis consectetur at, dolorum fugiat, illum.</p>
            </div>
           </div>
            
            <div className=" flex justify-around md:flex-row flex-col relative mt-12"  data-aos="fade-up">
                <Image src={vector15} alt="vector 15" className=" absolute z-0" />
                <Card heading = "3D Conseption" heading2 = "& Design" num="01"/>
                <Card heading = "Interaction" heading2 = " Design" num="02"/>
                <Card heading = "VR World" heading2 = "User Testing" num="03"/>
                <Card heading = "Hydra VR" heading2 = "Deploy" num="04"/>

             </div>

        </div>
       


        
        </>
    )

}

function Card(props)
{
  return(
    <>
    <div className=" flex flex-col items-center z-20">
      <div className=" w-36 h-36 rounded-full bg-[#C0B7E8] flex items-center justify-center text-[3rem] font-custom font-bold text-[#343045] ">{props.num}</div>
      <div className="flex items-center">
        <Image src={arrow2} alt="arrow2" height={20} width={50}/>
        <div className=" my-4">
      <h6 className=" text-white font-custom font-bold">{props.heading}</h6>
      <h6 className=" text-white font-custom font-bold">{props.heading2}</h6>
      </div>
      </div>

    
    </div>
    
    </>
  )
}