// Step 1: Apne assets folder se 12 images import karein

import member1 from "../assets/Dinesh-Kumar-Tiwari-Director.webp";
import member2 from "../assets/Kamlesh-Kumar-Pandey-Director-1236x1236-1.webp";
import member3 from "../assets/Jagat-Kishore-Prasad.webp";
import member4 from "../assets/Akash-Kumar-Director-988x988-1.webp";
import member5 from "../assets/Sangam-Shahi.webp";
import member6 from "../assets/Sarvesh-Kumar-Shukla.webp";
import member7 from "../assets/Tajinder-Saini.webp";
import member8 from "../assets/Paras-Sales-Head-1236x1236-1.webp";
import member9 from "../assets/Sachin-Jagannath-Vast.webp";
import member10 from "../assets/Himani-Dwivedi-Sales-Manager.webp";
import member11 from "../assets/Deepanshi-Shrivastava-HR-Manager.webp";
import mainpageg  from "../assets/Gemini_Generated_Image_ro5a4kro5a4kro5a.png";


import { FiShield, FiFileText, FiAnchor, FiCheckSquare, FiTruck, FiZap,
   FiGlobe,FiBox,FiLock,FiServer,FiPackage,FiNavigation,FiMapPin,FiTrendingUp,
  FiDollarSign,FiCode,FiCloud,FiHeadphones,FiBarChart2,FiBriefcase,FiCpu,
   FiLayers,FiPercent,FiAward,FiClock, 
 } from "react-icons/fi";

import { BsStars } from "react-icons/bs";
import { SiDhl, SiShopify, SiFedex, SiUps, SiUsps, SiEbay } from "react-icons/si";

////////////////// home.jsx ///////////////////


// Dynamic Brand Partners List
export const partners = [
  { name: "DHL", icon: SiDhl },
  { name: "Shopify", icon: SiShopify },
  { name: "FedEx", icon: SiFedex },
  { name: "Aramex", text: "aramex" },
  { name: "USPS", icon: SiUsps },
  { name: "BlueDart", text: "BLUE DART" },
  { name: "DTDC", text: "DTDC" },
  { name: "eBay", icon: SiEbay },
];


export const testimonials = [
  {
    id: 1,
    quote: "DFL Group has been an incredible partner for our business. Their reliability, communication and on-time delivery are unmatched. We highly recommend them!",
    name: "Rahul Sharma",
    role: "Operations Manager, TechCorp",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    quote: "Exceptional logistics support and seamless tracking. Their dedicated team ensures our cargo reaches safely every single time.",
    name: "Ananya Patel",
    role: "Supply Chain Lead, GlobalTrade",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
];

export const bottomstats = [
  { id: 1, value: "1000+", label: "Happy Clients", icon: "👥" },
  { id: 2, value: "99.6%", label: "On-Time Delivery", icon: "⏱️" },
  { id: 3, value: "5+", label: "Years of Excellence", icon: "📍" },
];












////////////////////////////////////////////////

export const LOGISTICS_IMAGES = {
  about:mainpageg,
  heroVan:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  warehouse:
    "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1000&q=80",
  cargoAir:
    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1000&q=80",
  containerShip:
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80",
  supportAgent:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  trackingBox:
    "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=800&q=80",
};

export const services = [
  {
    id: "01",
    name: "Air Freight",
    path: "/services/freight-forwarding", // Path Key
    description:
      "Fast, Secure air cargo services for time-sensitive shipments worldwide with realtime tracking.",
    tag: "Priority Air & Land",
    image: LOGISTICS_IMAGES.heroVan,
    features: [
      "Express",
      "Global coverage",
      "Secure handling",
      "Real-time tracking",
    ],
  },
  {
    id: "02",
    name: "Ocean Freight",
    path: "/services/ocean-freight", // Path Key
    description:
      "Cost-effective sea freight solutions for large volume shipments with container & LCL options.",
    tag: "Ocean & Air Cargo",
    image: LOGISTICS_IMAGES.cargoAir,
    features: [
      "Cost-effective",
      "Large capacity",
      "FCL & LCL options",
      "Port-to-port service",
    ],
  },
  {
    id: "03",
    name: "Inland Transport",
    path: "/inland-transport", // Path Key
    description:
      "Reliable ground transportation services covering major routes with flexible scheduling.",
    tag: "inland transportation",
    image: LOGISTICS_IMAGES.containerShip,
    features: [
      "Flexible scheduling",
      "Door-to-door service",
      "Regional coverage",
      "Various vehicle sizes",
    ],
  },
  {
    id: "04",
    name: "Customs Clearance",
    path: "/services/custom-clearance", 
    description:
      "Fast courier services for urgent deliveries with same-day and next-day delivery options.",
    tag: "Customs Express",
    image: LOGISTICS_IMAGES.containerShip,
    features: [
      "Same-day delivery",
      "Express options",
      "Document delivery",
      "Proof of delivery",
    ],
  },
];

export const skills = [
  "Air Freight",
  "Last-Mile Express",
  "Customs Clearance",
  "Real-Time Telematics",
  "Cold Chain",
  "B2B Distribution",
]; 

export const working = [
   {
    id: "01",
    name: "Book Your Shipment",
    description:
      "Quick online booking with instant quotes and real-time pricing for all your logistics.",
   },
    {
    id: "02",
    name: "Best Pricing",
    description:
      "Real-time monitoring throughout transit with detailed updates and milestone notifications.",
   },
    {
    id: "03",
    name: "Manage Payment",
    description:
      "Flexible payment options including Pay Later terms and automated invoicing systems.",
   },
    {
    id: "04",
    name: "Shipment Delivered",
    description:
      "Quick online booking with instant quotes and real-time pricing for all your logistics.",
   }
]

export const stats = [
  { value: 40, suffix: "K+", label: "Daily Express Parcels" },
  { value: 5000, suffix: "K+", label: "Satisfied Customers" },
  { value: 500, suffix: "+", label: "Regional Hubs & Hub-Stores" },
  { value: 99.8, suffix: "%", label: "On-Time Delivery Rate" },
];

export const highlights = [
  "MOVING YOUR BUSINESS FORWARD.",
  "UNMATECHED LOGISTICS GLOBAL REACH",
 "24/7 DEDICATED CUSTOMER SUPPORT TEAM",
  "SECURE HANDLING FOR HIGH_VALUE ASSETS"
];
export const footerData = {
  companyInfo: {
    brandName: "DFL Express",
    legalName: "Demira Freight Linkers India Pvt Ltd",
    tagline: "Tailored for speed, reliability, and precision—your trusted partner in global freight forwarding and express delivery.",
    website: "www.thedflexpress.com",
    websiteUrl: "https://www.thedflexpress.com"
  },
  socialLinks: [
    { name: "Facebook", url: "https://facebook.com", icon: "facebook" },
    { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "X", url: "https://x.com", icon: "x" }
  ],
  globalOffices: [
    { country: "India", phone: "+91 93551 51122" },
    { country: "Thailand", phone: "+66 623657862" },
    { country: "UAE", phone: "+97 150 399 8139" },
    { country: "UK", phone: "+44 7388 653479" }
  ],
  servicesList: [
    { label: "Air Freight", path: "/services/freight-forwarding" },
    { label: "Ocean Freight", path: "/services/ocean-freight" },
    { label: "Customs Clearance", path: "/services/custom-clearance" }
  ],
  legalLinks: [
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms & Conditions", path: "/terms-conditions" }
  ]
};

export const teamMembers = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Founder & CEO",
    image: member1,
    bio: "15+ years of strategic leadership in global logistics & supply chain management.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "rajesh@thedflgroup.com",
    },
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Chief Operating Officer (COO)",
    image: member2,
    bio: "Specializes in operational scaling, fleet logistics, and client relations.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "priya@thedflgroup.com",
    },
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Head of Freight & Cargo",
    image: member3,
    bio: "Expert in air & sea freight forwarding with focus on cross-border transport.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "amit@thedflgroup.com",
    },
  },
  {
    id: 4,
    name: "Sneha Gupta",
    role: "Chief Financial Officer (CFO)",
    image: member4,
    bio: "Manages financial strategy, risk management, and corporate investments.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "sneha@thedflgroup.com",
    },
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Supply Chain Director",
    image: member5,
    bio: "Optimizing end-to-end supply chain processes and warehouse systems.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "vikram@thedflgroup.com",
    },
  },
  {
    id: 6,
    name: "Ananya Roy",
    role: "Head of Customs & Compliance",
    image: member6,
    bio: "Ensures legal clearances, international trade regulations, and documentation.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "ananya@thedflgroup.com",
    },
  },
  {
    id: 7,
    name: "Rohan Malhotra",
    role: "IT & Tracking Systems Lead",
    image: member7,
    bio: "Architect behind the real-time package tracking and digital dashboard.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "rohan@thedflgroup.com",
    },
  },
  {
    id: 8,
    name: "Kavita Rao",
    role: "Client Success Manager",
    image: member8,
    bio: "Dedicated to enterprise client relationships and 24/7 support execution.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "kavita@thedflgroup.com",
    },
  },
  {
    id: 9,
    name: "Suresh Menon",
    role: "Warehouse Operations Head",
    image: member9,
    bio: "Overlooking inventory control, fulfillment centers, and safety standards.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "suresh@thedflgroup.com",
    },
  },
  {
    id: 10,
    name: "Pooja Joshi",
    role: "HR & Talent Director",
    image: member10,
    bio: "Building strong corporate culture and managing logistics staff nationwide.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "pooja@thedflgroup.com",
    },
  },
  {
    id: 11,
    name: "Manish Reddy",
    role: "Fleet & Transport Manager",
    image: member11,
    bio: "In charge of ground vehicle logistics, route planning, and fuel efficiency.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "manish@thedflgroup.com",
    },
  },
];



export const techFeaturesData = [
  {
    id: "tech-1",
    icon: FiShield,
    title: "Global Logistics Pro Assured",
    description: "Premium shipping guarantee with comprehensive protection and insurance coverage for peace of mind.",
    tag: "Protected"
  },
  {
    id: "tech-2",
    icon: FiFileText,
    title: "Freight Contracts",
    description: "Long-term partnerships with competitive rates, priority service, and dedicated account management.",
    tag: "Enterprise"
  },
  {
    id: "tech-3",
    icon: FiAnchor,
    title: "NVOCC Services",
    description: "Instant booking for urgent shipments with real-time pricing and immediate capacity confirmation.",
    tag: "Instant Spot"
  },
  {
    id: "tech-4",
    icon: FiCheckSquare,
    title: "Customs Clearance",
    description: "Flexible payment terms with extended credit options and customizable billing cycles for better cash flow.",
    tag: "Hassle-Free"
  },
  {
    id: "tech-5",
    icon: FiTruck,
    title: "RORO Services",
    description: "Earn points on every shipment for future discounts, upgrades, and exclusive service benefits.",
    tag: "Rewards"
  },
  {
    id: "tech-6",
    icon: FiZap,
    title: "Priority Access Points",
    description: "VIP service benefits including expedited handling, priority scheduling, and dedicated support channels.",
    tag: "VIP Access"
  }
];


/////////////////// about.jsx ////////////////////////

export const aboutCoreValues = [
  {
    title: "Honesty & Transparency",
    desc: "We uphold the highest ethical standards in all our global operations.",
    icon: FiShield,
  },
  {
    title: "Innovation & Excellence",
    desc: "Exceeding expectations with dependable, timely, and smart logistics.",
    icon: FiAward,
  },
  {
    title: "Sustainability",
    desc: "Adopting green practices and sustainable logistics solutions worldwide.",
    icon: FiGlobe,
  },
  {
    title: "Together We Grow",
    desc: "Building long-lasting, mutually beneficial partnerships with clients.",
    icon: FiTrendingUp,
  },
];


export const aboutHighlights = [
  "Air Freight & Sea Freight",
  "Customs Clearance Expert",
  "Multimodal Transportation",
  "Tailored Courier Services",
];


/////////////////  AirFreight.jsx  ///////////////////


export const AirFreightkeyAdvantages = [
  {
    icon: FiClock, 
    title: "Rapid Delivery Times",
    description:
      "Drastically minimizes transit time for time-sensitive, high-priority, and perishable cargo.",
  },
  {
    icon: FiGlobe,
    title: "Global Reach & Connectivity",
    description:
      "Seamless international and domestic network bridging key commercial hubs worldwide.",
  },
  {
    icon: FiShield,
    title: "High Security & Safety",
    description:
      "Strict airport security controls and delicate handling standards for high-value consignments.",
  },
  {
    icon: BsStars,
    title: "Smart Suggestions Engine",
    description:
      "Intelligent route optimization to select the most cost-effective airline carriers automatically.",
  },
];


export const endToEndServices = [
  {
    title: "End-to-End Cargo Handling",
    subtitle: "Complete Door-to-Door Logistics",
    description: "From initial cargo pickup to packaging, airport transfers, loading, and final doorstep delivery, we handle every link in the supply chain.",
    badge: "Full Service",
    features: [
      "First-mile pickup & custom packaging",
      "Airport loading & unloading protocols",
      "Short & long-term airport warehousing",
      "Final destination last-mile delivery",
    ],
  },
  {
    title: "Customs & Airport Warehousing",
    subtitle: "Streamlined Port Clearance",
    description: "Strategically located warehousing near major international airport terminals paired with fully digitized customs documentation processes.",
    badge: "Zero Delays",
    features: [
      "Near-airport strategic storage space",
      "Digitized customs documentation",
      "Direct airline cargo terminal access",
      "Regulatory compliance & documentation",
    ],
  },
];


export const visionHighlights = [
  { title: "Cargo Pickup & Packaging", desc: "Specialized, temperature-controlled, and impact-resistant packaging tailored for air transit." },
  { title: "Warehouse & Airport Storage", desc: "Strategic warehouse hubs situated directly adjacent to top international airport terminals." },
  { title: "Automated Customs Clearance", desc: "100% digital paperwork clearance to bypass manual processing bottlenecks." },
];

export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=800&q=80", label: "Global Express Air Cargo" },
  { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", label: "Strategic Airport Hub Storage" },
  { src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80", label: "Time-Critical Global Transit" },
];



/////////////////////  AirFreightForwarding  //////////////////

  export const AirEndToEndServices = [
    { title: "Cargo Pick-up & Transport", detail: "Doorstep pickup using GPS tracking" },
    { title: "Professional Packaging", detail: "IATA-standard temperature/fragile packing" },
    { title: "Loading & Unloading", detail: "Automated warehouse pallet handling" },
    { title: "Secure Storage", detail: "24/7 CCTV airport holding bays" },
    { title: "Airport Warehouse Services", detail: "Express processing near runways" },
    { title: "Customs Clearance Support", detail: "Fast-track documentation verification" },
  ];

     export const smartFeatures = [
      {
        icon: FiClock, 
        title: "Strategic Airport Warehousing",
        description:
          "Located near major airport hubs to eliminate transport delays and optimize cargo load times.",
      },
      {
        icon: FiCpu ,
        title: "Digitized Documentation",
        description:
          "Automated customs filing and digital air waybills (e-AWB) that remove manual paperwork friction.",
      },
      {
        icon: FiGlobe ,
        title: "Direct Airline Network",
        description:
          "Priority belly-capacity and dedicated charter slots on top global air routes.",
      },
      {
        icon: FiZap,
        title: "AI Route Optimization",
        description:
          "Smart engines predicting real-time flight schedules for cost and time efficiency.",
      },
    ];


    ////////////// Customer_clearance //////////////////

      const whyChooseUs = [
    {
      icon: FiZap,
      title: "Fast Documentation",
      description:
        "We recognize the urgency of import and export operations, ensuring prompt documentation arrangements so you can focus on core business.",
    },
    {
      icon: FiAward,
      title: "Expert Broker Associates",
      description:
        "Highly experienced in clearing all types of goods: garments, leather, automobiles, pharmaceuticals, perishables, pets, and more.",
    },
    {
      icon: FiCpu,
      title: "Automated Documentation",
      description:
        "Instant online platform generation of invoices, airway bills, bills of lading, bills of exchange, and shipping bills in seconds.",
    },
    {
      icon: FiShield,
      title: "Trade Compliance Solutions",
      description:
        "Assistance with obtaining government incentives, rebates, license preparation, and approvals from global trade authorities.",
    },
  ];

  const valueProps = [
    {
      icon: FiPercent,
      title: "Reduced Costs",
      desc: "Minimize duty payments and avoid demurrage or fines through proper documentation and accurate HS-code classification.",
    },
    {
      icon: FiClock,
      title: "Speed & Predictability",
      desc: "Faster customs clearance means better supply chain reliability and significantly reduced lead times.",
    },
    {
      icon: FiShield,
      title: "Regulatory Peace of Mind",
      desc: "Stay fully compliant even as global customs rules evolve, with proactive expert guidance.",
    },
    {
      icon: FiLayers,
      title: "Operational Efficiency",
      desc: "Offloading the customs burden frees your team to focus on business growth rather than paperwork.",
    },
  ];

  const industriesSupported = [
    "Manufacturing & Machinery",
    "Retail & E-commerce",
    "Pharma & Healthcare",
    "Electronics & Technology",
    "Automotive Components",
    "Perishables & Consumer Goods",
  ];
  

  /////////////////////  Dfl_it.jsx ////////////////////////

  export const ItServices = [
  {
    icon: FiCode,
    title: "Custom Software Development",
    description: "From ideation to deployment, we build scalable, secure, and user-friendly applications that cater to your business goals."
  },
  {
    icon: FiCloud,
    title: "Cloud Solutions",
    description: "Optimize your infrastructure with our cloud migration, integration, and management services, ensuring seamless operations and cost efficiency."
  },
  {
    icon: FiHeadphones,
    title: "IT Support & Maintenance",
    description: "Stay worry-free with our proactive IT support, ensuring your systems run smoothly and efficiently, 24/7."
  },
  {
    icon: FiShield,
    title: "Cybersecurity Services",
    description: "Protect your business from evolving threats with advanced security solutions, including vulnerability assessments, data encryption, and monitoring."
  },
  {
    icon: FiBarChart2,
    title: "Data Analytics & BI",
    description: "Leverage data-driven insights to make smarter decisions with our cutting-edge analytics and business intelligence tools."
  },
  {
    icon: FiCpu,
    title: "Managed IT Services",
    description: "Let us handle your IT infrastructure while you focus on growing your business."
  }
];

export const ItWhyChooseUs = [
  {
    icon: FiAward,
    title: "Experienced Professionals",
    description: "Our team of certified experts ensures quality solutions and dedicated support for all your IT needs."
  },
  {
    icon: FiLayers,
    title: "Tailored Solutions",
    description: "No two businesses are alike. We customize our services to align with your unique requirements and objectives."
  },
  {
    icon: FiTrendingUp,
    title: "Scalable Services",
    description: "Whether you’re a startup or a large enterprise, our solutions grow with your business."
  },
  {
    icon: FiBriefcase,
    title: "Proven Track Record",
    description: "Our portfolio showcases successful collaborations with businesses across various industries."
  }
];


// Sample Team Data
export const ItTeamMembers = [
  {
    name: "Aarav Sharma",
    role: "Lead Software Architect",
    bio: "Ex-Tech Lead specializing in distributed cloud infrastructure & microservices.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Riya Patel",
    role: "UI/UX Design Lead",
    bio: "Passionate about creating human-centered design systems & seamless interfaces.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Vikram Malhotra",
    role: "Cloud & DevOps Specialist",
    bio: "AWS & Azure certified engineer focusing on zero-downtime deployments.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Neha Gupta",
    role: "Cybersecurity Lead",
    bio: "Expert in enterprise vulnerability assessment and data encryption protocols.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Rohan Verma",
    role: "Senior Full Stack Developer",
    bio: "Specializing in React, Node.js, and high-throughput real-time web applications.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    linkedin: "https://linkedin.com",
  },
];



///////////////// inlandTransport.jsx /////////////////


export const keyAdvantages = [
  {
    icon: FiGlobe,
    title: "Accessibility & Connectivity",
    description: "Extensive reach across urban, suburban, and rural regions ensuring uninterrupted supply chain movement."
  },
  {
    icon: FiNavigation,
    title: "Flexible Routes & Schedules",
    description: "Dynamic routing algorithms to optimize delivery paths, bypass traffic bottlenecks, and accelerate transit times."
  },
  {
    icon: FiMapPin,
    title: "Convenient Door-to-Door",
    description: "End-to-end pickup and drop-off directly at your specified warehouse, retail point, or hub."
  },
  {
    icon: FiTrendingUp,
    title: "Cost-Effective Solutions",
    description: "Optimized load management and route efficiency to maximize freight budget efficiency."
  }
];

 export const transportModes = [
  {
    title: "Full Truckload (FTL)",
    subtitle: "Dedicated Fleet Capacity",
    description: "Ideal for large shipments requiring an entire truck. Offers faster transit, direct delivery without intermediate handling, and maximum cargo security.",
    badge: "Maximum Priority",
    features: [
      "Dedicated point-to-point transit",
      "Zero intermediate offloading",
      "Custom temperature control options",
      "Real-time GPS fleet tracking"
    ]
  },
  {
    title: "Less-than-Truckload (LTL)",
    subtitle: "Shared Space & Cost Efficiency",
    description: "Perfect for smaller shipments where multiple client consignments share truck capacity, significantly lowering overall transit expenses.",
    badge: "Cost Saver",
    features: [
      "Pay only for occupied volume",
      "Frequent scheduled departures",
      "Consolidated hub handling",
      "Flexible volume adjustments"
    ]
  }
];

 export const routingOptions = [
  {
    title: "Door-to-Door",
    desc: "Direct pickup from sender address and delivery to final destination without hub delays."
  },
  {
    title: "Door-to-Hub",
    desc: "Pickup from facility with consolidated drop at regional logistics hubs for distribution."
  },
  {
    title: "Hub-to-Door",
    desc: "Seamless terminal dispatch directly to buyer warehouses or retail centers."
  }
];


///////////// Ocean Freightforwarding.jsx ///////////////////////


  export const containerSpecs = [
    {
      type: "20ft Container",
      ext: "6090mm x 2440mm x 2590mm",
      int: "6010mm x 2340mm x 2390mm",
      door: "2280mm x 2310mm",
      tare: "2050 kg",
      payload: "28430 kg",
      maxGross: "30480 kg",
    },
    {
      type: "40ft Container",
      ext: "12180mm x 2440mm x 2590mm",
      int: "12110mm x 2340mm x 2390mm",
      door: "2280mm x 2310mm",
      tare: "3750 kg",
      payload: "26730 kg",
      maxGross: "30400 kg",
    },
    {
      type: "40ft High Cube",
      ext: "12180mm x 2440mm x 2900mm",
      int: "12110mm x 2340mm x 2690mm",
      door: "2280mm x 2580mm",
      tare: "3890 kg",
      payload: "26590 kg",
      maxGross: "30480 kg",
    },
  ];

  export const oceanFeatures = [
    {
      icon: FiGlobe,
      title: "Global Carrier Network",
      description: "Direct tie-ups with top global ocean carriers, port handlers, and NVOCCs worldwide.",
    },
    {
      icon: FiShield,
      title: "Safe & Compliant Handling",
      description: "Specialized care for heavy, bulky cargo, machinery, and defense equipment.",
    },
    {
      icon: FiLayers,
      title: "Flexible FCL & LCL Options",
      description: "Tailored full-container and shared-container options matching your budget.",
    },
    {
      icon: FiClock ,
      title: "Digital Tracking & Schedule",
      description: "Advanced technology to streamline vessel tracking and port documentation.",
    },
  ];

  export const serviceHighlights = [
    {
      title: "Full Container Load (FCL)",
      detail: "Dedicated container space for high-volume or single-owner shipments.",
    },
    {
      title: "Less than Container Load (LCL)",
      detail: "Consolidated freight space to minimize shipping costs for smaller volumes.",
    },
    {
      title: "NVOCC & Carrier Alliances",
      detail: "Priority booking slots and competitive sea freight ocean rates.",
    },
    {
      title: "Port-to-Port & Door-to-Door",
      detail: "End-to-end logistics coordination from factory origin to ocean destination port.",
    },
    {
      title: "Customs & Port Handling",
      detail: "Faster port clearance support with digital shipping bill processing.",
    },
    {
      title: "Heavy & Project Cargo",
      detail: "Expert handling for oversized machinery, industrial goods, and defense units.",
    },
  ];


  /////////////////// our presence ///////////////////

  export const keyHighlights = [
  {
    title: "Global Network",
    description: "Serving clients across continents, we connect you to opportunities in international markets through robust supply chain management."
  },
  {
    title: "Advanced Infrastructure",
    description: "Our state-of-the-art warehouses and distribution centers ensure secure storage and efficient handling of goods."
  },
  {
    title: "On-the-Ground Teams",
    description: "Local teams with expert knowledge provide real-time support and insights, ensuring smooth logistics operations."
  },
  {
    title: "Customs & Compliance",
    description: "Our presence in major ports and trade zones simplifies international shipping with seamless customs clearance."
  }
];


///////////////// presence component  /////////////

export const countries = [
  { id: "all", label: "All Locations" },
  { id: "india", label: "India" },
  { id: "uk", label: "UK" },
  { id: "thailand", label: "Thailand" },
  { id: "dubai", label: "Dubai" },
];

export const branchOffices = [
  {
    id: "noida",
    countryId: "india",
    city: "Noida",
    address: "B 331, Logix Technova, Block B, Sector 132, Noida, Uttar Pradesh 201305",
    phone: "+91 9999309839",
    email: "sales@dflindia.in"
  },
  {
    id: "mumbai",
    countryId: "india",
    city: "Mumbai",
    address: "231 Sai Chambers, B Wings, Sector 11, CBD Belapur, Navi Mumbai - 400614",
    phone: "+91 9971076083",
    email: "kp@dflindia.in"
  },
  {
    id: "ahmedabad",
    countryId: "india",
    city: "Ahmedabad",
    address: "D/1001, 10th Floor Titanium City Centre, Prahladnagar, 100 FT Road, Satellite, Ahmedabad, Gujarat - 380015",
    phone: "+91 9319524092",
    email: "ts@dflindia.in"
  },
    {
    id: "nagima",
    countryId: "india",
    city: "NAGIMA",
    address: "Shop No 8, Ganna Samiti Road, Muneem Chowk, Lal Sarai...",
    phone: "+91 9999309839",
    email: "sales@dflindia.in"
  },
    {
    id: "vadodara",
    countryId: "india",
    city: "VADODARA",
    address: "LR-412, 04th Floor, Park Paradise Building, Vadsar, Vadodara, Near...",
    phone: "+91 9999309839",
    email: "sales@dflindia.in"
  },
  {
    id: "london",
    countryId: "uk",
    city: "London Hub",
    address: "Unit 4, Heathrow Cargo Park, Colnbrook, Slough, UK",
    phone: "+44 20 8123 4567",
    email: "uk@dflindia.in"
  },
  {
    id: "bangkok",
    countryId: "thailand",
    city: "Bangkok Gateway",
    address: "88/12 Suvarnabhumi Port & Cargo Complex, Bangkok, Thailand",
    phone: "+66 2 123 4567",
    email: "thailand@dflindia.in"
  },
  {
    id: "dubai-central",
    countryId: "dubai",
    city: "Dubai World Central",
    address: "Suite 502, Logistics City, DWC, Jebel Ali, Dubai, UAE",
    phone: "+971 4 800 3355",
    email: "dubai@dflindia.in"
  }
];

///////////// tranportation.jsx /////////////////

  export const TransportKeyAdvantages = [
    {
      icon: FiMapPin,
      title: "Extensive Connectivity",
      description: "Direct access to remote and urban locations with minimal geographical restrictions.",
    },
    {
      icon: FiClock ,
      title: "Flexible Routes & Schedules",
      description: "Adaptable dispatch timings and customizable transit routes tailored to urgency.",
    },
    {
      icon: FiTruck,
      title: "Door-to-Door Delivery",
      description: "Seamless single-point pickup and final destination drop-off without extra hassle.",
    },
    {
      icon: FiDollarSign,
      title: "Cost-Effective Solutions",
      description: "Optimized FTL & LTL freight pricing sharing space to reduce operational overheads.",
    },
  ];

  export const serviceModels = [
    {
      title: "Full Truckload (FTL)",
      detail: "Ideal for large shipments requiring an entire dedicated truck for maximum security & speed.",
    },
    {
      title: "Less-than-Truckload (LTL)",
      detail: "Cost-sharing model for smaller cargo by combining shipments on shared routes.",
    },
    {
      title: "Door-to-Door Service",
      detail: "End-to-end management from seller warehouse directly to client doorstep.",
    },
    {
      title: "Door-to-Hub Logistics",
      detail: "Pickup from factory location and drop-off at central regional distribution hubs.",
    },
    {
      title: "Hub-to-Door Express",
      detail: "Fast-track movement from primary transit hubs to individual customer locations.",
    },
    {
      title: "GPS Tracked Fleet",
      detail: "Real-time route surveillance and speed monitoring for full shipment visibility.",
    },
  ];


  /////////////// Warehousing.jsx ////////////

    export const warehouseWhyChooseUs = [
      {
        icon:FiBox ,
        title: "Inventory Management",
        description:
          "Our warehouses offer a controlled environment for managing and monitoring stock levels, tracking product movements, and ensuring inventory aligns with customer demands.",
      },
      {
        icon: FiPackage ,
        title: "Order Fulfillment",
        description:
          "Serving as strategic distribution centers, our warehouses ensure quick and accurate picking, packing, and shipping of your products.",
      },
      {
        icon: FiShield ,
        title: "Risk Mitigation",
        description:
          "We provide secure spaces for goods, protecting them from potential damage, theft, or deterioration, thus significantly reducing supply chain risks.",
      },
      {
        icon: FiTrendingUp ,
        title: "Logistics Optimization",
        description:
          "Strategically placed warehouses help optimize overall logistics operations, reducing transportation costs and minimizing overall lead times.",
      },
    ];
  
    export const commitments = [
      {
        icon: FiLock,
        title: "Advanced Security Systems",
        desc: "24/7 monitoring, multi-layer surveillance, and strict access controls to prioritize the safety of your high-value inventory.",
      },
      {
        icon: FiMapPin ,
        title: "Strategic Node Locations",
        desc: "Smooth coordination across air, ocean, and road transport networks to streamline multi-modal freight transitions.",
      },
      {
        icon: FiServer ,
        title: "Digital Transparency",
        desc: "Real-time inventory status updates through our integrated platform for continuous oversight and control.",
      },
      {
        icon: FiShield ,
        title: "Transit Risk Reduction",
        desc: "Minimizing risks of spoilage, mishandling, and unwanted delays through climate and handling control protocols.",
      },
    ];
  

