import backgroundImage from "../../public/home/eugenio-mazzone-6ywyo2qtaZ8-unsplash (1).png"
import Image from "next/image";
import Link from "next/link";

import {BookOpenIcon} from '@heroicons/react/24/solid'//<< to import icon: npm i @heroicons/react

export default function Home() {
  return (
    <div className="flex flex-col relative justify-center items-center h-screen" >
     <Image
      className="blur-xs"
      src={backgroundImage}
      alt="backgroundImage"
      fill 
      size="100vw" 
      style={{objectFit: "cover"}} 
      />
      <div className="flex flex-col justify-center items-center bg-purple-100 rounded-md p-2 lg:w-2/5 h-1/4  z-10">
        <div className="flex pb-1 mb-3 text-inherit text-black-800">
        <p className="text-cyan-800">Book-EZ</p>
          <BookOpenIcon className="bg-stone-500 text-white rounded-md p-2" />
          
        </div>
        <div>
          <Link
          className="bg-stone-500 text-white rounded-md p-2"
          href=""
          >Take me the store</Link>
        </div>
      </div>
    </div>
  );
}
