// pages/index.js
import Footer from '@/components/Footer';
import Navbar from '../components/Navbar';
import { FaHeart } from 'react-icons/fa';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto project-of-the-week grid place-content-center h-full w-full px-4 2xl:px-16 pt-20">
      <div className='border-b border-blackColor pb-20'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20 ">

          <div className="flex flex-col justify-between">
            <div className="mb-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
              Welcome!
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
              I'm Aybike
              </h1>
              <h2 className='text-3xl sm:text-4xl md:text-3xl font-bold mb-10'>
              A frontend developer and a designer. I can help you with create your own products.
              </h2><br />
              <a
                  href="/about"
                  className="text-pink-500 background-transparent font-bold uppercase py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex items-center" // Add flex class to align text and icon horizontally
                >
                  <FaHeart className="mr-1" /> You can learn about me more here.
              </a>

              <a
                  href="/projects"
                  className="text-pink-500 background-transparent font-bold uppercase py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex items-center" // Add flex class to align text and icon horizontally
                >
                  <FaHeart className="mr-1" /> And can reach out to my projects.
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
}

export default Home;
