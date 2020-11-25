import React from 'react'
import Hero from './Hero'
import Movie from './Movie'

const Home = ({search, setLoading}) => {
    return (
        <>
  {search}
          <Hero />   
          <Movie searchData={search} setLoading={setLoading} /> 
        </>
    )
}

export default Home
