export const navItems = [
  { name: "About", link: "/#grid" },
  { name: "Process", link: "/#timeline" },
  { name: "Companies", link: "/companies" },
  { name: "Track Record", link: "/#recentprojects" },
  { name: "Testimonial", link: "/#testimonial" },
  { name: "Contact", link: "/#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "We prioritize founder collaboration, fostering transparent communication throughout the acquisition process",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "We're flexible across all time zones for global deal sourcing",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Our acquisition focus",
    description: "SaaS • Mobile Apps • Content Sites • Niche Services",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Micro PE firm passionate about digital entrepreneurship through acquisition.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building our next acquisition portfolio",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to sell your digital business or explore acquisition opportunities?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
export const projects = [
  {
    id: 1,
    title: "TechNova Solutions",
    des: "Leading AI-powered analytics platform acquired to enhance our machine learning capabilities and data processing infrastructure.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/technova.com",
  },
  {
    id: 2,
    title: "CloudStream Technologies",
    des: "Video streaming and conferencing platform acquisition to expand our digital communication solutions portfolio.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/cloudstream.com",
  },
  {
    id: 3,
    title: "PixelCraft AI",
    des: "Revolutionary image processing and AI-powered design tools company acquired to strengthen our creative software division.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/pixelcraft.com",
  },
  {
    id: 4,
    title: "MobileFirst Dynamics",
    des: "Premium mobile app development studio specializing in interactive 3D experiences and cutting-edge user interfaces.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/mobilefirst.com",
  },
];

export const testimonials = [
  {
    quote:
      "The acquisition of our company by this organization has been transformative. Their strategic vision, seamless integration process, and commitment to preserving our company culture while scaling our operations has exceeded all expectations. The resources and expertise they've provided have accelerated our growth exponentially.",
    name: "Sarah Chen",
    title: "Former CEO of TechNova Solutions",
  },
  {
    quote:
      "Working with this acquisition team was exceptional. They understood our business model, respected our team, and provided the perfect environment for us to thrive at scale. The synergies created have opened doors we never imagined possible.",
    name: "Marcus Rodriguez",
    title: "Co-Founder of CloudStream Technologies",
  },
  {
    quote:
      "The acquisition process was handled with utmost professionalism and transparency. They've maintained our innovative spirit while providing the resources to reach global markets. Our team feels valued and our product has reached new heights.",
    name: "Emily Watson",
    title: "CTO of PixelCraft AI",
  },
  {
    quote:
      "This partnership through acquisition has been a game-changer. The parent company's infrastructure and market reach, combined with our specialized expertise, has created something truly powerful. We couldn't be happier with the decision.",
    name: "David Kim",
    title: "Creative Director of MobileFirst Dynamics",
  },
  {
    quote:
      "The strategic acquisition has allowed us to focus purely on innovation while leveraging enterprise-level resources. The cultural fit was perfect, and the growth opportunities are endless. It's been an incredible journey.",
    name: "Lisa Thompson",
    title: "Head of Product at TechNova Solutions",
  },
];
export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];



export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];


