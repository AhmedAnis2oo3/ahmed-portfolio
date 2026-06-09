// ─── COLOURS ──────────────────────────────────────────────────────────────
export const T = {
  bg:       "#080C14",
  bg2:      "#0C1220",
  surface:  "#0F1826",
  glass:    "rgba(15, 24, 38, 0.7)",
  border:   "rgba(99, 179, 237, 0.12)",
  borderHi: "rgba(99, 179, 237, 0.35)",
  cyan:     "#63B3ED",
  cyanDim:  "#2E6FA8",
  cyanGlow: "rgba(99,179,237,0.18)",
  emerald:  "#34D399",
  amber:    "#FBBF24",
  rose:     "#F87171",
  text:     "#E8F0FE",
  body:     "#94A3B8",
  muted:    "#4A5568",
  dim:      "#2D3748",
};

// ─── YOUR PERSONAL DATA ───────────────────────────────────────────────────
// THIS IS WHAT YOU REWRITE. Don't touch anything else until this is yours.
export const D = {
  name:     "Ahmed Anis",
  initials: "AA",
  role:     "Full-Stack Developer",
  tagline:  "ASP.NET Core  ·  MERN Stack  ·  REST APIs",
  bio:      "Write your own bio here. 2-3 sentences. Who you are, what you build, what you want.",
  email:    "Ahmed007bakhai@gmail.com",
  phone:    "+92 331 9761470",
  linkedin: "https://linkedin.com/in/ahmedanis2003",
  location: "Karachi, Pakistan",

  stats: [
    { val: "SZABIST",   label: "University"     },
    { val: "10+",       label: "Technologies"   },
    { val: "4+",        label: "Certifications" },
    { val: "2025",      label: "Internship"     },
  ],

  experience: [
    {
      company: "Indolj",
      role:    "Software Development Intern",
      period:  "Jul – Sep 2025",
      color:   "#34D399",   // T.emerald — reuse the colour token
      bullets: [
        "Write what you actually did here.",
        "One real technical thing you touched.",
        "One thing you learned or fixed.",
      ],
    },
  ],

  education: [
    { inst: "SZABIST University",   deg: "BS Software Engineering", period: "2023 – Present", status: "current" },
    { inst: "Eden College Clifton", deg: "A Levels",                period: "2022"            },
    { inst: "Bahria College",       deg: "O Levels",                period: "2020"            },
  ],

  skills: [
    { cat: "Comfortable With", color: "#63B3ED", items: ["ASP.NET Core", "SQL Server", "React", "Node.js"] },
    { cat: "Used in Projects",  color: "#34D399", items: ["MongoDB", "Express.js", "JWT Auth", "REST APIs"] },
    { cat: "Familiar With",     color: "#FBBF24", items: ["PHP", "Git", "MVC Architecture", "C#"] },
    { cat: "Tools",             color: "#F87171", items: ["Visual Studio", "GitHub"] },
    { cat: "Coursework",        color: "#A78BFA", items: ["OOP", "Software Engineering", "Web Dev", "Database Management"] },
  ],

  projects: [
    {
      title:  "E-commerce Admin Panel & REST APIs",
      stack:  ["ASP.NET Core", "C#", "SQL Server", "JWT"],
      color:  "#63B3ED",
      desc:   "What problem does it solve? Write one real sentence.",
      bullets: [
        "One real technical decision you made.",
        "One thing that broke and how you fixed it.",
        "One thing you're actually proud of.",
      ],
    },
  ],

  certs: [
    { name: "CPISM",       org: "Aptech Computer Education" },
    { name: "DISM",        org: "Aptech Computer Education" },
    { name: "HDSE I & II", org: "Aptech Computer Education" },
  ],
};

// ─── NAVIGATION ───────────────────────────────────────────────────────────
export const NAV = ["About", "Experience", "Skills", "Projects", "Contact"];