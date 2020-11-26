import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import Movie from './Movie'

const Home = ({search, setLoading}) => {
    return (
        <>
  {search}
          <Hero />   
          <Movie searchData={search} setLoading={setLoading} /> 
          <Footer />
        </>
    )
}

export default Home
