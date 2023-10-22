import React from 'react';
import CountUp from 'react-countup';
import HTMLpdf from '../assets/files/Skilvul-SkilBadge-HTML-Dasar.pdf';
import CSSpdf from '../assets/files/Skilvul-SkilBadge-CSS-Dasar.pdf';
import JSpdf from '../assets/files/Skilvul-SkilBadge-JavaScript-Dasar.pdf';
import dotNETpdf from '../assets/files/dotNET-Full-Stack-Foundation.pdf';
import CVpdf from '../assets/files/CV.pdf';
import { BsArrowUpRight } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaLaravel, FaReact, FaJava, FaPhp } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className="container p-7 lg:mx-auto mt-[55px]">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[400px] lg:h-[500px] mix-blend-lighten bg-top'>
          </motion.div>
          <div className='flex-1'>
            <h2 className='h2 font-semibold text-2xl lg:text-3xl mb-2 lg:mb-6 text-accent'>About Me.</h2>
            <h5 className='h5 text-[13px] lg:text-[18px] mb-4 font-secondary font-light'>Interestingly, I got introduced to programming in 
            freshman year at Bina Nusantara University, Indonesia where I study my Bachelors of Computer Science.</h5>
            <h5 className='h5 text-[13px] lg:text-[18px] mb-4 font-secondary font-light'>Here is the list of technologies that i'm familiar with!</h5>
            <div className='flex text-[24px] lg:text-[24px] gap-x-6 max-w-max mx-auto lg:mx-0 lg:mb-14'>
              <FaHtml5/>
              <FaCss3Alt/>
              <FaJsSquare/>
              <FaLaravel/>
              <FaReact/>
              <FaJava/>
              <FaPhp/>
            </div>

            <div className='flex gap-x-6 lg:gap-x-10 mt-9 lg:mt-12 mb-9 lg:mb-12'>
              <div>
                <div className='text-[40px] lg:text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={2} duration={3} /> 
                  : <CountUp start={0} end={2} duration={3} />}
                </div>
                <div className='font-primary text-xs lg:text-sm tracking-[2px]'>
                  Years of <br/>
                  Organization
                </div>
              </div>
              <div>
                <div className='text-[40px] lg:text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={9} duration={3} /> 
                  : <CountUp start={0} end={9} duration={3} />}
                </div>
                <div className='font-primary text-xs lg:text-sm tracking-[2px]'>
                  Projects <br/>
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] lg:text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={4} duration={3} /> 
                  : <CountUp start={0} end={4} duration={3} />}
                </div>
                <div className='font-primary text-xs lg:text-sm tracking-[2px]'>
                  Certification <br/>
                  Earned
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center mb-0'>
                <a href={CVpdf} target="_blank">
                  <button className='btn btn-sm lg:btn-lg'>Download my CV</button>
                </a>
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row mt-24 lg:mt-[-55px] mb-1 lg:mb-32'>
          <div className='flex-1 mb-12 lg:mb-0'>
            <h2 className='h2 text-accent font-semibold text-2xl lg:text-3xl mb-6'>My Certifications</h2>
            <div className='flex flex-col lg:flex-row text-[25px] gap-y-3 max-w-max mx-0 lg:mx-0 mb-28'>
              <div className='flex flex-row gap-x-6'>
                <a href='#' className='text-gradient btn-link'>HTML</a>
                <div className='flex flex-col flex-1 items-end'>
                  <a href={HTMLpdf} target="_blank" className='btn w-7 h-7 lg:mr-[42px] text-[16px] flex justify-center items-center'>
                      <BsArrowUpRight />
                  </a>
                </div>
              </div>
              <div className='flex flex-row gap-x-6'>
                <a href='#' className='text-gradient btn-link'>CSS</a>
                <div className='flex flex-col flex-1 items-end'>
                  <a href={CSSpdf} target="_blank" className='btn w-7 h-7 lg:mr-[42px] text-[16px] flex justify-center items-center'>
                      <BsArrowUpRight />
                  </a>
                </div>
              </div>
              <div className='flex flex-row gap-x-6'>
                <a href='#' className='text-gradient btn-link'>JavaScript</a>
                <div className='flex flex-col flex-1 items-end'>
                  <a href={JSpdf} target="_blank" className='btn w-7 h-7 lg:mr-[42px] text-[16px] flex justify-center items-center'>
                      <BsArrowUpRight />
                  </a>
                </div>
              </div>
              <div className='flex flex-row gap-x-6'>
                <a href='#' className='text-gradient btn-link'>.NET Full-Stack Foundation</a>
                <div className='flex flex-col flex-1 items-end text-right'>
                  <a href={dotNETpdf} target="_blank" className='btn w-7 h-7 mr-[42px] text-[16px] flex justify-center items-center'>
                      <BsArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ); 
};

export default About;
