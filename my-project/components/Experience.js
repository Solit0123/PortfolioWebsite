

function Experience() {
  return (
    <div className=" bg-black text-white">

    
      <div className="container mx-auto flex flex-col text-center space-y-4 py-16">
       
        <h2 className="text-5xl font-semibold ">Experience</h2>
          <p className="text-md">Check out my LinkedIn for my previous experience, <br/>
         </p>
          <a className="" href="https://www.linkedin.com/in/jose-santos-solorio-315a811b7/" target="_blank">
              <img src="./linkedin.svg" width="45px" height="45px" alt="" className="mx-auto hover:scale-110 hover:shadow-lg transition duration-150 ease-out" />
          </a>
          <p className="">
            
           or contact me at: <a href="mailto:lodisolito@gmail.com">
           lodisolito@gmail.com
        </a>
          </p>
        <a href="mailto:lodisolito@gmail.com" className="border w-max mx-auto p-4 mx-auto hover:scale-110 hover:shadow-lg transition duration-150 ease-out">
          EMAIL ME
        </a>

        
          
      </div>
    </div>
  )
}

export default Experience