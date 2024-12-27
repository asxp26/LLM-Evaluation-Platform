"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useTheme } from "@/components/providers";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#about");
    }
  };

  return (
    <header className="py-4 px-6 bg-background border-b">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold">
          ModelMania
        </Link>
        <div className="flex items-center space-x-4">
          <a
            href="#about"
            onClick={scrollToAbout}
            className="text-foreground hover:text-primary"
          >
            About
          </a>
          <Link href="/signin">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "light" ? (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Button>
        </div>
      </nav>
    </header>
  );
}
