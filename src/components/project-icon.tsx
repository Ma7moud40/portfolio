import { cn } from "@/lib/utils";
import {
  Bot,
  Activity,
  Accessibility,
  Zap,
  Cpu,
  Pipette,
  Brain,
  Clock,
  CircuitBoard,
  Footprints,
  Gauge,
  Stethoscope,
  Bluetooth,
  Gamepad2,
  Cog,
  Flame,
  Lightbulb,
  Radio,
  ScanLine,
  Siren,
  Wrench,
  Wind,
  Bike,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  // Industrial
  "atis": Gauge,
  "throttle-valve-controller": Cog,
  "smart-pipe-inspection-rig": Pipette,
  "drill-rig": Wrench,
  // Medical
  "arm-angle-shoulder-guard": Activity,
  "smart-postnatal-brace": Stethoscope,
  "angle-tens-therapy": Zap,
  "inflatable-bed-controller": Wind,
  "smart-mat": ScanLine,
  "neurorehab-device": Brain,
  "balance-sense": Footprints,
  "3-cuff-leg": Stethoscope,
  "foot-weight-logic": Footprints,
  "lung-breathing-monitor": Wind,
  "spine-scanner": Activity,
  "screen-face-massage": MonitorSmartphone,
  "pressure-insole": Footprints,
  "back-massage-tens": Zap,
  "back-angle-tracker": Activity,
  "arm-play-mpu": Bluetooth,
  "muscle-tracker": Activity,
  "12-foot-sensor": Footprints,
  "flat-foot-meter": Footprints,
  "3-foot-sensor-sound": Footprints,
  "vib-foot-massage": Footprints,
  // Robotics
  "self-balancing-robot": Bot,
  "grass-cutter-robot": Bot,
  "line-follower-robot": Bot,
  "arm-robot": Bot,
  "robot-remotexy": Bot,
  "me-arm-robot": Bot,
  "somu-robot": Bot,
  "robot-tech-borg": Bot,
  "parabolic-tracker": Radio,
  "robot-ball": Bot,
  "brain-robot": Brain,
  // Assistive
  "smart-blind-stick": Accessibility,
  "assistive-leg": Accessibility,
  "assistive-arm": Accessibility,
  // Power
  "smart-power-selector": Zap,
  "ac-to-dc-converter": Zap,
  // Embedded
  "tiny-reflow-oven": Flame,
  "prayer-time-clock": Clock,
  "custom-7-seg-driver": Lightbulb,
  "op-amp-pcb": CircuitBoard,
  "control-stepper-pcb": Cog,
  "scoreboard-game": Gamepad2,
  "joystick-pcb": Gamepad2,
  "stackable-brushless-gearbox": Cog,
  "laser-rf": Radio,
  "motorcycle-light-bottom": Bike,
  "pcb-pool-panel": CircuitBoard,
  "data-logger": Cpu,
};

export function ProjectIcon({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const Icon: LucideIcon = map[slug] ?? Cpu;
  return <Icon className={cn("opacity-80", className)} strokeWidth={1.2} />;
}
