// components/ScannerSection.js
import Image from 'next/image';

export default function Lader() {
  return (
    <div className="flex justify-between items-center bg-blue-900 p-10 h-[590px]">
      <div className="w-1/2 relative">
        {/* Replace with the path of your background image */}
        <Image
          src="/laderimage.jpeg" // replace with your background image path
          alt="Office Background"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full z-0"
        />
        <div className="z-10">
          <Image
            src="/laderimage.jpeg" // replace with the scanner image path
            alt="Epson Scanner"
            width={700}
            height={700}
            className="ml-8"
          />
        </div>
      </div>
      
      <div className="w-1/2 text-left p-8 bg-blue-900">
        <h2 className="text-3xl font-bold text-white mb-4">Document & Photo Scanners</h2>
        <p className="text-white mb-6">
          Scan all your photos and documents effortlessly at incredible resolutions while capturing every detail.
          Epson’s scanners feature high duty cycles, super-fast scan speeds and more.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}
