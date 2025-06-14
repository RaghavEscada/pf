"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

// Mock testimonials data - replace with your actual data
const testimonials = [
    {
        quote: "Pocket Fund helped us acquire 3 profitable SaaS businesses in just 6 months. Their off-market deal flow is unmatched.",
        name: "Sarah Chen",
        title: "Serial Entrepreneur"
    },
    {
        quote: "From $50K to $2M portfolio value in 18 months. The India-based team's efficiency is incredible.",
        name: "Marcus Rodriguez",
        title: "Solo Capitalist"
    },
    {
        quote: "Their due diligence saved us from a terrible acquisition. Worth every penny of the retainer.",
        name: "David Kim",
        title: "Fund Manager"
    },
    {
        quote: "Found my first acquisition through Pocket Fund - a $30K SaaS now generating $15K/month.",
        name: "Emma Thompson",
        title: "First-Time Buyer"
    },
    {
        quote: "The operator placement service is game-changing. They found us the perfect team lead in 48 hours.",
        name: "Alex Chen",
        title: "Portfolio Owner"
    }
];

const Clients = () => {
    return (
        <section id="testimonials" className="relative py-20 px-4 bg-slate-900 text-white overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse-slower"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-400/15 rounded-full blur-3xl"></div>
            </div>

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                    maskImage: 'radial-gradient(ellipse 100% 60% at 50% 50%, #000 40%, transparent 100%)'
                }}
            ></div>

            <div className="relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                        Kind words from
                        <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">satisfied clients</span>
                    </h1>
                </motion.div>

                {/* Infinite Moving Cards Container */}
                <div className="flex flex-col items-center max-lg:mt-10">
                    <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden w-full max-w-7xl">
                        <InfiniteMovingCards
                            items={testimonials}
                            direction="right"
                            speed="slow"
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.08); }
        }
        
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulse-slower 6s ease-in-out infinite; }
      `}</style>
        </section>
    );
};

// Enhanced InfiniteMovingCards Component
const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string;
        name: string;
        title: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    React.useEffect(() => {
        function addAnimation() {
            if (containerRef.current && scrollerRef.current) {
                const scrollerContent = Array.from(scrollerRef.current.children);

                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    if (scrollerRef.current) {
                        scrollerRef.current.appendChild(duplicatedItem);
                    }
                });

                getDirection();
                getSpeed();
                setStart(true);
            }
        }

        addAnimation();
    }, []);

    const [start, setStart] = React.useState(false);

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={`scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
        >
            <ul
                ref={scrollerRef}
                className={`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ${start ? "animate-scroll" : ""
                    } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
            >
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        className="w-[350px] max-w-full relative rounded-3xl border border-white/10 px-8 py-6 md:w-[450px] backdrop-blur-sm"
                        style={{
                            background: "rgba(15, 23, 42, 0.8)",
                        }}
                    >
                        <TestimonialCard testimonial={item} />
                    </li>
                ))}
            </ul>

            <style jsx>{`
        .scroller {
          --animation-duration: 40s;
          --animation-direction: forwards;
        }

        .animate-scroll {
          animation: scroll var(--animation-duration) var(--animation-direction) linear infinite;
        }

        @keyframes scroll {
          to {
            transform: translate(calc(-50% - 0.5rem));
          }
        }
      `}</style>
        </div>
    );
};

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
    const [hovered, setHovered] = React.useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative group"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white/20" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white/20" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white/20" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white/20" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-gray-500/20 rounded-3xl"
                    />
                )}
            </AnimatePresence>

            <div className="relative z-10">
                {/* Quote */}
                <blockquote className="mb-6">
                    <div className="text-2xl text-blue-400 mb-2">&ldquo;</div>
                    <p className="text-gray-300 text-base leading-relaxed relative z-20 font-normal">
                        {testimonial.quote}
                    </p>
                    <div className="text-2xl text-blue-400 text-right">&rdquo;</div>
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-blue-400 font-bold text-lg">
                            {testimonial.name.charAt(0)}
                        </span>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold text-lg relative z-20">
                            {testimonial.name}
                        </h4>
                        <p className="text-blue-300 text-sm relative z-20">
                            {testimonial.title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};

export default Clients;