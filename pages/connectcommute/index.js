import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PuzzleGallery from '@/components/PuzzleGallery';
import Image from 'next/image';
import Mock1 from '@/public/Mock1.png';
import Mock2 from '@/public/Mock2.png';
import Mock3 from '@/public/Mock3.png';
import Capture from '@/public/Capture.PNG';
import Capture2 from '@/public/Capture2.PNG';
import Capture3 from '@/public/Capture3.PNG';
import Capture4 from '@/public/Capture4.PNG';
import HOME from '@/public/HOME.png';
import FINGBUSROUTES from '@/public/FINGBUSROUTES.png';
import JOINCARPOOLING from '@/public/JOINCARPOOLING.png';
import CREATECARPOOLING from '@/public/CREATECARPOOLING.png';
import Link from 'next/link';

const YourComponent = () => {
  return (
    <div className='container mx-auto h-full w-full '>
      <Navbar />

      <section className="image-wrapper flex justify-center items-center w-full h-full flex-col sm:flex-row">
        <div className="mb-4 sm:mb-0">
          <Image
            src={Mock1}
            width={200}
            height={200}
            className='rounded-lg'
          />
        </div>
        <div className="mb-4 sm:mb-0">
          <Image
            src={Mock2}
            width={200}
            height={200}
            className='rounded-lg'
          />
        </div>
        <div className="mb-4 sm:mb-0">
          <Image
            src={Mock3}
            width={200}
            height={200}
            className='rounded-lg'
          />
        </div>
      </section>

      <div className="container mx-auto project-of-the-week grid place-content-center px-5 sm:px-10 md:px-20 2xl:px-16 ">
        <div className='border-b border-blackColor pb-10'>
          <div className='font-bold text-3xl px-5 sm:px-10 md:px-20 mb-10'>
            ConnectCommute
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-5 sm:px-10 md:px-20 md:gap-20 ">
            <div className="img-container flex flex-col items-center bg-grayishColor rounded-lg border-0">
              <div className="">
                <h3 className='text-l mb-5 font-thin text-gray-500 '>
                  OVERVIEW
                </h3>
                <h1 className='text-l mb-10'>
                  An app that allows users to find bus and stop information. Also lets them create or search carpooling groups.
                </h1>
                <div className='pr-80'>
                  <h2 className="text-l text-white bg-pink-500 hover:bg-pink-600 text-center font-bold py-2 px-4 rounded-full cursor-pointer">
                    <Link href="https://www.figma.com/proto/pVrKufeSvcjdjOJ2ZICZlj/ConnectCommute-Hi-Fi-Prototype?type=design&node-id=32-2&t=vqfAlINfu7mcAnWm-1&scaling=scale-down&page-id=2%3A34&starting-point-node-id=32%3A2&mode=design">
                      See Prototype
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-align">
              <div className="mb-2 sm:mr-20">
                <h3 className='text-l mb-5 font-thin text-gray-500 '>
                  ROLE
                </h3>
                <h2 className='text-l font-bold'>
                  UX DESIGNER
                </h2>
                <br></br>
                <h1 className='text-l'>
                  User research, user analyses, wireframing, prototyping, Hi-Fi mockups
                </h1>
                <br></br>
                <h1 className='text-l mb-5'>
                  Duration: 4 months
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-blackColor grid grid-cols-1 sm:grid-cols-2 gap-10 px-5 sm:px-10 md:px-20 md:gap-20 py-5 ">
          <div className="img-container flex flex-col items-center bg-grayishColor rounded-lg">
            <div className="">
              <h3 className='text-l mb-5 font-thin text-gray-500 '>
                PROBLEM
              </h3>
              <h1 className='text-l mb-10'>
                People are running from homes to their offices or the opposite and they need guidance for transportation.
              </h1>
            </div>
          </div>
          <div className="flex flex-col text-align">
            <div className="mb-2 sm:mr-20">
              <h3 className='text-l mb-5 font-thin text-gray-500 '>
                GOAL
              </h3>
              <h1 className='text-l'>
                To help people during searching for trustworthy transportation info and vehicles.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto user-research grid place-content-center mt-5 px-5 sm:px-10 md:px-20 2xl:px-16 ">
        <div className='font-bold text-2xl px-5 sm:px-10 md:px-20 mb-10'>
          User Research Summary and Pain Points
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-5 sm:px-10 md:px-20 md:gap-20 ">
          <div className="img-container flex flex-col items-center rounded-lg border-0">
            <div className="">
              <h1 className='text-l'>
                The aim of conducting user research is to help understand patterns followed by users and identify the problems they faced in the process. For the user research, I conducted a combination of qualitative and quantitative methods including surveys, interviews, and usability testings.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex flex-wrap justify-center mt-5 px-5 sm:px-10 md:px-20 2xl:px-16">
        <div className="w-full sm:w-64 h-64 bg-yellow-200 rounded-3xl m-8 justify-center text-center items-center">
          <div className='text-l font-bold pt-5'>
            1
          </div>
          <div className='text-l font-bold'>
            Inefficient Route Planning
          </div>
          Users struggle to find optimal bus routes or obtain accurate and up-to-date information about bus schedules and stops.
        </div>
        <div className="w-full sm:w-64 h-64 bg-yellow-200 rounded-3xl m-8 justify-center text-center items-center">
          <div className='text-l font-bold pt-5'>
            2
          </div>
          <div className='text-l font-bold'>
            Lack of Carpooling Opportunities
          </div>
          Commuters often face challenges in finding suitable carpooling options to share rides and reduce travel costs.
        </div>
        <div className="w-full sm:w-64 h-64 bg-yellow-200 rounded-3xl m-8 justify-center text-center items-center">
          <div className='text-l font-bold pt-5'>
            3
          </div>
          <div className='text-l font-bold'>
            Limited Stop Information
          </div>
          Users may encounter difficulty in accessing comprehensive and detailed information about bus stops.
        </div>
        <div className="w-full sm:w-64 h-64 bg-yellow-200 rounded-3xl m-8 justify-center text-center items-center">
          <div className='text-l font-bold pt-5'>
            4
          </div>
          <div className='text-l font-bold'>
            Complex Carpooling Arrangements
          </div>
          For users interested in carpooling, the process of finding compatible partners and coordinating schedules can be daunting and time-consuming.
        </div>
      </div>

     <div className="container persona mx-auto persona grid mt-5 2xl:px-16 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20 text-center">
          <div>
            <div className=" ml-5 sm:ml-20 mr-5 sm:mr-20">
              <h1 className='font-bold text-2xl'>
                Persona: Non-Stop Worker
              </h1>
              <h2 className='font-thin text-xl'>
                Problem statement:
              </h2>
              <h2 className='text-l mb-5'>
                Nonstop worker is a busy marketing manager with irregular work hours who needs a reliable transportation solution to commute between her suburban home and the city center.
              </h2>
              <div>
                <Image
                  src={Capture}
                  width={800}
                  height={800}
                  className='rounded-lg'
                />
              </div>
            </div>
          </div>
          <div>
            <div className=" ml-5 sm:ml-20 mr-5 sm:mr-20 ">
              <h1 className='font-bold text-2xl'>
                Persona: Activist Student
              </h1>
              <h2 className='font-thin text-xl'>
                Problem statement:
              </h2>
              <h2 className='text-l mb-5'>
                Activist student is an environmentally conscious student who needs an eco-friendly transportation solution to reduce his carbon footprint and align with his values of sustainability.
              </h2>
              <div>
                <Image
                  src={Capture2}
                  width={800}
                  height={800}
                  className='rounded-lg'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container userjourneymap mx-auto persona grid mt-5 2xl:px-16 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20 text-center">
          <div>
            <div className=" ml-5 sm:ml-20 mr-5 sm:mr-20">
              <h2 className='font-thin text-xl'>
                User journey map
              </h2>
              <div>
                <Image
                  src={Capture3}
                  width={800}
                  height={800}
                  className='rounded-lg'
                />
              </div>
            </div>
          </div>
          <div>
            <div className=" ml-5 sm:ml-20 mr-5 sm:mr-20 ">
              <h2 className='font-thin text-xl'>
              User journey map
              </h2>
              <div>
                <Image
                  src={Capture4}
                  width={800}
                  height={800}
                  className='rounded-lg'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className='border-b border-blackColor'>
      <PuzzleGallery />
      </div>

      <div className="container mx-auto user-research grid mt-5 px-5 sm:px-10 md:px-20 2xl:px-16 ">
        <div className='font-bold text-2xl px-5 sm:px-10 md:px-20'>
          Digital Wireframes
        </div>
        
      </div>

      <div className="mx-auto digitalwireframes flex flex-wrap justify-center px-5 sm:px-10 md:px-20 2xl:px-16">
        <div className="w-full sm:w-64 h-full m-8 justify-center text-center items-center">
          <div className='font-bold pt-5'>
          Let’s start with homepage!
          </div>
          <br></br>
          <div className=''>
          -There are 3 main uses on the home page.
          </div>
          <div className='mb-6'>
          -It is aimed to make the app easier to use.
          </div>
          <br></br>
          <div>
                <Image
                  src={HOME}
                  width={500}
                  height={500}
                />
              </div> 
              
                           
        </div>

        <div className="w-full sm:w-64 h-full m-8 justify-center text-center items-center">
          <div className='font-bold pt-5'>
          Find bus page:
          </div>
          <br></br>
          <div className=''>
          -A seperate section is created for the user to reach the stops nearby.
          </div>
          <div>
          -The aim is to personalize the app by adding favorite stops and favorite buses.
          </div>
          <br></br>
          <div>
                <Image
                  src={FINGBUSROUTES}
                  width={500}
                  height={500}
                />
              </div>
        </div>

        <div className="w-full sm:w-64 h-full m-8 justify-center text-center items-center">
          <div className='font-bold pt-5'>
          Join carpooling page:
          </div>
          <br></br>
          <div className='mb-6'>
          -The user can use the IP shared with them or can access the tools suitable for them by entering the destination directly.
          </div>
          <br></br>
          <div>
                <Image
                  src={JOINCARPOOLING}
                  width={500}
                  height={500}
                />
              </div>
        </div>

        <div className="w-full sm:w-64 h-full m-8 justify-center text-center items-center">
          <div className='font-bold pt-5'>
          Create carpooling page:
          </div>
          <br></br>
          <div className='mb-12'>
          -Users can see their location and nearby vehicles on the map and the vehicles that they can use.
          </div>
          <br></br>
          <div>
                <Image
                  src={CREATECARPOOLING}
                  width={500}
                  height={500}
                />
              </div>
        </div>       
      </div>

      <div className='container mx-auto user-research sm:w-64 user-research mt-5 px-5 pb-5'>
                  <h2 className="text-l text-white bg-pink-500 hover:bg-pink-600 text-center font-bold py-2 px-4 rounded-full cursor-pointer">
                    <Link href="https://www.figma.com/proto/RVZZq9eLQk75nLUCgjTOOc/ConnectCommute_Low-Fi_Prototype?type=design&node-id=32-2&t=YQb1s4v26MrnR8yL-1&scaling=scale-down&page-id=2%3A34&starting-point-node-id=32%3A2&mode=design">
                      See Prototype
                    </Link>
                  </h2>
                </div>

                <div className="container mx-auto project-of-the-week grid place-content-center px-5 sm:px-10 md:px-20 2xl:px-16 ">
        <div className='border-b border-blackColor pb-10'>
          <div className='font-bold text-2xl px-5 sm:px-10 md:px-20 mb-10'>
            Usability Study Findings
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-5 sm:px-10 md:px-20 md:gap-20 ">
            <div className="img-container flex flex-col items-center bg-grayishColor rounded-lg border-0">
              <div className="">
                <h3 className='text-l mb-5 font-thin text-gray-500 '>
                  ROUND 1 FINDINGS
                </h3>
                <h1 className='text-l'>
                -Create and join carpool pages need pet friendly and baggage options.
                </h1>
                <h1 className='text-l'>
                -Add confirmation page.
                </h1>
                <h1 className='text-l mb-10'>
                -Carpool page needs more info for creation. For example time and departure point.
                </h1>
              </div>
            </div>
            <div className="flex flex-col text-align">
              <div className="mb-2 sm:mr-20">
                <h3 className='text-l mb-5 font-thin text-gray-500 '>
                ROUND 2 FINDINGS
                </h3>
                <h1 className='text-l'>
                -Needs price for buses and carpools.
                </h1>
                <h1 className='text-l'>
                -Needs to see how to reach driver.
                </h1>
                <h1 className='text-l'>
                -Join carpool page needs a search button rather than join button. Confuses users.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto user-research grid mt-5 px-5 sm:px-10 md:px-20 2xl:px-16 ">
        <div className='font-bold text-2xl px-5 sm:px-10 md:px-20'>
          Mockups
        </div>
        
      </div>

      <div className="mx-auto digitalwireframes flex flex-wrap justify-center px-5 sm:px-10 md:px-20 2xl:px-16">
        <div className="w-full sm:w-64 h-full m-8 justify-center text-center items-center">
          <div className='font-bold pt-5'>
          Let’s start with homepage!
          </div>
          <br></br>
          <div className=''>
          -There are 3 main uses on the home page.
          </div>
          <div className='mb-6'>
          -It is aimed to make the app easier to use.
          </div>
          <br></br>
          <div>
                <Image
                  src={HOME}
                  width={500}
                  height={500}
                />
              </div> 
              
                           
        </div>

        <div className="w-full sm:w-64 h-full m-8 justify-center text-center items-center">
          <div className='font-bold pt-5'>
          Find bus page:
          </div>
          <br></br>
          <div className=''>
          -A seperate section is created for the user to reach the stops nearby.
          </div>
          <div>
          -The aim is to personalize the app by adding favorite stops and favorite buses.
          </div>
          <br></br>
          <div>
                <Image
                  src={FINGBUSROUTES}
                  width={500}
                  height={500}
                />
              </div>
        </div>

        <div className="w-full sm:w-64 h-full m-8 justify-center text-center items-center">
          <div className='font-bold pt-5'>
          Join carpooling page:
          </div>
          <br></br>
          <div className='mb-6'>
          -The user can use the IP shared with them or can access the tools suitable for them by entering the destination directly.
          </div>
          <br></br>
          <div>
                <Image
                  src={JOINCARPOOLING}
                  width={500}
                  height={500}
                />
              </div>
        </div>

        <div className="w-full sm:w-64 h-full m-8 justify-center text-center items-center">
          <div className='font-bold pt-5'>
          Create carpooling page:
          </div>
          <br></br>
          <div className='mb-12'>
          -Users can see their location and nearby vehicles on the map and the vehicles that they can use.
          </div>
          <br></br>
          <div>
                <Image
                  src={CREATECARPOOLING}
                  width={500}
                  height={500}
                />
              </div>
        </div>       
      </div>

      <div className='container mx-auto user-research sm:w-64 user-research mt-5 px-5 pb-5'>
                  <h2 className="text-l text-white bg-pink-500 hover:bg-pink-600 text-center font-bold py-2 px-4 rounded-full cursor-pointer">
                    <Link href="https://www.figma.com/proto/pVrKufeSvcjdjOJ2ZICZlj/ConnectCommute-Hi-Fi-Prototype?type=design&node-id=32-2&t=vqfAlINfu7mcAnWm-1&scaling=scale-down&page-id=2%3A34&starting-point-node-id=32%3A2&mode=design">
                      See Prototype
                    </Link>
                  </h2>
                </div>

      <Footer />
    </div>
  );
};

export default YourComponent;
 