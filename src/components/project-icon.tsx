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
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  "self-balancing-robot": Bot,
  "spine-scanner": Activity,
  "smart-blind-stick": Accessibility,
  "grass-cutter-robot": Bot,
  "tiny-reflow-oven": CircuitBoard,
  "smart-power-selector": Zap,
  "neurorehab-device": Brain,
  "smart-pipe-inspection-rig": Pipette,
  "prayer-time-clock": Clock,
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
