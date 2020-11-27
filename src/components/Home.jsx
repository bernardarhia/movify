import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import MiniLoader from './MiniLoader'
import Movie from './Movie'
import MovieSkeleton from './MovieSkeleton'
import Skeleton from './Skeleton'

const Home = ({search, setLoading}) => {
    return (
        <>
        <div className="head" style={{display:'none'}}></div>
        <div className="para" style={{display:'none'}}><p></p></div>
          <Hero />   
          <Movie searchData={search} setLoading={setLoading} /> 
          <Footer />
        </>
    )
}

export default Home
