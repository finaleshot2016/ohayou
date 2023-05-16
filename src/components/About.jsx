import React from 'react';
import terminal from '../assets/about.png'
import terminal1 from '../assets/tokenomics.png'
import terminal2 from '../assets/ohayou1.png'
import gif from '../assets/ohayougif.gif'

const About = () => {
  return (
    <div className='w-full bg-[#EDE0E1] text-white text-center'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 '>
        <div id="about">
        <img className='justify-center' src={terminal} alt="about" />
        <p class="text-3xl font-medium leading-relaxed mt-0 mb-4 text-[#EC6925]">
        $OHAYOU, its name derived from the Japanese phrase meaning "Good Morning," carried within it a playful symbolism. It symbolized not only the beginning of a new day but also the dawn of a vibrant and interconnected community. And in this community, $OHAYOU sought to bridge the gap between traditional memes and the booming world of cryptocurrencies. <br /><br />

        The $OHAYOU will became a platform for creative expression, where artists and enthusiasts collaborated to create captivating digital artworks, memes, and videos that celebrated the spirit of joy and laughter. These creations traveled far and wide across social media platforms, spreading smiles and inspiring others to join the movement.
</p>
<img className='justify-center' src={terminal1} alt="tokenomics" />
<img className='justify-center' src={gif} alt="gif" />

          <div>
<iframe className='py-4 w-full aspect-video' src="https://dexscreener.com/ethereum/" title="dexchart"></iframe>
          </div>
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer"><img className='justify-center' src={terminal2} alt="about" /></a>
        </div>
      </div>
    </div>
  );
};
export default About;
