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
  features: string[];
  benefits: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  whoItsFor: string[];
  // duration and pricing removed per client request
}

export const servicesData: ServiceData[] = [
  {
    id: "education-career",
    slug: "education-career-opportunities",
    title: "Education & Career Opportunities",
    description:
      "We help you choose the right study program, institution, and career pathway. From academic counselling to course selection, scholarship support, and credit transfer guidance, we ensure every step aligns with your goals.",
    detailedDescription:
      "Our Education & Career Opportunities service is designed to align your academic pursuits with your long-term career goals. We provide comprehensive guidance from course selection to career planning, ensuring that your education investment leads to meaningful career outcomes in Australia.",
    image: "/Services/CareerPathway.jpg",
    icon: "🎓",
    features: [
      "Academic counselling & course selection",
      "University and institution comparison",
      "Scholarship identification & application support",
      "Credit transfer and RPL assessment",
      "Career pathway planning",
      "Industry insights and market analysis",
      "Course prerequisite guidance",
      "Academic transcript evaluation",
    ],
    benefits: [
      "Make informed decisions about your education",
      "Maximize scholarship opportunities",
      "Reduce study duration through credit transfers",
      "Align education with career goals",
      "Access to exclusive university partnerships",
      "Personalized academic roadmap",
    ],
    process: [
      {
        step: "01",
        title: "Initial Assessment",
        description:
          "Evaluate your academic background, career goals, and preferences",
      },
      {
        step: "02",
        title: "Course Research",
        description: "Identify suitable programs across multiple institutions",
      },
      {
        step: "03",
        title: "Application Strategy",
        description:
          "Develop a strategic approach to maximize acceptance chances",
      },
      {
        step: "04",
        title: "Application Support",
        description: "Assist with documentation and application submission",
      },
    ],
    whoItsFor: [
      "Students seeking undergraduate programs",
      "Professionals pursuing postgraduate studies",
      "Career changers looking for new opportunities",
      "International students planning to study in Australia",
    ],
    // duration and pricing removed
  },
  {
    id: "visa-migration",
    slug: "visa-migration-support",
    title: "Visa & Migration Support",
    description:
      "Our team provides end-to-end visa assistance—from student and graduate visas to skilled migration and family applications. We simplify paperwork, guide you through eligibility, and coordinate with registered migration agents for complex cases.",
    detailedDescription:
      "Navigate the complex Australian visa system with confidence. Our experienced team of registered migration agents provides comprehensive support for all visa types, ensuring compliance and maximizing your chances of approval.",
    image: "/Services/Visasupport.jpg",
    icon: "📋",
    features: [
      "Student visa applications (Subclass 500)",
      "Temporary Graduate visa (Subclass 485)",
      "Skilled migration pathways",
      "Family and partner visas",
      "Visitor visa applications",
      "Visa extensions and renewals",
      "Compliance monitoring",
      "Appeal and review assistance",
    ],
    benefits: [
      "Expert guidance from registered agents",
      "Higher approval success rates",
      "Reduced processing times",
      "Compliance assurance",
      "Ongoing support throughout the process",
      "Clear communication with immigration authorities",
    ],
    process: [
      {
        step: "01",
        title: "Eligibility Assessment",
        description:
          "Comprehensive evaluation of your visa options and eligibility",
      },
      {
        step: "02",
        title: "Documentation Preparation",
        description: "Gather and prepare all required supporting documents",
      },
      {
        step: "03",
        title: "Application Lodgement",
        description: "Submit your application with our expert review",
      },
      {
        step: "04",
        title: "Follow-up & Support",
        description: "Monitor progress and respond to any requests",
      },
    ],
    whoItsFor: [
      "International students",
      "Skilled professionals",
      "Family members of Australian residents",
      "Graduates seeking work opportunities",
    ],
    // duration and pricing removed
  },
  {
    id: "settlement-living",
    slug: "settlement-living-support",
    title: "Settlement & Living Support",
    description:
      "Moving to a new country can be overwhelming, but we make it easy. From pre-departure briefings and airport pickups to accommodation, bank setup, and local orientation, we ensure you feel at home from day one.",
    detailedDescription:
      "Starting life in a new country involves numerous practical considerations. Our settlement support service addresses every aspect of your transition, from essential services setup to cultural orientation, ensuring a smooth start to your Australian journey.",
    image: "/Services/Settlement.jpg",
    icon: "🏠",
    features: [
      "Pre-departure preparation sessions",
      "Airport pickup and transfer services",
      "Accommodation search and booking",
      "Bank account setup assistance",
      "Mobile phone and internet connection",
      "Local area orientation tours",
      "Essential services registration",
      "Cultural adaptation workshops",
    ],
    benefits: [
      "Stress-free arrival experience",
      "Immediate access to essential services",
      "Local knowledge and insights",
      "Faster integration into Australian society",
      "Ongoing practical support",
      "Peace of mind for you and your family",
    ],
    process: [
      {
        step: "01",
        title: "Pre-departure Planning",
        description: "Comprehensive briefing on what to expect and prepare",
      },
      {
        step: "02",
        title: "Arrival Support",
        description: "Airport pickup and immediate settlement assistance",
      },
      {
        step: "03",
        title: "Essential Setup",
        description: "Help with banking, accommodation, and key services",
      },
      {
        step: "04",
        title: "Ongoing Support",
        description: "Continued assistance during your first few months",
      },
    ],
    whoItsFor: [
      "First-time international students",
      "Families relocating to Australia",
      "Professionals starting new jobs",
      "Anyone needing settlement support",
    ],
    // duration and pricing removed
  },
  {
    id: "personal-wellbeing",
    slug: "personal-wellbeing-support",
    title: "Personal & Wellbeing Support",
    description:
      "Your wellbeing matters. We offer guidance on mental health resources, cultural adaptation, and workshops that help you stay focused, confident, and connected.",
    detailedDescription:
      "We understand that studying and living abroad can present unique challenges. Our wellbeing support service provides comprehensive resources and guidance to help you maintain good mental health, adapt to Australian culture, and build meaningful connections.",
    image: "/Services/personal.jpg",
    icon: "💚",
    features: [
      "Mental health resource guidance",
      "Cultural adaptation workshops",
      "Peer support group facilitation",
      "Counselling service referrals",
      "Stress management techniques",
      "Community connection programs",
      "Crisis support and intervention",
      "Wellbeing check-ins",
    ],
    benefits: [
      "Improved mental health outcomes",
      "Faster cultural adaptation",
      "Strong support network development",
      "Better academic and work performance",
      "Increased confidence and resilience",
      "Long-term wellbeing strategies",
    ],
    process: [
      {
        step: "01",
        title: "Wellbeing Assessment",
        description: "Initial evaluation of your support needs and concerns",
      },
      {
        step: "02",
        title: "Resource Planning",
        description: "Develop a personalized wellbeing support plan",
      },
      {
        step: "03",
        title: "Support Implementation",
        description: "Connect you with appropriate resources and programs",
      },
      {
        step: "04",
        title: "Ongoing Monitoring",
        description: "Regular check-ins and support adjustments as needed",
      },
    ],
    whoItsFor: [
      "Students experiencing culture shock",
      "Individuals dealing with homesickness",
      "Anyone needing mental health support",
      "People looking to build social connections",
    ],
    // duration and pricing removed
  },
  {
    id: "professional-employment",
    slug: "professional-employment-support",
    title: "Professional & Employment Support",
    description:
      "We assist you in building your career through resume workshops, internship placement, part-time job advice, and insights into workplace rights in Australia.",
    detailedDescription:
      "Bridge the gap between education and employment with our comprehensive career support services. We help you understand the Australian job market, develop professional skills, and secure meaningful employment opportunities.",
    image: "/Services/Professional.jpg",
    icon: "💼",
    features: [
      "Australian resume and CV writing",
      "Interview preparation and practice",
      "Job search strategy development",
      "Internship and placement assistance",
      "Workplace rights education",
      "Professional networking guidance",
      "LinkedIn profile optimization",
      "Industry-specific career advice",
    ],
    benefits: [
      "Professional resume that stands out",
      "Improved interview performance",
      "Access to hidden job markets",
      "Understanding of workplace culture",
      "Enhanced professional network",
      "Career advancement opportunities",
    ],
    process: [
      {
        step: "01",
        title: "Career Assessment",
        description: "Evaluate your skills, experience, and career goals",
      },
      {
        step: "02",
        title: "Professional Development",
        description: "Enhance your resume, LinkedIn, and interview skills",
      },
      {
        step: "03",
        title: "Job Search Strategy",
        description: "Develop targeted approach to finding opportunities",
      },
      {
        step: "04",
        title: "Ongoing Support",
        description: "Continued guidance throughout your job search",
      },
    ],
    whoItsFor: [
      "Students seeking part-time work",
      "Graduates entering the job market",
      "Professionals changing careers",
      "Anyone needing employment guidance",
    ],
    // duration and pricing removed
  },
  {
    id: "ongoing-student",
    slug: "ongoing-student-support",
    title: "Ongoing Student Support",
    description:
      "Our commitment doesn't stop after enrolment. We continue supporting you with course transfers, visa extensions, compliance guidance, and post-study pathway planning.",
    detailedDescription:
      "Your educational journey doesn't end with enrollment. We provide continuous support throughout your studies and beyond, helping you navigate challenges, make informed decisions, and plan for your future success in Australia.",
    image: "/Services/StudentSupport.jpg",
    icon: "🤝",
    features: [
      "Course transfer and pathway changes",
      "Visa extension applications",
      "Academic progress monitoring",
      "Compliance guidance and support",
      "Post-study work visa planning",
      "Further education pathway advice",
      "Emergency academic intervention",
      "Alumni network access",
    ],
    benefits: [
      "Continuous support throughout your journey",
      "Quick resolution of academic issues",
      "Maintained visa compliance",
      "Clear post-graduation pathways",
      "Lifelong professional network",
      "Ongoing career development",
    ],
    process: [
      {
        step: "01",
        title: "Ongoing Monitoring",
        description: "Regular check-ins on your academic and visa status",
      },
      {
        step: "02",
        title: "Issue Identification",
        description: "Early identification and intervention for any challenges",
      },
      {
        step: "03",
        title: "Solution Implementation",
        description: "Swift action to resolve issues and maintain progress",
      },
      {
        step: "04",
        title: "Future Planning",
        description: "Continuous planning for your next steps and goals",
      },
    ],
    whoItsFor: [
      "Current international students",
      "Students considering course changes",
      "Graduates planning their next steps",
      "Anyone needing ongoing support",
    ],
    // duration and pricing removed
  },
];
