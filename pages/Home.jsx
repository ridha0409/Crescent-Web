import Hero from '../components/Hero.jsx'
import StatsBar from '../components/StatsBar.jsx'
import Programmes from '../components/Programmes.jsx'
import WhyChoose from '../components/WhyChoose.jsx'
import About from '../components/About.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Facilities from '../components/Facilities.jsx'
import FAQ from '../components/FAQ.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Programmes />
      <WhyChoose />
      <About />
      <Testimonials />
      <Facilities />
      <FAQ />
    </>
  )
}
