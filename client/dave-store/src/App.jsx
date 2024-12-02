import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './Component/Hero/Hero'
import Testimonies from './Component/Testimonies/Testimonies'
import Banner from './Component/Banner/Banner'

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, [] )
  return (
    <main>
      <Hero />
      <Banner />
       <Testimonies />
    </main>
  )
}

export default App
