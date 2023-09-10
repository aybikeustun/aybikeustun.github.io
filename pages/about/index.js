// pages/index.js
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Profile from '@/public/Profile.jpeg'
import Side from '@/public/Side.jpg'
import Hero from '@/public/Hero.JPG'
import Image from 'next/image';
import Footer from '@/components/Footer';
import { FaHeart } from 'react-icons/fa';

import nextjs from '@/public/nextjs.png'
import tai from '@/public/tai.png'
import figma from '@/public/figma.png'
import material from '@/public/material.png'

import { FaReact } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';


function About() {
  return (
    <div className='container mx-auto h-full w-full '>
    <Navbar />
    {/* <section className="relative">
      <div className="relative h-[700px]">
        <Image
          src={Hero}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-[hsla(0,0%,0%,0)] bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                About Me 
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    
    <div className="container mx-auto project-of-the-week grid place-content-center h-full w-full px-4 2xl:px-16 pt-20">
    <div className='border-b border-blackColor pb-10'>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20 ">
        <div className="img-container flex flex-col justify-center items-center bg-grayishColor rounded-lg border-0">
          <Link href="/">
            <div className="image-wrapper  flex justify-center items-center w-full h-full">
              <Image
                src={Profile}
                width={400}
                height={400}
                className='rounded-lg'
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-between text-align">
          <div className="mb-2 mr-20">
            
            <h2 className='text-xl mb-5'>
            I'm a frontend designer and an architect. Always obsessed with design in all its forms and up to creating. After working as an architect for 1,5 year, I realized that I wanted to be more involved with design. However, being able to respond to problems is very important to me. While thinking about these two factors, I found myself in frontend development. Having both design and analytical background made it easy for me to adapt to this field.
            </h2>

            <h2 className='text-xl mb-5'>
            I believe that having a multidisciplinary education enables me to have an approach problems from unexpected angles that lead to unique solutions. I think learning never ends. I'm always looking for new opportunities to improve myself. 
            </h2>

            <h2 className='text-xl mb-5'>
            Please do not hesitate reach me out.
           </h2>
           <h2 className='text-pink-500 background-transparent text-xl font-bold'>
           <a href="mailto:aybikeustun@gmail.com">Send Email! </a>
           </h2>

           
          </div>
        </div>
      </div>
    </div>
  </div>

  <section className="px-4 2xl:px-16 mb-10">
  <h2 className="text-3xl sm:text-4xl md:text-3xl font-bold mb-2 mt-10 mr-20">
    Skilled in:
  </h2><br />

  <div className="flex flex-col sm:flex-row justify-between items-center">
    <div className="mb-4 sm:mb-0">
      <FaJs size={100} />
    </div>
    <div className="mb-4 sm:mb-0">
      <FaReact size={100} />
    </div>
    <div className="mb-4 sm:mb-0">
      <Image
        src={tai}
        alt="Tailwind"
        width={100}
        height={100}
      />
    </div>
    <div className="mb-4 sm:mb-0">
      <Image
        src={nextjs}
        width={100}
        height={100}
      />
    </div>
    <div className="mb-4 sm:mb-0">
      <Image
        src={figma}
        width={100}
        height={100}
      />
    </div>
    <div className="mb-4 sm:mb-0">
      <Image
        src={material}
        width={100}
        height={100}
      />
    </div>
  </div>
</section>


    <Footer />
  </div>
  );
}

export default About;
