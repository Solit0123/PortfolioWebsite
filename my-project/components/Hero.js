import Image from "next/image"
import ReactRotatingText from "react-rotating-text"

export default function Hero() {
  return (
    <div className=" bg-blue-500 pb-24  ">
        <div className="container mx-auto min-h-[24rem] grid grid-cols-1 md:grid-cols-2 pt-16  space-y-10 md:space-x-5">
            <div className="flex flex-col  pt-14  space-y-10 pl-5 min-h-[28rem] h-[28rem] max-h-[28rem]">
                <h1 className="text-[4rem] font-bold max-w-xs">Full-stack <ReactRotatingText items={['React Developer', 'React Developer', 'React Developer']} />  </h1>
                <p className="text-lg">Working in an agile cross-functional environment is what makes a great product!</p>
            </div>

            <div className="relative min-h-96 h-96 max-h-96 ml-0 pl-0 ">
                <Image
                src="/profile.jpg"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl md:hover:scale-105 md:hover:shadow-lg md:transition md:duration-150 md:ease-out overflow-hidden"/>
            </div>
        </div>
    </div>
  )
}
