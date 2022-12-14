import Image from "next/image"



function OtherProjects() {
  return (
    <div className="">
        <div className="container mx-auto">
            <h1 className="text-2xl text-center py-16 font-semibold">Other Projects I'm working on...</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-8  space-y-8 md:space-y-0 md:space-x-8">
                <div className="relative h-96 w-auto"> 
                <a href="https://bespoke-lily-420310.netlify.app/" target="_blank">
                    <Image
                    src="/techfleet.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl md:hover:shadow-lg md:hover:scale-105 md:transition md:duration-150 md:ease-out"
                    />
                    </a>
                </div>

                <div className="relative h-96 w-auto"> 
                <a href="https://texasleather.soloriowebdesigns.com/" target="_blank">
                    <Image
                    src="/texas.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl md:hover:shadow-lg md:hover:scale-105 md:transition md:duration-150 md:ease-out"
                    />
                    </a>
                </div>

                <div className="relative h-96 w-auto"> 
                <a href="https://www.soloriowebdesigns.com/" target="_blank">
                    <Image
                    src="/soloriodesigns.jpeg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl md:hover:shadow-lg md:hover:scale-105 md:transition md:duration-150 md:ease-out"
                    />
                    
                    </a>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default OtherProjects