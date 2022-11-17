


export default function Header() {
  return (
    <div className="bg-slate-400">
        <div className="container flex justify-between mx-auto py-10 text-white pl-5">
            <div className="flex">
                <p className="font-bold text-xl">Jose Solorio</p>
            </div>
            <div className="flex space-x-16">
                <a href="https://www.linkedin.com/in/jose-santos-solorio-315a811b7/" target="_blank" className="font-bold cursor-pointer hover:bold hover:text-blue-200 transition">LinkedIn</a>
                <a href="https://calendly.com/soloriowebdesigns/initial-call" target="_blank" className="font-bold cursor-pointer hover:bold hover:text-blue-200 transition">Calendly Meeting Link</a>
            </div>
        </div>
    </div>
  )
}
