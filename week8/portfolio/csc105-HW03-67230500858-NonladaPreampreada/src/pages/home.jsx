import React from 'react';

const HomePage = () => {
  return (
    <div className=" text-white pt-10 min-h-screen">
      {/* detail */}
      <main className="max-w-5xl mx-auto bg-white text-black rounded-lg overflow-hidden shadow-xl">
        <div className="flex flex-col md:flex-row-2 items-center px-8 py-6 md:py-10">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <p className="text-gray-600 mb-2">Hello, It's me</p>
                <h2 className="text-5xl font-bold mb-2">NonladaP</h2>
                <p className="text-xl mb-4">I'm a student</p>
                <p className="text-gray-700 mb-6">
                  NonladaP is a student from KMUTT's cssit program, working on learning and growing in the field of computer science.
                </p>

                {/* Icons */}
                <div className="flex gap-4 mb-8">
                  <a href="https://www.facebook.com/fasai.nonlada.9" className="rounded-full p-3 hover:opacity-80 transition-opacity">
                    {/* Facebook Icon */}
                    <img src="src/icons/fb.png" alt="Facebook" className="w-10 h-10" />
                  </a>
                  <a href="https://www.instagram.com/nonlada_nonlada/" className="text-white rounded-full p-3 hover:opacity-80 transition-opacity">
                    {/* Instagram Icon */}
                    <img src="src/icons/ig.png" alt="Instagram" className="w-10 h-10" />
                  </a>
                  <a href="https://x.com/fafafafahhh_" className="text-white rounded-full p-3 hover:opacity-80 transition-opacity">
                    {/* x Icon */}
                    <img src="src/icons/x.avif" alt="X" className="w-10 h-10 rounded-xl" />
                  </a>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <img src="src/image/profile.jpg" alt="NonladaP" className="w-full h-auto" />
            </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
