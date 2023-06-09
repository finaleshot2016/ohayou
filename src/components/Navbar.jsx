import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import terminal from '../assets/ohayounav.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div>
      <div className='bg-[#3A221E] max-w-full mx-auto px-40 flex justify-between items-center h-full'>
        <div className=''>
        <a href="/"><img className='max-w-[300px]' src={terminal} alt="/" /></a>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex text-[#ff3b00] items-center text-2xl'>
            <li><a href="#about">About</a></li>
            <li><a href="https://t.me/ohayouETH" target="_blank" rel="noopener noreferrer">Telegram</a></li>
            <li><a href="https://twitter.com/OhayouETH" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://medium.com/@ohayou.erc" target="_blank" rel="noopener noreferrer">Medium</a></li>
            <li><a href="https://app.uniswap.org/#/swap?outputCurrency=0x4a283dc1be3da010c790f9acdd9c9d8753ac175f" target="_blank" rel="noopener noreferrer">Buy</a></li>
        
          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
          
          
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 
    'absolute left-[-100%]'}>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="t.me/ohayouETH" target="_blank" rel="noopener noreferrer">Telegram</a></li>
            <li><a href="twitter.com/OhayouETH" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://medium.com/@ohayou.erc" target="_blank" rel="noopener noreferrer">Medium</a></li>
            <li><a href="https://app.uniswap.org/#/swap?outputCurrency=0x4a283dc1be3da010c790f9acdd9c9d8753ac175f" target="_blank" rel="noopener noreferrer">Buy</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
