import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Footer = () => {
  const text = "GuideMeMate";
  const [key, setKey] = useState(0);
  
  // Reset animation every 5 seconds to create infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prevKey => prevKey + 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Animation variants for each character
  const characterVariants = {
    hidden: { 
      y: -100, 
      opacity: 0,
      rotate: -10
    },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    })
  };

  return (
    <motion.footer
      className="select-none overflow-hidden border-t border-orange-900 bg-[#000000]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-10 mb-10">
        <motion.div
          className="w-full mt-12 flex justify-center items-center relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="relative w-fit">
            <div className="absolute inset-0 w-full h-full blur-2xl opacity-10 bg-gradient-to-r from-[#FF7D0C] via-[#EA580C] to-[#FE9332] z-0 "></div>
            <h1
              className="relative text-6xl md:text-[8rem] lg:text-[10rem] font-black text-[#EA580C] z-10 flex"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 90%)",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "100% 100%",
              }}
            >
              {text.split("").map((char, index) => (
                <motion.span
                  key={`${key}-${index}`}
                  custom={index}
                  variants={characterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block "
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;