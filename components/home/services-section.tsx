"use client";

import { useLocale } from "@/lib/locale-context";
import { content } from "@/lib/content";
import {
  Smartphone,
  Globe,
  Figma,
  Server,
  Lightbulb,
  Wrench,
} from "lucide-react";
import { motion, easeOut } from "framer-motion";

const iconMap = {
  smartphone: Smartphone,
  globe: Globe,
  figma: Figma,
  server: Server,
  lightbulb: Lightbulb,
  wrench: Wrench,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export function ServicesSection() {
  const { locale } = useLocale();
  const t = content[locale].services;

  return (
    <motion.section
      id="services"
      className="py-24 px-4 bg-secondary/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-5xl">
        <motion.div variants={titleVariants} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Freelance
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.items.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors cursor-pointer overflow-hidden"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <motion.div
                  className="relative w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5"
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5, ease: easeOut },
                  }}
                >
                  <Icon className="w-7 h-7 text-primary" />
                </motion.div>

                <h3 className="relative text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-primary"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: easeOut }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
