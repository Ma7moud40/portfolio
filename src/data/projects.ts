export type ProjectCategory =
  | "robotics"
  | "medical"
  | "agriculture"
  | "power"
  | "embedded"
  | "industrial";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  short: string;
  tech: string[];
  year: string;
  status?: "Shipped" | "Prototype" | "In Production" | "Research";
};

export const projects: Project[] = [
  // ── Robotics ──────────────────────────────────────────────────
  {
    slug: "arm-robot",
    title: "Kinematic Robotic Arm",
    category: "robotics",
    categoryLabel: "Robotics",
    short:
      "Multi-DOF robotic manipulator platform featuring servo actuation, inverse kinematics control, and custom gripper end-effector for payload pick-and-place tasks.",
    tech: ["Servo Motors", "Arduino", "Inverse Kinematics", "C/C++", "3D Printing"],
    year: "2025",
    status: "Prototype",
  },
  {
    slug: "self-balancing-robot",
    title: "Self-Balancing Inverted Pendulum Robot",
    category: "robotics",
    categoryLabel: "Robotics",
    short:
      "Two-wheeled balancing robot using MPU6050 IMU, complementary-filter data fusion, and real-time PID algorithm to control 12V geared DC motors.",
    tech: ["MPU6050", "PID Control", "L298N H-Bridge", "Arduino", "Complementary Filter"],
    year: "2024",
    status: "Prototype",
  },

  // ── Medical Devices ───────────────────────────────────────────
  {
    slug: "arm-angle-shoulder-guard",
    title: "ShoulderGuard — Wearable Arm Angle Monitor",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "Dual-MPU6500 smart wearable rehabilitation tracker that computes shoulder abduction and flexion angles via Mahony AHRS quaternion fusion, streaming telemetry to a Flutter companion app.",
    tech: ["ESP32", "MPU-6500 IMU", "Mahony AHRS", "Bluetooth SPP", "Flutter", "Haptics"],
    year: "2026",
    status: "Shipped",
  },
  {
    slug: "balance-sense",
    title: "BalanceSense Rehabilitation Platform",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "Balance training platform with 4x HX711 load cells computing center-of-gravity in real time, with WS2812 LED biofeedback and interactive Bluetooth Flutter rehab games.",
    tech: ["ESP32", "HX711 ADC", "Load Cells", "WS2812 LEDs", "Bluetooth", "Flutter"],
    year: "2025",
    status: "Shipped",
  },

  // ── Agri-Tech ─────────────────────────────────────────────────
  {
    slug: "grass-cutter-robot",
    title: "Autonomous Grass-Cutter Mowing Robot",
    category: "agriculture",
    categoryLabel: "Agri-Tech",
    short:
      "Rugged outdoor agricultural/landscaping mower robot with custom Altium-designed controller PCB, wireless RF remote control links, and safety tilt/lift cut-off sensors.",
    tech: ["Altium Designer", "Motor Drivers", "RF Transceiver", "Safety Sensors", "Custom PCB"],
    year: "2023",
    status: "Shipped",
  },
  {
    slug: "atis",
    title: "ATIS — Auto Tire Inflation System",
    category: "agriculture",
    categoryLabel: "Agri-Tech",
    short:
      "Automatic tire pressure monitoring and inflation control system for agricultural field vehicles. ATmega328P PID controls compressors/solenoids with terrain modes.",
    tech: ["ATmega328P", "Pressure Transducer", "Solenoid Valves", "LCD Interface", "PID Loop"],
    year: "2026",
    status: "Shipped",
  },

  // ── Industrial Automation ─────────────────────────────────────
  {
    slug: "throttle-valve-controller",
    title: "Industrial Throttle Valve Controller",
    category: "industrial",
    categoryLabel: "Industrial",
    short:
      "ESP32-based water filtration system valve actuator with PID loop flow-rate tracking, reading ADS1115 ADCs for pressure/TDS, and featuring a TOPWAY HMI touch interface.",
    tech: ["ESP32", "PID Loop", "ADS1115 ADC", "TOPWAY HMI", "Flow Sensor", "Cytron Motor Driver"],
    year: "2026",
    status: "Shipped",
  },
  {
    slug: "smart-pipe-inspection-rig",
    title: "Smart Pipe Inspection Rig Rover",
    category: "industrial",
    categoryLabel: "Industrial",
    short:
      "Tethered inspection rover designed for narrow conduits. ESP32-based live video streaming feed, onboard distance encoders, and joystick control unit for field diagnostics.",
    tech: ["ESP32-CAM", "DC Gear Motors", "Wheel Encoders", "Wireless Video Link", "Custom Chassis"],
    year: "2026",
    status: "Prototype",
  },

  // ── Embedded & Power ──────────────────────────────────────────
  {
    slug: "smart-power-selector",
    title: "Smart Power Source Selector",
    category: "power",
    categoryLabel: "Power",
    short:
      "High-speed automatic power source transfer switch. Detects AC mains brownout/outage in milliseconds and switches system to backup generator seamlessly.",
    tech: ["AC Mains Sensing", "High-Speed Relays", "PCB Layout", "Power Circuit Design"],
    year: "2025",
    status: "Shipped",
  },
  {
    slug: "tiny-reflow-oven",
    title: "Tiny Reflow Oven SMT Controller",
    category: "embedded",
    categoryLabel: "Embedded",
    short:
      "Compact PID reflow soldering controller with thermocouple temperature feedback and an OLED interface for custom profile curves (lead-free / leaded).",
    tech: ["PID Algorithm", "Thermocouple Amplifier", "OLED Display", "Solid-State Relay (SSR)"],
    year: "2024",
    status: "Shipped",
  },
];

export const projectCategories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "robotics", label: "Robotics" },
  { value: "medical", label: "Medical" },
  { value: "agriculture", label: "Agri-Tech" },
  { value: "power", label: "Power" },
  { value: "embedded", label: "Embedded" },
  { value: "industrial", label: "Industrial" },
];
