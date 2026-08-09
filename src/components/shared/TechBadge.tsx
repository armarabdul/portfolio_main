import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  variant?: "default" | "outline";
  className?: string;
}

export function TechBadge({
  name,
  variant = "outline",
  className,
}: TechBadgeProps) {
  return (
    <Badge
      variant={variant}
      className={cn(
        "font-mono text-xs px-3 py-1 rounded-full",
        "border-primary/30 text-primary bg-primary/5",
        "hover:bg-primary/10 hover:border-primary/50",
        "transition-colors duration-200",
        className
      )}
    >
      {name}
    </Badge>
  );
}
