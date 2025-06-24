"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const TrackRecord = () => {
  const trackRecordData = [
    {
      metric: "First Deal Success",
      value: "$4K → $130K",
      subtitle: "Sourcely AI in 15 months",
      colors: [[34, 197, 94], [22, 163, 74]],
      containerColor: "bg-emerald-900",
      icon: "💎"
    },
    {
      metric: "Total Acquisitions",
      value: "7 Deals",
      subtitle: "Successfully closed",
      colors: [[236, 72, 153], [219, 39, 119]],
      containerColor: "bg-pink-900",
      icon: "🎯"
    },
    {
      metric: "Value Created",
      value: "$224K+",
      subtitle: "From $4K invested",
      colors: [[14, 165, 233], [59, 130, 246]],
      containerColor: "bg-sky-600",
      icon: "📈"
    },
    {
      metric: "2025 Goal",
      value: "$250K",
      subtitle: "Service revenue target",
      colors: [[168, 85, 247], [147, 51, 234]],
      containerColor: "bg-purple-900",
      icon: "🚀"
    },
    {
      metric: "Team Setup",
      value: "Global",
      subtitle: "Mumbai + remote ops",
      colors: [[249, 115, 22], [234, 88, 12]],
      containerColor: "bg-orange-900",
      icon: "🌍"
    },
    {
      metric: "Key Edge",
      value: "Off-Market",
      subtitle: "India-based operations",
      colors: [[99, 102, 241], [79, 70, 229]],
      containerColor: "bg-indigo-900",
      icon: "⚡"
    }
  ];

  const whyPocketFund = [
    {
      title: "Unmatched Deal Flow",
      description: "under $2M, especially <$100K",
      icon: "💎",
      colors: [[34, 197, 94], [22, 163, 74]],
      containerColor: "bg-emerald-900"
    },
    {
      title: "India Advantage",
      description: "Analysts and operators at 10–20% global cost",
      icon: "🌍",
      colors: [[236, 72, 153], [219, 39, 119]],
      containerColor: "bg-pink-900"
    },
    {
      title: "Proven Track Record",
      description: "7 deals closed, $224K value created from $4K",
      icon: "📈",
      colors: [[14, 165, 233], [59, 130, 246]],
      containerColor: "bg-sky-600"
    },
    {
      title: "Speed & Depth",
      description: "We run founder outreach, due diligence, and LOI prep so you can focus on the decision, not the grind",
      icon: "⚡",
      colors: [[168, 85, 247], [147, 51, 234]],
      containerColor: "bg-purple-900"
    },
    {
      title: "Media Edge",
      description: "Strong brand + inbound visibility = unfair sourcing advantage",
      icon: "📺",
      colors: [[249, 115, 22], [234, 88, 12]],
      containerColor: "bg-orange-900"
    }
  ];

  const risksData = [
    {
      risk: "Deal quality inconsistency",
      mitigation: "Strong filters + manual validation",
      colors: [[239, 68, 68], [220, 38, 38]],
      containerColor: "bg-red-900"
    },
    {
      risk: "Operator mismatch",
      mitigation: "Trial-based onboarding + pipeline depth",
      colors: [[249, 115, 22], [234, 88, 12]],
      containerColor: "bg-orange-900"
    },
    {
      risk: "Founder negotiation friction",
      mitigation: "Warm intros + async deal flow",
      colors: [[168, 85, 247], [147, 51, 234]],
      containerColor: "bg-purple-900"
    },
    {
      risk: "Overlap with other buyers",
      mitigation: "Off-market exclusivity + fast execution",
      colors: [[14, 165, 233], [59, 130, 246]],
      containerColor: "bg-sky-600"
    }
  ];

  const goals2025 = [
    {
      text: "Help 100 clients close digital business acquisitions",
      icon: "🎯",
      color: "bg-emerald-900"
    },
    {
      text: "Generate $250K+ in buy-side advisory revenue",
      icon: "💰",
      color: "bg-pink-900"
    },
    {
      text: "Build largest operator pipeline in micro-PE globally",
      icon: "🌍",
      color: "bg-sky-600"
    },
    {
      text: "Maintain 10x+ capital efficiency in every deal we touch",
      icon: "⚡",
      color: "bg-purple-900"
    }
  ];

  const customerAvatars = [
    {
      title: "First-Time Buyers",
      subtitle: "Indie Acquirers",
      icon: "🎯",
      age: "22-35",
      profile: "Solo operators, indie hackers, product managers seeking freedom from corporate life",
      painPoints: [
        "Unsure how to evaluate deals",
        "Fear of buying a 'lemon'",
        "No operational talent post-acquisition",
        "Overwhelmed by low-quality listings"
      ],
      solutions: [
        "Curated off-market deal flow",
        "Red-flag screening & negotiation",
        "Operator placement & handholding",
        "First-time buyer playbooks"
      ],
      containerColor: "bg-emerald-900",
      colors: [[34, 197, 94], [22, 163, 74]]
    },
    {
      title: "Solo Capitalists",
      subtitle: "Creator-Led Holdcos",
      icon: "🚀",
      age: "27-45",
      profile: "Builders with capital from consulting, content, or agencies seeking portfolio growth",
      painPoints: [
        "Time-starved from other ventures",
        "Scaling challenges post-acquisition",
        "Hard to find quality small deals",
        "Need systematic approach"
      ],
      solutions: [
        "High-volume off-market sourcing",
        "Deep diligence & deal structuring",
        "Operator pipelines with rev-share",
        "Post-close scaling support"
      ],
      containerColor: "bg-pink-900",
      colors: [[236, 72, 153], [219, 39, 119]]
    },
    {
      title: "Emerging PE Funds",
      subtitle: "Family Offices",
      icon: "🏛️",
      age: "Professional",
      profile: "$1M-$20M AUM investors comfortable with $250K-$2M deals seeking efficiency",
      painPoints: [
        "Internal teams too expensive for <$1M",
        "Struggle finding vetted deals",
        "Slow integration & operator placement",
        "Need repeatable playbooks"
      ],
      solutions: [
        "End-to-end sourcing & diligence",
        "Cost-effective India-based teams",
        "Systematized operator handover",
        "Success-based pricing alignment"
      ],
      containerColor: "bg-sky-600",
      colors: [[14, 165, 233], [59, 130, 246]]
    },
    {
      title: "Indian Builders",
      subtitle: "Young Talent",
      icon: "⚡",
      age: "18-28",
      profile: "Engineers and grads from Tier-1/2 cities eager for entrepreneurship opportunities",
      painPoints: [
        "Traditional jobs lack growth/ownership",
        "Don't know how to enter startups",
        "Low pay for high-value work",
        "Limited access to capital"
      ],
      solutions: [
        "Rev-share & salary operator roles",
        "Hands-on training & playbooks",
        "Fast-track to digital entrepreneurship",
        "Micro-finance PE model access"
      ],
      containerColor: "bg-purple-900",
      colors: [[168, 85, 247], [147, 51, 234]]
    }
  ];

  return (
    <div className="min-h-screen w-full bg-slate-900 text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Main gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-400/15 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Additional ambient lights */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-pink-500/10 rounded-full blur-2xl animate-pulse-slower"></div>
      </div>

      {/* Enhanced grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 100% 60% at 50% 0%, #000 40%, transparent 100%)'
        }}
      ></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="py-20 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 mb-8">
              <span className="text-purple-300 font-semibold">Pocket Fund Performance Dashboard</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Track Record
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              From $4K to $224K+ in value creation. See how we&apos;re revolutionizing micro-acquisitions with our proven track record and global operations.
            </p>
          </motion.div>
        </div>

     

        {/* Customer Avatars Section */}
        <Section title="Who We Serve" subtitle="Four distinct customer segments, each with unique needs and solutions">
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {customerAvatars.map((avatar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <AvatarCard avatar={avatar} />
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Risks & Mitigation Section */}
        <Section title="Risk Management" subtitle="Transparent about challenges and how we address them">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {risksData.map((risk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <RiskCard risk={risk} />
              </motion.div>
            ))}
          </div>
        </Section>

        {/* 2025 Goals Section */}
        <Section title="2025 Vision" subtitle="Ambitious targets driving our growth and your success">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {goals2025.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GoalCard goal={goal} index={index} />
              </motion.div>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 px-4 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Scale Your Acquisitions?</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Join the entrepreneurs and funds who&apos;ve already discovered the Pocket Fund advantage.
              Let&apos;s discuss how we can accelerate your acquisition strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 text-center">
                Start Your First Deal
              </a>
              <a href="#contact" className="inline-block border border-purple-500/50 hover:border-purple-500 text-purple-300 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm text-center">
                View Case Studies
              </a>
            </div>
          </div>
        </motion.div>
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulse-slower 6s ease-in-out infinite; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

const Section = ({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) => (
  <div className="py-20 px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
    {children}
  </div>
);

const MetricCard = ({ data }: { data: any }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/10 group/canvas-card flex items-center justify-center w-full mx-auto p-6 relative h-[28rem] rounded-3xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30"
      style={{
        background: "rgba(15, 23, 42, 0.8)",
      }}
    >
      <Icon className="absolute h-8 w-8 -top-3 -left-3 text-white/20" />
      <Icon className="absolute h-8 w-8 -bottom-3 -left-3 text-white/20" />
      <Icon className="absolute h-8 w-8 -top-3 -right-3 text-white/20" />
      <Icon className="absolute h-8 w-8 -bottom-3 -right-3 text-white/20" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName={`${data.containerColor} rounded-3xl overflow-hidden`}
              colors={data.colors}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition-all duration-300 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-w-40 mx-auto flex flex-col items-center justify-center">
          <div className="text-7xl mb-6 transition-transform duration-300 group-hover/canvas-card:scale-110">{data.icon}</div>
          <MetricButton metric={data.metric} />
        </div>

        <div className="opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-2 transition-all duration-300 px-6">
          <h2 className="text-white text-3xl font-bold mb-4">{data.metric}</h2>
          <div className="text-5xl font-bold text-purple-400 mb-4">{data.value}</div>
          <p className="text-lg text-gray-300 leading-relaxed">{data.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

const AvatarCard = ({ avatar }: { avatar: any }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/10 group/canvas-card flex items-center justify-center w-full mx-auto p-6 relative min-h-[45rem] rounded-3xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30"
      style={{
        background: "rgba(15, 23, 42, 0.8)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 text-white/20" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 text-white/20" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 text-white/20" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 text-white/20" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName={`${avatar.containerColor} rounded-3xl overflow-hidden`}
              colors={avatar.colors}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 w-full">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition-all duration-300 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-w-40 mx-auto flex flex-col items-center justify-center">
          <div className="text-8xl mb-6 transition-transform duration-300 group-hover/canvas-card:scale-110">{avatar.icon}</div>
          <AvatarButton title={avatar.title} subtitle={avatar.subtitle} />
          <div className="mt-6 px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30">
            <span className="text-purple-300 text-lg font-medium">Age: {avatar.age}</span>
          </div>
        </div>

        <div className="opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-2 transition-all duration-300 px-4">
          <div className="text-center mb-8">
            <h2 className="text-white text-3xl font-bold mb-2">{avatar.title}</h2>
            <h3 className="text-purple-300 text-xl font-semibold mb-4">{avatar.subtitle}</h3>
            <p className="text-base leading-relaxed text-gray-300">
              {avatar.profile}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <h4 className="text-red-400 font-bold text-lg mb-4">Pain Points</h4>
              {avatar.painPoints.map((point: string, idx: number) => (
                <div key={idx} className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1 text-lg">×</span>
                  <span className="text-gray-300">{point}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h4 className="text-green-400 font-bold text-lg mb-4">Our Solutions</h4>
              {avatar.solutions.map((solution: string, idx: number) => (
                <div key={idx} className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1 text-lg">✓</span>
                  <span className="text-gray-300">{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RiskCard = ({ risk }: { risk: any }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/10 group/canvas-card flex items-center justify-center w-full mx-auto p-8 relative rounded-3xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-red-500/30"
      style={{
        background: "rgba(15, 23, 42, 0.8)",
      }}
    >
      <Icon className="absolute h-6 w-6 -top-2 -left-2 text-white/20" />
      <Icon className="absolute h-6 w-6 -bottom-2 -left-2 text-white/20" />
      <Icon className="absolute h-6 w-6 -top-2 -right-2 text-white/20" />
      <Icon className="absolute h-6 w-6 -bottom-2 -right-2 text-white/20" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full absolute inset-0"
          >
            <div className={`h-full w-full ${risk.containerColor} rounded-3xl overflow-hidden opacity-60`} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <span className="text-3xl mr-4">⚠️</span>
              <h4 className="text-red-400 font-bold text-xl">Risk</h4>
            </div>
            <p className="text-white font-semibold text-lg leading-relaxed">{risk.risk}</p>
          </div>

          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <span className="text-3xl mr-4">🛡️</span>
              <h4 className="text-green-400 font-bold text-xl">Mitigation</h4>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">{risk.mitigation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const GoalCard = ({ goal, index }: { goal: any; index: number }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/10 group/canvas-card flex items-center justify-center w-full mx-auto p-6 relative h-[18rem] rounded-3xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30"
      style={{
        background: "rgba(15, 23, 42, 0.8)",
      }}
    >
      <Icon className="absolute h-6 w-6 -top-2 -left-2 text-white/20" />
      <Icon className="absolute h-6 w-6 -bottom-2 -left-2 text-white/20" />
      <Icon className="absolute h-6 w-6 -top-2 -right-2 text-white/20" />
      <Icon className="absolute h-6 w-6 -bottom-2 -right-2 text-white/20" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full absolute inset-0"
          >
            <div className={`h-full w-full ${goal.color} rounded-3xl overflow-hidden opacity-60`} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center">
        <div className="text-6xl mb-6 transition-transform duration-300 group-hover/canvas-card:scale-110">{goal.icon}</div>
        <div className="bg-slate-950/80 rounded-full px-4 py-2 mb-6">
          <span className="text-purple-400 font-bold text-xl">{index + 1}</span>
        </div>
        <p className="text-white text-base font-medium leading-relaxed px-2">{goal.text}</p>
      </div>
    </div>
  );
};

const MetricButton = ({ metric }: { metric: string }) => {
  return (
    <button className="relative inline-flex overflow-hidden rounded-full p-[1px] transition-all duration-300 hover:scale-105">
      <span
        className="absolute inset-[-1000%] animate-spin"
        style={{
          background: 'conic-gradient(from 90deg at 50% 50%, #E2CBFF 0%, #393BB2 50%, #E2CBFF 100%)',
          animation: 'spin 2s linear infinite'
        }}
      />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-purple-400 backdrop-blur-3xl font-bold text-lg hover:text-purple-300 transition-colors duration-300">
        {metric}
      </span>
    </button>
  );
};

const AvatarButton = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <button className="relative inline-flex overflow-hidden rounded-full p-[1px] transition-all duration-300 hover:scale-105">
      <span
        className="absolute inset-[-1000%]"
        style={{
          background: 'conic-gradient(from 90deg at 50% 50%, #E2CBFF 0%, #393BB2 50%, #E2CBFF 100%)',
          animation: 'spin 2s linear infinite'
        }}
      />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-purple-400 backdrop-blur-3xl font-bold text-center transition-colors duration-300 hover:text-purple-300">
        <div>
          <div className="text-lg">{title}</div>
          <div className="text-sm opacity-80">{subtitle}</div>
        </div>
      </span>
    </button>
  );
};

const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  containerClassName,
  colors = [[255, 255, 255]],
  dotSize = 3
}: {
  animationSpeed?: number;
  containerClassName?: string;
  colors?: number[][];
  dotSize?: number;
}) => {
  return (
    <div className={`h-full relative bg-black ${containerClassName}`}>
      <div className="h-full w-full">
        {colors.map((color, index) => (
          <div
            key={index}
            className="absolute inset-0 opacity-50"
            style={{
              background: `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.8) 0%, transparent 50%)`,
              animation: `pulse ${animationSpeed}s ease-in-out infinite alternate`,
              animationDelay: `${index * 0.5}s`
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40" />
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

export default TrackRecord;