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


// ✅ SAHI (FiShieldCheck ko FiShield se replace karein)
import { FiShield, FiFileText, FiAnchor, FiCheckSquare, FiTruck, FiZap } from "react-icons/fi";




export const LOGISTICS_IMAGES = {
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
    name: "Same-Day Express Courier",
    description:
      "Door-to-door urgent delivery guaranteed within hours for time-critical documents and parcels across major metro hubs.",
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
    name: "Global Freight Forwarding",
    description:
      "Seamless air, sea, and overland cross-border supply chain logistics with automated customs clearance.",
    tag: "Ocean & Air Cargo",
    image:LOGISTICS_IMAGES.cargoAir,
      features: [
      "Cost-effective",
      "Large capacity",
      " FCL & LCL options",
      "Port-to-port service",
    ],
  },
  {
    id: "03",
    name: "Smart Warehousing & Fulfillment",
    description:
      "Automated inventory management, pick-and-pack fulfillment, and temperature-controlled storage facilities.",
    tag: "E-Commerce Ready",
    image:LOGISTICS_IMAGES.containerShip,
      features: [
      "Flexible scheduling",
      " Door-to-door service",
      "Regional coverage",
      "Various vehicle sizes",
    ],
  },

    {
    id: "04",
    name: "Customs Clearance",
    description:
      "Fast courier services for urgent deliveries with same-day and next-day delivery options.",
    tag: "E-Commerce Ready",
    image:LOGISTICS_IMAGES.containerShip,
      features: [
      " Same-day delivery",
      "  Express options",
      "Document delivery",
      " Proof of delivery",
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
    "Air Freight",
    "Ocean Freight",
    "Customs Clearance"
  ],
  legalLinks: [
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms & Conditions", path: "/terms-conditions" },
    { label: "Prohibited Items", path: "/prohibited-items" }
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
