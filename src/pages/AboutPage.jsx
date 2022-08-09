import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen ">
      <h1 className="uppercase mt-24 text-blue-700 text-3xl font-anak font-bold text-center">
        About us
      </h1>
      <div className="w-11/12 md:w-5/12 mt-8 md:mt-12 h-12  text-justify font-anak text-lg">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iusto
          delectus laboriosam aspernatur quas earum perspiciatis libero dolore
          unde, suscipit reiciendis dignissimos corrupti nisi repellendus a odio
          iste aut illo? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Amet necessitatibus numquam temporibus possimus eveniet officia
          facere corporis molestias saepe dolor. Expedita animi possimus
          consectetur libero illo natus reiciendis ratione aperiam. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Fuga quos velit cum
          libero quo itaque optio ipsa quidem voluptatum totam cupiditate
          consequuntur, sunt molestiae ad corporis delectus magnam,
          necessitatibus illo?
        </p>
        <div className="flex justify-center">
          <Link to={'/'}>
        <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      className="w-6 h-6 mx-2 my-2 hover:text-blue-700 cursor-pointer md:w-8 md:h-8"
    >
<path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"/>
</svg>
</Link>
<Link to={'/'}>
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      className="w-6 h-6 mx-2 my-2 hover:text-blue-700 cursor-pointer md:w-8 md:h-8"
    >
      <path d="M21.593 7.203a2.506 2.506 0 00-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 00-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 001.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z" />
    </svg>
    </Link>
    
<Link to={'/'}>
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      className="w-6 h-6 mx-2 my-2 hover:text-blue-700 cursor-pointer md:w-8 md:h-8"
    >
      <path d="M20.947 8.305a6.53 6.53 0 00-.419-2.216 4.61 4.61 0 00-2.633-2.633 6.606 6.606 0 00-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 00-2.185.42 4.607 4.607 0 00-2.633 2.633 6.554 6.554 0 00-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 002.634 2.632 6.584 6.584 0 002.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 002.186-.419 4.615 4.615 0 002.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 010 9.246zm4.807-8.339a1.077 1.077 0 01-1.078-1.078 1.077 1.077 0 112.155 0c0 .596-.482 1.078-1.077 1.078z" />
      <path d="M14.997 11.979 A3.003 3.003 0 0 1 11.994 14.982 A3.003 3.003 0 0 1 8.991 11.979 A3.003 3.003 0 0 1 14.997 11.979 z" />
    </svg>
    </Link>
    <Link to={'/'}>
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      className="w-6 h-6 mx-2 my-2 hover:text-blue-700 cursor-pointer md:w-8 md:h-8"
    >
      <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
    </svg>
    </Link>
    
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
