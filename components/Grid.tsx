import React from 'react';
import { ArrowRight, Target, TrendingUp, Users, CheckCircle, Zap, DollarSign, Calendar, Award, Star, Globe, Briefcase } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const acquisitions = [
    {
      name: "Sourcely",
      logoImage: "/sourcely.webp",
      description: "AI-powered academic search assistant with access to over 200 million papers and advanced search filters",
      url: "sourcely.net",
      price: 4000,
      type: "SaaS",
      status: "Acquired",
      technology: "AI Research"
    },
    {
      name: "The Empire Exchange",
      logoImage: "/jeditimes.webp",
      description: "Your bi-weekly dose of all the best loot from a galaxy far, far away sent straight to your inbox",
      url: "jeditimes.com",
      price: 3000,
      type: "Newsletter",
      subscribers: "6,000+",
      status: "Scaling"
    },
    {
      name: "UCAS Statement Generator",
      logoImage: "/slash.webp",
      description: "SaaS tool for generating UCAS statements for university applications",
      url: "ucasstatementgenerator.com",
      price: 3500,
      type: "SaaS",
      status: "Acquired",
      technology: "EdTech"
    },
    {
      name: "Ana - AI Language Tutor",
      logoImage: "/ana.webp",
      description: "Your personalized AI tutor to practice languages conversationally and improve speaking fluency",
      url: "anatutor.com",
      price: 5000,
      type: "WhatsApp Bot",
      status: "Acquired",
      technology: "AI Tutor"
    },
    {
      name: "Daily Wisdom",
      logoImage: "/dailywisdom.webp",
      description: "Spiritual newsletter delivering daily wisdom and inspiration to subscribers",
      url: "dailywisdom.so",
      price: 2000,
      type: "Newsletter",
      status: "Acquired"
    },
    {
      name: "Jobless",
      logoImage: "/slash.webp",
      description: "Your go-to source for tech jobs, tips, and real stories from builders, hackers, and doers",
      url: "joblessnews.beehiiv.com",
      price: 12500,
      type: "Newsletter",
      status: "Acquired"
    }
  ];

  const stats = [
    { label: "Total Acquisitions", value: "6", icon: Briefcase, color: "blue" },
    { label: "Total Investment", value: "$30K", icon: DollarSign, color: "green" },
    { label: "Target Growth", value: "5x", icon: TrendingUp, color: "purple" },
    { label: "Active Markets", value: "Global", icon: Globe, color: "orange" }
  ];

  const services = [
    {
      title: "Micro Acquisitions",
      description: "SaaS, newsletters, mobile apps, and niche content sites under $100K",
      icon: Target,
      color: "blue"
    },
    {
      title: "Buy-Side Advisory",
      description: "For solo buyers, creators, funds, and family offices",
      icon: Users,
      color: "green"
    },
    {
      title: "Deal Flow Engine",
      description: "Surfaces 30–50 off-market opportunities weekly",
      icon: TrendingUp,
      color: "purple"
    },
    {
      title: "Operator Placement",
      description: "Revenue-linked incentives post-acquisition",
      icon: CheckCircle,
      color: "orange"
    },
    {
      title: "Exit Planning",
      description: "For portfolio companies with 6–18 month windows",
      icon: Calendar,
      color: "pink"
    },
    {
      title: "Growth Acceleration",
      description: "AI workflows, automation, and operational excellence",
      icon: Zap,
      color: "cyan"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-green-400/10 rounded-full blur-2xl animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-orange-500/8 rounded-full blur-2xl animate-[pulse_8s_ease-in-out_infinite]"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10">
        {/* About Section - Enhanced Design */}
        <div className="py-24 px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left Side - Content */}
              <div className="space-y-8 max-w-xl mx-auto lg:mx-0">
                {/* About Us Label */}
                <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-8">
                  <Target className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-sm font-semibold text-blue-400 tracking-wide">ABOUT US</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-white mb-8 animate-[fadeInUp_0.8s_ease-out]">
                  Pocket Fund
                </h1>

                {/* Description */}
                <div className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
                  <p className="mb-6">
                    At <span className="text-white font-semibold">Pocket Fund</span>, we are dedicated to transforming the
                    acquisition landscape for micro digital businesses.
                  </p>
                  <p className="mb-6">
                    Headquartered in Mumbai, India, and operating on a global
                    scale, our firm specializes in acquiring small online businesses,
                    targeting investments between <span className="text-white font-semibold">$2,000 and
                      $15,000</span>.
                  </p>
                  <p>
                    With over <span className="text-white font-semibold">2 years of experience</span>, we have honed
                    our expertise in the SaaS, newsletter, and digital content sectors,
                    enabling us to deliver unparalleled results for our portfolio companies.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-4 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
                  <button className="group flex items-center text-white text-lg font-medium hover:text-white transition-colors duration-300">
                    <span className="border-b-2 border-white group-hover:border-white transition-colors duration-300 pb-1">
                      Start Your Journey Today
                    </span>
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Right Side - Stats Grid */}
              <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto lg:mx-0">
                {/* Stat 1 */}
                <div className="group animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
                  <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500 hover:scale-105">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none mb-3">
                      $30K<span className="text-blue-500">+</span>
                    </div>
                    <div className="text-gray-400 text-sm font-medium">
                      Capital Deployed
                    </div>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="group animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
                  <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-500 hover:scale-105">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none mb-3">
                      2<span className="text-green-500">+</span>
                    </div>
                    <div className="text-gray-400 text-sm font-medium">
                      Years of experience
                    </div>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="group animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
                  <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none mb-3">
                      6<span className="text-purple-500">+</span>
                    </div>
                    <div className="text-gray-400 text-sm font-medium">
                      Portfolio companies
                    </div>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="group animate-[fadeInUp_0.8s_ease-out_0.5s_both]">
                  <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-500 hover:scale-105">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none mb-3">
                      50<span className="text-orange-500">+</span>
                    </div>
                    <div className="text-gray-400 text-sm font-medium">
                      Deals analyzed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg.jpg"
              alt="Hero Background"
              fill
              priority
              className="object-cover"
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
          </div>

          <div className="max-w-8xl mx-auto text-center">
            <div className="inline-flex items-center bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-full px-8 py-4 mb-12 shadow-2xl">
              <Award className="w-6 h-6 text-blue-400 mr-3" />
              <span className="text-sm font-medium text-gray-300 tracking-wide">First-of-its-kind Micro Private Equity Firm</span>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-16">
              We&apos;re on a mission to{' '}
              <span className="text-white font-semibold">democratize online business acquisitions</span>{' '}
              and empower a new generation of digital entrepreneurs through hands-on ownership, transparency, and operational excellence.
            </p>
          </div>
        </div>

        {/* Company Snapshot */}
        <div className="relative w-full py-20 px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/pattern-bg.jpg"
              alt="Pattern Background"
              fill
              className="object-cover opacity-10"
              sizes="100vw"
              quality={75}
            />
          </div>

          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-full px-8 py-4 mb-12">
                <Target className="w-6 h-6 text-blue-400 mr-3" />
                <span className="text-sm font-semibold text-blue-400 tracking-wide">COMPANY SNAPSHOT</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                Your <span className="text-blue-400">Partner</span> in Growth
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                A specialized micro private equity firm focused on creating value through strategic acquisitions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Core Focus */}
              <div className="relative group">
                <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Core Focus</h3>
                      <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg">Advising acquisitions below $5M</p>
                </div>
              </div>

              {/* Deal Flow Engine */}
              <div className="relative group">
                <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Deal Flow Engine</h3>
                      <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg">30-50 active deal sources</p>
                </div>
              </div>

              {/* Post-Acquisition */}
              <div className="relative group">
                <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Post-Acquisition</h3>
                      <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg">Transition support &amp; exit planning</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 mb-40">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-24">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-green-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-8 py-4 mb-12 shadow-lg">
                <Target className="w-6 h-6 text-blue-400 mr-3" />
                <span className="text-sm font-semibold text-blue-400 tracking-wide">OUR FOUNDATION</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
                Mission &amp; <span className="text-blue-400">Vision</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
                What drives us forward and where we&apos;re headed
              </p>
            </div>

            {/* New Layout - Stacked with Central Divider */}
            <div className="max-w-7xl mx-auto relative">
              {/* Central Connecting Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-green-500/50 transform -translate-x-1/2 hidden lg:block"></div>

              {/* Mission Card - Left */}
              <div className="relative mb-16 lg:mb-32">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                  {/* Mission Content */}
                  <div className="lg:pr-16 mb-8 lg:mb-0">
                    <div className="relative bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-blue-500/30 rounded-3xl p-12 overflow-hidden hover:scale-105 transition-all duration-700 group">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative z-10">
                        <div className="flex items-center mb-8">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                            <Target className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-4xl font-bold text-white mb-2">Mission</h3>
                            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                          </div>
                        </div>

                        <p className="text-gray-300 text-xl leading-relaxed mb-8">
                          Make buying a business as accessible as buying a used car. Pocket Fund empowers builders and investors to acquire and grow micro digital assets with confidence, clarity, and operating leverage.
                        </p>

                        <div className="flex items-center text-blue-400 font-semibold">
                          <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                          <span>Democratizing Digital Acquisitions</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mission Visual Element */}
                  <div className="lg:pl-16 flex justify-center lg:justify-start">
                    <div className="relative">
                      <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl absolute inset-0"></div>
                      <div className="w-64 h-64 bg-gray-900/80 backdrop-blur-sm border border-blue-500/30 rounded-3xl flex items-center justify-center relative z-10 hover:scale-110 transition-all duration-500">
                        <div className="text-center">
                          <div className="text-6xl mb-4">🎯</div>
                          <div className="text-blue-400 font-bold text-xl">Accessible</div>
                          <div className="text-gray-400">Business Buying</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vision Card - Right */}
              <div className="relative">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                  {/* Vision Visual Element */}
                  <div className="lg:pr-16 flex justify-center lg:justify-end order-2 lg:order-1 mb-8 lg:mb-0">
                    <div className="relative">
                      <div className="w-80 h-80 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl absolute inset-0"></div>
                      <div className="w-64 h-64 bg-gray-900/80 backdrop-blur-sm border border-green-500/30 rounded-3xl flex items-center justify-center relative z-10 hover:scale-110 transition-all duration-500">
                        <div className="text-center">
                          <div className="text-6xl mb-4">🚀</div>
                          <div className="text-green-400 font-bold text-xl">Next-Gen</div>
                          <div className="text-gray-400">Private Equity</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vision Content */}
                  <div className="lg:pl-16 order-1 lg:order-2">
                    <div className="relative bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-blue-500/10 border border-green-500/30 rounded-3xl p-12 overflow-hidden hover:scale-105 transition-all duration-700 group">
                      <div className="absolute top-0 left-0 w-40 h-40 bg-green-500/10 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative z-10">
                        <div className="flex items-center mb-8">
                          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                            <TrendingUp className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-4xl font-bold text-white mb-2">Vision</h3>
                            <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                          </div>
                        </div>

                        <p className="text-gray-300 text-xl leading-relaxed mb-8">
                          Redefine private equity for a new generation — operator-led, India-powered, and globally scalable. Become the category-defining firm in the &lt;$1M digital M&A space.
                        </p>

                        <div className="flex items-center text-green-400 font-semibold">
                          <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                          <span>Category-Defining Innovation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="py-20 px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                What We <span className="text-blue-400">Do</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                We&apos;re not just investors, we&apos;re builders
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div key={service.title} className="relative group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <service.icon className="w-12 h-12 text-blue-400 mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-white mb-4 relative z-10">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed relative z-10">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <div className="py-20 px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-8xl mx-auto">
            {/* Left Side */}
            <div>
              <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-12">
                <Target className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-sm font-semibold text-blue-400 tracking-wide">WHAT WE DO</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-12 text-white leading-tight">
                Democratizing Online Business{' '}
                <span className="text-blue-400">Acquisitions</span>
              </h2>

              <div className="space-y-8 text-gray-300 text-xl leading-relaxed mb-16">
                <p>
                  Pocket Fund is a <span className="text-white font-medium">micro private equity firm</span> that acquires, builds, and sells small online businesses. With a focus on transparency, speed, and operational excellence, we work with indie founders to identify untapped potential in digital assets.
                </p>

                <p>
                  We don&apos;t just acquire companies—we turn them into <span className="text-blue-400 font-medium">case studies for entrepreneurship through acquisition</span>, applying systems, automation, and operational cleanups to unlock hidden value through content marketing and AI workflows.
                </p>
              </div>

              {/* Value Props */}
              <div className="grid grid-cols-3 gap-8 mb-16">
                {[
                  { icon: Zap, label: "Transparency", color: "blue" },
                  { icon: TrendingUp, label: "Speed", color: "green" },
                  { icon: Award, label: "Excellence", color: "purple" }
                ].map((prop, index) => (
                  <div key={prop.label} className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center hover:border-blue-500/50 transition-all duration-500 hover:scale-105">
                    <prop.icon className="w-10 h-10 text-blue-400 mx-auto mb-4 relative z-10" />
                    <div className="text-white font-semibold text-base relative z-10">{prop.label}</div>
                  </div>
                ))}
              </div>

              {/* Advisory Services */}
              <div className="relative bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10 border border-orange-500/30 rounded-3xl p-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"></div>
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center relative z-10">
                  <Users className="w-7 h-7 text-orange-400 mr-4" />
                  Advisory Services
                </h4>
                <p className="text-gray-300 mb-6 text-lg relative z-10">
                  We also advise SaaS companies with <span className="text-white font-semibold">$30k - $300k MRR</span> that are highly profitable with small teams.
                </p>
                <div className="flex items-center text-orange-400 font-medium relative z-10">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  <span className="text-lg">Strategic guidance for profitable growth</span>
                </div>
              </div>
            </div>

            {/* Right Side - Process */}
            <div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-12 overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>

                <h3 className="text-4xl font-bold text-white mb-16 relative z-10">Our Proven Process</h3>

                <div className="space-y-12 relative z-10">
                  {[
                    { num: "1", title: "Search & Buy", desc: "Identify and acquire undervalued online businesses", gradient: "from-blue-500 to-blue-600" },
                    { num: "2", title: "Optimize & Scale", desc: "Run for 12-18 months, targeting 5x valuation growth", gradient: "from-orange-500 to-red-500" },
                    { num: "3", title: "Strategic Exit", desc: "Sell the optimized business for maximum returns", gradient: "from-green-500 to-green-600" }
                  ].map((step) => (
                    <div key={step.num} className="flex items-start space-x-8 group">
                      <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        {step.num}
                      </div>
                      <div className="flex-1 pt-4">
                        <h4 className="text-white font-bold text-xl mb-3">{step.title}</h4>
                        <p className="text-gray-400 text-lg">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 pt-12 border-t border-gray-800 relative z-10">
                  <div className="text-center">
                    <div className="text-6xl font-black text-green-400 mb-3">5x</div>
                    <div className="text-gray-400 text-base font-medium tracking-wide uppercase">Target Valuation Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="py-20 px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-8 py-4 mb-12">
                <Award className="w-6 h-6 text-green-400 mr-3" />
                <span className="text-sm font-semibold text-green-400 tracking-wide">PORTFOLIO COMPANIES</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                Success <span className="text-green-400">Stories</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                Real acquisitions, real growth, real results
              </p>
            </div>


            {/* Acquisition Cards */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
              {acquisitions.map((acquisition, index) => (
                <div key={acquisition.name} className="relative group bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-green-500/50 transition-all duration-700 hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Header */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-800/50 rounded-xl flex items-center justify-center border border-gray-700/50 overflow-hidden hover:scale-105 transition-transform duration-300">
                        <Image
                          src={acquisition.logoImage}
                          alt={`${acquisition.name} logo`}
                          width={56}
                          height={56}
                          className="object-contain p-1"
                        />
                      </div>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${acquisition.status === 'Scaling'
                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                      : 'bg-green-500/20 text-green-400 border border-green-500/30'
                      }`}>
                      {acquisition.status}
                    </span>
                  </div>

                  {/* Company Info */}
                  <div className="mb-6 relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-3">{acquisition.name}</h3>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                        {acquisition.type}
                      </span>
                      <span className="text-gray-500 text-sm">{acquisition.url}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-base leading-relaxed mb-8 relative z-10 line-clamp-3">
                    {acquisition.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700/50 hover:border-green-500/30 transition-colors duration-300">
                      <div className="text-green-400 font-bold text-lg">
                        ${acquisition.price.toLocaleString()}
                      </div>
                      <div className="text-gray-400 text-xs font-medium mt-1">Purchase Price</div>
                    </div>

                    {acquisition.subscribers ? (
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700/50 hover:border-blue-500/30 transition-colors duration-300">
                        <div className="text-blue-400 font-bold text-lg">{acquisition.subscribers}</div>
                        <div className="text-gray-400 text-xs font-medium mt-1">Subscribers</div>
                      </div>
                    ) : (
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700/50 hover:border-purple-500/30 transition-colors duration-300">
                        <div className="text-purple-400 font-bold text-sm">
                          {acquisition.technology || 'Digital'}
                        </div>
                        <div className="text-gray-400 text-xs font-medium mt-1">Technology</div>
                      </div>
                    )}
                  </div>

                  {/* Growth Indicator */}
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center text-green-400 text-sm font-medium">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      <span>5x Target Growth</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="relative bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 border border-green-500/30 rounded-3xl p-12 max-w-4xl mx-auto overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <Star className="w-8 h-8 text-yellow-400 mr-3" />
                    <h3 className="text-3xl font-bold text-white">Want to See Your Business Here?</h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                    We&apos;re actively seeking undervalued digital assets for our next acquisition cycle.
                    Join our portfolio of successful businesses and unlock your company&apos;s potential.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-green-500/20 text-green-400 px-8 py-4 rounded-full font-semibold border border-green-500/30 hover:bg-green-500/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                      Sell Your Business
                    </button>
                    <button className="bg-blue-500/20 text-blue-400 px-8 py-4 rounded-full font-semibold border border-blue-500/30 hover:bg-blue-500/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                      Partner With Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Section */}
        <div className="py-20 px-6 md:px-12 lg:px-16 xl:px-24 bg-gradient-to-b from-gray-900/50 to-gray-900/30">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-full px-8 py-4 mb-12">
                <TrendingUp className="w-6 h-6 text-blue-400 mr-3" />
                <span className="text-sm font-semibold text-blue-400 tracking-wide">OUR IMPACT</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                By The <span className="text-blue-400">Numbers</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                Driving exceptional results in the micro private equity space
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Deal Volume */}
              <div className="relative group">
                <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">30-50</h3>
                      <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg">Deals evaluated per week</p>
                </div>
              </div>

              {/* Multiples */}
              <div className="relative group">
                <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">2-4x</h3>
                      <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg">Average multiples (vs 5-6x market)</p>
                </div>
              </div>

              {/* Community */}
              <div className="relative group">
                <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">75,000+</h3>
                      <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg">Active community members</p>
                </div>
              </div>

              {/* Impressions */}
              <div className="relative group">
                <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">1M+</h3>
                      <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg">Monthly impressions</p>
                </div>
              </div>

              {/* Acquisitions */}
              <div className="relative group">
                <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">7</h3>
                      <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg">Successful acquisitions completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="py-20 px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-8xl mx-auto text-center">
            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-16 overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>

              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Ready to <span className="text-blue-400">Transform</span> Digital Commerce?
                </h3>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                  Join us in democratizing business acquisitions and building the future of micro private equity.
                  Whether you&apos;re a founder looking to exit or an investor seeking opportunities, we&apos;re here to help.
                </p>

                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="group">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105">
                      <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-white mb-3">For Sellers</h4>
                      <p className="text-gray-400">Exit with confidence and transparency</p>
                    </div>
                  </div>

                  <div className="group">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-500 hover:scale-105">
                      <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-white mb-3">For Investors</h4>
                      <p className="text-gray-400">Access curated deal flow and expertise</p>
                    </div>
                  </div>

                  <div className="group">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
                      <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-white mb-3">For Partners</h4>
                      <p className="text-gray-400">Collaborate on the future of digital M&A</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Line clamp utility */
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Enhanced hover effects */
        .group:hover .group-hover\\:scale-105 {
          transform: scale(1.05);
        }

        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }

        .group:hover .group-hover\\:rotate-3 {
          transform: rotate(3deg) scale(1.1);
        }

        .group:hover .group-hover\\:rotate-6 {
          transform: rotate(6deg) scale(1.1);
        }

        .group:hover .group-hover\\:-rotate-6 {
          transform: rotate(-6deg) scale(1.1);
        }

        .group:hover .group-hover\\:translate-x-1 {
          transform: translateX(0.25rem);
        }

        /* Custom backdrop blur */
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
        }

        .backdrop-blur-md {
          backdrop-filter: blur(12px);
        }

        /* Smooth transitions */
        * {
          transition-property: transform, opacity, border-color, background-color, box-shadow;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Enhanced shadow effects */
        .shadow-2xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        /* Text rendering improvements */
        .tracking-wide {
          letter-spacing: 0.025em;
        }

        .leading-tight {
          line-height: 1.25;
        }

        .leading-relaxed {
          line-height: 1.625;
        }

        /* Custom button hover effects */
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        /* Background clip text support */
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style>
    </div>
  );
};

export default About;