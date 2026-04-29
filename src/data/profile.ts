export const profile = {
  name: "Mahmoud Adel Eid Khalifa",
  shortName: "Mahmoud Adel",
  initials: "MA",
  title: "Embedded Systems Engineer",
  location: "Alexandria, Egypt",
  email: "MahmoudAdelll154@gmail.com",
  phone: "+201064768340",
  phoneDisplay: "+20 106 476 8340",
  linkedin: "https://linkedin.com/in/mahmoud-adelll154",
  linkedinHandle: "/in/mahmoud-adelll154",
  summary:
    "Embedded Systems Engineer with hands-on experience developing devices, robots, and electronic circuits. I love turning a schematic into a working system — from firmware on microcontrollers to custom PCBs.",
  longSummary:
    "I’m an Embedded Systems Engineer at Comet Lab, building devices and robotics from the ground up. I’ve delivered 50+ projects spanning robotics, medical and assistive devices, power electronics, and industrial control. I write clean firmware, design and manufacture PCBs, and enjoy collaborating across hardware and software to ship reliable systems.",
} as const;

export const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "2+", label: "Years hands-on" },
  { value: "10+", label: "Medical devices" },
] as const;

export const experiences = [
  {
    company: "Comet Lab",
    role: "Embedded Systems Engineer",
    period: "2024 — Present",
    bullets: [
      "Developed and enhanced a wide range of devices and robotic systems.",
      "Wrote and optimized firmware for microcontrollers in C/C++.",
      "Designed and manufactured custom PCBs in Altium Designer.",
      "Performed extensive hardware bring-up and reliability testing.",
    ],
  },
  {
    company: "EME BORG",
    role: "Tech Makes Intern",
    period: "2024 · 2 months",
    bullets: [
      "3D & 2D design, 3D printing, laser cutting and CNC routing.",
      "Prototyping with Arduino, ESP32, and Raspberry Pi.",
      "Electronics fundamentals and PCB prototyping workflow.",
    ],
  },
  {
    company: "Comet Lab",
    role: "Engineering Intern",
    period: "2023 — 2024",
    bullets: [
      "Learned the embedded engineering workflow end-to-end.",
      "Contributed to hardware tasks and supported the engineering team.",
    ],
  },
] as const;

export const technicalSkills = [
  { name: "C / C++", glyph: "</>" },
  { name: "Embedded Firmware", glyph: "μ" },
  { name: "PCB Design & Manufacturing", glyph: "▦" },
  { name: "Robotics & ROS", glyph: "◉" },
  { name: "Flutter", glyph: "📱" },
  { name: "Electronics", glyph: "⚡" },
] as const;

export const tools = [
  { name: "Altium Designer", glyph: "◬" },
  { name: "SolidWorks", glyph: "◈" },
  { name: "Eagle", glyph: "◊" },
  { name: "VS Code", glyph: "❮❯" },
] as const;

export const softSkills = [
  "Discipline",
  "Team Collaboration",
  "Self-Learning",
  "Communication",
  "Problem-Solving",
  "Adaptability",
] as const;

export const education = [
  {
    degree: "Agricultural Engineering",
    school: "Faculty of Agriculture · Alexandria University",
    detail: "Department of Agricultural Engineering.",
  },
  {
    degree: "Aspire Leaders Program",
    school: "Aspire Institute · 2024 – 2025",
    detail: "Global leadership development program.",
  },
] as const;

export const languages = [
  { name: "Arabic", level: "Native", percent: 100 },
  { name: "English", level: "Good", percent: 75 },
] as const;
