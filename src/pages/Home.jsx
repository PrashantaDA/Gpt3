import { Footer, Blog, Possibility, Header, Features, WhatGPT3 } from '../containers'
import { CTA, Brand, Navbar } from '../components'
import { SlArrowUp } from 'react-icons/sl'

import React from 'react'

const gotop = () => {
     window.scrollTo({
          top: 0,
          behavior: 'smooth'
     })
}

const Home = () => {
     return (
          <>
               <div className="gradient__bg">
                    <Navbar />
                    <Header />
               </div>

               <Brand />
               <WhatGPT3 />
               <Features />
               <Possibility />
               <CTA />
               <Blog />
               <Footer />

               <div className="gotop" >
                    <button className='gotopbtn' onClick={gotop}><SlArrowUp size={24} /></button>
               </div>
          </>
     )
}

export default Home