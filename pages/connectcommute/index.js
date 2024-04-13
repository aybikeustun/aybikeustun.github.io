import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import givingly from '@/public/givingly.PNG'
import movie from '@/public/movie.PNG';
import Link from 'next/link';

const YourComponent = () => {
  return (
<div className='container mx-auto h-full w-full '>
    <Navbar />
    
    
    <Footer />
  </div>
  );
};

export default YourComponent;
