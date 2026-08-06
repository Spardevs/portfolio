"use client";

import { useLocale } from "@/lib/locale-context";
import { content } from "@/lib/content";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  MotionSection,
  MotionDiv,
  fadeInUp,
  scaleIn,
  staggerContainer,
} from "@/components/motion";

export function HeroSection() {
  const { locale } = useLocale();
  const t = content[locale];

  return (
    <MotionSection
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_65%)] opacity-5" />

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <MotionDiv variants={scaleIn} transition={{ duration: 0.6 }}>
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/50 to-transparent blur-2xl opacity-50" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-border">
                <Image
                  src="/images/profile.jpg"
                  alt="Gabriel Fernandes Ramos"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </MotionDiv>

          <div className="flex-1 text-center lg:text-left">
            <MotionDiv
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-primary font-mono text-sm md:text-base mb-2">
                {t.hero.greeting}
              </p>
            </MotionDiv>
            <MotionDiv
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
                {t.hero.name}
              </h1>
            </MotionDiv>
            <MotionDiv
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6">
                {t.hero.role}
              </h2>
            </MotionDiv>
            <MotionDiv
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
                {t.hero.description}
              </p>
            </MotionDiv>

            <MotionDiv
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="group relative overflow-hidden border-border hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <a
                    href="https://github.com/spardevv"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <span className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-md" />
                    <Github className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-8deg] relative z-10" />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="group relative overflow-hidden border-border hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <a
                    href="https://linkedin.com/in/spardev"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <span className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-md" />
                    <Linkedin className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 relative z-10" />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="group relative overflow-hidden border-border hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <a href="mailto:spardevv@gmail.com" aria-label="Email">
                    <span className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-md" />
                    <Mail className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5 relative z-10" />
                  </a>
                </Button>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>

      <MotionDiv
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#services"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to services section"
        >
          <ArrowDown className="h-6 w-6" />
        </a>
      </MotionDiv>
    </MotionSection>
  );
}
