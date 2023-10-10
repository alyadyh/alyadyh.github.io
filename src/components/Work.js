import React from 'react';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            <div>
              <h2 className='h2 leading-tight font-semibold text-accent'>Some Things <br/>I've Built</h2>
              <p className='max-w-lg mb-8 lg:mb-[126px]'>Check out some of my noteworthy projects. </p>
              <button className='btn btn-sm'>View all projects</button>
            </div>
            <motion.div variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}} 
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
                <a href='https://linkedin.com/in/alya-mardhiyyah/' target="_blank"></a>
              </div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>
                  Web Development
                </span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-500 z-50'>
                <span className='text-sm text-accent font-quartenary'>
                  HTML | CSS | JavaScript
                </span>
              </div>
            </motion.div>
          </div>
          <div className='flex-1 flex flex-col gap-y-10'>
            <motion.div variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}} 
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
                <a href='https://linkedin.com/in/alya-mardhiyyah/' target="_blank"></a>
              </div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=''/>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>
                  Web Development
                </span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-500 z-50'>
                <span className='text-sm text-accent font-quartenary'>
                  HTML | CSS | JavaScript
                </span>
              </div>
            </motion.div>
            <motion.div variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}} 
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
                <a href='https://linkedin.com/in/alya-mardhiyyah/' target="_blank"></a>
              </div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt=''/>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>
                  Web Development
                </span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-500 z-50'>
                <span className='text-sm text-accent font-quartenary'>
                  HTML | CSS | JavaScript
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
