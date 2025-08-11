  import { Icons } from "@/components/icons";
  import { HomeIcon, NotebookIcon } from "lucide-react";

  export const DATA = {
    name: "Soham Joshi",
    initials: "SJ",
    url: "https://google.com",
    location: "Pune, IND",
    locationLink: "https://www.google.com/maps/place/Pune",
    description:
      "engineer. builder. lifelong learner.",
    summary:
      "tldr; learnt by hacking around on the internet.\n\n curious about how code, systems, and ideas work under the hood.\n\n love building things that feel like magic. dive deep into tech. also: football and books that shift your perspective.",
    avatarUrl: "/me.jpg",
    resumeUrl: "https://drive.google.com/file/d/19xHNKDBdl5NbdSExxZSPNbQ_bYgHSe13/view?usp=drive_link",
    skills: [
      "Python",
      "TypeScript",
      "Node.js",
      "React",
      "SQL",
      "NoSQL",
      "Shell Scripting",
      "C"
    ],
    navbar: [
      { href: "/", icon: HomeIcon, label: "Home" },
      { href: "/blog", icon: NotebookIcon, label: "Blog" },
    ],
    contact: {
      email: "joshi.soham27@gmail.com",
      tel: "+91 7719088844",
      social: {
        GitHub: {
          name: "GitHub",
          url: "https://github.com/ManInTheHam",
          icon: Icons.github,

          navbar: true,
        },
        LinkedIn: {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/soham-joshi-54aa171aa/",
          icon: Icons.linkedin,

          navbar: true,
        },
        X: {
          name: "X",
          url: "https://x.com/ManInTheHam_",
          icon: Icons.x,

          navbar: true,
        },
        email: {
          name: "Send Email",
          url: "#",
          icon: Icons.email,

          navbar: false,
        },
      },
    },

    work: [
      {
        company: "Motion Cut",
        badges: [],
        location: "Remote",
        title: "Python Developer Intern",
        logoUrl: "/motion.png",
        href: "",
        start: "Dec 2023",
        end: "Feb 2024",
        description:
          "Worked as a Python intern at MotionCut, where I developed automation scripts to streamline data processing workflows. Built modular Python utilities using pandas, requests, and os to handle real-world tasks. Contributed to collaborative projects via Git and implemented robust logging and error handling. Explored API integrations and built CLI tools for internal use.",
      },
    ],
    education: [
      {
        school: "Pune University",
        href: "https://x.com/ManInTheHam_",
        degree: "Electronics & Telecommunications",
        logoUrl: "/sppu.jpeg",
        start: "2021",
        end: "2025",
      },
    ],
    projects: [
      {
        title: "Prescription OCR",
        href: "https://prescription-ocr.vercel.app/",
        dates: "Dec 2024 - April 2025",
        active: true,
        description:
          "Prescription OCR is an AI-powered web application designed to automate the extraction of handwritten medical prescription text. Built to address the challenges of manual data entry in healthcare systems, the platform enables users to upload prescription images and receive structured, machine-readable text output.",
        technologies: [
          "Python",
          "PaddleOCR",
          "ReactJS",
          "Typescript",
          "Supabase",
          "TailwindCSS",
        ],
        links: [
          {
            type: "Website",
            href: "https://prescription-ocr.vercel.app/",
            icon: <Icons.globe className="size-3" />,
          },
          {
            type: "Source",
            href: "https://github.com/ManInTheHam/PrescriptionOCR",
            icon: <Icons.github className="size-3" />,
          }
        ],
        image: "/purple-photo.png",
      },
      {
        title: "GeoID",
        href: "https://github.com/ManInTheHam/Geoid",
        dates: "June 2025 - June 2025",
        active: true,
        description:
          "Designed, developed and soldGeoid is a minimal, fast, and visually engaging command-line tool that fetches real-time weather information based on your location. Inspired by tools like Neofetch, Geoid displays local weather conditions in a beautifully styled ASCII format directly in the terminal.",
        technologies: [
          "Python",
          "Click",
          "Requests",
          "Rich",
          "WeatherAPI",
        ],
        links: [
          {
            type: "Source",
            href: "https://github.com/ManInTheHam/Geoid",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "/geid.png",
      },
      {
        title: "InterviewAI",
        href: "https://interviewai.vercel.app/",
        dates: "Still in development",
        active: true,
        description:
          "Prepwise is an AI-powered mock interview platform that helps users practice interviews in a realistic, voice-based environment. It generates tailored questions, conducts interactive sessions, and provides instant feedback with real-time transcripts to enhance interview readiness.",
        technologies: [
          "Next.js",
          "Firebase",
          "TailwindCSS",
          "Vapi AI",
          "shadcn/ui",
          "Google Gemini",
          "Zod",
        ],
        links: [
        ],
        image: "/INTERAI.png",
      },
      {
        title: "PaperLess",
        href: "",
        dates: "Still in development",
        active: true,
        description:
          "PaperLess is a personal digital library designed to simplify how books are stored and accessed. It allows you to upload your collection, organize them by topic, and read them seamlessly from anywhere. With a clean interface and secure access, it brings order and ease to managing a growing library of technical PDFs.",
        technologies: [
          "Next.js",
          "Typescript",
          "PostgreSQL",
          "TailwindCSS",
          "Firebase",

        ],
        links:[],
        image: "/paperless.png",
      },
    ],
    hackathons: [
      {
        title: "SIH 2023",
        dates: "Aug 2023 - Dec 2023",
        location: "Pune, India",
        description:
          "Developed a full-stack web app that aggregates news and analyzes sentiment using NLP. Included multilingual OCR, YouTube transcript analysis, and regional language support to promote media literacy and balanced insights.",
        image:
          "/sih1.png",
        mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
        links: [],
      },
      {
        title: "SIH 2024",
        dates: "Aug 2024 - Dec 2024",
        location: "Pune, India",
        description:
          "Developed an optimization algorithm to determine optimal shipping routes that minimize fuel consumption and CO₂ emissions. Integrated real-time weather and ocean data to improve accuracy and sustainability in maritime logistics.",
        image:
          "/sih1.png",
        mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
        links: [],
      },
      {
        title: "RevenueCat Shipaton 2025",
        dates: "July 2025 - Oct 1, 2025",
        location: "Online",
        description:
          "Hackathon is still on going ",
        image:
          "/cathack.png",
        links: [
          {
            title: "Devpost",
            icon: <Icons.globe className="h-4 w-4" />,
            href: "https://revenuecat-shipaton-2025.devpost.com/?ref_content=featured&ref_feature=challenge&ref_medium=portfolio",
          },

        ],
      },
    ],
  } as const;
