import React from 'react';
import Image from '../assets/avatar.svg';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <section className='min-h-[0vh] lg:min-h-[78vh]' id='home'>
      <div className='container p-7 lg:mx-auto mb-24'>
        <div className='flex gap-y-8 lg:flex-row lg:items-center lg:gap-x-20'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.p variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7 }}
            className='text-[18px] font-quartenary text-accent mb-8 max-w-lg mx-auto lg:mx-0'>
              Hello, World! My name is
            </motion.p>
            <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} 
            className='mb-6 text-[40px] font-bold leading-[0.8] lg:text-[70px]'>
              ALYA <span>DHIYA'</span>
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
            className='mb-8 text-[25px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation 
                sequence={[
                  'Developer',
                  2000,
                  'Designer',
                  2000,
                ]}
                speed={50}
                className='text-gradient'
                wrapper='span'
                repeat={Infinity}
                />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7 }}
            className='text-[16px] lg:text-[16px] font-tertiary mb-4 max-w-3xl mx-auto lg:mx-0'>
              I love exploring new things!
           </motion.p>
            <motion.p variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7 }}
            className='text-[14px] lg:text-[16px] font-tertiary mb-8 max-w-3xl mx-auto lg:mx-0'>
              Currently working as Full-stack Developer Project-based Intern at <span className='text-accent'>BTPN Syariah</span>, also a full-time Computer Science student at <span className='text-accent'>Bina Nusantara University</span>. Interested in Web Development, Project Management, and UI/UX. 
            </motion.p>
            <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7 }}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link to='contact' smooth={true} spy={true} className='cursor-pointer'>
                <button className='btn btn-sm lg:btn-lg'>Contact me</button>
              </Link>
              {/* <a href='#' className='text-gradient btn-link'>My Portfolio</a> */}
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
