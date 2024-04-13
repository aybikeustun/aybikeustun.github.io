import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import givingly from '@/public/givingly.PNG';
import wooden from '@/public/wooden.PNG';
import movie from '@/public/movie.PNG';
import Link from 'next/link';
import { FaFigma } from 'react-icons/fa';

const YourComponent = () => {
  return (
<div className='container mx-auto h-full w-full '>
    <Navbar />
    <section className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>

    <h2 className='text-3xl sm:text-4xl md:text-3xl font-bold mb-2 mt-10 mr-20'>
      Let's check my projects!
    </h2><br />
      

      
    </section>

    <div class="container mt-20 mb-20 mx-auto p-4 md:p-0">
  

  <div class="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
    

  <div className="relative w-full md:w-1/3 h-64 md:h-auto">
  <Image
    src={wooden} // Replace with the actual path to your image in the "public" directory
    alt="ConnectCommute"
    width={500} // Set the desired width
    height={500} // Set the desired height
    layout="responsive" // Choose the appropriate layout option (e.g., responsive, fixed, intrinsic)
    objectFit="cover" // Set the object-fit property to control how the image fits within its container
  />
  <div className="absolute text-xl">
    <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
  </div>
</div>

    <div class="bg-white w-full md:w-2/3">

      <div class="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">

        <div class="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">

          <div class="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
            <h3>ConnectCommute</h3>
            <p class="mb-0 mt-3 text-grey-dark text-sm italic">Figma, Photoshop</p>
            <hr class="w-1/4 md:ml-0 mt-4  border lg:hidden"></hr>
          </div>


          <div class="w-full lg:w-3/5 lg:px-3">
            <p class="text-md mt-4 lg:mt-0 text-justify md:text-left text-md">
              Let us help you! Think about an app that allow user find a bus and stop information. Also let them to create or search carpooling groups. You are not alone in the city. You have our trustworthy infos about these crowded roads. Don't get confused, trust us.
             </p>
          </div>


          <div class="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
            
            <h2 className='text-pink-500 bg-pink-100 rounded-full text-xl text-center font-bold py-2 px-1'>
           <Link href='/connectcommute'>
                  <ul className=" text-xl">View Case Study</ul>
                </Link>
           </h2>
          
          </div>
  
        </div>

      </div>

    </div>

  </div>

</div>

<div class="container mt-20 mb-20 mx-auto p-4 md:p-0">
  

  <div class="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
    

  <div className="relative w-full md:w-1/3 h-64 md:h-auto">
  <Image
    src={givingly} // Replace with the actual path to your image in the "public" directory
    alt="Givingly"
    width={500} // Set the desired width
    height={500} // Set the desired height
    layout="responsive" // Choose the appropriate layout option (e.g., responsive, fixed, intrinsic)
    objectFit="cover" // Set the object-fit property to control how the image fits within its container
  />
  <div className="absolute text-xl">
    <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
  </div>
</div>

    <div class="bg-white w-full md:w-2/3">

      <div class="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">

        <div class="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">

          <div class="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
            <h3>GIVINGLY</h3>
            <p class="mb-0 mt-3 text-grey-dark text-sm italic">Next.js, Tailwind</p>
            <hr class="w-1/4 md:ml-0 mt-4  border lg:hidden"></hr>
          </div>


          <div class="w-full lg:w-3/5 lg:px-3">
            <p class="text-md mt-4 lg:mt-0 text-justify md:text-left text-md">
            Join our vibrant community of changemakers and be a part of the crowdfunding revolution. Together, we can make a difference and turn ideas into reality. Our user-friendly platform empowers creators to raise funds and engage with supporters. 
             </p>
          </div>


          <div class="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
            
            <h2 className='text-pink-500 bg-pink-100 rounded-full text-xl text-center font-bold py-2 px-1'>
           <a href="https://crowdfunding-app-team-9-akej.vercel.app/" target="_blank" rel="noopener noreferrer">Visit the Site </a>
           </h2>
          
          </div>
  
        </div>

      </div>

    </div>

  </div>

</div>


<div class="container mt-20 mb-20 mx-auto p-4 md:p-0">
  

  <div class="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
    

  <div className="relative w-full md:w-1/3 h-64 md:h-auto">
  <Image
    src={movie} // Replace with the actual path to your image in the "public" directory
    alt="MovieMovie"
    width={500} // Set the desired width
    height={500} // Set the desired height
    layout="responsive" // Choose the appropriate layout option (e.g., responsive, fixed, intrinsic)
    objectFit="cover" // Set the object-fit property to control how the image fits within its container
  />
  <div className="absolute text-xl">
    <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
  </div>
</div>

    <div class="bg-white w-full md:w-2/3">

      <div class="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">

        <div class="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">

          <div class="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
            <h3>I Like To Movie Movie </h3>
            <p class="mb-0 mt-3 text-grey-dark text-sm italic">Javascript, CSS</p>
            <hr class="w-1/4 md:ml-0 mt-4  border lg:hidden"></hr>
          </div>


          <div class="w-full lg:w-3/5 lg:px-3">
            <p class="text-md mt-4 lg:mt-0 text-justify md:text-left text-md">
            The Movie Database Project is your go-to hub for all things cinema. Explore a vast collection of movies, complete with cast details, ratings, trailers, and more. Whether you're a film enthusiast or seeking your next movie night pick, we've got you covered. Explore the magic of the silver screen with us! </p>
          </div>


          <div class="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
            
            <h2 className='text-pink-500 bg-pink-100 rounded-full text-xl text-center font-bold py-2 px-1'>
           <a href="https://202303-prm-tr-few.github.io/movie-project-aybike-berkay-medetcan/index.html#" target="_blank" rel="noopener noreferrer">Visit the Site </a>
           </h2>
          
          </div>
  
        </div>

      </div>

    </div>

  </div>

</div>
    
    <Footer />
  </div>
  );
};

export default YourComponent;
