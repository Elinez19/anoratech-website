import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "white" | "colored";
  className?: string;
}

export default function Logo({ size = "md", variant = "default", className }: LogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const variantColors = {
    default: {
      background: "#292E73",
      primary: "white",
      accent: "#5F67C6",
      secondary: "#424798",
    },
    white: {
      background: "white",
      primary: "#292E73",
      accent: "#5F67C6",
      secondary: "#424798",
    },
    colored: {
      background: "#292E73",
      primary: "white",
      accent: "#5F67C6",
      secondary: "#424798",
    },
  };

  const colors = variantColors[variant];

  return (
    <svg 
      className={cn(sizeClasses[size], className)} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle */}
      <circle cx="20" cy="20" r="20" fill={colors.background}/>
      
      {/* Letter A stylized as a circuit/tech element */}
      <path d="M20 8L28 32H26L24 28H16L14 32H12L20 8Z" fill={colors.primary}/>
      
      {/* Circuit lines */}
      <path d="M16 26H24" stroke={colors.primary} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18 22H22" stroke={colors.primary} strokeWidth="1.5" strokeLinecap="round"/>
      
      {/* Tech dots */}
      <circle cx="16" cy="26" r="1" fill={colors.accent}/>
      <circle cx="24" cy="26" r="1" fill={colors.accent}/>
      <circle cx="18" cy="22" r="1" fill={colors.accent}/>
      <circle cx="22" cy="22" r="1" fill={colors.accent}/>
      
      {/* Small accent elements */}
      <circle cx="12" cy="12" r="0.5" fill={colors.secondary}/>
      <circle cx="28" cy="12" r="0.5" fill={colors.secondary}/>
      <circle cx="12" cy="28" r="0.5" fill={colors.secondary}/>
      <circle cx="28" cy="28" r="0.5" fill={colors.secondary}/>
    </svg>
  );
} 