import React from 'react';

import img02 from '../images/02.webp';
import img03 from '../images/03.webp';
import img04 from '../images/04.webp';
import img05 from '../images/05.webp';
import img06 from '../images/06.webp';
import img07 from '../images/07.webp';
import img08 from '../images/08.webp';
import img09 from '../images/09.webp';
import img10 from '../images/10.webp';
import img11 from '../images/11.webp';
import img12 from '../images/12.webp';
import img13 from '../images/13.webp';
import img14 from '../images/14.webp';
import img15 from '../images/15.webp';
import img16 from '../images/16.webp';
import img17 from '../images/17.webp';
import img18 from '../images/18.webp';
import img19 from '../images/19.webp';
import img20 from '../images/20.webp';
import img21 from '../images/21.webp';

const marqueeImages = [
  { src: img02, alt: "Mom's House Cleaning project showcase 02" },
  { src: img03, alt: "Mom's House Cleaning project showcase 03" },
  { src: img04, alt: "Mom's House Cleaning project showcase 04" },
  { src: img05, alt: "Mom's House Cleaning project showcase 05" },
  { src: img06, alt: "Mom's House Cleaning project showcase 06" },
  { src: img07, alt: "Mom's House Cleaning project showcase 07" },
  { src: img08, alt: "Mom's House Cleaning project showcase 08" },
  { src: img09, alt: "Mom's House Cleaning project showcase 09" },
  { src: img10, alt: "Mom's House Cleaning project showcase 10" },
  { src: img11, alt: "Mom's House Cleaning project showcase 11" },
  { src: img12, alt: "Mom's House Cleaning project showcase 12" },
  { src: img13, alt: "Mom's House Cleaning project showcase 13" },
  { src: img14, alt: "Mom's House Cleaning project showcase 14" },
  { src: img15, alt: "Mom's House Cleaning project showcase 15" },
  { src: img16, alt: "Mom's House Cleaning project showcase 16" },
  { src: img17, alt: "Mom's House Cleaning project showcase 17" },
  { src: img18, alt: "Mom's House Cleaning project showcase 18" },
  { src: img19, alt: "Mom's House Cleaning project showcase 19" },
  { src: img20, alt: "Mom's House Cleaning project showcase 20" },
  { src: img21, alt: "Mom's House Cleaning project showcase 21" },
];

export const MarqueeSection: React.FC = () => {
  // 20 images duplicated side-by-side to create seamless infinite CSS loop
  const displayImages = [...marqueeImages, ...marqueeImages];

  return (
    <section
      id="marquee-section"
      className="w-full overflow-hidden mt-16 md:mt-20 mb-16 select-none"
      aria-label="Image gallery of cleaned spaces"
    >
      <div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] will-change-transform">
        {displayImages.map((img, index) => (
          <div
            key={`marquee-img-${index}`}
            className="shrink-0 mx-3 group"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="h-[280px] md:h-[500px] w-[320px] md:w-[480px] object-cover rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
