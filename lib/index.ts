export const NAVLINKS = [
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Courses", path: "/courses" },
  // { name: "Blogs", path: "" },
  { name: "Contact", path: "/contact" },
];

export const tel = ["0403 158 014"];
export const email = "Info@edulink.com.au";
export const address = "Level 5/12 Clarke St, Sunshine, VIC 3020";

export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  icon: string;
  keyFeatures: string[];
  benefits: string[];
  whyChooseUs: string[];
  whoItsFor: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
}

export const servicesData: ServiceData[] = [
  {
    id: "education-career",
    slug: "education-career-opportunities",
    title: "Education & Career Opportunities",
    description:
      "Expert guidance for your educational journey and career success in Australia.",
    detailedDescription:
      "Transform your academic aspirations into career success with our comprehensive education consulting services designed for international students.",
    image: "/Services/CareerPathway.jpg",
    icon: "🎓",
    keyFeatures: [
      "Academic program selection",
      "University placement assistance",
      "Scholarship application support",
      "Career pathway planning",
    ],
    benefits: [
      "Access to top Australian institutions",
      "Personalized education roadmap",
      "Scholarship opportunities",
      "Career-focused guidance",
    ],
    whyChooseUs: [
      "10+ years of education consulting experience",
      "Direct partnerships with leading universities",
      "Proven track record of successful placements",
      "Ongoing support throughout your journey",
    ],
    whoItsFor: [
      "International students seeking quality education",
      "Career changers pursuing new opportunities",
      "Professionals seeking skill enhancement",
      "Students planning long-term career goals",
    ],
    process: [
      {
        step: "01",
        title: "Assessment",
        description: "Evaluate your background and goals",
      },
      {
        step: "02",
        title: "Planning",
        description: "Create personalized education strategy",
      },
      {
        step: "03",
        title: "Application",
        description: "Submit applications to selected institutions",
      },
      {
        step: "04",
        title: "Support",
        description: "Ongoing guidance throughout your studies",
      },
    ],
  },
  {
    id: "visa-migration",
    slug: "visa-migration-support",
    title: "Visa & Migration Support",
    description:
      "Complete visa assistance from application to approval with expert migration agents.",
    detailedDescription:
      "Navigate Australia's complex visa system with confidence through our comprehensive migration services and expert guidance.",
    image: "/Services/Visasupport.jpg",
    icon: "📋",
    keyFeatures: [
      "Student visa applications",
      "Graduate visa processing",
      "Skilled migration pathways",
      "Family visa assistance",
    ],
    benefits: [
      "Higher visa approval rates",
      "Faster processing times",
      "Complete documentation support",
      "Expert legal guidance",
    ],
    whyChooseUs: [
      "Registered migration agents on staff",
      "98% visa approval success rate",
      "Transparent process and pricing",
      "24/7 application status updates",
    ],
    whoItsFor: [
      "International students needing visas",
      "Skilled workers seeking migration",
      "Families planning to relocate",
      "Graduates extending their stay",
    ],
    process: [
      {
        step: "01",
        title: "Assessment",
        description: "Evaluate your visa eligibility and options",
      },
      {
        step: "02",
        title: "Documentation",
        description: "Prepare and verify all required documents",
      },
      {
        step: "03",
        title: "Submission",
        description: "Submit your application to immigration",
      },
      {
        step: "04",
        title: "Follow-up",
        description: "Monitor progress until approval",
      },
    ],
  },
  {
    id: "settlement-living",
    slug: "settlement-living-support",
    title: "Settlement & Living Support",
    description:
      "Make Australia your home with comprehensive settlement assistance from arrival to integration.",
    detailedDescription:
      "Experience a seamless transition to Australian life with our complete settlement support designed to help you feel at home from day one.",
    image: "/Services/Settlement.jpg",
    icon: "🏠",
    keyFeatures: [
      "Airport pickup service",
      "Accommodation assistance",
      "Banking and essential services setup",
      "Local area orientation",
    ],
    benefits: [
      "Stress-free arrival experience",
      "Quick access to essential services",
      "Local knowledge and connections",
      "Faster community integration",
    ],
    whyChooseUs: [
      "Local expertise in all major cities",
      "Comprehensive pre-arrival planning",
      "24/7 emergency support available",
      "Ongoing settlement assistance",
    ],
    whoItsFor: [
      "New international students",
      "Families relocating to Australia",
      "Professionals starting new positions",
      "Anyone needing settlement guidance",
    ],
    process: [
      {
        step: "01",
        title: "Planning",
        description: "Pre-departure settlement preparation",
      },
      {
        step: "02",
        title: "Arrival",
        description: "Airport pickup and immediate support",
      },
      {
        step: "03",
        title: "Setup",
        description: "Essential services and accommodation",
      },
      {
        step: "04",
        title: "Integration",
        description: "Ongoing support for smooth transition",
      },
    ],
  },
  {
    id: "personal-wellbeing",
    slug: "personal-wellbeing-support",
    title: "Personal & Wellbeing Support",
    description:
      "Comprehensive mental health and wellbeing support for your Australian journey.",
    detailedDescription:
      "Prioritize your mental health and wellbeing with our specialized support services designed for international students and migrants.",
    image: "/Services/personal.jpg",
    icon: "💚",
    keyFeatures: [
      "Mental health counseling referrals",
      "Cultural adaptation workshops",
      "Peer support groups",
      "Stress management programs",
    ],
    benefits: [
      "Improved mental wellbeing",
      "Faster cultural adjustment",
      "Strong support networks",
      "Enhanced resilience and confidence",
    ],
    whyChooseUs: [
      "Qualified mental health professionals",
      "Culturally sensitive approach",
      "Confidential and supportive environment",
      "Proven wellbeing improvement strategies",
    ],
    whoItsFor: [
      "Students experiencing culture shock",
      "Individuals feeling homesick or isolated",
      "Anyone needing mental health support",
      "People seeking social connections",
    ],
    process: [
      {
        step: "01",
        title: "Assessment",
        description: "Evaluate your wellbeing needs and concerns",
      },
      {
        step: "02",
        title: "Planning",
        description: "Create personalized support strategy",
      },
      {
        step: "03",
        title: "Implementation",
        description: "Connect with resources and support programs",
      },
      {
        step: "04",
        title: "Monitoring",
        description: "Regular check-ins and ongoing support",
      },
    ],
  },
  {
    id: "professional-employment",
    slug: "professional-employment-support",
    title: "Professional & Employment Support",
    description:
      "Launch your Australian career with expert employment guidance and job placement assistance.",
    detailedDescription:
      "Transform your career prospects with our comprehensive employment support services tailored for the Australian job market.",
    image: "/Services/Professional.jpg",
    icon: "💼",
    keyFeatures: [
      "Resume and CV optimization",
      "Interview preparation coaching",
      "Job search strategies",
      "Professional networking guidance",
    ],
    benefits: [
      "Higher job application success rates",
      "Improved interview performance",
      "Access to exclusive job opportunities",
      "Enhanced professional presentation",
    ],
    whyChooseUs: [
      "Industry-experienced career coaches",
      "Extensive employer network connections",
      "Tailored Australian job market strategies",
      "Ongoing career development support",
    ],
    whoItsFor: [
      "Students seeking part-time employment",
      "Graduates entering the workforce",
      "Professionals changing career paths",
      "Anyone needing employment assistance",
    ],
    process: [
      {
        step: "01",
        title: "Assessment",
        description: "Evaluate skills and career objectives",
      },
      {
        step: "02",
        title: "Development",
        description: "Enhance resume and interview skills",
      },
      {
        step: "03",
        title: "Strategy",
        description: "Develop targeted job search plan",
      },
      {
        step: "04",
        title: "Support",
        description: "Ongoing guidance until employment",
      },
    ],
  },
  {
    id: "ongoing-student",
    slug: "ongoing-student-support",
    title: "Ongoing Student Support",
    description:
      "Continuous support throughout your entire educational journey and beyond graduation.",
    detailedDescription:
      "Your success is our priority. We provide ongoing support from enrollment to graduation and career transition with dedicated assistance every step of the way.",
    image: "/Services/StudentSupport.jpg",
    icon: "🤝",
    keyFeatures: [
      "Academic progress monitoring",
      "Course transfer assistance",
      "Visa compliance support",
      "Post-graduation pathway planning",
    ],
    benefits: [
      "Continuous educational support",
      "Maintained compliance status",
      "Smooth academic transitions",
      "Clear future planning",
    ],
    whyChooseUs: [
      "Dedicated student success managers",
      "Proactive monitoring and support",
      "Comprehensive post-graduation planning",
      "Lifelong alumni network access",
    ],
    whoItsFor: [
      "Current enrolled students",
      "Students considering course changes",
      "Graduates planning next steps",
      "Anyone needing ongoing guidance",
    ],
    process: [
      {
        step: "01",
        title: "Monitoring",
        description: "Regular check-ins on academic progress",
      },
      {
        step: "02",
        title: "Support",
        description: "Immediate assistance when needed",
      },
      {
        step: "03",
        title: "Resolution",
        description: "Quick solutions to any challenges",
      },
      {
        step: "04",
        title: "Planning",
        description: "Future pathway development",
      },
    ],
  },
];
