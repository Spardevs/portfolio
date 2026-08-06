"use client";

import { useLocale } from "@/lib/locale-context";
import { content } from "@/lib/content";
import Image from "next/image";
import { MapPin, Calendar, GraduationCap } from "lucide-react";

export function AboutSection() {
  const { locale } = useLocale();
  const about = content[locale].about;
  const experienceYears = new Date().getFullYear() - 2020;

  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {about.title}
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-xl" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border">
              <Image
                src="/images/profile2.jpg"
                alt="Gabriel Fernandes Ramos"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              {about.subtitle}
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>{about.intro}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">
                    {about.location.label}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {about.location.value}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <Calendar className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">
                    {about.experience.label}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {experienceYears} {locale === "pt-BR" ? "anos" : "years"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <GraduationCap className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">
                    {about.education.label}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {about.education.value}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
