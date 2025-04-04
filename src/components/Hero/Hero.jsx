import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import da2 from '../../assets/da2.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        {/* <img src={da2}   alt=''/> */}
        <h1><span>I am Balaji Pothala</span>, Data Analyst.</h1>
        <p>I am a Data Analyst from Andhra Pradesh looking for challenging Data Analyst role to showcase myskills.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume" ><a href="https://github.com/balupothala/my-resume/blob/main/BALAJI%20POTHALA.pdf" target='_blank'>My Resume</a></div>
        </div>
    
    
    </div>

  )
}

export default Hero