

function Experience() {
  return (
    <div className=" bg-black text-white">

    
      <div className="container mx-auto flex flex-col text-center space-y-4 py-16">
       
        <h2 className="text-2xl font-semibold ">You can contact me via Linkedin for a faster response.</h2>
          <p className="text-md">Feel free to ask any questions to help you determine our fit <br/>
         </p>
          <a className="border w-max m-auto px-8 py-4 flex items-center gap-4 hover:scale-105 hover:shadow-md transition duration-100 ease-out" href="https://www.linkedin.com/in/jose-santos-solorio-315a811b7/" target="_blank">
              <img src="./linkedin.svg" width="45px" height="45px" alt="" className="mx-auto " />
              Contact via LinkedIn
          </a>
          <p className="">
            
           or contact me at: <a href="mailto:lodisolito@gmail.com">
           lodisolito@gmail.com
        </a>
          </p>
        <a href="mailto:lodisolito@gmail.com" className="border w-max mx-auto p-4 mx-auto hover:scale-105 hover:shadow-md transition duration-100 ease-out">
         Send email instead
        </a>

        
          
      </div>
    </div>
  )
}

export default Experience