import React from 'react'
import Hero from '../components/Hero'
import LatestListings from '../components/LatestListings'
import Plans from '../components/Plans'
import Cta from '../components/Cta'

const Home = () => {
  return (
    <div>
        <Hero />
        <LatestListings />
        <Plans />
        <Cta />
    </div>
  )
}

export default Home