import Image from "next/image"
import ReactRotatingText from "react-rotating-text"

export default function Hero() {
  return (
    <div className=" bg-blue-500">
        <div className="container mx-auto min-h-[40rem] grid grid-cols-1 md:grid-cols-2 pt-16  space-y-10 space-x-5">
            <div className="flex flex-col  pt-14 space-y-10 pl-5">
                <h1 className="text-[4rem] font-bold max-w-xs">Full-stack <ReactRotatingText items={['React Developer', 'React Developer', 'React Developer']} />  </h1>
                <p className="text-lg">Working in an agile cross-functional environment is what makes a great product!</p>
            </div>

            <div className="relative h-96 ml-0 pl-0 ">
              asdf
                <Image
                src="/profile.jpg"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 hover:shadow-lg transition duration-150 ease-out overflow-hidden"/>
            </div>
        </div>
    </div>
  )
}
