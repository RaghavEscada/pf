import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Target, TrendingUp, Users, Award, Briefcase, Play, DollarSign } from "lucide-react";

// Enhanced Mouse Position Hook
interface MousePosition {
  x: number;
  y: number;
}

function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
}

// Compact Text Flip Component
const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

export interface ContainerTextFlipProps {
  words?: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["Smart Investors", "Wealth Builders", "Deal Makers", "Industry Leaders"],
  interval = 2500,
  className,
  textClassName,
  animationDuration = 500,
}: ContainerTextFlipProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, animationDuration / 2);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval, animationDuration]);

  return (
    <div className="relative inline-block">
      <span
        className={cn(
          "inline-block text-2xl md:text-4xl lg:text-5xl font-bold transition-all duration-500",
          "bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent",
          "drop-shadow-lg shimmer-text",
          isAnimating ? "opacity-0 transform translate-y-4 scale-95" : "opacity-100 transform translate-y-0 scale-100",
          className,
        )}
      >
        {words[currentWordIndex]}
      </span>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 blur-xl opacity-20 bg-gradient-to-r from-blue-400 to-white rounded-lg pulse-glow" />
    </div>
  );
}

// Simple Moving Grid Background
const MovingGridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Single clean moving grid */}
      <div className="absolute inset-0 opacity-50 moving-grid" />

      {/* Subtle blue accent */}
      <div className="absolute inset-0 opacity-10 pulse-blue" />
    </div>
  );
};

// Compact Logo Cloud - Financial Services & Private Equity
const logos1 = [
  { name: "Babel", url: "https://svgl.app/library/babel.svg" },
  { name: "Ngrok", url: "https://svgl.app/library/ngrok-light.svg" },
  { name: "Webflow", url: "https://svgl.app/library/webflow.svg" },
  { name: "Perplexity", url: "https://svgl.app/library/perplexity_wordmark_light.svg" },
  { name: "Sanity", url: "https://svgl.app/library/sanity.svg" },
  { name: "Post CSS", url: "https://svgl.app/library/postcss_wordmark.svg" },
];

const LogoMarquee = ({ logos, direction = "left", speed = 25 }: { logos: any[], direction?: "left" | "right", speed?: number }) => {
  return (
    <div className="relative overflow-hidden py-1">
      <div className={`flex gap-6 whitespace-nowrap ${direction === "left" ? "marquee-left" : "marquee-right"}`}>
        {Array(6).fill(null).map((_, index) => (
          <div key={index} className="flex gap-6 shrink-0">
            {logos.map((logo, logoIndex) => (
              <div
                key={logoIndex}
                className="flex items-center justify-center h-10 w-28 rounded-lg px-3 py-1.5 hover:scale-105 hover:-translate-y-1 transition-all duration-200"
              >
                <img
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  className="h-6 w-auto max-w-20 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<span class="text-xs font-semibold text-gray-700">${logo.name}</span>`;
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Animation component to replace framer-motion
const AnimatedDiv = ({
  children,
  className = "",
  delay = 0,
  duration = 800,
  from = "opacity-0 translate-y-8",
  to = "opacity-100 translate-y-0"
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  from?: string;
  to?: string;
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setInView(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-${duration} ${inView ? to : from} ${className}`}
    >
      {children}
    </div>
  );
};

// Main Hero Component
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full">
      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        @keyframes moveGrid {
          0% { background-position: 0% 0%; }
          100% { background-position: 60px 60px; }
        }
        @keyframes pulseBlue {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.15; }
        }
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-800px); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-800px); }
          100% { transform: translateX(0); }
        }
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        .floating { animation: float 6s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .moving-grid {
          background: linear-gradient(to right, rgba(0, 0, 0, 0.4) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: moveGrid 25s linear infinite;
        }
        .pulse-blue {
          background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
          animation: pulseBlue 8s ease-in-out infinite;
        }
        .marquee-left {
          animation: marqueeLeft 25s linear infinite;
        }
        .marquee-right {
          animation: marqueeRight 25s linear infinite;
        }
        .shimmer-text {
          background-size: 200% 200%;
          background-position: 0% 50%;
          animation: shimmer 3s ease-in-out infinite alternate;
        }
        .duration-800 { transition-duration: 800ms; }
        .duration-600 { transition-duration: 600ms; }
      `}</style>

      {/* Hero Section */}
      <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        {/* Enhanced Creative Moving Grid Background */}
        <MovingGridBackground />

        {/* Blue ambient lighting */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl floating" />
          <div
            className="absolute bottom-20 right-20 w-80 h-80 bg-blue-300/8 rounded-full blur-3xl"
            style={{ animation: "float 12s ease-in-out infinite reverse" }}
          />
        </div>

        <div className="relative z-10 min-h-screen flex flex-col pt-20 md:pt-24">
          {/* Main Content Section */}
          <div className="flex-1 flex flex-col justify-center px-6 md:px-12 py-2">
            <div className="max-w-5xl mx-auto text-center space-y-4">

              {/* Enhanced Badge - Now with proper top spacing */}
              <div
                className={`inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg hover:scale-105 hover:bg-white/15 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
                  }`}
              >
                <span className="text-sm font-medium text-white/90 tracking-wide">
                  #1 Micro Private Equity Firm
                </span>
              </div>

              {/* Enhanced Main Heading */}
              <div className="space-y-3">
                <h1
                  className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                  <span className="block font-bold">
                    <div className="mx-auto h-20 md:h-28 lg:h-32 w-auto flex items-center justify-center px-8 py-2 shadow-xl">
                      <div className="flex items-center space-x-4">
                        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-500 drop-shadow-2xl text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
                          Pocket Fund
                        </span>
                      </div>
                    </div>
                  </span>

                  <span
                    className={`block text-xl md:text-3xl lg:text-4xl mt-2 font-normal text-white/80 transition-all duration-600 ${isVisible ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    Transforms Businesses Into
                  </span>

                  <div
                    className={`mt-3 transition-all duration-600 ${isVisible ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    <ContainerTextFlip
                      words={["Smart Investments", "Growing Assets", "Success Stories", "Market Leaders"]}
                      interval={1400}
                      animationDuration={300}
                      className="bg-black rounded-xl px-8 py-4 shadow-2xl border border-white/20 backdrop-blur-sm"
                    />
                  </div>
                </h1>
              </div>

              {/* Enhanced Description */}
              <div
                className={`space-y-1 max-w-3xl mx-auto transition-all duration-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
              >
                <p className="text-lg text-white/80 font-medium">
                  Bridge the gap between ambitious buyers and quality deals with expert-guided acquisition services
                </p>
                <p className="text-base text-white/60">
                  Complete deal sourcing, due diligence, and transaction support from start to close
                </p>
              </div>

              {/* Enhanced CTAs */}
              <div
                className={`flex flex-row gap-4 justify-center pt-4 transition-all duration-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
              >
                <button className="group relative px-6 py-2.5 bg-white text-blue-900 font-semibold rounded-lg overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl hover:shadow-white/20 active:scale-95 transition-all duration-300">
                  <span className="relative z-10 flex items-center">
                    Start Your Acquisition
                    <div className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </span>
                </button>

                <button className="px-6 py-2.5 border border-white/30 text-white rounded-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 hover:scale-105 hover:shadow-lg hover:shadow-white/10 active:scale-95 transition-all duration-300">
                  <span className="flex items-center">
                    <Play className="mr-2 w-4 h-4" />
                    Watch Process
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deal Matching Section with Enhanced Flow Lines */}
      <div className="py-32 pt-16 bg-slate-900 w-full">
        <div className="w-full px-6">
          <AnimatedDiv className="text-center mb-20" delay={0}>
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-white">
              How We Connect
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Our platform matches the right businesses with the right buyers through verified profiles and smart criteria.
            </p>
          </AnimatedDiv>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative max-w-7xl mx-auto">
            {/* Enhanced Connection Lines Animation */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
              <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* Moving dotted lines */}
                <path d="M 25 38 L 50 50" stroke="url(#lineGradient)" strokeWidth="0.5" fill="none" opacity="1" strokeDasharray="1,1">
                  <animate attributeName="stroke-dashoffset" values="2;0" dur="1.5s" repeatCount="indefinite" />
                </path>
                <path d="M 25 45 L 50 50" stroke="url(#lineGradient)" strokeWidth="0.5" fill="none" opacity="1" strokeDasharray="1,1">
                  <animate attributeName="stroke-dashoffset" values="2;0" dur="1.5s" repeatCount="indefinite" begin="0.2s" />
                </path>
                <path d="M 25 55 L 50 50" stroke="url(#lineGradient)" strokeWidth="0.5" fill="none" opacity="1" strokeDasharray="1,1">
                  <animate attributeName="stroke-dashoffset" values="2;0" dur="1.5s" repeatCount="indefinite" begin="0.4s" />
                </path>
                <path d="M 25 62 L 50 50" stroke="url(#lineGradient)" strokeWidth="0.5" fill="none" opacity="1" strokeDasharray="1,1">
                  <animate attributeName="stroke-dashoffset" values="2;0" dur="1.5s" repeatCount="indefinite" begin="0.6s" />
                </path>
                <path d="M 50 50 L 75 50" stroke="#3b82f6" strokeWidth="0.5" fill="none" opacity="1" strokeDasharray="1,1">
                  <animate attributeName="stroke-dashoffset" values="2;0" dur="1.5s" repeatCount="indefinite" begin="0.8s" />
                </path>

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

            {/* Deal Sources - Left Side */}
            <AnimatedDiv
              className="bg-gray-900 border border-gray-800 rounded-2xl p-10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10 group relative z-10 hover:scale-102"
              delay={200}
              from="opacity-0 -translate-x-12"
              to="opacity-100 translate-x-0"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center hover:scale-110 hover:rotate-1 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Deal Sources</h3>
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
                  { name: "Social Media", gradient: "from-blue-500 to-purple-500" },
                  { name: "Community", gradient: "from-green-500 to-teal-500" },
                  { name: "Outreach", gradient: "from-orange-500 to-red-500" },
                  { name: "Network", gradient: "from-indigo-500 to-purple-600" }
                ].map((item, index) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center space-y-2 hover:scale-105 hover:-translate-y-1 transition-transform duration-200"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300`}>
                      <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                    </div>
                    <span className="text-white text-xs font-medium text-center">{item.name}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl px-4 py-3 flex items-center justify-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium text-sm">Ready for Acquisition</span>
              </div>
            </AnimatedDiv>

            {/* Center - Enhanced Pocket Fund Logo */}
            <AnimatedDiv
              className="flex flex-col items-center py-24 justify-center space-y-12 relative z-20"
              delay={400}
              from="opacity-0 scale-75"
              to="opacity-100 scale-100"
            >
              <div className="relative mt-8">
                <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center shadow-lg relative hover:scale-110 hover:shadow-2xl transition-all duration-500 group">
                  <div className="text-black text-center font-bold text-2xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">PF</span>
                    </div>
                  </div>
                  {/* Enhanced pulsing border effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-blue-400 opacity-0 scale-100 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" />
                </div>

                {/* Enhanced multiple glowing rings */}
                <div className="absolute -top-8 -left-8 w-40 h-40 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-lg" style={{ animation: "pulse 2s ease-in-out infinite 0.5s" }}></div>
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl" style={{ animation: "pulse 4s ease-in-out infinite 1s" }}></div>
              </div>

              {/* Enhanced connection indicator */}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  {[0, 100, 200].map((delay, index) => (
                    <div
                      key={index}
                      className="w-2 h-2 bg-blue-400 rounded-full"
                      style={{
                        animation: `bounce 1.5s ease-in-out infinite ${delay}ms`
                      }}
                    />
                  ))}
                </div>
              </div>
            </AnimatedDiv>

            {/* Buyers - Right Side */}
            <AnimatedDiv
              className="bg-gray-900 border border-gray-800 rounded-2xl p-10 hover:border-orange-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-orange-500/10 group relative z-10 hover:scale-102"
              delay={600}
              from="opacity-0 translate-x-12"
              to="opacity-100 translate-x-0"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center hover:scale-110 hover:-rotate-1 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V7.5C15 8.3 14.3 9 13.5 9S12 8.3 12 7.5V6.5L9 7V9C9 10.1 8.1 11 7 11S5 10.1 5 9V7.5L3 8V10C3 11.1 3.9 12 5 12H19C20.1 12 21 11.1 21 10V9Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Buyers</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">Verified</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-8 leading-relaxed text-base">
                Define your criteria and create mandates to discover the right companies to acquire
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-300">SaaS</span>
                  <span className="text-gray-300">E-commerce</span>
                </div>
                <div className="text-gray-300">Revenue: $10K - $100K ARR</div>
                <div className="text-gray-300">Growth Rate: 20%+ YoY</div>
                <div className="text-gray-300">EBITDA: Profitable Preferred</div>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-center hover:border-orange-500/30 hover:bg-gray-800/80 hover:scale-102 transition-all duration-300">
                <span className="text-gray-300 font-medium">Looking for Deals</span>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </div>

      {/* Additional Enhanced Features Section */}
      <div className="py-32 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedDiv className="text-center mb-20">
            <div className="max-w-8xl mx-auto text-center">
              <div className="inline-flex items-center bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-full px-8 py-4 mb-12 shadow-2xl">
                <Award className="w-6 h-6 text-blue-400 mr-3" />
                <span className="text-sm font-medium text-gray-300 tracking-wide">First-of-its-kind Micro Private Equity Firm</span>
              </div>

              <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-16">
                We're on a mission to{' '}
                <span className="text-white font-semibold">democratize online business acquisitions</span>{' '}
                and empower a new generation of digital entrepreneurs through hands-on ownership, transparency, and operational excellence.
              </p>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Why Choose Pocket Fund?
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              We make business acquisition simple for everyone involved.
            </p>
          </AnimatedDiv>

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
              <AnimatedDiv
                key={index}
                className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-10 text-center hover:border-blue-500/50 transition-all duration-500 group hover:scale-105 ${hoveredFeature === index ? 'shadow-2xl shadow-blue-500/25' : ''}`}
                delay={index * 200}
                from="opacity-0 translate-y-12"
                to="opacity-100 translate-y-0"
              >
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8 hover:scale-110 hover:rotate-3 transition-transform duration-300" onMouseEnter={() => setHoveredFeature(index)} onMouseLeave={() => setHoveredFeature(null)}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-6">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-base">{feature.description}</p>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;