import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex'>
          <div className='flex-1 flex-col'>
            <div>
              <h4 className='text-[23px] lg:text-xl uppercase text-accent font-primary font-semibold mb-6 tracking-wide'>Get in touch</h4>
              <h2 className='text-[32px] lg:text-[75px] leading-none mb-14 font-secondary font-bold'>
                Let's work together!
              </h2>
              <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7 }}
              className='flex text-[30px] lg:text-[38px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                <a href='https://linkedin.com/in/alya-mardhiyyah/' target="_blank"><FaLinkedin/></a>
                <a href='https://github.com/alyadyh/' target="_blank"><FaGithub/></a>
                <a href='https:///instagram.com/alyadya_' target="_blank"><FaInstagram/></a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
