import React from 'react'
import './Intro.css'
import bg from '../../Assects/image.png'
import btnImg from '../../Assects/hire.png'
import { Link } from 'react-scroll'

function Intro() {
  return (
    <div>
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello</span>
                <span className='introText'>I'm <span className='introName'>Rushikesh</span> <br/> Full Stack Developer</span>
                <p className='introPara'>Loremnbjhgfvuyenv jhfygKBF  kgdsmadygf  kAGW B</p>
                <Link> <button className='btn'> <img src={btnImg} alt='' className='btnImg'/> Hire Me </button></Link>
            </div>
            {/* <img src={bg} alt='Profile' className='bg' /> */}
        </section>
    </div>
  )
}

export default Intro