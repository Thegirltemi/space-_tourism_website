import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <section className='home px-5'>
           <div className='overlay '>
               <article className='lg:w-1/2 lg:mr-20'>
               <h1 className='text-2xl text-gray-400 mt-10'>
                   SO, YOU WANT TO TRAVEL TO SPACE
                   <span className='block text-4xl lg:text-6xl text-white mt-5 mb-10'>
                       SPACE
                 </span>
                   </h1>
               <p className='text-gray-400'>
                   Let's face it;if you want to go to space,you might as well genuinely go to
                   outer space and not hover kind of on the edge of it.Well, sit back,and relax beacause we'll 
                   give you a truly out of this world experience!
               </p>
               </article>
               <article className='mt-10 '>
                   <button className='w-52 h-52 rounded-full bg-white text-gray-800 uppercase 
                   font-bold text-4xl lg:text-5xl  animate-pulse'>
                       <Link to='destination'>EXPLORE</Link>
                   </button>
               </article>
           </div>
        </section>
    </div>
  )
}

export default Home