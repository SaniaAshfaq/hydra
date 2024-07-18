
import Image from "next/image";
import partner from '../../../public/images/partner.png';
import hydratech1 from '../../../public/images/Hydra-Tech1 1.png';
import hydratech2 from '../../../public/images/Hydra-Tech2 1.png';
import hydratech3 from '../../../public/images/Hydra-Tech3 1.png';
import hydratech4 from '../../../public/images/Hydra-Tech4 1.png';

export default function Partner()
{
   return(
    <>
<div>
<div className="relative  h-[300px]">
  <Image src={partner} className="absolut bg-center top-0 left-0 w-full h-full object-cover z-10" />
  <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
    <h1 className="text-white text-[2rem] md:text-[2.5rem] font-custom font-bold text-center">TECHNOLOGY AND HARDWARE</h1>
    <h2 className="text-white font-thin">USED BY HYDRA VR</h2>
  </div>
</div>
{/* //companiess */}
<div className=" flex overflow-hidden py-12">
<div className="loop-animation flex justify-between space-x-16">
    <Image src={hydratech1} alt="hydratech1" className=" aspect-[3/2] object-contain max-w-none"/>
    <Image src={hydratech2} alt="hydratech2" className=" aspect-[3/2] object-contain max-w-none"/>
    <Image src={hydratech3} alt="hydratech3" className=" aspect-[3/2] object-contain max-w-none"/>
    <Image src={hydratech4} alt="hydratech4" className=" aspect-[3/2] object-contain max-w-none"/>
    
</div>

<div className="loop-animation flex justify-between space-x-16">
    <Image src={hydratech1} alt="hydratech1" className=" aspect-[3/2] object-contain max-w-none"/>
    <Image src={hydratech2} alt="hydratech2" className=" aspect-[3/2] object-contain max-w-none"/>
    <Image src={hydratech3} alt="hydratech3" className=" aspect-[3/2] object-contain max-w-none"/>
    <Image src={hydratech4} alt="hydratech4" className=" aspect-[3/2] object-contain max-w-none"/>
    
</div>





</div>

</div>

    
    </>
   )
}

