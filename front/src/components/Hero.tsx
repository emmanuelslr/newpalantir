'use client';
import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <div className="Hero relative min-h-screen w-full flex justify-center overflow-hidden">
      {/* Video Background with gradient overlay */}
      <div className="absolute inset-0 z-0 w-full flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
          style={{ filter: 'brightness(0.55) contrast(1.1)' }}
        >
          <source src="/Aguesseau Vidéo officielle.mp4" type="video/mp4" />
        </video>
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-6xl mx-auto flex flex-col items-center min-h-[calc(100vh-96px)] mt-20 sm:mt-24"
        >
          <div className="flex flex-col items-center justify-center flex-1">
            <h1 className="text-[36px] sm:text-4xl md:text-6xl lg:text-[82px] font-normal tracking-tighter leading-[1.1] sm:leading-none text-white text-center mx-auto px-4 sm:px-6">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="block mb-2"
              >
                Investissez dans l’immobilier,<br />
                aux côtés de ceux qui l’opèrent.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-base sm:text-lg md:text-2xl text-white/90 text-center mt-6 font-light tracking-wide mx-auto px-4 sm:px-6 whitespace-normal"
            >
              Nous investissons dans chaque opération que nous structurons.<br/>
              Accédez-y désormais, à nos côtés.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-10 mx-auto items-center justify-center"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-[280px] sm:w-auto px-8 py-3 bg-white text-black text-base md:text-lg font-normal rounded-full border border-[#00D481] shadow-sm transition hover:bg-[#f3f4f6] flex items-center justify-center gap-2"
              >
                Nous Contacter
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="ml-1">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
              <motion.a
                href="#expertise"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-[280px] sm:w-auto px-8 py-3 bg-transparent text-white text-base md:text-lg font-normal rounded-full border border-white shadow-sm transition hover:bg-white/10 text-center"
              >
                Notre Expertise
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
