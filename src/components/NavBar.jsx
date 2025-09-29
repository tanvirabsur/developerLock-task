import React, { useState } from 'react';
import { Search, Globe, Menu, User } from 'lucide-react';

const AirbnbNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <a href="#" className="flex items-center">
                <svg width="30" height="32" viewBox="0 0 30 32" className="text-red-500 mr-2">
                  <path d="M29.3864 22.7101C29.2429 22.3073 29.0752 21.9176 28.9157 21.5565C28.6701 21.0011 28.4129 20.4446 28.1641 19.9067L28.1444 19.864C25.9255 15.0589 23.5439 10.1881 21.0659 5.38701L21.0451 5.35062C20.7961 4.85422 20.5358 4.34168 20.2927 3.86496C19.9175 3.15736 19.5023 2.47695 19.0479 1.82846C18.5937 1.18002 18.0505 0.614714 17.4165 0.146508C16.7825 -0.321699 16.0672 -0.650307 15.3154 -0.822868C14.5636 -0.995429 13.7736 -1.00548 13.0007 -0.849006C12.2278 -0.692532 11.4872 -0.372819 10.8118 0.101903C10.1364 0.576624 9.5429 1.18846 9.06265 1.90424C8.58239 2.62002 8.2269 3.42606 8.01567 4.28325C7.80444 5.14043 7.73658 6.02781 7.81477 6.90712C7.89296 7.78643 8.10634 8.645 8.44644 9.44676C8.78653 10.2485 9.24576 10.9804 9.80235 11.6148L9.86013 11.6803L9.92646 11.7418L10.0006 11.8033L10.0748 11.8647C10.1489 11.9262 10.2323 11.9877 10.3244 12.0492L10.5 12.1803L10.6756 12.3114L10.8512 12.4426L11.0268 12.5738C11.2024 12.705 11.378 12.8361 11.5536 12.9673L11.7292 13.0985L11.9048 13.2297L12.0804 13.3608L12.256 13.492C12.4316 13.6232 12.6072 13.7544 12.7828 13.8856L12.9584 14.0168L13.134 14.148L13.3096 14.2792L13.4852 14.4104C13.6608 14.5416 13.8364 14.6728 14.012 14.804L14.1876 14.9352L14.3632 15.0664L14.5388 15.1976L14.7144 15.3288C14.89 15.46 15.0656 15.5912 15.2412 15.7224L15.4168 15.8536L15.5924 15.9848L15.768 16.116L15.9436 16.2472C16.1192 16.3784 16.2948 16.5096 16.4704 16.6408L16.646 16.772L16.8216 16.9032L16.9972 17.0344L17.1728 17.1656C17.3484 17.2968 17.524 17.428 17.6996 17.5592L17.8752 17.6904L18.0508 17.8216L18.2264 17.9528L18.402 18.084C18.5776 18.2152 18.7532 18.3464 18.9288 18.4776L19.1044 18.6088L19.28 18.74L19.4556 18.8712L19.6312 19.0024C19.8068 19.1336 19.9824 19.2648 20.158 19.396L20.3336 19.5272L20.5092 19.6584L20.6848 19.7896L20.8604 19.9208C21.036 20.052 21.2116 20.1832 21.3872 20.3144L21.5628 20.4456L21.7384 20.5768L21.914 20.708L22.0896 20.8392C22.2652 20.9704 22.4408 21.1016 22.6164 21.2328L22.792 21.364L22.9676 21.4952L23.1432 21.6264L23.3188 21.7576C23.4944 21.8888 23.67 22.02 23.8456 22.1512L24.0212 22.2824L24.1968 22.4136L24.3724 22.5448L24.548 22.676C24.7236 22.8072 24.8992 22.9384 25.0748 23.0696L25.2504 23.2008L25.426 23.332L25.6016 23.4632L25.7772 23.5944C25.9528 23.7256 26.1284 23.8568 26.304 23.988L26.4796 24.1192L26.6552 24.2504L26.8308 24.3816L27.0064 24.5128C27.182 24.644 27.3576 24.7752 27.5332 24.9064L27.7088 25.0376L27.8844 25.169L28.06 25.3002L28.2356 25.4314C28.4112 25.5626 28.5868 25.6938 28.7624 25.825L28.938 25.9562L29.1136 26.0874L29.2892 26.2186L29.4648 26.3498C29.6404 26.481 29.816 26.6122 29.9916 26.7434L30.1672 26.8746L30.3428 27.0058L30.5184 27.137L30.694 27.2682C30.8696 27.3994 31.0452 27.5306 31.2208 27.6618L31.3964 27.793L31.572 27.9242L31.7476 28.0554L31.9232 28.1866C32.0988 28.3178 32.2744 28.449 32.45 28.5802L32.6256 28.7114L32.8012 28.8426L32.9768 28.9738L33.1524 29.105C33.328 29.2362 33.5036 29.3674 33.6792 29.4986L33.8548 29.6298L34.0304 29.761L34.206 29.8922L34.3816 30.0234C34.5572 30.1546 34.7328 30.2858 34.9084 30.417L35.084 30.5482L35.2596 30.6794L35.4352 30.8106L35.6108 30.9418C35.7864 31.073 35.962 31.2042 36.1376 31.3354L36.3132 31.4666L36.4888 31.5978L36.6644 31.729L36.84 31.8602C37.0156 31.9914 37.1912 32.1226 37.3668 32.2538" fill="currentColor"/>
                </svg>
                <span className="text-xl font-semibold text-red-500">airbnb</span>
              </a>
            </div>

            {/* Center Navigation */}
            <nav className="hidden lg:flex flex-col items-center flex-1 max-w-2xl mx-8">
              {/* Top Menu */}
              <div className="flex items-center space-x-8 mb-4">
                <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
                  Places to stay
                </a>
                <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
                  Experiences
                </a>
                <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
                  Online Experiences
                </a>
              </div>

              {/* Search Bar */}
              <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow w-full max-w-3xl">
                <div className="flex-1 px-6 py-3 border-r border-gray-300">
                  <div className="text-xs font-semibold text-black mb-1">Location</div>
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="text-sm text-gray-600 placeholder-gray-400 w-full border-0 focus:outline-none bg-transparent"
                  />
                </div>
                
                <div className="flex-1 px-6 py-3 border-r border-gray-300">
                  <div className="text-xs font-semibold text-black mb-1">Check in</div>
                  <input
                    type="text"
                    placeholder="Add dates"
                    className="text-sm text-gray-600 placeholder-gray-400 w-full border-0 focus:outline-none bg-transparent"
                  />
                </div>
                
                <div className="flex-1 px-6 py-3 border-r border-gray-300">
                  <div className="text-xs font-semibold text-black mb-1">Check out</div>
                  <input
                    type="text"
                    placeholder="Add dates"
                    className="text-sm text-gray-600 placeholder-gray-400 w-full border-0 focus:outline-none bg-transparent"
                  />
                </div>
                
                <div className="flex-1 px-6 py-3">
                  <div className="text-xs font-semibold text-black mb-1">Guests</div>
                  <input
                    type="text"
                    placeholder="Add guests"
                    className="text-sm text-gray-600 placeholder-gray-400 w-full border-0 focus:outline-none bg-transparent"
                  />
                </div>
                
                <button className="bg-red-500 hover:bg-red-600 text-white p-4 m-2 rounded-full transition-colors">
                  <Search size={16} />
                </button>
              </div>
            </nav>

            {/* Mobile Search */}
            <div className="lg:hidden flex-1 max-w-md mx-4">
              <button className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm px-4 py-2 w-full">
                <Search size={18} className="text-gray-400 mr-3 flex-shrink-0" />
                <div className="text-left">
                  <div className="text-sm font-medium text-gray-900">Where to?</div>
                  <div className="text-xs text-gray-500">Anywhere • Any week • Add guests</div>
                </div>
              </button>
            </div>

            {/* Right Side Menu */}
            <div className="flex items-center space-x-2">
              <button className="hidden md:block text-sm font-medium text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-full transition-colors">
                Become a host
              </button>
              
              <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
                <Globe size={18} className="text-gray-600" />
              </button>
              
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center space-x-2 border border-gray-300 rounded-full py-2 px-3 hover:shadow-md transition-shadow"
                >
                  <Menu size={14} className="text-gray-600" />
                  <div className="bg-gray-500 rounded-full p-1.5">
                    <User size={14} className="text-white" />
                  </div>
                </button>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
                    <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 font-medium">
                      Sign up
                    </a>
                    <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                      Log in
                    </a>
                    <hr className="my-2 border-gray-200" />
                    <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                      Gift cards
                    </a>
                    <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                      Airbnb your home
                    </a>
                    <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                      Host an experience
                    </a>
                    <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                      Help Center
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default AirbnbNavbar;