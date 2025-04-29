import React, { useState } from 'react';

const AboutMe = () => {
const [showMore, setShowMore] = useState(false);
const handleClick = () => {
  setShowMore(!showMore);
};

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
        
          {/* Image */}
          <div className="md:w-1/2 flex items-center justify-center p-8 bg-white">
            <img 
              src="src/image/profile.jpg" 
              alt="Professional headshot" 
              className="max-h-96 object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-2">About Me</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">NonladaP</h2>
            
            <p className="text-gray-700 mb-6">
                My love will always stay by you 
                I'll keep it safe so don't you worry a thing, I'll tell you I love you more 
                It's stuck with you forever so promise you won't let it go 
                I'll trust the universe will always bring me to you 
            </p>
            
            {showMore && (
              <p className="text-gray-700 mb-8">
                I'll imagine we fell in love 
                I'll nap under moonlight skies with you 
                I think I'll picture us, you with the waves 
                The oceans colors on your face 
                I'll leave my heart with your air 
                So let me fly with you 
                Will you be forever with me? 
              </p>
            )}

            {/* Read More */}
            <button 
              onClick={handleClick} 
              className="bg-green-800 hover:bg-green-900 text-white font-medium py-2 px-6 rounded-full w-36 transition duration-300"
            >
              {showMore ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
