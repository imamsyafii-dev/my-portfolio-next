"use client";

import Image from "next/image";
import { useState } from "react";
import { projectCategories, projects, type ProjectCategory } from "../data/projects";
import { ArrowUpRight } from "./Icons";

export function ProjectGallery() {
  const [active, setActive] = useState<ProjectCategory>("All");
  const visible = active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <>
      <div className="project-filters" aria-label="Filter projects">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={active === category ? "is-active" : ""}
            aria-pressed={active === category}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Showing {visible.length} {active === "All" ? "projects" : `${active} projects`}.
      </p>

      <div className="project-grid">
        {visible.map((project) => {
          const projectNumber = projects.findIndex(({ id }) => id === project.id) + 1;

          return (
            <article className="project-card" key={project.id}>
              <div className="project-visual">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(max-width: 620px) 100vw, (max-width: 1050px) 50vw, 45vw"
                  className={`project-image ${project.image.fit === "contain" ? "project-image-contain" : ""}`}
                />
                <span className="project-number" aria-hidden="true">
                  {String(projectNumber).padStart(2, "0")}
                </span>
              </div>
              <div className="project-body">
                <div className="project-heading">
                  <div>
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                  </div>
                  {project.href ? (
                    <a
                      className="project-link"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${project.title} website`}
                    >
                      <ArrowUpRight />
                    </a>
                  ) : null}
                </div>
                <p className="project-summary">{project.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
