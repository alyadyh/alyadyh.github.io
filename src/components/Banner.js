import React from 'react';
import Image from '../assets/avatar.svg';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh]' id='home'>
      <div className='container mx-auto mt-4'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-20'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} 
            className='text-[55px] font-bold leading-[0.8] lg:text-[100px]'>
              ALYA <span>DHIYA'</span>
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation 
                sequence={[
                  'Developer',
                  2000,
                  'Designer',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
                />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7 }}
            className='text-[18px] mb-8 max-w-lg mx-auto lg:mx-0'>
              Currently an undergraduate student majoring in Computer Science at Bina Nusantara University. Interested in Web Development, Agile Project Management, and UI/UX. 
            </motion.p>
            <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7 }}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>
            <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7 }}
            className='flex text-[25px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://linkedin.com/in/alya-mardhiyyah/'><FaLinkedin/></a>
              <a href='https://github.com/alyadyh/'><FaGithub/></a>
              <a href='https:///instagram.com/alyadya_'><FaInstagram/></a>
            </motion.div>
          </div>
          {/* image */}
          {/* <div className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto'><img src={Image} alt='' /></div> */}
        </div>
      </div>
    </section>
    
  ); 
};

export default Banner;
