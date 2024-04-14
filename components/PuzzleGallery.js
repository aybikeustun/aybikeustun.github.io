import { useState } from 'react';
import Image from 'next/image';

const PuzzleGallery = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const images = [
    { src: '/Capture5.PNG', alt: 'Competitive Analyses' },
    { src: '/Capture6.PNG', alt: 'User Flow' },
    { src: '/Capture7.PNG', alt: 'Paper Wireframes' },
    { src: '/Capture8.PNG', alt: 'Paper Wireframes' },
  ];

  const zoomImage = (image) => {
    setZoomedImage(image);
  };

  const resetZoom = () => {
    setZoomedImage(null);
  };

  return (
    <div className="container flex justify-center mx-auto pt-10 pb-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-16">
        {images.map((image, index) => (
          <div key={index} onClick={() => zoomImage(image)} className="relative cursor-pointer">
            <Image src={image.src} alt={image.alt} width={200} height={200} className="rounded hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-75 transition-opacity duration-300 opacity-0 hover:opacity-100 rounded">
              <p className="text-white text-center text-sm">Click to Zoom</p>
            </div>
          </div>
        ))}
      </div>
      {zoomedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50" onClick={resetZoom}>
          <div className="max-w-3xl max-h-3xl">
            <Image src={zoomedImage.src} alt={zoomedImage.alt} width={1000} height={1000} className="rounded" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PuzzleGallery;
