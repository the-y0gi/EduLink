// export const NAVLINKS = [
//   { name: "About Us", path: "/about" },
//   { name: "Services", path: "/services" },
//   { name: "Courses", path: "/courses" },
//   // { name: "Blogs", path: "" },
//   { name: "Contact", path: "/contact" },
// ];

// export const tel = ["0403 158 014"];
// export const email = "Info@edulink.com.au";
// export const address = "Level 5/12 Clarke St, Sunshine, VIC 3020";

// export interface ServiceData {
//   id: string;
//   slug: string;
//   title: string;
//   description: string;
//   detailedDescription: string;
//   image: string;
//   icon: string;
//   keyFeatures: string[];
//   benefits: string[];
//   whyChooseUs: string[];
//   whoItsFor: string[];
//   process: {
//     step: string;
//     title: string;
//     description: string;
//   }[];
// }

// export const servicesData: ServiceData[] = [
//   {
//     id: "education-career",
//     slug: "education-career-opportunities",
//     title: "Education & Career Opportunities",
//     description:
//       "Strategic education and career guidance for both offshore and onshore students to achieve Australian success.",
//     detailedDescription:
//       "Whether you're planning to study in Australia or already here, we ensure your education translates into meaningful career success. Our comprehensive services help both offshore and onshore students navigate the Australian education system and job market.",
//     image: "/Services/CareerPathway.jpg",
//     icon: "🎓",
//     keyFeatures: [
//       "Career pathway optimization for Australian market",
//       "Course adjustment for better employment outcomes",
//       "Skills gap analysis and professional development",
//       "Australian workplace integration support",
//     ],
//     benefits: [
//       "Faster transition to desired career",
//       "Maximized return on education investment",
//       "Strategic course selection for employment",
//       "Australian industry connections",
//     ],
//     whyChooseUs: [
//       "Deep knowledge of Australian employment landscape",
//       "Partnerships with local employers and industries",
//       "Proven success with onshore student career transitions",
//       "Ongoing professional development support",
//     ],
//     whoItsFor: [
//       "Offshore students planning their Australian education journey",
//       "Onshore students seeking career direction and optimization",
//       "Students wanting to change career paths",
//       "Graduates preparing for Australian job market entry",
//     ],
//     process: [
//       {
//         step: "01",
//         title: "Assessment",
//         description: "Evaluate your background and goals",
//       },
//       {
//         step: "02",
//         title: "Planning",
//         description: "Create personalized education strategy",
//       },
//       {
//         step: "03",
//         title: "Application",
//         description: "Submit applications to selected institutions",
//       },
//       {
//         step: "04",
//         title: "Support",
//         description: "Ongoing guidance throughout your studies",
//       },
//     ],
//   },
//   {
//     id: "visa-migration",
//     slug: "visa-migration-support",
//     title: "Visa & Migration Support",
//     description:
//       "Complete visa assistance from application to approval with expert migration agents.",
//     detailedDescription:
//       "Navigate Australia's complex visa system with confidence through our comprehensive migration services and expert guidance.",
//     image: "/Services/Visasupport.jpg",
//     icon: "📋",
//     keyFeatures: [
//       "Student visa applications",
//       "Graduate visa processing",
//       "Skilled migration pathways",
//       "Family visa assistance",
//     ],
//     benefits: [
//       "Higher visa approval rates",
//       "Faster processing times",
//       "Complete documentation support",
//       "Expert legal guidance",
//     ],
//     whyChooseUs: [
//       "Registered migration agents on staff",
//       "98% visa approval success rate",
//       "Transparent process and pricing",
//       "24/7 application status updates",
//     ],
//     whoItsFor: [
//       "International students needing visas",
//       "Skilled workers seeking migration",
//       "Families planning to relocate",
//       "Graduates extending their stay",
//     ],
//     process: [
//       {
//         step: "01",
//         title: "Assessment",
//         description: "Evaluate your visa eligibility and options",
//       },
//       {
//         step: "02",
//         title: "Documentation",
//         description: "Prepare and verify all required documents",
//       },
//       {
//         step: "03",
//         title: "Submission",
//         description: "Submit your application to immigration",
//       },
//       {
//         step: "04",
//         title: "Follow-up",
//         description: "Monitor progress until approval",
//       },
//     ],
//   },
//   {
//     id: "settlement-living",
//     slug: "settlement-living-support",
//     title: "Settlement & Living Support",
//     description:
//       "Comprehensive settlement assistance for new arrivals and life optimization support for current students in Australia.",
//     detailedDescription:
//       "Whether you're just arriving in Australia or already here looking to optimize your experience, we provide the support you need. From initial settlement assistance to building foundations for permanent residency and career success.",
//     image: "/Services/Settlement.jpg",
//     icon: "🏠",
//     keyFeatures: [
//       "Initial settlement assistance for new arrivals",
//       "Credit history and financial planning guidance",
//       "Professional networking opportunities",
//       "Long-term residency preparation",
//     ],
//     benefits: [
//       "Stronger foundation for permanent residency applications",
//       "Enhanced professional and social networks",
//       "Better financial positioning for future goals",
//       "Deeper Australian community integration",
//     ],
//     whyChooseUs: [
//       "Strategic focus on permanent residency pathways",
//       "Extensive professional networks across Australia",
//       "Proven strategies for onshore student success",
//       "Long-term planning expertise",
//     ],
//     whoItsFor: [
//       "New international students arriving in Australia",
//       "Current onshore students optimizing their Australian experience",
//       "Students seeking permanent residency pathways",
//       "Those wanting to build Australian professional networks",
//     ],
//     process: [
//       {
//         step: "01",
//         title: "Planning",
//         description: "Pre-departure settlement preparation",
//       },
//       {
//         step: "02",
//         title: "Arrival",
//         description: "Airport pickup and immediate support",
//       },
//       {
//         step: "03",
//         title: "Setup",
//         description: "Essential services and accommodation",
//       },
//       {
//         step: "04",
//         title: "Integration",
//         description: "Ongoing support for smooth transition",
//       },
//     ],
//   },
//   {
//     id: "personal-wellbeing",
//     slug: "personal-wellbeing-support",
//     title: "Personal & Wellbeing Support",
//     description:
//       "Comprehensive mental health and wellbeing support for your Australian journey.",
//     detailedDescription:
//       "Prioritize your mental health and wellbeing with our specialized support services designed for international students and migrants.",
//     image: "/Services/personal.jpg",
//     icon: "💚",
//     keyFeatures: [
//       "Mental health counseling referrals",
//       "Cultural adaptation workshops",
//       "Peer support groups",
//       "Stress management programs",
//     ],
//     benefits: [
//       "Improved mental wellbeing",
//       "Faster cultural adjustment",
//       "Strong support networks",
//       "Enhanced resilience and confidence",
//     ],
//     whyChooseUs: [
//       "Qualified mental health professionals",
//       "Culturally sensitive approach",
//       "Confidential and supportive environment",
//       "Proven wellbeing improvement strategies",
//     ],
//     whoItsFor: [
//       "Students experiencing culture shock",
//       "Individuals feeling homesick or isolated",
//       "Anyone needing mental health support",
//       "People seeking social connections",
//     ],
//     process: [
//       {
//         step: "01",
//         title: "Assessment",
//         description: "Evaluate your wellbeing needs and concerns",
//       },
//       {
//         step: "02",
//         title: "Planning",
//         description: "Create personalized support strategy",
//       },
//       {
//         step: "03",
//         title: "Implementation",
//         description: "Connect with resources and support programs",
//       },
//       {
//         step: "04",
//         title: "Monitoring",
//         description: "Regular check-ins and ongoing support",
//       },
//     ],
//   },
//   {
//     id: "professional-employment",
//     slug: "professional-employment-support",
//     title: "Professional & Employment Support",
//     description:
//       "Launch your Australian career with expert employment guidance and job placement assistance.",
//     detailedDescription:
//       "Transform your career prospects with our comprehensive employment support services tailored for the Australian job market.",
//     image: "/Services/Professional.jpg",
//     icon: "💼",
//     keyFeatures: [
//       "Resume and CV optimization",
//       "Interview preparation coaching",
//       "Job search strategies",
//       "Professional networking guidance",
//     ],
//     benefits: [
//       "Higher job application success rates",
//       "Improved interview performance",
//       "Access to exclusive job opportunities",
//       "Enhanced professional presentation",
//     ],
//     whyChooseUs: [
//       "Industry-experienced career coaches",
//       "Extensive employer network connections",
//       "Tailored Australian job market strategies",
//       "Ongoing career development support",
//     ],
//     whoItsFor: [
//       "Students seeking part-time employment",
//       "Graduates entering the workforce",
//       "Professionals changing career paths",
//       "Anyone needing employment assistance",
//     ],
//     process: [
//       {
//         step: "01",
//         title: "Assessment",
//         description: "Evaluate skills and career objectives",
//       },
//       {
//         step: "02",
//         title: "Development",
//         description: "Enhance resume and interview skills",
//       },
//       {
//         step: "03",
//         title: "Strategy",
//         description: "Develop targeted job search plan",
//       },
//       {
//         step: "04",
//         title: "Support",
//         description: "Ongoing guidance until employment",
//       },
//     ],
//   },
//   {
//     id: "ongoing-student",
//     slug: "ongoing-student-support",
//     title: "Comprehensive Student Support",
//     description:
//       "Ongoing support throughout your entire Australian education journey, from initial planning to post-graduation success.",
//     detailedDescription:
//       "Whether you're just starting your Australian education journey or already studying here, we provide continuous support to help you achieve your goals. Our comprehensive program covers everything from initial planning to post-graduation success.",
//     image: "/Services/StudentSupport.jpg",
//     icon: "🤝",
//     keyFeatures: [
//       "Strategic pathway planning for Australian success",
//       "Course optimization for career goals",
//       "Visa extension and compliance guidance",
//       "Post-graduation residency planning",
//     ],
//     benefits: [
//       "Maximized study outcomes and ROI",
//       "Avoided costly mistakes and delays",
//       "Strategic planning for permanent residency",
//       "Efficient transition to working life",
//     ],
//     whyChooseUs: [
//       "Specialized focus on onshore student success",
//       "Proactive guidance to prevent costly errors",
//       "Strategic planning for long-term Australian goals",
//       "Extensive network of Australian opportunities",
//     ],
//     whoItsFor: [
//       "Offshore students planning their Australian journey",
//       "Current onshore students in Australia",
//       "Students wanting to optimize their Australian experience",
//       "Those planning post-study career transitions and permanent residency",
//     ],
//     process: [
//       {
//         step: "01",
//         title: "Monitoring",
//         description: "Regular check-ins on academic progress",
//       },
//       {
//         step: "02",
//         title: "Support",
//         description: "Immediate assistance when needed",
//       },
//       {
//         step: "03",
//         title: "Resolution",
//         description: "Quick solutions to any challenges",
//       },
//       {
//         step: "04",
//         title: "Planning",
//         description: "Future pathway development",
//       },
//     ],
//   },
// ];


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
      "Strategic education and career guidance for both offshore and onshore students to achieve Australian success.",
    detailedDescription:
      "Whether you're planning to study in Australia or already here, we ensure your education translates into meaningful career success. Our comprehensive services help both offshore and onshore students navigate the Australian education system and job market.",
    // image: "/Services/CareerPathway.jpg",
    image: "/Services/EducationCareerOpportunities.jpg",
    icon: "🎓",
    keyFeatures: [
      "Career pathway optimization for Australian market",
      "Course adjustment for better employment outcomes",
      "Skills gap analysis and professional development",
      "Australian workplace integration support",
    ],
    benefits: [
      "Faster transition to desired career",
      "Maximized return on education investment",
      "Strategic course selection for employment",
      "Australian industry connections",
    ],
    whyChooseUs: [
      "Deep knowledge of Australian employment landscape",
      "Partnerships with local employers and industries",
      "Proven success with onshore student career transitions",
      "Ongoing professional development support",
    ],
    whoItsFor: [
      "Offshore students planning their Australian education journey",
      "Onshore students seeking career direction and optimization",
      "Students wanting to change career paths",
      "Graduates preparing for Australian job market entry",
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
    // image: "/Services/Visasupport.jpg",
        image: "/Services/VisaMigrationSupport.jpg",

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
      "Comprehensive settlement assistance for new arrivals and life optimization support for current students in Australia.",
    detailedDescription:
      "Whether you're just arriving in Australia or already here looking to optimize your experience, we provide the support you need. From initial settlement assistance to building foundations for permanent residency and career success.",
    // image: "/Services/Settlement.jpg",
        image: "/Services/SettlementLivingSupporT.jpg",

    icon: "🏠",
    keyFeatures: [
      "Initial settlement assistance for new arrivals",
      "Credit history and financial planning guidance",
      "Professional networking opportunities",
      "Long-term residency preparation",
    ],
    benefits: [
      "Stronger foundation for permanent residency applications",
      "Enhanced professional and social networks",
      "Better financial positioning for future goals",
      "Deeper Australian community integration",
    ],
    whyChooseUs: [
      "Strategic focus on permanent residency pathways",
      "Extensive professional networks across Australia",
      "Proven strategies for onshore student success",
      "Long-term planning expertise",
    ],
    whoItsFor: [
      "New international students arriving in Australia",
      "Current onshore students optimizing their Australian experience",
      "Students seeking permanent residency pathways",
      "Those wanting to build Australian professional networks",
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
    // image: "/Services/personal.jpg",
        image: "/Services/PersonalWellbeingSupport.jpg",

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
    // image: "/Services/Professional.jpg",
        image: "/Services/ProfessionalEmploymentSupport.jpg",

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
    title: "Comprehensive Student Support",
    description:
      "Ongoing support throughout your entire Australian education journey, from initial planning to post-graduation success.",
    detailedDescription:
      "Whether you're just starting your Australian education journey or already studying here, we provide continuous support to help you achieve your goals. Our comprehensive program covers everything from initial planning to post-graduation success.",
    image: "/Services/StudentSupport.jpg",
    icon: "🤝",
    keyFeatures: [
      "Strategic pathway planning for Australian success",
      "Course optimization for career goals",
      "Visa extension and compliance guidance",
      "Post-graduation residency planning",
    ],
    benefits: [
      "Maximized study outcomes and ROI",
      "Avoided costly mistakes and delays",
      "Strategic planning for permanent residency",
      "Efficient transition to working life",
    ],
    whyChooseUs: [
      "Specialized focus on onshore student success",
      "Proactive guidance to prevent costly errors",
      "Strategic planning for long-term Australian goals",
      "Extensive network of Australian opportunities",
    ],
    whoItsFor: [
      "Offshore students planning their Australian journey",
      "Current onshore students in Australia",
      "Students wanting to optimize their Australian experience",
      "Those planning post-study career transitions and permanent residency",
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