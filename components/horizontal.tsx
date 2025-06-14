import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Smartphone, Code, Globe, PenTool, Target, TrendingUp, Users, DollarSign
} from "lucide-react";

const businessTypes = [
    {
        id: 1,
        number: "01",
        title: "SaaS Tools",
        description: "Software as a Service platforms",
        icon: Code,
        highlights: [
            "B2B productivity tools",
            "Niche automation software",
            "API-based services",
            "Subscription-based models"
        ],
        priceRange: "Under $50k",
        targetMRR: "$200 - $5k"
    },
    {
        id: 2,
        number: "02",
        title: "Mobile Apps",
        description: "iOS and Android applications",
        icon: Smartphone,
        highlights: [
            "Utility applications",
            "Consumer-focused tools",
            "App Store optimization",
            "In-app purchase models"
        ],
        priceRange: "Under $30k",
        targetMRR: "$100 - $3k"
    },
    {
        id: 3,
        number: "03",
        title: "Content Sites",
        description: "Blogs, newsletters, media sites",
        icon: PenTool,
        highlights: [
            "Niche blog networks",
            "Newsletter businesses",
            "Affiliate-driven content",
            "Community-based platforms"
        ],
        priceRange: "Under $25k",
        targetMRR: "$500 - $2k"
    },
    {
        id: 4,
        number: "04",
        title: "E-commerce Stores",
        description: "Online retail and marketplaces",
        icon: Globe,
        highlights: [
            "Dropshipping businesses",
            "Print-on-demand stores",
            "Digital product sales",
            "Niche marketplaces"
        ],
        priceRange: "Under $75k",
        targetMRR: "$1k - $8k"
    },
    {
        id: 5,
        number: "05",
        title: "Digital Services",
        description: "Specialized service platforms",
        icon: Target,
        highlights: [
            "Design marketplaces",
            "Freelancer platforms",
            "Course platforms",
            "Booking systems"
        ],
        priceRange: "Under $40k",
        targetMRR: "$300 - $4k"
    },
    {
        id: 6,
        number: "06",
        title: "Data & Analytics",
        description: "Information and insights platforms",
        icon: TrendingUp,
        highlights: [
            "Market research tools",
            "Data aggregation services",
            "Analytics dashboards",
            "Industry reports"
        ],
        priceRange: "Under $60k",
        targetMRR: "$400 - $6k"
    },
    {
        id: 7,
        number: "07",
        title: "Community Platforms",
        description: "Forums and social networks",
        icon: Users,
        highlights: [
            "Niche communities",
            "Membership sites",
            "Discord servers",
            "Professional networks"
        ],
        priceRange: "Under $35k",
        targetMRR: "$200 - $3k"
    },
    {
        id: 8,
        number: "08",
        title: "Financial Tools",
        description: "Fintech and business utilities",
        icon: DollarSign,
        highlights: [
            "Budgeting applications",
            "Investment trackers",
            "Business calculators",
            "Payment processors"
        ],
        priceRange: "Under $80k",
        targetMRR: "$500 - $10k"
    }
];

// BusinessCard component with Pocket Fund styling
const BusinessCard = ({ business }: { business: any }) => {
    const Icon = business.icon;

    return (
        <div className="w-screen min-w-screen flex-shrink-0 h-full px-10 flex items-center justify-center relative">
            {/* Content card */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl shadow-2xl max-w-2xl w-full mx-auto ml-auto mr-12 relative z-20 overflow-hidden h-4/5">
                {/* Icon header */}
                <div className="absolute top-0 right-0 w-28 h-28 flex items-center justify-center rounded-bl-3xl bg-gradient-to-br from-blue-500 to-purple-500">
                    <Icon className="w-10 h-10 text-white" />
                </div>

                {/* Number tab */}
                <div className="absolute left-10 top-0 rounded-b-xl px-5 py-2 text-base font-medium bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                    {business.number}
                </div>

                {/* Card Content */}
                <div className="pt-20 px-10 pb-10 h-full flex flex-col">
                    <h2 className="text-4xl font-bold text-white">{business.title}</h2>
                    <p className="text-lg font-light italic text-gray-300 mt-2 mb-6">{business.description}</p>

                    <div className="w-24 h-1 rounded-full mb-6 bg-gradient-to-r from-blue-400 to-purple-400"></div>

                    {/* Price and MRR info */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30">
                            <div className="text-green-400 font-bold text-sm">Price Range</div>
                            <div className="text-white text-lg font-semibold">{business.priceRange}</div>
                        </div>
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30">
                            <div className="text-blue-400 font-bold text-sm">Target MRR</div>
                            <div className="text-white text-lg font-semibold">{business.targetMRR}</div>
                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-4 flex-1">
                        {business.highlights.map((highlight: string, idx: number) => (
                            <div key={idx} className="flex items-center">
                                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3 flex-shrink-0"></div>
                                <p className="text-gray-300 text-base">{highlight}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6 w-full">
                        <button className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold">
                            Pitch Us Your Business
                        </button>
                    </div>
                </div>
            </div>

            {/* Step indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {businessTypes.map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === business.id - 1 ? 'bg-blue-400' : 'bg-white/30'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default function BusinessTypesHorizontal() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    // Adjust the scroll range for smoother horizontal movement
    const x = useTransform(scrollYProgress, [0, 0.85], ["0%", `-${(businessTypes.length - 1) * 100}%`]);
    const progressWidth = useTransform(scrollYProgress, [0, 0.85], ["0%", "100%"]);

    return (
        <div ref={targetRef} className="relative w-full" style={{ height: `${(businessTypes.length + 1) * 100}vh` }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden z-10">
                <section className="h-full w-full bg-slate-900 relative">
                    {/* Enhanced Background Effects */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
                        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-2xl animate-[pulse_6s_ease-in-out_infinite]"></div>
                        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-purple-500/8 rounded-full blur-2xl animate-[pulse_8s_ease-in-out_infinite]"></div>
                    </div>

                    {/* Sophisticated Grid Pattern */}
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    </div>

                    {/* Progress bar */}
                    <div className="absolute top-6 left-0 w-full z-50 px-12">
                        <div className="h-1 bg-gray-800 rounded-full">
                            <motion.div
                                className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                                style={{ width: progressWidth }}
                            />
                        </div>
                    </div>

                    <div className="absolute inset-0 overflow-hidden flex items-center justify-start">
                        {/* Background heading text */}
                        <div className="absolute left-16 px-12 top-1/2 transform -translate-y-1/2 text-white max-w-lg z-0 pointer-events-none">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter mb-8">
                                Types of
                                <br />
                                <span className="flex text-blue-400">
                                    Businesses
                                </span>
                                <span className="text-4xl font-normal text-gray-400 mt-2 block">
                                    We Acquire
                                </span>
                            </h1>
                        </div>

                        {/* Horizontal carousel */}
                        <motion.div
                            style={{ x }}
                            className="flex flex-nowrap h-full pt-20 pb-0 w-full relative z-10"
                        >
                            {businessTypes.map((business) => (
                                <BusinessCard
                                    key={business.id}
                                    business={business}
                                />
                            ))}
                        </motion.div>
                    </div>
                </section>
            </div>

            <style jsx>{`
                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }

                /* Custom backdrop blur for better performance */
                .backdrop-blur-sm {
                    backdrop-filter: blur(4px);
                }

                /* Enhanced gradient effects */
                .bg-gradient-to-r {
                    background-image: linear-gradient(to right, var(--tw-gradient-stops));
                }

                .bg-gradient-to-br {
                    background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
                }

                /* Smooth transitions for all interactive elements */
                * {
                    transition-property: transform, opacity, border-color, background-color, box-shadow;
                    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                }

                /* Enhanced shadow effects */
                .shadow-2xl {
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                }
            `}</style>
        </div>
    );
}  