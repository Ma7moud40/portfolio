export type ProjectCategory =
  | "robotics"
  | "medical"
  | "assistive"
  | "power"
  | "embedded"
  | "industrial";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  short: string;
  long: string;
  highlights: string[];
  tech: string[];
  year?: string;
  status?: "Shipped" | "Prototype" | "In Production" | "Research";
};

export const projects: Project[] = [
  {
    slug: "self-balancing-robot",
    title: "Self-Balancing Robot",
    category: "robotics",
    categoryLabel: "Robotics",
    short:
      "Two-wheeled inverted-pendulum robot that holds itself upright in real time.",
    long: "A classic inverted-pendulum platform built from scratch — chassis, motor drive, and firmware. The robot reads its tilt angle from an IMU at high frequency and runs a tuned PID loop to drive its wheels in opposite directions when it starts to fall, keeping it perfectly balanced.",
    highlights: [
      "MPU6050 IMU with complementary-filter sensor fusion",
      "Hand-tuned PID loop for stability under disturbance",
      "L298N H-bridge driving 12V geared DC motors",
      "Custom 3D-printed chassis",
    ],
    tech: ["MPU6050", "PID Control", "C/C++", "Arduino", "L298N", "3D Print"],
    year: "2024",
    status: "Prototype",
  },
  {
    slug: "spine-scanner",
    title: "Spine Scanner",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "Posture and spinal-curvature analysis tool for clinical assessment.",
    long: "A handheld scanner that traces the contour of the spine using inertial measurement and outputs curvature data clinicians can use to assess posture and track therapy progress over time.",
    highlights: [
      "IMU-based curvature reconstruction",
      "Real-time data streaming to a host app",
      "Compact, ergonomic enclosure",
      "Designed in collaboration with healthcare partners",
    ],
    tech: ["IMU", "Bluetooth", "Firmware", "SolidWorks"],
    year: "2024",
    status: "Research",
  },
  {
    slug: "smart-blind-stick",
    title: "Smart Blind Stick",
    category: "assistive",
    categoryLabel: "Assistive Tech",
    short:
      "Ultrasonic-sensor cane that detects obstacles and gives haptic + audio feedback.",
    long: "An assistive walking cane for visually impaired users. Ultrasonic sensors look ahead and downward; a vibration motor and buzzer alert the user about obstacles, edges, or wet ground before they become a hazard.",
    highlights: [
      "Multi-direction ultrasonic sensing",
      "Vibration + buzzer feedback prioritized by distance",
      "Battery-powered, lightweight build",
      "Water-detection module",
    ],
    tech: ["Ultrasonic", "Arduino", "Haptics", "Battery"],
    year: "2023",
    status: "Prototype",
  },
  {
    slug: "grass-cutter-robot",
    title: "Autonomous Grass-Cutter Robot",
    category: "robotics",
    categoryLabel: "Robotics",
    short:
      "Remote-operated lawn-mowing robot with a custom motor-drive PCB and safety interlocks.",
    long: "A rugged outdoor robot that mows grass on demand. Designed and manufactured a custom PCB to drive the cutting motor and wheel motors safely, with interlocks that cut power if the chassis is tilted or lifted.",
    highlights: [
      "Custom-designed PCB in Altium Designer",
      "RF remote control",
      "Tilt and lift safety interlocks",
      "All-terrain motor drive",
    ],
    tech: ["Altium", "Motor Driver", "RF Remote", "PCB"],
    year: "2023",
    status: "Shipped",
  },
  {
    slug: "tiny-reflow-oven",
    title: "Tiny Reflow Oven",
    category: "embedded",
    categoryLabel: "Embedded Tool",
    short:
      "Compact reflow soldering controller with thermocouple feedback for SMD assembly.",
    long: "A bench-friendly reflow soldering station with configurable temperature profiles, thermocouple feedback, and an OLED UI. Used to reliably solder SMD prototypes in-house instead of by hand.",
    highlights: [
      "PID temperature control with thermocouple input",
      "OLED-based profile picker (Sn-Pb / Pb-Free)",
      "SSR-driven heating element",
      "Open-source friendly firmware",
    ],
    tech: ["PID", "Thermocouple", "OLED", "SSR"],
    year: "2024",
    status: "Shipped",
  },
  {
    slug: "smart-power-selector",
    title: "Smart Power Selector",
    category: "power",
    categoryLabel: "Power Electronics",
    short:
      "Automatic transfer switch — falls over from mains to backup source in milliseconds.",
    long: "An automatic-transfer-switch board that watches the AC mains and seamlessly switches connected loads to a backup supply when it detects a brownout or outage, then switches back when mains is healthy again.",
    highlights: [
      "Fast AC-loss detection",
      "Relay-isolated switching",
      "Designed-for-safety PCB layout",
      "Indicator LEDs for live source",
    ],
    tech: ["Relays", "AC Sensing", "PCB", "Altium"],
    year: "2024",
    status: "Shipped",
  },
  {
    slug: "neurorehab-device",
    title: "NeuroRehab Device",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "Assistive device supporting motor-function recovery in collaboration with clinicians.",
    long: "A neurological rehabilitation device co-designed with clinical researchers. It guides patients through repeatable therapy motions and logs session data so therapists can track recovery over time.",
    highlights: [
      "Programmable therapy sessions",
      "EMG + servo-driven assistance",
      "Per-patient session logging",
      "Designed with clinical researchers",
    ],
    tech: ["EMG", "Servo", "Microcontroller", "Clinical UX"],
    year: "2024",
    status: "Research",
  },
  {
    slug: "smart-pipe-inspection-rig",
    title: "Smart Pipe Inspection Rig",
    category: "industrial",
    categoryLabel: "Industrial",
    short:
      "Tethered inspection rover with live camera and distance telemetry for narrow pipes.",
    long: "An industrial inspection rover that travels down narrow pipes carrying a live camera and a wheel-encoder for distance telemetry. Operators can inspect the inside of infrastructure for faults without dismantling it.",
    highlights: [
      "Tele-operated drive with live video",
      "Wheel-encoder distance reporting",
      "Compact form factor for narrow pipes",
      "ESP32-based control link",
    ],
    tech: ["ESP32", "Tele-op", "Camera", "Encoders"],
    year: "2024",
    status: "Prototype",
  },
  {
    slug: "prayer-time-clock",
    title: "Prayer-Time Clock",
    category: "embedded",
    categoryLabel: "Embedded",
    short:
      "Standalone clock that computes and displays daily prayer times with scheduled azan.",
    long: "A self-contained embedded clock that computes the five daily Islamic prayer times from a configured location, displays them on a 7-segment array, and triggers a scheduled azan output at each prayer time.",
    highlights: [
      "Computes prayer times locally — no internet needed",
      "RTC-backed time keeping",
      "7-segment time display",
      "Automatic azan scheduling",
    ],
    tech: ["RTC", "7-Segment", "C", "Microcontroller"],
    year: "2023",
    status: "Shipped",
  },
];

export const projectCategories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "robotics", label: "Robotics" },
  { value: "medical", label: "Medical" },
  { value: "assistive", label: "Assistive" },
  { value: "power", label: "Power" },
  { value: "embedded", label: "Embedded" },
  { value: "industrial", label: "Industrial" },
];

export const moreProjectsTeaser = [
  "Line-Follower Robot",
  "Muscle Tracker",
  "Pressure Insole",
  "Smart Postnatal Brace",
  "Throttle-Valve Control",
  "Stackable Brushless Gearbox",
  "Back-Massage & TENS",
  "Foot-Weight Logic",
  "Joystick PCB",
  "Custom 7-Seg Driver",
  "Op-Amp PCB",
  "Stepper Control PCB",
  "AC-to-DC Converter",
  "Drilling Rig",
  "Inflatable Bed Controller",
  "Angle-TENS Therapy",
  "BalanceSense",
  "Assistive Arm",
  "Assistive Leg",
  "Smart Mat",
  "Lung-Breathing Monitor",
  "Spine Scanner v2",
  "Robot Ball",
  "Me_Arm Robot",
  "Parabolic Tracker",
  "Scoreboard Game",
  "Foot-Sensor Sound (FIRIST)",
  "Data-Logger",
];
