import Image from 'next/image'
import React, { useEffect } from 'react'
import ReactRotatingText from "react-rotating-text"


export default function header2() {
   

  return (
    <div className="">
        <div className=' w-full h-[100vh] flex flex-col items-center justify-center gap-4 relative header2image z-0 ' >
        <div className="absolute container top-0 py-6 z-10">
            <div className=" mx-auto px-5 lg:px-24 flex flex-row justify-between">
                <div className=" text-white font-medium leading-tight text-2xl">Jose Solorio</div>
                {/* responsive missing. */}
                {/* <div className="text-white font-black text-4xl">=</div> */}
            </div>
        </div>
        <div className="absolute   w-full h-[100vh]"></div>
        <div className="">
            <div className=" ">
                <div className=" flex flex-col items-center gap-8">
                    <Image
                    src="/me3x.png"
                    width={160}
                    height={160}
                    />
                     <h1 className='text-white font-bold text-[32px] lg:text-8xl  max-w-[876px] mx-auto w-full text-center px-5 '>Im your <ReactRotatingText items={['Web Developer', 'Wordpress Developer']} /></h1>
         <p className=' font-normal text-base lg:text-xl text-center text-white'>Ive remotely worked with cross-functional teams using multiple workflows and processes.</p>
                </div>
                
                  </div>
        </div>

    </div>
    <div className="">
        <h2 className='font-bold text-3xl lg:text-[40px] text-center my-14'>My react projects:</h2>
        <div className=" h-auto py-14 ">


    
<div className=" container max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-2 space-y-16 space-x-16">
 

 <div  className="rounded-3xl shadow-lg  overflow-hidden ">
             <div className=" flex flex-col relative h-96 w-[100%]">
                 <a href="https://www.desahogomarketing.com/" target="_blank">
                     <Image
                     src="/design1.jpg"
                     layout="fill"
                     objectFit="cover"
                     objectPosition="center center"
                     className=""/>
                     </a>
                     
                 </div>
 
     </div>
     <div className="block">
         <div className=" space-y-4">
             <h4 className="text-[32px] font-bold leading-10">Desahogo Website</h4>
             <ul className="list-disc pl-6 mb-4">
                 <li>Blog integration with easy to use Contentfull CMS</li>
                 <li>Mailchimp API custom integration</li>
                 <li>Contact form  integration</li>
                 <li>CV resume upload functionality with Firebase Cloud Storage</li>
                 <li>Youtube Videos API integration</li>
                 <li>Next.js, React & Tailwind CSS</li>
             </ul>
         
         </div>
         <div className="mt-14 ">
                 <div className="inline-block hover:scale-[102%]  hover:translate-x-1 animation duration-350 ease-out"><a className="hover:shadow-lg   border-2 px-2 py-4 rounded-lg border-black font-bold" href="https://www.desahogomarketing.com/" target="_blank"> View Live Project</a></div>
             </div>
     </div>
    
 
 </div>
 
        
<div className=" container max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-2 space-y-16 space-x-16  mt-32">
    
    <div  className="rounded-3xl shadow-lg  overflow-hidden md:order-2">
            <div className=" flex flex-col relative h-96 w-[100%]">
                <a href="https://www.beela.se/" target="_blank">
                    <Image
                    src="/Beela-mockup.jpg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center center"
                    className=""/>
                    </a>
                    
                </div>

    </div>


    <div className="block">
        <div className=" space-y-4">
            <h4 className="text-[32px] font-bold leading-10">Beela Tech Website</h4>
            <ul className="list-disc pl-6 mb-4">
                <li>Informational Website for a non-profit</li>
                <li>Donations integration through the website</li>
                <li>Sliders / Carousel</li>
                <li>Next.js and React</li>
                <li>Bootstrap CSS</li>
            </ul>
        
        </div>
        <div className="mt-14 ">
                <div className="inline-block hover:scale-[102%]  hover:translate-x-1 animation duration-350 ease-out"><a className="hover:shadow-lg   border-2 px-2 py-4 rounded-lg border-black font-bold" href="https://www.beela.se/" target="_blank"> View Live Project</a></div>
            </div>
    </div>

</div>

  
<div className=" mt-40  px-5 md:px-0">
    {/* <h2 className='font-bold text-4xl  lg:text-5xl text-center'>Outsource development work to experts</h2> */}
    <h2 className='font-bold text-3xl lg:text-[40px] text-center my-14'>My Wordpress projects:</h2>
    <div className=" container max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-2 space-y-16 space-x-16  mt-32">


    <div  className="rounded-3xl shadow-lg  overflow-hidden md:order-2">
            <div className=" flex flex-col relative h-96 w-[100%]">
                <a href="https://www.bellabakerycalistoga.com/" target="_blank">
                    <Image
                    src="/pan.jpeg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center center"
                    className=""/>
                    </a>
                    
                </div>

    </div>


    <div className="block">
        <div className=" space-y-4">
            <h4 className="text-[32px] font-bold leading-10">Calistoga Bakery & Cafe</h4>
            <ul className="list-disc pl-6 mb-4">
                <li>Contact form plugin</li>
                <li>Google map</li>
                <li>Sliders,Carousel, animations</li>
                <li>Elementor builder for fast development</li>
            </ul>
        
        </div>
        <div className="mt-14 ">
                <div className="inline-block hover:scale-[102%]  hover:translate-x-1 animation duration-350 ease-out"><a className="hover:shadow-lg   border-2 px-2 py-4 rounded-lg border-black font-bold" href="https://www.bellabakerycalistoga.com/" target="_blank"> View Live Project</a></div>
            </div>
    </div>


   </div>

   <div className=" container max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-2 space-y-16 space-x-16  mt-32">


<div  className="rounded-3xl shadow-lg  overflow-hidden md:order-2">
        <div className=" flex flex-col relative h-96 w-[100%]">
            <a href="https://koloaselfstorage.com/" target="_blank">
                <Image
                src="/storage.jpeg"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                className=""/>
                </a>
                
            </div>

</div>


<div className="block">
    <div className=" space-y-4">
        <h4 className="text-[32px] font-bold leading-10">Calistoga Bakery & Cafe</h4>
        <ul className="list-disc pl-6 mb-4">
            <li>Contact form plugin</li>
            <li>Google map</li>
            <li>Sliders,Carousel, animations</li>
            <li>Elementor builder for fast development</li>
        </ul>
    
    </div>
    <div className="mt-14 ">
            <div className="inline-block hover:scale-[102%]  hover:translate-x-1 animation duration-350 ease-out"><a className="hover:shadow-lg   border-2 px-2 py-4 rounded-lg border-black font-bold" href="https://koloaselfstorage.com/" target="_blank"> View Live Project</a></div>
        </div>
</div>


</div>
</div>

</div> 

    </div>


    {/*  */}
    {/* <div data-tf-widget="VUWB6IjZ" data-tf-hide-headers data-tf-hide-footer data-tf-opacity="0" id="form"></div> */}

    </div>
  )
}
