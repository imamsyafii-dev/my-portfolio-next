"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { projectCategories, projects, type Project, type ProjectCategory } from "../data/projects";
import { ArrowUpRight } from "./Icons";

type SelectedImage = {
  src: string;
  alt: string;
  projectTitle: string;
};

type ProjectMediaProps = {
  project: Project;
  onSelectImage: (image: SelectedImage, trigger: HTMLButtonElement) => void;
};

function ProjectMedia({ project, onSelectImage }: ProjectMediaProps) {
  if (project.mediaType === "video") {
    return (
      <video
        className="project-video"
        controls
        playsInline
        preload="metadata"
        poster={project.video.poster}
        aria-label={project.video.label}
      >
        <source src={project.video.src} type={project.video.type} />
        <a href={project.video.src}>View {project.title} video</a>
      </video>
    );
  }

  if (project.mediaType === "image-pair") {
    return (
      <div className="project-image-pair">
        {project.images.map((image) => (
          <button
            className="project-image-pair-item"
            key={image.src}
            type="button"
            aria-label={`Enlarge ${image.alt}`}
            aria-haspopup="dialog"
            onClick={({ currentTarget }) =>
              onSelectImage(
                { src: image.src, alt: image.alt, projectTitle: project.title },
                currentTarget,
              )
            }
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 620px) 50vw, (max-width: 1050px) 25vw, 23vw"
              className="project-pair-image"
            />
          </button>
        ))}
      </div>
    );
  }

  return (
    <button
      className="project-image-button"
      type="button"
      aria-label={`Enlarge ${project.image.alt}`}
      aria-haspopup="dialog"
      onClick={({ currentTarget }) =>
        onSelectImage(
          { src: project.image.src, alt: project.image.alt, projectTitle: project.title },
          currentTarget,
        )
      }
    >
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        sizes="(max-width: 620px) 100vw, (max-width: 1050px) 50vw, 45vw"
        className={`project-image ${project.image.fit === "contain" ? "project-image-contain" : ""}`}
      />
    </button>
  );
}

export function ProjectGallery() {
  const [active, setActive] = useState<ProjectCategory>("All");
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const visible = active === "All" ? projects : projects.filter((project) => project.category === active);

  useEffect(() => {
    if (!selectedImage || !dialogRef.current) {
      return;
    }

    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;

    if (!dialog.open) {
      dialog.showModal();
    }
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);

  const selectImage = (image: SelectedImage, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    dialogRef.current?.close();
  };

  const handleDialogClose = () => {
    const trigger = triggerRef.current;
    setSelectedImage(null);
    triggerRef.current = null;

    requestAnimationFrame(() => {
      if (trigger?.isConnected) {
        trigger.focus();
      }
    });
  };

  const changeFilter = (category: ProjectCategory) => {
    if (dialogRef.current?.open) {
      dialogRef.current.close();
    }
    setActive(category);
  };

  return (
    <>
      <div className="project-filters" aria-label="Filter projects">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={active === category ? "is-active" : ""}
            aria-pressed={active === category}
            onClick={() => changeFilter(category)}
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
                <ProjectMedia project={project} onSelectImage={selectImage} />
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

      <dialog
        ref={dialogRef}
        className="project-lightbox"
        aria-labelledby={selectedImage ? "project-lightbox-title" : undefined}
        onClose={handleDialogClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeLightbox();
          }
        }}
      >
        {selectedImage ? (
          <div className="project-lightbox-panel">
            <div className="project-lightbox-header">
              <div>
                <p className="project-lightbox-kicker">Project image</p>
                <h3 id="project-lightbox-title">{selectedImage.projectTitle}</h3>
                <p className="project-lightbox-caption">{selectedImage.alt}</p>
              </div>
              <button className="project-lightbox-close" type="button" onClick={closeLightbox}>
                Close
              </button>
            </div>
            <div className="project-lightbox-image-wrap">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="92vw"
                className="project-lightbox-image"
              />
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
