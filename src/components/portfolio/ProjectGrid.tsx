"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/types";
import ProjectCard from "./ProjectCard";
import CategoryFilter from "./CategoryFilter";
import { staggerContainer, staggerItem } from "@/lib/motion";

interface Props {
  projects: Project[];
}

export default function ProjectGrid({ projects }: Props) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category.split(" / ")[0]));
    return Array.from(cats);
  }, [projects]);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category.includes(activeCategory));
  }, [projects, activeCategory]);

  return (
    <div>
      <div className="mb-8">
        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto"
        >
          {filtered.map((project, i) => {
            const variant =
              project.featured ? "featured" : "default";
            return (
              <motion.div
                key={project.slug}
                variants={staggerItem}
                className={variant === "featured" ? "sm:col-span-2" : ""}
              >
                <ProjectCard
                  project={project}
                  variant={variant}
                  priority={i < 3}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 text-text-tertiary"
        >
          No projects in this category.
        </motion.div>
      )}
    </div>
  );
}
