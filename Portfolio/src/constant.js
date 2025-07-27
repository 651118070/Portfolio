import ecom from "../src/assets/ecom.png";
import sum from "../src/assets/sum.png";
import mentor from "../src/assets/mentor.png";
import fanta from "../src/assets/ecom2.png";
import tjp from "../src/assets/tjp.png";
import finzo from "../src/assets/finzo.png";
export const projectsData = [
  {
    title: "Finzo - Personal Finance Manager",
    description:
      "A finance management web application designed to help users in Cameroon track their income, set budgets, and visualize spending habits for better financial decisions.",
    image: finzo, // Remplace 'finzo' par l'import de ton image ex: import finzo from '../assets/finzo.png';
    technologies: [
      { name: "Next js", color: "bg-blue-100 text-blue-800" },
      { name: "Tailwind CSS", color: "bg-green-100 text-green-800" },
      { name: "Clerk", color: "bg-gray-100 text-gray-800" },
      { name: "Shadcn", color: "bg-yellow-100 text-yellow-800" },
    ],
    liveUrl: "https://finzo.onrender.com/",
    githubUrl: "https://github.com/651118070/finzo",
    steps: [
      "Designed a clean and intuitive interface for easy budget setup.",
      "Built RESTful APIs for transaction tracking and category classification.",
      "Integrated real-time data visualization for income and expense flow.",
      "Implemented functionality to generate downloadable PDF reports between selected dates.",
      "Added secure user authentication and feedback submission features.",
    ],
    solutions: [
      "Built a user-friendly dashboard focused on clarity and step-by-step budgeting.",
      "Used category tagging and real-time aggregation logic for clarity.",
      "Used server-side PDF generation libraries to handle export tasks effectively.",
    ],
  },
  
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
    image: ecom,
    technologies: [
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "Node.js", color: "bg-green-100 text-green-800" },
      { name: "MongoDB", color: "bg-yellow-100 text-yellow-800" },
      { name: "Express", color: "bg-gray-100 text-gray-800" },
      { name: "Redux Toolkit", color: "bg-purple-100 text-purple-800" },
    ],
    liveUrl: "https://mboashopsite.onrender.com/",
    githubUrl: "https://github.com/651118070/shop1",
    steps: [
      "Designed and developed the UI using React and Redux Toolkit.",
      "Implemented server-side logic with Node.js and Express.",
      "Configured MongoDB for scalable and efficient data storage.",
      "Integrated secure user authentication and authorization.",
      "Deployed the platform on Render for public access.",
      "Integrated Paypal as payment method",
    ],
 
    solutions: [
      "Used Redux Toolkit for efficient and organized state management.",
      "Implemented secure authentication and encrypted sensitive data.",
      "Optimized API queries and added caching mechanisms.",
    ],
  },
  {
    title: "AI-Powered Summariser Article",
    description: "Summarize articles efficiently with OpenAI's advanced NLP.",
    image: sum,
    technologies: [
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "OpenAI", color: "bg-orange-100 text-orange-800" },
    ],
    liveUrl: "https://summariseepola.netlify.app/",
    githubUrl: "https://github.com/651118070/summarize",
    steps: [
      "Integrated OpenAI API for text summarization.",
      "Designed an intuitive and responsive UI using React.",
      "Implemented error handling for API limits and invalid inputs.",
      "Deployed the app on Netlify for seamless access.",
    ],
  
    solutions: [
      "Implemented robust error handling for API errors.",
      "Used batching techniques to optimize API requests.",
    ],
  },
  {
    title: "E-learning Platform",
    description:
      "A platform to help GCE students excel in their exams through digital learning.",
    image: mentor,
    technologies: [
      { name: "NestJS", color: "bg-red-100 text-red-800" },
      { name: "Next.js", color: "bg-gray-100 text-gray-800" },
      { name: "UploadThing", color: "bg-blue-100 text-blue-800" },
      { name: "Docker", color: "bg-blue-100 text-blue-800" },
      { name: "MongoDB", color: "bg-green-100 text-green-800" },
    ],
    liveUrl: "https://mentor-guru.vercel.app/",
    githubUrl: "https://github.com/jpteks/Mentor-Guru",
    steps: [
      "Designed the backend architecture using NestJS for scalability.",
      "Built a dynamic frontend with Next.js for improved performance.",
      "Integrated UploadThing for seamless file uploads.",
      "Utilized Docker for containerized deployment.",
      "Deployed the platform on Vercel for global accessibility.",
    ],
 
    solutions: [
      "Optimized file upload and download mechanisms with UploadThing.",
      "Implemented load balancing and horizontal scaling.",
    ],
  },
  {
    title: "Fantacola ",
    description:
      "A branding and marketing site for a fictional beverage company, showcasing product portfolios and interactive user engagement.",
    image: fanta,
    technologies: [
      { name: "ReacJs", color: "bg-gray-100 text-gray-800" },
      { name: "Tailwind CSS", color: "bg-blue-100 text-blue-800" },
      { name: "Shadcn", color: "bg-pink-100 text-pink-800" },
      { name: "Framer motion", color: "bg-yellow-100 text-yellow-800" },
    ],
    liveUrl: "https://fanta-house.netlify.app/",
    githubUrl: "https://github.com/651118070/fantacola",
    steps: [
      "Designed a vibrant UI to align with the brand identity.",
      "Optimized site performance for smooth animations and transitions.",
    ],
 
    solutions: ["Developed reusable components and dynamic themes."],
  },
  {
    title: "Pro Health",
    description:
      "A health platform that helps patients book for an appointment with the doctor of their choice.",
    image: tjp, // Assurez-vous que 'tjp' est bien importé depuis vos assets
    technologies: [
      { name: "Next Js", color: "bg-blue-100 text-blue-800" },
      { name: "TailWind css", color: "bg-purple-100 text-purple-800" },
      { name: "Clerk", color: "bg-yellow-100 text-yellow-800" },
      { name: "Prisma", color: "bg-red-100 text-red-800" },
      { name: "Supabase", color: "bg-green-100 text-green-800" },
    ],
    liveUrl: "https://prohealth-khaki.vercel.app/",
    githubUrl: "https://github.com/651118070/prohealth",
    steps: [
      "Implemented a clean and intuitive UI using Next.js and Tailwind CSS.",
      "Integrated secure user authentication and session management with Clerk.",
      "Developed core features including patient booking, cancellation, and rescheduling functionalities.",
      "Built responsive components for both patient and doctor dashboards.",
      "Managed state and routing to ensure smooth user navigation and flow.",
      "Ensured performance optimization and accessibility across all devices.",
    ],
  
    solutions: [
      "Integrated real-time schedule validation with Supabase and Prisma.",
      "Used Clerk for robust authentication and role separation.",
      "Designed mobile-first UI components to ensure accessibility and seamless use.",
    ],
  }
  
];
