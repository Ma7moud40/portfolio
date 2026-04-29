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
  tech: string[];
  year: string;
  status?: "Shipped" | "Prototype" | "In Production" | "Research";
};

export const projects: Project[] = [
  // ── 2026 ──────────────────────────────────────────────────────
  {
    slug: "atis",
    title: "ATIS — Auto Tire Inflation",
    category: "industrial",
    categoryLabel: "Industrial",
    short:
      "Automatic tire inflation system for agricultural vehicles. ATmega328P controls compressor & solenoid via pressure feedback with 3 terrain modes (Sand/Road/Clay), 20×4 LCD UI, and overpressure safety.",
    tech: ["ATmega328P", "Pressure Sensor", "Relay", "LCD I²C", "PCB"],
    year: "2026",
    status: "Shipped",
  },
  {
    slug: "arm-angle-shoulder-guard",
    title: "ShoulderGuard — Arm Angle Monitor",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "Dual-MPU6500 wearable that tracks shoulder abduction & flexion angles via Mahony AHRS quaternion fusion. Bluetooth streams to a Flutter companion app with configurable alarm/danger zones and buzzer + vibration alerts.",
    tech: ["ESP32", "MPU-6500", "Mahony AHRS", "Bluetooth", "Flutter", "EEPROM"],
    year: "2026",
    status: "Shipped",
  },
  {
    slug: "smart-postnatal-brace",
    title: "Smart Postnatal Brace",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "Wearable postnatal rehabilitation brace with embedded sensors monitoring recovery progress and providing real-time feedback to patients and clinicians.",
    tech: ["ESP32", "Sensors", "PCB", "Bluetooth"],
    year: "2026",
    status: "Research",
  },
  {
    slug: "angle-tens-therapy",
    title: "Angle-Based TENS Therapy",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "TENS electrical stimulation device that adjusts therapy intensity based on joint angle measurements, combining pain management with range-of-motion tracking.",
    tech: ["MPU", "TENS", "Microcontroller", "PCB"],
    year: "2026",
    status: "Research",
  },
  {
    slug: "inflatable-bed-controller",
    title: "Inflatable Bed Controller",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "Automated inflatable bed controller for patient care, managing pressure zones to prevent bedsores with programmable inflation/deflation cycles.",
    tech: ["Microcontroller", "Pump", "Relay", "PCB"],
    year: "2026",
    status: "Research",
  },
  {
    slug: "assistive-leg",
    title: "Assistive Leg Device",
    category: "assistive",
    categoryLabel: "Assistive Tech",
    short:
      "Motorized assistive leg device providing powered mobility support with sensor-based gait detection and adaptive motor control.",
    tech: ["Motor Driver", "Sensors", "PCB", "Microcontroller"],
    year: "2026",
    status: "Research",
  },
  {
    slug: "smart-mat",
    title: "Smart Mat",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "Sensor-equipped smart mat for patient monitoring — detects pressure distribution, occupancy, and movement patterns for clinical and home-care use.",
    tech: ["Pressure Sensors", "ESP32", "PCB", "Bluetooth"],
    year: "2026",
    status: "Research",
  },
  {
    slug: "throttle-valve-controller",
    title: "Throttle Valve Controller",
    category: "industrial",
    categoryLabel: "Industrial",
    short:
      "ESP32-based water filter throttle valve with PID flow-rate control. Reads 3 flow meters, 2 pressure sensors, and TDS via ADS1115. TOPWAY HMI touchscreen UI with auto/manual modes and Cytron motor drive.",
    tech: ["ESP32", "PID", "ADS1115", "TOPWAY HMI", "Flow Meter", "PCB"],
    year: "2026",
    status: "Shipped",
  },
  {
    slug: "neurorehab-device",
    title: "NeuroRehab Device",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "Neurological rehabilitation device co-designed with clinical researchers. Guides patients through repeatable therapy motions and logs session data for therapist review.",
    tech: ["EMG", "Servo", "Microcontroller", "Clinical UX"],
    year: "2026",
    status: "Research",
  },
  {
    slug: "smart-pipe-inspection-rig",
    title: "Smart Pipe Inspection Rig",
    category: "industrial",
    categoryLabel: "Industrial",
    short:
      "Tethered inspection rover with live camera and wheel-encoder distance telemetry for narrow pipes. ESP32-based control link lets operators inspect infrastructure without dismantling it.",
    tech: ["ESP32", "Tele-op", "Camera", "Encoders"],
    year: "2026",
    status: "Prototype",
  },
  // ── 2025 ──────────────────────────────────────────────────────
  {
    slug: "balance-sense",
    title: "BalanceSense",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "Balance training platform with 4× HX711 load cells computing center-of-gravity in real time. 40 WS2812 LEDs provide color-mapped weight feedback. Bluetooth SPP streams data to a Flutter app with interactive rehabilitation games.",
    tech: ["ESP32", "HX711", "WS2812", "Bluetooth SPP", "Flutter"],
    year: "2025",
    status: "Shipped",
  },
  {
    slug: "3-cuff-leg",
    title: "3-Cuff Leg Compression",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "Triple-cuff sequential pneumatic compression therapy device for leg circulation and deep vein thrombosis prevention.",
    tech: ["Pneumatics", "Relay", "Microcontroller", "PCB"],
    year: "2025",
    status: "Prototype",
  },
  {
    slug: "foot-weight-logic",
    title: "Foot Weight Logic",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "Weight distribution analysis system for foot biomechanics. Measures force distribution across plantar surface for gait analysis and rehabilitation guidance.",
    tech: ["Load Cells", "ADC", "Microcontroller", "PCB"],
    year: "2025",
    status: "Prototype",
  },
  {
    slug: "lung-breathing-monitor",
    title: "Lung Breathing Monitor",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "ESP32-based breathing pattern monitor with Flutter companion app. Tracks respiratory rate and volume for pulmonary rehabilitation and clinical assessment.",
    tech: ["ESP32", "Sensors", "Flutter", "Bluetooth", "PCB"],
    year: "2025",
    status: "Research",
  },
  {
    slug: "me-arm-robot",
    title: "MeArm Desktop Robot",
    category: "robotics",
    categoryLabel: "Robotics",
    short:
      "4-DOF desktop robotic arm controller. Precision servo control with coordinate mapping for pick-and-place tasks and educational demonstrations.",
    tech: ["Servo", "Arduino", "3D Print", "C/C++"],
    year: "2025",
    status: "Shipped",
  },
  {
    slug: "smart-power-selector",
    title: "Smart Power Selector",
    category: "power",
    categoryLabel: "Power Electronics",
    short:
      "Automatic transfer switch that detects AC mains brownout/outage in milliseconds and seamlessly switches loads to backup supply, then restores when mains returns healthy.",
    tech: ["Relays", "AC Sensing", "PCB", "Altium"],
    year: "2025",
    status: "Shipped",
  },
  {
    slug: "ac-to-dc-converter",
    title: "AC-to-DC Converter",
    category: "power",
    categoryLabel: "Power Electronics",
    short:
      "Custom-designed AC-to-DC power conversion board with regulated output, protection circuits, and compact PCB layout for embedded system power supplies.",
    tech: ["PCB", "Power", "Altium", "Transformer"],
    year: "2025",
    status: "Shipped",
  },
  {
    slug: "stackable-brushless-gearbox",
    title: "Stackable Brushless Gearbox",
    category: "embedded",
    categoryLabel: "Embedded",
    short:
      "Modular brushless motor gearbox design with stackable stages for configurable torque/speed ratios. Includes custom driver PCB.",
    tech: ["BLDC", "Gearbox", "SolidWorks", "PCB"],
    year: "2025",
    status: "Prototype",
  },
  {
    slug: "joystick-pcb",
    title: "Joystick Controller PCB",
    category: "embedded",
    categoryLabel: "Embedded",
    short:
      "Custom joystick controller PCB with analog stick input, button matrix, and microcontroller interface for robot and game control applications.",
    tech: ["PCB", "Altium", "Analog", "Microcontroller"],
    year: "2025",
    status: "Shipped",
  },
  {
    slug: "prayer-time-clock",
    title: "Prayer-Time Clock",
    category: "embedded",
    categoryLabel: "Embedded",
    short:
      "Self-contained embedded clock that computes the five daily Islamic prayer times from location config, displays on 7-segment array, and triggers scheduled azan output.",
    tech: ["RTC", "7-Segment", "C", "Microcontroller"],
    year: "2025",
    status: "Shipped",
  },
  {
    slug: "custom-7-seg-driver",
    title: "Custom 7-Segment Driver",
    category: "embedded",
    categoryLabel: "Embedded",
    short:
      "Custom-designed 7-segment display driver PCB with multiplexing, adjustable brightness, and serial interface for multi-digit numeric displays.",
    tech: ["PCB", "Shift Register", "Altium"],
    year: "2025",
    status: "Shipped",
  },
  {
    slug: "op-amp-pcb",
    title: "Op-Amp Learning PCB",
    category: "embedded",
    categoryLabel: "Embedded",
    short:
      "Educational operational amplifier PCB with configurable gain stages, filter circuits, and test points for hands-on analog electronics learning.",
    tech: ["Op-Amp", "PCB", "Analog", "Altium"],
    year: "2025",
    status: "Shipped",
  },
  {
    slug: "control-stepper-pcb",
    title: "Stepper Motor Controller",
    category: "embedded",
    categoryLabel: "Embedded",
    short:
      "Stepper motor controller PCB with microstepping support, current limiting, and direction/step interface for CNC and automation projects.",
    tech: ["Stepper", "PCB", "Driver IC", "Altium"],
    year: "2025",
    status: "Shipped",
  },
  {
    slug: "scoreboard-game",
    title: "Electronic Scoreboard",
    category: "embedded",
    categoryLabel: "Embedded",
    short:
      "Electronic scoreboard with integrated game logic, wireless remote scoring, and large LED matrix display for sports and events.",
    tech: ["LED Matrix", "RF Remote", "Microcontroller", "PCB"],
    year: "2025",
    status: "Shipped",
  },
  {
    slug: "somu-robot",
    title: "Somu Robot",
    category: "robotics",
    categoryLabel: "Robotics",
    short:
      "Autonomous mobile robot platform with sensor array for obstacle avoidance and environment exploration capabilities.",
    tech: ["Motors", "Sensors", "Arduino", "3D Print"],
    year: "2025",
    status: "Prototype",
  },
  {
    slug: "robot-tech-borg",
    title: "Robot Tech BORG",
    category: "robotics",
    categoryLabel: "Robotics",
    short:
      "Competition-grade robot platform built for robotics contests. Features powerful drive train, weapon system, and reinforced chassis.",
    tech: ["Motor Driver", "Arduino", "Metal Frame", "Battery"],
    year: "2025",
    status: "Shipped",
  },
  {
    slug: "parabolic-tracker",
    title: "Parabolic Tracker",
    category: "robotics",
    categoryLabel: "Robotics",
    short:
      "Dual-axis parabolic dish tracking system with servo-driven positioning for solar concentration or satellite signal tracking applications.",
    tech: ["Servo", "Sensors", "Arduino", "3D Print"],
    year: "2025",
    status: "Prototype",
  },
  // ── 2024 ──────────────────────────────────────────────────────
  {
    slug: "tiny-reflow-oven",
    title: "Tiny Reflow Oven",
    category: "embedded",
    categoryLabel: "Embedded Tool",
    short:
      "Compact reflow soldering controller with PID temperature control, thermocouple feedback, and OLED profile picker (Sn-Pb / Pb-Free) for in-house SMD assembly.",
    tech: ["PID", "Thermocouple", "OLED", "SSR"],
    year: "2024",
    status: "Shipped",
  },
  {
    slug: "screen-face-massage",
    title: "Screen-Controlled Face Massage",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "Facial massage device with touchscreen interface for selecting massage patterns, intensity levels, and timer-based treatment programs.",
    tech: ["Display", "Motor", "Microcontroller", "PCB"],
    year: "2024",
    status: "Prototype",
  },
  {
    slug: "laser-rf",
    title: "RF Laser Controller",
    category: "embedded",
    categoryLabel: "Embedded",
    short:
      "RF-controlled laser system with wireless trigger, safety interlocks, and power regulation for remote-operated applications.",
    tech: ["RF Module", "Laser", "Safety", "PCB"],
    year: "2024",
    status: "Prototype",
  },
  {
    slug: "pressure-insole",
    title: "Pressure Insole",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "Foot pressure-sensing insole with multi-point force sensors for gait analysis, plantar pressure mapping, and diabetic foot monitoring.",
    tech: ["Force Sensors", "ADC", "Bluetooth", "PCB"],
    year: "2024",
    status: "Prototype",
  },
  {
    slug: "back-massage-tens",
    title: "Back Massage & TENS",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "Combined mechanical massage and TENS electrical stimulation device for back pain relief. Configurable massage patterns and TENS intensity via button interface.",
    tech: ["TENS", "Motor", "Microcontroller", "PCB"],
    year: "2024",
    status: "Shipped",
  },
  {
    slug: "back-angle-tracker",
    title: "Back Angle Tracker",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "Wearable posture monitoring system that tracks spinal angle via IMU sensor and alerts the user with haptic feedback when slouching exceeds a threshold.",
    tech: ["IMU", "Buzzer", "Battery", "Arduino"],
    year: "2024",
    status: "Prototype",
  },
  {
    slug: "arm-play-mpu",
    title: "Arm Play MPU",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "MPU-based arm motion tracking system for rehabilitation exercises. Captures range-of-motion data and provides gamified feedback for therapy engagement.",
    tech: ["MPU6050", "Arduino", "Bluetooth", "C/C++"],
    year: "2024",
    status: "Prototype",
  },
  {
    slug: "self-balancing-robot",
    title: "Self-Balancing Robot",
    category: "robotics",
    categoryLabel: "Robotics",
    short:
      "Two-wheeled inverted-pendulum robot with MPU6050 IMU, complementary-filter fusion, and hand-tuned PID loop driving 12V geared DC motors via L298N H-bridge.",
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
      "Handheld scanner that traces spinal contour using inertial measurement, outputting curvature data for clinical posture assessment and therapy tracking.",
    tech: ["IMU", "Bluetooth", "Firmware", "SolidWorks"],
    year: "2024",
    status: "Research",
  },
  {
    slug: "data-logger",
    title: "Data Logger",
    category: "embedded",
    categoryLabel: "Embedded",
    short:
      "General-purpose data logging system with multi-channel analog input, SD card storage, and timestamped CSV export for sensor data acquisition.",
    tech: ["SD Card", "ADC", "RTC", "Arduino"],
    year: "2024",
    status: "Shipped",
  },
  {
    slug: "robot-ball",
    title: "Robot Ball",
    category: "robotics",
    categoryLabel: "Robotics",
    short:
      "Spherical rolling robot with internal drive mechanism. Achieves omnidirectional movement through weight-shifting and internal motor actuation.",
    tech: ["Motors", "IMU", "3D Print", "Arduino"],
    year: "2024",
    status: "Prototype",
  },
  {
    slug: "assistive-arm",
    title: "Assistive Arm",
    category: "assistive",
    categoryLabel: "Assistive Tech",
    short:
      "Motorized assistive arm device with custom PCB, providing powered support for users with limited upper-limb mobility.",
    tech: ["Motor Driver", "Sensors", "PCB", "Microcontroller"],
    year: "2024",
    status: "Prototype",
  },
  // ── 2023 ──────────────────────────────────────────────────────
  {
    slug: "smart-blind-stick",
    title: "Smart Blind Stick",
    category: "assistive",
    categoryLabel: "Assistive Tech",
    short:
      "Assistive walking cane with multi-direction ultrasonic sensing, vibration + buzzer obstacle alerts prioritized by distance, and water-detection module.",
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
      "Rugged outdoor mowing robot with custom Altium-designed PCB, RF remote control, and tilt/lift safety interlocks that cut power if chassis is disturbed.",
    tech: ["Altium", "Motor Driver", "RF Remote", "PCB"],
    year: "2023",
    status: "Shipped",
  },
  {
    slug: "line-follower-robot",
    title: "Line Follower Robot",
    category: "robotics",
    categoryLabel: "Robotics",
    short:
      "Autonomous line-following robot with IR sensor array, PID-tuned steering, and adjustable speed control for precision path tracking.",
    tech: ["IR Sensors", "PID", "Motor Driver", "Arduino"],
    year: "2023",
    status: "Shipped",
  },
  {
    slug: "pcb-pool-panel",
    title: "PCB Pool Panel",
    category: "embedded",
    categoryLabel: "Embedded",
    short:
      "Pool control panel PCB handling pump timing, water-level sensing, and filtration scheduling with a user-friendly button/LED interface.",
    tech: ["Relay", "Sensors", "PCB", "Altium"],
    year: "2023",
    status: "Shipped",
  },
  {
    slug: "arm-robot",
    title: "Robotic Arm",
    category: "robotics",
    categoryLabel: "Robotics",
    short:
      "Multi-DOF robotic arm with servo actuation, inverse kinematics control, and gripper end-effector for object manipulation tasks.",
    tech: ["Servo", "Arduino", "3D Print", "C/C++"],
    year: "2023",
    status: "Prototype",
  },
  {
    slug: "robot-remotexy",
    title: "RemoteXY Robot",
    category: "robotics",
    categoryLabel: "Robotics",
    short:
      "Mobile robot controlled via the RemoteXY smartphone app interface over Bluetooth, featuring real-time telemetry and customizable control layouts.",
    tech: ["RemoteXY", "Bluetooth", "Motor Driver", "Arduino"],
    year: "2023",
    status: "Shipped",
  },
  {
    slug: "3-foot-sensor-sound",
    title: "3-Foot Sensor Sound",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "Triple foot pressure sensor system with audio feedback — maps plantar pressure zones to sound cues for gait retraining and rehabilitation.",
    tech: ["Force Sensors", "Speaker", "Arduino", "PCB"],
    year: "2023",
    status: "Prototype",
  },
  {
    slug: "motorcycle-light-bottom",
    title: "Motorcycle Underglow",
    category: "embedded",
    categoryLabel: "Embedded",
    short:
      "Motorcycle underglow LED lighting system with addressable RGB strips, multiple animation modes, and wireless control for custom lighting effects.",
    tech: ["WS2812", "Arduino", "RF Remote", "Battery"],
    year: "2023",
    status: "Shipped",
  },
  {
    slug: "vib-foot-massage",
    title: "Vibration Foot Massage",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "Vibration-based foot massage device with multiple intensity levels and zone targeting for circulation improvement and pain relief.",
    tech: ["Vibration Motors", "Arduino", "PCB", "Battery"],
    year: "2023",
    status: "Shipped",
  },
  {
    slug: "muscle-tracker",
    title: "Muscle Tracker",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "EMG-based muscle activity tracker that monitors muscular activation patterns for rehabilitation, sports training, and ergonomic assessment.",
    tech: ["EMG", "ADC", "Bluetooth", "PCB"],
    year: "2023",
    status: "Prototype",
  },
  {
    slug: "12-foot-sensor",
    title: "12-Point Foot Sensor",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "High-resolution 12-point foot pressure sensor system providing detailed plantar pressure mapping for clinical gait analysis and orthotic fitting.",
    tech: ["Force Sensors", "Multiplexer", "Arduino", "PCB"],
    year: "2023",
    status: "Prototype",
  },
  {
    slug: "flat-foot-meter",
    title: "Flat Foot Meter",
    category: "medical",
    categoryLabel: "Medical",
    short:
      "Flat-foot arch measurement device that quantifies arch height and foot geometry for diagnosing pes planus and guiding orthotic prescription.",
    tech: ["Sensors", "Arduino", "Display", "PCB"],
    year: "2023",
    status: "Prototype",
  },
  {
    slug: "drill-rig",
    title: "Automated Drill Rig",
    category: "industrial",
    categoryLabel: "Industrial",
    short:
      "Automated drilling rig controller with depth sensing, speed regulation, and safety interlocks for precision hole-making in industrial applications.",
    tech: ["Motor Driver", "Sensors", "Relay", "Microcontroller"],
    year: "2023",
    status: "Shipped",
  },
  {
    slug: "brain-robot",
    title: "Brain-Controlled Robot",
    category: "robotics",
    categoryLabel: "Robotics",
    short:
      "Brain-computer interface robot that translates EEG brainwave signals into motor commands, enabling hands-free robot control for accessibility research.",
    tech: ["EEG", "Signal Processing", "Arduino", "Motor Driver"],
    year: "2023",
    status: "Research",
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
