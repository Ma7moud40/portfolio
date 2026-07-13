"use client";

import { motion } from "framer-motion";
import { Bot, Activity, Sprout, Cpu, Cog } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const sectors = [
  {
    title: "Medical & Rehabilitation Devices",
    icon: Activity,
    description: "Design and development of smart medical wearables and rehabilitation feedback systems. Specialized in sensor-fusion joint tracking, EMG muscle monitors, haptic posture trainers, and real-time clinical assessment boards.",
    focus: "Bio-telemetry, AHRS quaternion fusion, load-cell force distribution, haptics, low-power medical grade electronics.",
    tech: ["ESP32", "MPU-6050 / MPU-6500 IMUs", "HX711", "Bluetooth SPP/BLE", "Flutter companion apps", "Altium Designer"]
  },
  {
    title: "Robotics & Mechatronics Systems",
    icon: Bot,
    description: "Building automated physical systems and mechanical controllers. Developed multi-degree-of-freedom robotic manipulators, inverted-pendulum self-balancing mobile platforms, and autonomous navigation rovers.",
    focus: "Inverse kinematics, real-time PID loops, motor driver design, sensor integration, autonomous path planning.",
    tech: ["Arduino", "STM32", "DC Gear Motors", "Servo Actuators", "Complementary Filters", "3D Modeling / Printing"]
  },
  {
    title: "Agri-Tech & Agriculture Automation",
    icon: Sprout,
    description: "Automation of heavy agricultural and landscaping equipment to improve yield and safety. Engineered autonomous mowing robots and automated tire pressure regulation systems (ATIS) to adapt vehicle setups dynamically to soil conditions.",
    focus: "Pneumatics/solenoid systems, high-power DC drive trains, tilt/lift safety interlocks, GPS navigation.",
    tech: ["ATmega328P", "Relay networks", "Pressure Transducers", "RF Transceivers", "Custom Controller PCBs"]
  },
  {
    title: "Power Electronics & Embedded Systems",
    icon: Cpu,
    description: "High-speed switching, power routing, and low-level firmware engineering. Created millisecond-level automatic AC source selectors (ATS), custom AC-to-DC converters, and smart PID temperature profiling ovens.",
    focus: "AC mains sensing, backup power switching, high-current PCB layout, thermal management, hardware troubleshooting.",
    tech: ["High-speed Relays", "Thermocouples & SSRs", "7-Segment Multiplexers", "RTC & SPI Interfaces", "Altium / SolidWorks"]
  },
  {
    title: "Industrial Control & Automation",
    icon: Cog,
    description: "Developing robust automation controllers for fluid management, factory tools, and infrastructure. Built ESP32 water filtration valves using PID flow regulation and tethered pipeline rover inspection systems.",
    focus: "Industrial HMI design, flow/pressure telemetry, analog sensor conditioning, tele-operation control links.",
    tech: ["ESP32-CAM", "ADS1115 16-bit ADC", "TOPWAY HMI Screens", "PID Flow control", "Live Video Streams", "Encoders"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="container scroll-mt-24 py-24 md:py-32">
      <SectionHeading
        num="03"
        title="Sectors of Expertise"
        kicker="Fields of specialization across robotics, medical devices, agriculture automation, power electronics, and industrial control."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectors.map((s, idx) => {
          const Icon = s.icon;
          // Make medical device span 2 columns on medium/large screens to balance the grid
          const isFeatured = idx === 0;

          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                isFeatured ? "md:col-span-2" : ""
              )}
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass-card p-6 md:p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                
                <div className="relative z-10 flex flex-1 flex-col">
                  {/* Icon */}
                  <div className="mb-6 flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                      <Icon className="size-6" />
                    </span>
                  </div>

                  {/* Header Titles */}
                  <div className="mb-4">
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>
                  </div>

                  {/* Summary / Description */}
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>

                  {/* Technical Focus */}
                  <div className="mb-6 mt-auto border-t border-white/[0.06] pt-4">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                      Technical Focus
                    </p>
                    <p className="text-xs text-muted-foreground/95 italic leading-relaxed">
                      {s.focus}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div>
                    <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                      Core Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.tech.map((t) => (
                        <Badge key={t} size="sm" variant="outline" className="bg-background/40">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
