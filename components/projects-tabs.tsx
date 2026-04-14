"use client";

import Image from "next/image";
import { useState } from "react";

import type { ProjectFilter } from "@/lib/site-data";

type ProjectCard = {
  name: string;
  location: string;
  summary: string;
  area: string;
  statusLabel: string;
  tags: Exclude<ProjectFilter, "all">[];
  systems: string[];
  image: string;
};

type ProjectsTabsProps = {
  filters: Array<{
    id: ProjectFilter;
    label: string;
  }>;
  projects: ProjectCard[];
};

export function ProjectsTabs({ filters, projects }: ProjectsTabsProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");

  const visibleProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => {
          const active = filter.id === activeFilter;

          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full border px-5 py-3 text-sm font-medium transition ${
                active
                  ? "border-pine bg-pine text-white"
                  : "border-canvas/10 bg-white text-graphite/75 hover:border-canvas/40 hover:text-graphite"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {visibleProjects.map((project) => (
          <article
            key={project.name}
            className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_20px_60px_rgba(12,21,19,0.08)]"
          >
            <div className="relative h-72 overflow-hidden bg-canvas">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-canvas/25 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/70 backdrop-blur">
                {project.statusLabel}
              </div>
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-white/60">{project.location}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-white">{project.name}</h3>
                </div>
                <div className="rounded-[1.25rem] border border-white/10 bg-white/10 px-4 py-3 text-right text-white backdrop-blur">
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-white/60">Area</p>
                  <p className="mt-1 text-lg font-semibold">{project.area}</p>
                </div>
              </div>
            </div>

            <div className="space-y-5 p-6 sm:p-7">
              <p className="text-sm leading-7 text-graphite/70">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.systems.map((system) => (
                  <span
                    key={system}
                    className="rounded-full border border-black/10 bg-stone px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-graphite/70"
                  >
                    {system}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
