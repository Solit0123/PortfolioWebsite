import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Header from '../components/header'
import Hero from '../components/Hero'
import OtherProjects from '../components/otherprojects'
import Projects from '../components/Projects'


export default function Home() {
  return (
    <div>
    <Header/>
    <Hero/>
    <Experience/>
    <Projects/>
    <OtherProjects/>
    <Footer/>
    </div>
  )
}
