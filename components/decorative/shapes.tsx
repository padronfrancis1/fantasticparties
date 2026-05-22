import { useId } from "react";
import { cn } from "@/lib/utils";

type ShapeProps = React.SVGProps<SVGSVGElement> & { className?: string };

export function Balloon({ className, color = "#FF6B6B", ...props }: ShapeProps & { color?: string }) {
  const rawId = useId();
  const gradId = `balloon-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  return (
    <svg viewBox="0 0 80 110" className={cn(className)} aria-hidden="true" {...props}>
      <defs>
        <radialGradient id={gradId} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="white" stopOpacity="0.7" />
          <stop offset="40%" stopColor={color} stopOpacity="0.9" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </radialGradient>
      </defs>
      <ellipse cx="40" cy="38" rx="32" ry="38" fill={`url(#${gradId})`} />
      <path d="M36 76 L40 82 L44 76 Z" fill={color} />
      <path
        d="M40 82 C 38 90, 44 95, 40 105"
        stroke="#1f1a1a"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="28" cy="22" rx="6" ry="4" fill="white" fillOpacity="0.5" />
    </svg>
  );
}

export function Star({ className, color = "#FFD93D", ...props }: ShapeProps & { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn(className)} aria-hidden="true" fill={color} {...props}>
      <path d="M12 2 L14.5 9 L22 9.3 L16 14 L18 21 L12 17 L6 21 L8 14 L2 9.3 L9.5 9 Z" />
    </svg>
  );
}

export function Sparkle({ className, color = "#FFD93D", ...props }: ShapeProps & { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn(className)} aria-hidden="true" fill={color} {...props}>
      <path d="M12 0 L13.5 9 L22 12 L13.5 15 L12 24 L10.5 15 L2 12 L10.5 9 Z" />
    </svg>
  );
}

export function Blob({
  className,
  color = "#FFD93D",
  ...props
}: ShapeProps & { color?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={cn(className)} aria-hidden="true" {...props}>
      <path
        fill={color}
        d="M48.8,-67.3C61.7,-58.4,69.4,-41.7,73.4,-24.6C77.5,-7.5,77.9,9.9,71.9,24.3C65.9,38.6,53.5,49.9,39.6,58.7C25.7,67.6,10.3,73.9,-5.6,75C-21.5,76.1,-37.9,72,-49.3,62.1C-60.7,52.2,-67.2,36.4,-71.1,19.8C-75,3.2,-76.4,-14.3,-69.8,-27.7C-63.2,-41.1,-48.7,-50.5,-34.8,-58.9C-20.9,-67.3,-7.6,-74.8,5.9,-77.5C19.4,-80.3,35.9,-76.2,48.8,-67.3Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function Confetti({ className, ...props }: ShapeProps) {
  return (
    <svg viewBox="0 0 200 200" className={cn(className)} aria-hidden="true" {...props}>
      <g>
        <rect x="20" y="30" width="10" height="4" rx="2" fill="#FF6B6B" transform="rotate(30 25 32)" />
        <rect x="60" y="50" width="12" height="4" rx="2" fill="#FFD93D" transform="rotate(-20 66 52)" />
        <rect x="120" y="20" width="10" height="4" rx="2" fill="#6BCB77" transform="rotate(60 125 22)" />
        <rect x="160" y="60" width="10" height="4" rx="2" fill="#4D96FF" transform="rotate(-10 165 62)" />
        <rect x="40" y="120" width="10" height="4" rx="2" fill="#FFD93D" transform="rotate(-45 45 122)" />
        <rect x="150" y="130" width="12" height="4" rx="2" fill="#FF6B6B" transform="rotate(20 156 132)" />
        <rect x="100" y="160" width="10" height="4" rx="2" fill="#6BCB77" transform="rotate(40 105 162)" />
        <circle cx="80" cy="90" r="3" fill="#4D96FF" />
        <circle cx="135" cy="100" r="3" fill="#FFD93D" />
        <circle cx="30" cy="80" r="2.5" fill="#FF6B6B" />
      </g>
    </svg>
  );
}

/** Squiggly hand-drawn underline */
export function Squiggle({ className, color = "#FFD93D", ...props }: ShapeProps & { color?: string }) {
  return (
    <svg
      viewBox="0 0 200 18"
      preserveAspectRatio="none"
      className={cn(className)}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2 12 Q 25 2, 50 9 T 100 9 T 150 9 T 198 9"
        stroke={color}
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Dashed wavy connector for the "How it works" steps */
export function WavyConnector({ className, ...props }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 400 60"
      preserveAspectRatio="none"
      className={cn(className)}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M0 30 Q 50 0, 100 30 T 200 30 T 300 30 T 400 30"
        stroke="#FF6B6B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 10"
        fill="none"
      />
    </svg>
  );
}
