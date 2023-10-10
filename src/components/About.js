import React from 'react';
import CountUp from 'react-countup';
import HTMLpdf from '../assets/files/Skilvul-SkilBadge-HTML-Dasar.pdf';
import CSSpdf from '../assets/files/Skilvul-SkilBadge-CSS-Dasar.pdf';
import JSpdf from '../assets/files/Skilvul-SkilBadge-JavaScript-Dasar.pdf';
import dotNETpdf from '../assets/files/dotNET-Full-Stack-Foundation.pdf';
import { BsArrowUpRight } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto mt-[45px]">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}} 
            className='flex-1 bg-about bg-contain bg-no-repeat h-[150px] lg:h-[500px] mix-blend-lighten bg-top'>
          </motion.div>
          <div className='flex-1'>
            <h2 className='h2 font-semibold text-accent'>About Me.</h2>
            <h5 className='h5 text-[13px] lg:text-[18px] mb-4 font-secondary font-light'>Hello! Interestingly, I got introduced to programming in 
            freshman year at <span text-accent>Bina Nusantara University, Indonesia</span> where I study my Bachelors of Computer Science (2021-2025).</h5>
            <h5 className='h5 text-[13px] lg:text-[18px] mb-4 font-secondary font-light'>Here is a list of the technologies that familiar with!</h5>

            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div className='font-primary text-xs lg:text-sm tracking-[2px]'>
                  Years of <br/>
                  Organization
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className='font-primary text-xs lg:text-sm tracking-[2px]'>
                  Projects <br/>
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={4} duration={3} /> : null}
                </div>
                <div className='font-primary text-xs lg:text-sm tracking-[2px]'>
                  Certification <br/>
                  Earned
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Download my CV</button>
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row mt-18 mb-32'>
          <div className='flex-1 mb-12 lg:mb-0'>
            <h2 className='h2 text-accent font-semibold mb-12'>My Certifications</h2>
            <div className='flex flex-col lg:flex-row text-[25px] gap-y-8 max-w-max mx-auto lg:mx-0 mb-28'>
              <div className='flex flex-row gap-x-6'>
                <a href='#' className='text-gradient btn-link'>HTML</a>
                <a href={HTMLpdf} target="_blank" className='btn w-7 h-7 lg:mr-[42px] text-[16px] flex justify-center items-center'>
                    <BsArrowUpRight />
                </a>
              </div>
              <div className='flex flex-row gap-x-6'>
                <a href='#' className='text-gradient btn-link'>CSS</a>
                <a href={CSSpdf} target="_blank" className='btn w-7 h-7 lg:mr-[42px] text-[16px] flex justify-center items-center'>
                    <BsArrowUpRight />
                </a>
              </div>
              <div className='flex flex-row gap-x-6'>
                <a href='#' className='text-gradient btn-link'>JavaScript</a>
                <a href={JSpdf} target="_blank" className='btn w-7 h-7 lg:mr-[42px] text-[16px] flex justify-center items-center'>
                    <BsArrowUpRight />
                </a>
              </div>
              <div className='flex flex-row gap-x-6'>
                <a href='#' className='text-gradient btn-link'>.NET Full-Stack Foundation</a>
                <a href={dotNETpdf} target="_blank" className='btn w-7 h-7 mr-[42px] text-[16px] flex justify-center items-center'>
                    <BsArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ); 
};

export default About;
