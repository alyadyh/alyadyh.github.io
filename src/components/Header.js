import React from 'react';

import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#banner' className='h-[75px] w-[75px]'>
            <img src={Logo} alt=''/>
          </a>

          <button className='btn btn-sm'>CV</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
