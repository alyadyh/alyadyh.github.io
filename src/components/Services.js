import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// For experiences
// Then add certifications in the bottom of sentence "What I Do"

const servicee = [
  {
    name: 'Project-Based Virtual Internship: BTPN Syariah x Rakamin Academy',
    description: 'As Full-Stack Developer, I developed an IT service program using Vue.Js, SQL, and Golang with a deadline of 4 weeks.',
    link: 'https://www.rakamin.com/virtual-internship-experience/fullstack-development-btpn-syariah',
    date: 'Oct 2023 - Present',
  },
  {
    name: 'Bina Nusantara Computer Club',
    description: 'As Public Relations Staff, I work with 7 people on the same team and responsible for content creation and publicity material utilizing Figma and Canva.',
    link: 'https://bncc.net/',
    date: 'Oct 2021 - Present',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex-1 mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>My Experiences</h2>
            {/* <h3 className='h3 max-w-[455px] mb-8'>I'm a passionate Web Developer</h3> */}
          </div>
          <motion.div variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}} 
          className='flex-1'>
            <div>
              {servicee.map((service, index) => {
                const { name, description, link, date } = service;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[40px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-secondary font-semibold mb-6'>{name}</h4>
                      <p className='text-[14px] lg:text-[16px] mb-6 font-secondary font-light leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <p className='font-secondary font-semibold text-sm mb-[42px] md:text-right'>{date}</p>
                      <a href={link} target="_blank" className='btn w-9 h-9 flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
