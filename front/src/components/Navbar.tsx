'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOnWhiteSection, setIsOnWhiteSection] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.Hero');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const navbarOffset = 16; // top-4
        const navbarHeight = 80;
        const isOnVideo = rect.top <= (navbarHeight + navbarOffset) && rect.bottom >= navbarOffset;
        setIsOnWhiteSection(isOnVideo);
      }
    };

    // Set initial state
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
      className={`fixed top-0 sm:top-4 inset-x-0 sm:inset-x-4 lg:inset-x-8 mx-auto max-w-[92rem] z-50 sm:rounded-lg transition-all duration-300 ease-in-out ${
        isOnWhiteSection ? 'bg-white/[0.10] backdrop-blur-[5px] shadow-[0_2px_8px_0_rgba(0,0,0,0.12)] border-transparent' : 'bg-white/[0.45] backdrop-blur-[45px] backdrop-saturate-[180%] border-none'
      }`}
    >
      <nav className="mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-10 flex items-center justify-between h-16 sm:h-20">
        <Link href="/" className="group">
          <svg width="220" height="35" viewBox="0 0 372 110" className="group">
            <path 
              d="M30.3763 85.8259L23.3365 79.4513L40.1321 60.9743C41.144 59.8272 41.9181 58.4908 42.4097 57.0424C42.9014 55.5939 43.1006 54.0624 42.9961 52.5364C42.9293 51.0528 42.5682 49.5972 41.9338 48.2543C41.2994 46.9115 40.4043 45.7082 39.3007 44.7145L22.7452 30.2223L29.009 23.0532L45.5767 37.57C47.625 39.3975 49.2912 41.6125 50.4794 44.0871C51.6675 46.5617 52.3541 49.247 52.4994 51.9883C52.6747 54.7791 52.2946 57.5771 51.3812 60.2201C50.4678 62.8631 49.0392 65.2987 47.178 67.3858L30.3763 85.8259Z M78.8354 85.8258L62.0336 67.3488C60.1728 65.2612 58.744 62.8258 57.8296 60.183C56.9152 57.5402 56.5333 54.7424 56.706 51.9513C56.8549 49.2174 57.542 46.5397 58.7278 44.0719C59.9137 41.604 61.575 39.3945 63.6165 37.57L80.2027 23.0778L86.4664 30.2469L69.8802 44.7144C68.7821 45.7108 67.8928 46.9153 67.2637 48.258C66.6346 49.6007 66.2784 51.055 66.2156 52.5364C66.1102 54.0619 66.3085 55.5933 66.799 57.0416C67.2896 58.49 68.0626 59.8267 69.0733 60.9742L85.8751 79.4513L78.8354 85.8258Z"
              className={`scale-75 sm:scale-100 origin-left transition-all duration-300 ${
                isOnWhiteSection ? 'fill-white group-hover:fill-[#FEA67F]' : 'fill-black group-hover:fill-[#FEA67F]'
              }`}
            />
            <path 
              d="M124.267 39.56C134.527 39.56 142.897 45.23 142.897 60.44V86H135.517V60.89C135.517 51.35 130.927 46.31 123.007 46.31C114.457 46.31 109.147 52.7 109.147 63.05V86H101.767V23H109.147V47.66C111.847 43.34 116.527 39.56 124.267 39.56ZM172.926 86.54C159.156 86.54 150.156 77.09 150.156 63.05C150.156 49.1 158.976 39.56 171.936 39.56C184.896 39.56 193.356 47.75 193.716 61.34C193.716 62.33 193.626 63.41 193.536 64.49H157.896V65.12C158.166 73.85 163.656 79.97 172.386 79.97C178.866 79.97 183.906 76.55 185.436 70.61H192.906C191.106 79.79 183.546 86.54 172.926 86.54ZM158.346 58.37H185.796C185.076 50.45 179.676 46.04 172.026 46.04C165.276 46.04 159.066 50.9 158.346 58.37ZM222.748 86.54C209.338 86.54 200.518 77.45 200.518 63.14C200.518 49.1 209.608 39.56 222.928 39.56C234.178 39.56 241.288 45.86 243.178 55.94H235.438C234.088 49.82 229.588 46.13 222.838 46.13C214.018 46.13 208.078 53.15 208.078 63.14C208.078 73.13 214.018 79.97 222.838 79.97C229.408 79.97 233.908 76.19 235.348 70.34H243.178C241.378 80.24 233.908 86.54 222.748 86.54ZM254.689 74.03V46.85H246.409V40.1H254.689V27.23H262.069V40.1H273.949V46.85H262.069V73.94C262.069 77.81 263.419 79.25 267.379 79.25H274.669V86H266.659C257.839 86 254.689 82.13 254.689 74.03ZM301.071 86.54C287.661 86.54 278.301 77 278.301 63.05C278.301 49.1 287.661 39.56 301.071 39.56C314.481 39.56 323.841 49.1 323.841 63.05C323.841 77 314.481 86.54 301.071 86.54ZM301.071 79.97C310.161 79.97 316.281 72.86 316.281 63.05C316.281 53.24 310.161 46.13 301.071 46.13C291.981 46.13 285.861 53.24 285.861 63.05C285.861 72.86 291.981 79.97 301.071 79.97ZM330.238 70.88H337.798C338.068 76.28 342.838 80.24 350.488 80.24C356.968 80.24 361.558 77.45 361.558 73.22C361.558 67.46 356.518 67.01 349.678 66.2C339.418 64.94 331.228 62.87 331.228 53.33C331.228 44.96 338.878 39.47 349.228 39.56C359.668 39.65 367.228 44.51 367.948 54.05H360.388C359.848 49.37 355.528 45.86 349.228 45.86C342.838 45.86 338.518 48.56 338.518 52.79C338.518 57.83 343.378 58.46 350.038 59.27C360.478 60.53 368.848 62.51 368.848 72.68C368.848 81.23 360.658 86.54 350.488 86.54C338.608 86.54 330.418 80.96 330.238 70.88Z"
              className={`transition-all duration-300 ${
                isOnWhiteSection ? 'fill-white' : 'fill-black'
              }`}
            />
          </svg>
        </Link>

        <div className="hidden md:flex items-center justify-between flex-1 ml-12">
          <ul className="flex items-center space-x-12">
            <li>
            <Link href="#strategie" className={`text-[15px] font-medium transition-all duration-300 ${
                isOnWhiteSection ? 'text-white hover:text-[#00D481]' : 'text-black hover:text-[#00D481]'
              }`}>
                Stratégie
              </Link>
            </li>
            <li>
            <Link href="#nos-solutions" className={`text-[15px] font-medium transition-all duration-300 ${
                isOnWhiteSection ? 'text-white hover:text-[#00D481]' : 'text-black hover:text-[#00D481]'
              }`}>
                Nos Solutions
              </Link>
            </li>
            <li>
            <Link href="#le-club" className={`text-[15px] font-medium transition-all duration-300 ${
                isOnWhiteSection ? 'text-white hover:text-[#00D481]' : 'text-black hover:text-[#00D481]'
              }`}>
                Le Club
              </Link>
            </li>
            <li>
            <Link href="#notre-histoire" className={`text-[15px] font-medium transition-all duration-300 ${
                isOnWhiteSection ? 'text-white hover:text-[#00D481]' : 'text-black hover:text-[#00D481]'
              }`}>
                Notre Histoire
              </Link>
            </li>
            <li>
            <Link href="#ressources" className={`text-[15px] font-medium transition-all duration-300 ${
                isOnWhiteSection ? 'text-white hover:text-[#00D481]' : 'text-black hover:text-[#00D481]'
              }`}>
                Ressources
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <Link href="#expert" className={`inline-flex items-center justify-center px-6 py-2 text-[15px] font-medium tracking-[-0.01em] shadow-sm rounded-full transition-all ${
              isOnWhiteSection 
                ? 'text-white border border-white hover:bg-white hover:text-black' 
                : 'text-black border border-black hover:bg-black hover:text-white'
            }`}>
              Parler à un expert
            </Link>
            <Link href="#membre" className={`inline-flex items-center justify-center px-6 py-2.5 text-[15px] font-medium tracking-[-0.01em] shadow-sm rounded-full transition-all ${
              isOnWhiteSection 
                ? 'text-white bg-[#1E2124] border border-[#1E2124] hover:bg-white hover:text-[#1E2124]' 
                : 'text-white bg-[#1E2124] border border-[#1E2124] hover:bg-white hover:text-[#1E2124]'
            }`}>
              Devenir Membre
            </Link>
          </div>
        </div>

        <button 
          className="md:hidden p-2 -mr-2" 
          aria-label="Menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className={`w-6 h-6 transition-all duration-300 ${isOnWhiteSection ? 'text-white' : 'text-black'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>

    {/* Mobile Menu */}
    <div 
      className={`md:hidden fixed inset-0 bg-[#0a0a0a] z-[100] transition-transform duration-300 ${
      isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
    }`}
      onClick={() => setIsMobileMenuOpen(false)}
    >
        <div 
          className="flex flex-col items-center justify-center min-h-screen space-y-8 px-6 bg-[#0a0a0a]"
          onClick={(e) => e.stopPropagation()}
        >
          <Link 
            href="#strategie" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-[17px] font-medium text-white hover:text-[#00D481] transition-colors"
          >
            Stratégie
          </Link>
          <Link 
            href="#nos-solutions" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-[17px] font-medium text-white hover:text-[#00D481] transition-colors"
          >
            Nos Solutions
          </Link>
          <Link 
            href="#le-club" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-[17px] font-medium text-white hover:text-[#00D481] transition-colors"
          >
            Le Club
          </Link>
          <Link 
            href="#notre-histoire" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-[17px] font-medium text-white hover:text-[#00D481] transition-colors"
          >
            Notre Histoire
          </Link>
          <Link 
            href="#ressources" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-[17px] font-medium text-white hover:text-[#00D481] transition-colors"
          >
            Ressources
          </Link>
          <div className="flex flex-col gap-4 w-full max-w-[280px] mt-4">
            <Link 
              href="#expert" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full px-6 py-2 text-[15px] font-medium border border-white text-white shadow-sm rounded-full hover:bg-white hover:text-black transition-all text-center"
            >
              Parler à un expert
            </Link>
            <Link 
              href="#membre" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full px-6 py-2.5 text-[15px] font-medium bg-[#1E2124] text-white border border-[#1E2124] shadow-sm rounded-full hover:bg-white hover:text-[#1E2124] transition-all text-center"
            >
              Devenir Membre
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-5 right-4 p-2 text-white"
              aria-label="Close menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
