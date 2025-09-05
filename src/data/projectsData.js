const projectsData = [
  {
    id: 1,
    slug: "armv7",
    title: "armV7",
    desc: "A lightweight ARMv7 CPU core implemented in Verilog.",
    images: ["/project-images/armv7/pc.png"],
    techUsed: ["verilog"],
    features: [
      "Implements instruction fetch, decode, and ALU pipeline",
      "Supports a subset of ARM instructions",
      "Simulated in ModelSim",
    ],
    details:
      "Built for a computer architecture course. The CPU supports a subset of ARM instructions and was verified against test benches.",
    repo: "armv7",
    preview: "https://armv7.vercel.app",
    more: "armv7",
  },
  {
    id: 2,
    slug: "cchive-f",
    title: "CCHive-Frontend",
    desc: "Frontend web app for the CCHive project.",
    techUsed: ["js"],
    features: [
      "Single Page App built with React",
      "Responsive project dashboards",
      "Real-time messaging UI",
    ],
    details:
      "Built with React and Tailwind. Integrates with the backend to provide a smooth student collaboration experience.",
    repo: "cchive_frontend",
    preview: "https://cchive.vercel.app",
  },

  {
    id: 0,
    slug: "cchive-b",
    title: "CCHive-Backend",
    desc: "Backend services for a student collaboration platform.",
    techUsed: ["ruby"],
    features: [
      "REST API with authentication",
      "PostgreSQL persistence",
      "Messaging and collaboration endpoints",
    ],
    details:
      "Developed in Ruby on Rails. Provides backend services for the CCHive platform.",
    repo: "cchive_backend",
  },
  {
    id: 3,
    slug: "assembler",
    title: "Assembler",
    desc: "A custom assembler for a teaching CPU architecture.",
    techUsed: ["asm"],
    features: [
      "Parses custom assembly language",
      "Supports labels and pseudo-ops",
      "Outputs machine code",
    ],
    details:
      "Assembler toolchain written for a course CPU simulator, providing human-readable to binary translation.",
    repo: "armv7/tree/main/asm",
  },
  {
    id: 4,
    slug: "fire-hall-events",
    title: "Fire Hall Events",
    desc: "Website to manage and display upcoming community events.",
    techUsed: ["js"],
    features: [
      "Interactive event calendar",
      "RSVP system",
      "Admin panel for event management",
    ],
    details:
      "Built with React and Firebase. Designed for a local fire hall to organize and publish community events.",
    repo: "fire-hall-events",
    preview: "https://fire-hall-events.vercel.app",
  },
  {
    id: 5,
    slug: "quickmove",
    title: "QuickMove Solutions",
    desc: "Logistics and moving services booking platform.",
    techUsed: ["js"],
    features: [
      "Booking system for moving services",
      "Cost estimation calculator",
      "Live chat with service providers",
    ],
    details:
      "MERN stack app connecting customers with moving crews, featuring real-time updates.",
    repo: "junk-removal-demo",
    preview: "https://junk-removal-demo.vercel.app",
  },
  {
    id: 6,
    slug: "shiftbot",
    title: "shiftBOT",
    desc: "A scheduling assistant bot for shift-based jobs.",
    techUsed: ["python"],
    features: [
      "Generates optimal shift rotations",
      "Conflict resolution algorithm",
      "Automatic reminders",
    ],
    details:
      "Written in Python with scheduling algorithms to minimize conflicts and ensure fairness.",
    repo: "shiftBOT",
  },
  {
    id: 7,
    slug: "applications-bot",
    title: "Applications BOT",
    desc: "Discord bot for handling internship applications.",
    techUsed: ["python"],
    features: [
      "Collects and validates form submissions",
      "Automated replies to applicants",
      "Exports data to CSV",
    ],
    details:
      "Built with discord.py. Simplified application intake for a student club.",
    repo: "amazon-jobs-bot",
  },
  {
    id: 8,
    slug: "rails-social",
    title: "Project: Facebook",
    desc: "Recreation of early Facebook features for learning purposes.",
    techUsed: ["ruby"],
    features: [
      "Profiles with friend requests",
      "Posting and commenting system",
      "Basic news feed",
    ],
    details:
      "Ruby on Rails project mimicking early Facebook core features. Built to practice scalable app design.",
    repo: "project_facebook",
    preview: "https://project-facebook.fly.dev/",
  },
  {
    id: 9,
    slug: "cs120",
    title: "CS-120",
    desc: "Collection of course projects for CS-120.",
    techUsed: ["python"],
    features: [
      "Sorting algorithm implementations",
      "Search algorithms",
      "Simulation models",
    ],
    details:
      "Assignments covering core algorithms and data structures, packaged into one repo.",
    repo: "csci-120",
  },
];

export default projectsData;
