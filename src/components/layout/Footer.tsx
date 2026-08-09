import { Heart } from "lucide-react";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/80">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Social links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={link.label}
              >
                <span className="text-sm">{link.platform}</span>
              </a>
            ))}
          </div>

          {/* Attribution */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1.5">
              Designed & Developed with
              <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
              by{" "}
              <span className="font-medium text-foreground">
                {profile.name}
              </span>
            </p>
            <p className="mt-1 text-xs">
              © {currentYear} {profile.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
