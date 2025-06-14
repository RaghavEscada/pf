import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Users, Globe, MessageCircle, Search, Network } from 'lucide-react';
import { motion } from "framer-motion";

const logos = [
  {
    name: "Babel",
    url: "https://svgl.app/library/babel.svg",
  },
  {
    name: "Ngrok",
    url: "https://svgl.app/library/ngrok-light.svg",
  },
  {
    name: "Webflow",
    url: "https://svgl.app/library/webflow.svg",
  },
  {
    name: "Perplexity",
    url: "https://svgl.app/library/perplexity_wordmark_light.svg",
  },
  {
    name: "Sanity",
    url: "https://svgl.app/library/sanity.svg",
  },
  {
    name: "Post CSS",
    url: "https://svgl.app/library/postcss_wordmark.svg",
  },
];

const LogoCloud = () => {
  return (
    <div className="w-full py-8">
      <div className="mx-auto w-full px-2 md:px-4">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}
        >
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {logos.map((logo, key) => (
                  <img
                    key={key}
                    src={logo.url}
                    width={112}
                    height={40}
                    className="h-10 w-28 px-2"
                    alt={logo.name}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

// Enhanced PerpeX ContainerTextFlip Component - Styled for PocketFind
const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

export interface ContainerTextFlipProps {
  /** Array of words to cycle through in the animation */
  words?: string[];
  /** Time in milliseconds between word transitions */
  interval?: number;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Additional CSS classes to apply to the text */
  textClassName?: string;
  /** Duration of the transition animation in milliseconds */
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["Smarter", "Faster", "Better", "Efficiently"],
  interval = 2000,
  className,
  textClassName,
  animationDuration = 600,
}: ContainerTextFlipProps) {
  const id = React.useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = React.useRef(null);

  const updateWidthForWord = () => {
    if (textRef.current) {
      // Add some padding to the text width (30px for inline text)
      // @ts-ignore
      const textWidth = textRef.current.scrollWidth + 30;
      setWidth(textWidth);
    }
  };

  useEffect(() => {
    // Update width whenever the word changes
    updateWidthForWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <motion.span
      layout
      layoutId={`words-here-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
      className={cn(
        "relative inline-block text-center font-semibold",
        "text-blue-400",
        className,
      )}
      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={cn("inline-block", textClassName)}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <motion.div className="inline-block">
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                filter: "blur(10px)",
                y: 20,
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
              }}
              transition={{
                delay: index * 0.03,
                duration: 0.4,
                ease: "easeOut"
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.span>
  );
}

const Hero = () => {
  return (
    <div className="min-h-screen w-screen bg-slate-900 text-white relative pt-16 overflow-hidden">
      {/* Enhanced CSS animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes logo-cloud {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          
          @keyframes slideUp {
            0% { transform: translateY(30px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          
          @keyframes slideInLeft {
            0% { transform: translateX(-50px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          
          @keyframes slideInRight {
            0% { transform: translateX(50px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          
          @keyframes zoomIn {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          
          @keyframes fadeInUp {
            0% { transform: translateY(20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes expandWidth {
            0% { width: 0; }
            100% { width: 100%; }
          }
          
          .animate-logo-cloud {
            animation: logo-cloud 25s linear infinite;
          }
          
          .animate-slideUp { animation: slideUp 0.8s ease-out forwards; }
          .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
          .animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
          .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
          .animate-zoomIn { animation: zoomIn 0.8s ease-out forwards; }
          .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
          .animate-expandWidth { animation: expandWidth 0.8s ease-out forwards; }
        `
      }} />

      {/* Enhanced Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-400/15 rounded-full blur-2xl animate-[pulse_6s_ease-in-out_infinite]"></div>

      {/* Enhanced grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Trustpilot-style badge */}
      <motion.div
        className="flex justify-center pt-8 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-gray-900 border border-gray-700 rounded-full px-4 py-2 flex items-center space-x-2 hover:border-blue-500/50 transition-all duration-300">
          <Star className="w-4 h-4 text-white fill-white" />
          <span className="text-sm font-medium">Excellent</span>
          <span className="text-sm text-gray-300">15+ successful acquisitions</span>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-white fill-white" />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Hero Content with Enhanced PerpeX Text Flip */}
      <div className="relative z-10 text-center mb-16 px-4">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Acquire{' '}
          </motion.span>

          <motion.div
            className="inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <ContainerTextFlip
              words={["Smarter", "Faster", "Better", "Efficiently"]}
              interval={2000}
              animationDuration={600}
              className="text-4xl md:text-5xl lg:text-6xl text-blue-400 font-semibold"
            />
          </motion.div>

          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {' '} &{' '}
          </motion.span>
          <br className="hidden md:block" />
          <div className="block md:inline-block mt-2 md:mt-0">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              Scale{' '}
            </motion.span>

            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              Rapidly
            </motion.span>
          </div>
          <br />
          <div className="mt-3">
            <motion.span
              className="text-gray-400 inline-block text-3xl md:text-3xl lg:text-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              with
              <span className='text-blue-500'> Pocket Fund</span>
            </motion.span>
          </div>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          Pocket Fund is a first-of-its-kind micro private equity firm offering buy-side advisory services, focused on deal sourcing. We take clients through the entire process from sourcing deals to closing them.
        </motion.p>

        {/* Enhanced CTA Button */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
        >
          <motion.button
            className="bg-white hover:bg-gray-100 text-black px-12 py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform group relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px -12px rgba(255, 255, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
              style={{ transform: "skewX(-12deg)" }}
            />
            <span className="relative z-10">Pitch Us</span>
            <motion.div
              className="relative z-10"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Social proof annotations */}
        <div className="relative w-full px-6">
          <motion.div
            className="absolute -left-20 top-0 hidden lg:block"
            initial={{ opacity: 0, x: -50, rotate: -3 }}
            animate={{ opacity: 1, x: 0, rotate: -3 }}
            transition={{ delay: 1.9 }}
          >
            <div className="bg-black/40 backdrop-blur-sm border border-gray-600 rounded-2xl p-4 transform hover:rotate-0 transition-transform duration-500">
              <motion.div
                className="w-16 h-1 bg-gradient-to-r from-white to-orange-400 mt-2 rounded"
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ delay: 2.1, duration: 0.8 }}
              />
            </div>
          </motion.div>
        </div>
        <LogoCloud />
      </div>

      {/* Deal Matching Section with Enhanced Flow Lines */}
      <div className="py-32 pt-16 bg-slate-900 w-full">
        <div className="w-full px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-white">
              How We Connect
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Our platform matches the right businesses with the right buyers through verified profiles and smart criteria.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative max-w-7xl mx-auto">
            {/* Enhanced Connection Lines Animation */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
              <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Enhanced gradient definitions */}
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* 4 lines from deal sources to center */}
                <path d="M 25 38 L 50 50" stroke="url(#lineGradient)" strokeWidth="0.75" fill="none" opacity="0.9" />
                <path d="M 25 45 L 50 50" stroke="url(#lineGradient)" strokeWidth="0.75" fill="none" opacity="0.9" />
                <path d="M 25 55 L 50 50" stroke="url(#lineGradient)" strokeWidth="0.75" fill="none" opacity="0.9" />
                <path d="M 25 62 L 50 50" stroke="url(#lineGradient)" strokeWidth="0.75" fill="none" opacity="0.9" />

                {/* Single line connecting logo to buyers */}
                <path d="M 50 50 L 75 50" stroke="#3b82f6" strokeWidth="2" fill="none" />

                {/* Enhanced flow dots with glow effect */}
                {[
                  "M 25 38 L 50 50",
                  "M 25 45 L 50 50",
                  "M 25 55 L 50 50",
                  "M 25 62 L 50 50",
                  "M 50 50 L 75 50"
                ].map((path, index) => (
                  <g key={index}>
                    <circle r="0.8" fill="#3b82f6" opacity="0.6">
                      <animateMotion dur="3s" repeatCount="indefinite" path={path} />
                      <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle r="0.5" fill="#60a5fa" opacity="1">
                      <animateMotion dur="3s" repeatCount="indefinite" path={path} />
                      <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}

                {/* Enhanced Pocket Fund center point */}
                <circle cx="50" cy="50" r="2" fill="#6366f1" opacity="0.8">
                  <animate attributeName="r" values="1.5;3;1.5" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="50" cy="50" r="1" fill="#a78bfa" opacity="1">
                  <animate attributeName="r" values="0.8;1.5;0.8" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>

            {/* Deal Sources - Left Side - Enhanced */}
            <motion.div
              className="bg-gray-900 border border-gray-800 rounded-2xl p-10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10 group relative z-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <motion.div
                  className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Deal Sources
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">Active</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-8 leading-relaxed text-base">
                Multi-channel approach to discover quality businesses through diverse networks and outreach
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { name: "Social Media", gradient: "from-blue-500 to-purple-500", icon: "M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22Z" },
                  { name: "Community", gradient: "from-green-500 to-teal-500", icon: "M16 4C18.2 4 20 5.8 20 8C20 10.2 18.2 12 16 12C13.8 12 12 10.2 12 8C12 5.8 13.8 4 16 4ZM8 4C10.2 4 12 5.8 12 8C12 10.2 10.2 12 8 12C5.8 12 4 10.2 4 8C4 5.8 5.8 4 8 4Z" },
                  { name: "Outreach", gradient: "from-orange-500 to-red-500", icon: "M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" },
                  { name: "Network", gradient: "from-indigo-500 to-purple-600", icon: "M15 9H9V7.5C9 6.1 10.1 5 11.5 5S14 6.1 14 7.5V8H15C16.1 8 17 8.9 17 10V16C17 17.1 16.1 18 15 18H9C7.9 18 7 17.1 7 16V10C7 8.9 7.9 8 9 8Z" }
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="flex flex-col items-center space-y-2"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300`}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d={item.icon} />
                      </svg>
                    </div>
                    <span className="text-white text-xs font-medium text-center">{item.name}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white rounded-xl px-4 py-3 flex items-center justify-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium text-sm">
                  Ready for Acquisition
                </span>
              </div>
            </motion.div>

            {/* Center - Enhanced Pocket Fund Logo */}
            <motion.div
              className="flex flex-col items-center py-24 justify-center space-y-12 relative z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative mt-8">
                <motion.div
                  className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center shadow-lg relative"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    rotateY: 10
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-black text-center font-bold text-2xl">
                    <img src="/pflogod.webp" alt="Pocket Fund" className="w-full h-full object-contain" />
                  </div>
                  {/* Enhanced pulsing border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-blue-400"
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{
                      opacity: [0, 0.7, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Enhanced multiple glowing rings */}
                <div className="absolute -top-8 -left-8 w-40 h-40 bg-blue-400/20 rounded-full blur-xl animate-[pulse_3s_ease-in-out_infinite]"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-lg animate-[pulse_2s_ease-in-out_infinite_0.5s]"></div>
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl animate-[pulse_4s_ease-in-out_infinite_1s]"></div>
              </div>

              {/* Enhanced connection indicator */}
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2"></div>
                <motion.div
                  className="flex items-center justify-center space-x-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  {[0, 0.1, 0.2].map((delay, index) => (
                    <motion.div
                      key={index}
                      className="w-2 h-2 bg-blue-400 rounded-full"
                      animate={{
                        y: [0, -8, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: delay,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Buyers - Right Side - Enhanced */}
            <motion.div
              className="bg-gray-900 border border-gray-800 rounded-2xl p-10 hover:border-orange-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-orange-500/10 group relative z-10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <motion.div
                  className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V7.5C15 8.3 14.3 9 13.5 9S12 8.3 12 7.5V6.5L9 7V9C9 10.1 8.1 11 7 11S5 10.1 5 9V7.5L3 8V10C3 11.1 3.9 12 5 12H19C20.1 12 21 11.1 21 10V9Z" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Buyers
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">Verified</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-8 leading-relaxed text-base">
                Define your criteria and create mandates to discover the right companies to acquire
              </p>

              <motion.div
                className="space-y-4 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between">
                  <span className="text-gray-300">SaaS</span>
                  <span className="text-gray-300">E-commerce</span>
                </div>
                <div className="text-gray-300">
                  Revenue: $10K - $100K ARR
                </div>
                <div className="text-gray-300">
                  Growth Rate: 20%+ YoY
                </div>
                <div className="text-gray-300">
                  EBITDA: Profitable Preferred
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-center hover:border-orange-500/30 transition-all duration-300"
                whileHover={{
                  backgroundColor: "rgba(31, 41, 55, 0.8)",
                  scale: 1.02
                }}
              >
                <span className="text-gray-300 font-medium">
                  Looking for Deals
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Additional Enhanced Features Section */}
      <motion.div
        className="py-32 bg-gradient-to-b from-slate-900 to-slate-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Why Choose Pocket Fund?
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              We make business acquisition simple for everyone involved.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Lightning Fast",
                description: "Complete deals in weeks, not months"
              },
              {
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Verified Quality",
                description: "Every business and buyer is thoroughly vetted"
              },
              {
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
                title: "Fair Pricing",
                description: "Transparent fees with no hidden costs"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-10 text-center hover:border-blue-500/50 transition-all duration-500 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                }}
              >
                <motion.div
                  className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-6">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

