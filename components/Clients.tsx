"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { User, DollarSign, TrendingUp, CheckCircle, Clock, Shield } from "lucide-react";

// Real testimonials data from Naman and Marcus
const featuredTestimonials = [
    {
        type: "buyer",
        quote: "My first thought was, if I register anywhere, it's going to be selling a course or something. But you reached out saying that we can do the work for you. We can do the due diligence. All you have to do is put in your little bit of investment.",
        name: "Naman",
        title: "Acquired NYC Bytes Newsletter",
        deal: "$5K → 2,000 subscribers",
        highlight: "First-Time Buyer Success",
        avatar: "N",
        stats: {
            investment: "$5,000",
            subscribers: "2,000",
            goal: "3-4x ROI in 6 months"
        }
    },
    {
        type: "seller", 
        quote: "We saw that we were making money with it, but we just didn't have time to continue running it. Someone who actually has the time to run this is going to be able to take this much further than we can.",
        name: "Marcus",
        title: "Founder of NYC Bites",
        deal: "70% open rate newsletter",
        highlight: "Successful Exit Strategy",
        avatar: "M",
        stats: {
            openRate: "70%",
            subscribers: "2,500",
            revenue: "Profitable"
        }
    }
];

const quickTestimonials = [
    {
        quote: "The acquisition process was very formal with escrow and agreements. I could trust that if something wasn't going to happen, my money would come back in 10 days.",
        name: "Naman",
        title: "Newsletter Buyer",
        icon: Shield
    },
    {
        quote: "You guys were very responsive, which was important. Responsiveness is a great way to build trust when you're meeting people you don't actually know.",
        name: "Marcus", 
        title: "Newsletter Seller",
        icon: Clock
    },
    {
        quote: "The deal number initially was 2800 and we were negotiating, then he literally jumped it to 2000. Your team handled the negotiation assertively.",
        name: "Naman",
        title: "Acquisition Client",
        icon: DollarSign
    },
    {
        quote: "Using escrow made the process more trusting. That's a reputable source in the industry for secure transfers.",
        name: "Marcus",
        title: "Business Seller", 
        icon: CheckCircle
    },
    {
        quote: "I always wanted to get into owning a business but lacked funds and knowledge. There's actually a platform for small businesses you could buy and operate.",
        name: "Naman",
        title: "Side Hustler",
        icon: TrendingUp
    },
    {
        quote: "You guys took me up on my price the fastest. Other buyers would say they need time to look at it, then I'd wait a week and wouldn't hear from them.",
        name: "Marcus",
        title: "Seller Experience",
        icon: User
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

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                        Real Stories from
                        <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Real Clients</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        See how Pocket Fund transforms acquisitions into success stories
                    </p>
                </motion.div>

                {/* Featured Success Stories */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {featuredTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                            
                            <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 group-hover:scale-[1.02]">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                            {testimonial.avatar}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                                            <p className="text-blue-300 text-sm">{testimonial.title}</p>
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                                                testimonial.type === 'buyer' 
                                                    ? 'bg-green-500/20 text-green-300' 
                                                    : 'bg-purple-500/20 text-purple-300'
                                            }`}>
                                                {testimonial.highlight}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Quote */}
                                <blockquote className="mb-6">
                                    <div className="text-3xl text-blue-400 mb-2">&ldquo;</div>
                                    <p className="text-gray-300 text-base leading-relaxed italic">
                                        {testimonial.quote}
                                    </p>
                                    <div className="text-3xl text-blue-400 text-right">&rdquo;</div>
                                </blockquote>

                                {/* Deal Info */}
                                <div className="border-t border-slate-700 pt-4">
                                    <p className="text-blue-300 font-medium text-sm mb-3">{testimonial.deal}</p>
                                    <div className="grid grid-cols-3 gap-4">
                                        {Object.entries(testimonial.stats).map(([key, value]) => (
                                            <div key={key} className="text-center">
                                                <p className="text-white font-semibold text-sm">{value}</p>
                                                <p className="text-gray-400 text-xs capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Infinite Moving Cards Container */}
                <div className="flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            What Our Clients Say
                        </h2>
                        <p className="text-gray-400">Real feedback from real acquisitions</p>
                    </motion.div>
                    
                    <div className="h-[40vh] md:h-[25rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden w-full">
                        <InfiniteMovingCards
                            items={quickTestimonials}
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
        icon: any;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);
    const [start, setStart] = React.useState(false);

    React.useEffect(() => {
        function getDirection() {
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
        }

        function getSpeed() {
            if (containerRef.current) {
                if (speed === "fast") {
                    containerRef.current.style.setProperty("--animation-duration", "20s");
                } else if (speed === "normal") {
                    containerRef.current.style.setProperty("--animation-duration", "40s");
                } else {
                    containerRef.current.style.setProperty("--animation-duration", "80s");
                }
            }
        }

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
    }, [direction, speed]);

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
                        className="w-[350px] max-w-full relative rounded-2xl border border-white/10 px-6 py-5 md:w-[400px] backdrop-blur-sm"
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
    const IconComponent = testimonial.icon;

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative group"
        >
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-gray-500/20 rounded-2xl"
                    />
                )}
            </AnimatePresence>

            <div className="relative z-10">
                {/* Icon and Quote */}
                <div className="flex items-start space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-blue-400" />
                    </div>
                    <blockquote className="flex-1">
                        <p className="text-gray-300 text-sm leading-relaxed">
                            &ldquo;{testimonial.quote}&rdquo;
                        </p>
                    </blockquote>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between">
                    <div>
                        <h4 className="text-white font-semibold text-sm">
                            {testimonial.name}
                        </h4>
                        <p className="text-blue-300 text-xs">
                            {testimonial.title}
                        </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                        <span className="text-blue-400 font-bold text-xs">
                            {testimonial.name.charAt(0)}
                        </span>
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