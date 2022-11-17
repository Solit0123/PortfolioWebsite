import Image from "next/image"


function Projects() {
  return (
    <div className="pt-20  h-fit space-y-24  bg-blue-100">
        
        <h2 className="text-5xl font-semibold text-center ">React Projects</h2>

        <div className=" bg-blue-200">

        
        <div className=" container mx-auto  grid grid-cols-1 md:grid-cols-2 space-y-16 space-x-16">
            
            <div>
                    <div className=" flex flex-col relative h-96 w-[100%]">
                        <a href="https://beela-phase-3-dqqnl71ad-techfleetworks.vercel.app/" target="_blank">
                            <Image
                            src="/Beela-mockup.jpg"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            className=" hover:shadow-lg hover:scale-105 transition duration-150 ease-out"/>
                            </a>
                            
                        </div>
                        <div className="bg-blue-100 flex flex-wrap justify-evenly">
                             <img src="./reactlogo.svg" width="60px" height="60px" alt="" />
                             <img src="./next.svg"  width="60px" height="60px"  alt="" />
                            <img src="./logos_bootstrap.svg"  width="60px" height="60px"  alt="" />
                            <img src="./group.svg"  width="188" height="60"  alt="" />
                            <img src="./aaaa.svg"  width="188" height="60"  alt="" />
                        </div>

            </div>


            <div className="">
                <div className=" space-y-4">
                    <p>MY ROLE: <b>Dev Lead Apprenticeship</b></p>
                    <h4 className="text-4xl">Beela non-profit</h4>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Led the team, prioritized tasks, and encouraged growth</li>
                        <li>Statically generated pages, server side rendering pages</li>
                        <li>Bootstrap, reusable styled components</li>
                        <li>Weekly meetings with Dev, Design, Product teams</li>
                        <li>GitHub collaborating, and revised team's Github Pull Requests.</li>
                    </ul>
                  
                </div>
                <div className="mt-14">
                        <a className="border-2 px-2 py-4 rounded-lg border-blue-400 bg-blue-300 font-bold" href="https://beela-phase-3-dqqnl71ad-techfleetworks.vercel.app/" target="_blank"> View Live Project</a>
                    </div>
            </div>

        </div>

        </div> 
 
        <div className=" bg-blue-200">

        {/* second project */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 space-y-16 space-x-16 ">

            <div className="pt-28 md:pl-16">
                <div className=" space-y-4">
                    <p>MY ROLE: <b>Full-stack Developer as a tailwind practice project.</b></p>
                    <h4 className="text-4xl">House Rentals Website</h4>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Serverside-rendering website, fetches API for  page data.</li>
                        <li>Search functionality returns available products to search page</li>
                    </ul>
                    <p><b>Functionality </b><br/> 
                    Search Bar & date picker query get passed to search page with a Map with markers. 
                    </p>
                  
                </div>
                <div className="pt-14">
                    <a className="border-2 px-2 py-4 rounded-lg border-blue-400 bg-blue-300 font-bold" href="https://next-tailwind-airbnb-portfolio-solit0123.vercel.app/" target="_blank"> View Live Project</a>
                </div>
            </div>
            
            <div>
                    <div className=" flex flex-col relative h-96 w-[100%]">
                    <a href="https://next-tailwind-airbnb-portfolio-solit0123.vercel.app/" target="_blank">
                            <Image
                            src="/airbnb.jpeg"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            className=" hover:shadow-lg hover:scale-105 transition duration-150 ease-out"/>
                            </a>
                            
                        </div>
                        <div className="bg-blue-100 flex flex-wrap  justify-evenly">
                             <img src="./reactlogo.svg" width="60px" height="60px" alt="" />
                             <img src="./next.svg"  width="60px" height="60px"  alt="" />
                            <img src="./tailwind.svg"  width="188" height="60"  alt="" />
                        </div>

            </div>

        </div>
        </div>
    </div>
  )
}

export default Projects