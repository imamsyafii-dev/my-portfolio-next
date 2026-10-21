"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { projectCategories, projects, type Project, type ProjectCategory } from "../data/projects";
import { ArrowUpRight } from "./Icons";

type GalleryImage = {
  src: string;
  alt: string;
};

type SelectedGallery = {
  projectTitle: string;
  images: readonly GalleryImage[];
};

type ProjectMediaProps = {
  project: Project;
  onSelectImage: (
    gallery: SelectedGallery,
    imageIndex: number,
    trigger: HTMLButtonElement,
  ) => void;
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

  if (project.mediaType === "image-gallery") {
    const coverImage = project.images[0];

    return (
      <button
        className="project-image-gallery"
        type="button"
        aria-label={`Open ${project.title} gallery, ${project.images.length} images`}
        aria-haspopup="dialog"
        onClick={({ currentTarget }) =>
          onSelectImage(
            { projectTitle: project.title, images: project.images },
            0,
            currentTarget,
          )
        }
      >
        <Image
          src={coverImage.src}
          alt={coverImage.alt}
          fill
          sizes="(max-width: 620px) 100vw, (max-width: 1050px) 50vw, 45vw"
          className="project-gallery-cover-image"
        />
        <span className="project-gallery-count">{project.images.length} images</span>
      </button>
    );
  }

  if (project.mediaType === "image-pair") {
    return (
      <div className="project-image-pair">
        {project.images.map((image, imageIndex) => (
          <button
            className="project-image-pair-item"
            key={image.src}
            type="button"
            aria-label={`Enlarge ${image.alt}`}
            aria-haspopup="dialog"
            onClick={({ currentTarget }) =>
              onSelectImage(
                { projectTitle: project.title, images: project.images },
                imageIndex,
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
          { projectTitle: project.title, images: [project.image] },
          0,
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
  const [selectedGallery, setSelectedGallery] = useState<SelectedGallery | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const visible = active === "All" ? projects : projects.filter((project) => project.category === active);
  const isLightboxOpen = selectedGallery !== null;
  const currentImage = selectedGallery?.images[activeImageIndex] ?? selectedGallery?.images[0];

  useEffect(() => {
    if (!isLightboxOpen || !dialogRef.current) {
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
  }, [isLightboxOpen]);

  const selectImage = (
    gallery: SelectedGallery,
    imageIndex: number,
    trigger: HTMLButtonElement,
  ) => {
    triggerRef.current = trigger;
    setActiveImageIndex(imageIndex);
    setSelectedGallery(gallery);
  };

  const showPreviousImage = () => {
    if (!selectedGallery) {
      return;
    }

    setActiveImageIndex((currentIndex) =>
      (currentIndex - 1 + selectedGallery.images.length) % selectedGallery.images.length,
    );
  };

  const showNextImage = () => {
    if (!selectedGallery) {
      return;
    }

    setActiveImageIndex((currentIndex) => (currentIndex + 1) % selectedGallery.images.length);
  };

  const closeLightbox = () => {
    dialogRef.current?.close();
  };

  const handleDialogClose = () => {
    const trigger = triggerRef.current;
    setSelectedGallery(null);
    setActiveImageIndex(0);
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
        aria-labelledby={selectedGallery ? "project-lightbox-title" : undefined}
        aria-describedby={selectedGallery ? "project-lightbox-caption" : undefined}
        onClose={handleDialogClose}
        onKeyDown={(event) => {
          if (!selectedGallery || selectedGallery.images.length < 2) {
            return;
          }

          if (event.key === "ArrowLeft") {
            event.preventDefault();
            showPreviousImage();
          } else if (event.key === "ArrowRight") {
            event.preventDefault();
            showNextImage();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeLightbox();
          }
        }}
      >
        {selectedGallery && currentImage ? (
          <div className="project-lightbox-panel">
            <div className="project-lightbox-header">
              <div>
                <p className="project-lightbox-kicker">Project image</p>
                <h3 id="project-lightbox-title">{selectedGallery.projectTitle}</h3>
                <p className="project-lightbox-caption" id="project-lightbox-caption">
                  {currentImage.alt}
                </p>
              </div>
              <button
                className="project-lightbox-close"
                type="button"
                aria-label={`Close ${selectedGallery.projectTitle} image viewer`}
                onClick={closeLightbox}
              >
                Close
              </button>
            </div>
            <div className="project-lightbox-image-wrap">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                sizes="92vw"
                className="project-lightbox-image"
              />
            </div>
            {selectedGallery.images.length > 1 ? (
              <div className="project-lightbox-footer">
                <button
                  type="button"
                  aria-label={`Show previous image for ${selectedGallery.projectTitle}`}
                  onClick={showPreviousImage}
                >
                  Previous
                </button>
                <span aria-live="polite" aria-atomic="true">
                  Image {activeImageIndex + 1} of {selectedGallery.images.length}
                </span>
                <button
                  type="button"
                  aria-label={`Show next image for ${selectedGallery.projectTitle}`}
                  onClick={showNextImage}
                >
                  Next
                </button>
              </div>
            ) : null}
          </div>
        ) : null}
      </dialog>
    </>
  );
}
