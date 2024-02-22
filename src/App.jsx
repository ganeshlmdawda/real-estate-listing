import { useState } from 'react'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import NewestDeals from './components/NewestDeals'
import BestDeals from './components/BestDeals'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return(
    <div className='App'>
      <div className="w-11/12 md:w-4/5 m-auto">
        <Hero/>
        <NewestDeals/>
        <AboutUs/>
        <BestDeals/>
      </div>
      <Footer/>
    </div>
      
  )
}

export default App
