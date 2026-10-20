import Image from "next/image";
import { ProjectGallery } from "../components/ProjectGallery";
import { SiteHeader } from "../components/SiteHeader";
import {
  ArrowRight,
  ArrowUpRight,
  CodeIcon,
  InstagramIcon,
  LayersIcon,
  LinkedInIcon,
  LocationIcon,
  MessageIcon,
} from "../components/Icons";
import { profile } from "../data/profile";

const services = [
  {
    icon: <CodeIcon />,
    number: "01",
    title: "Backend & API engineering",
    description:
      "Go, PHP, and Node.js services, plus shared Rust runtimes, with clear contracts, dependable data access, and maintainable domain logic.",
  },
  {
    icon: <LayersIcon />,
    number: "02",
    title: "Real-time & cross-platform systems",
    description:
      "Messaging, calling, runtime, and synchronization work spanning backend, desktop, Android, and iOS boundaries.",
  },
  {
    icon: <MessageIcon />,
    number: "03",
    title: "System integration & troubleshooting",
    description:
      "Focused investigation and integration work across protocols, payments, infrastructure, and connected applications.",
  },
];

export default function Home() {
  const { identity } = profile;

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader />

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-backdrop" aria-hidden="true" />
          <div className="hero-grid shell">
            <div className="hero-copy">
              <p className="eyebrow">
                <span /> {identity.title}
              </p>
              <h1>
                Engineering the systems
                <br />
                <span>behind real-time products.</span>
              </h1>
              <p className="hero-intro">
                I&apos;m {identity.name}. {profile.heroIntro}
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Explore selected work <ArrowRight size={18} />
                </a>
                <a className="text-link" href={`mailto:${identity.email}`}>
                  Start a conversation <ArrowUpRight size={18} />
                </a>
              </div>
              <div className="hero-meta">
                <span>
                  <LocationIcon size={17} /> {identity.location}
                </span>
                <span>
                  <i className="status-dot" /> 10+ years in software engineering
                </span>
              </div>
            </div>

            <div className="hero-portrait-wrap">
              <div className="portrait-frame">
                <Image
                  src="/images/profile.png"
                  alt={`Portrait of ${identity.name}`}
                  fill
                  priority
                  sizes="(max-width: 800px) 72vw, 38vw"
                  className="portrait-image"
                />
                <span className="portrait-mark mark-one" aria-hidden="true" />
                <span className="portrait-mark mark-two" aria-hidden="true" />
              </div>
              <div className="code-note" aria-hidden="true">
                <span>runtime.rs</span>
                <code>
                  <i>const</i> FOCUS = [<b>&quot;backend&quot;</b>, <b>&quot;realtime&quot;</b>];
                </code>
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
            <span>Scroll to explore</span>
            <i />
          </a>
        </section>

        <section className="section about-section" id="about">
          <div className="shell">
            <div className="section-heading two-column-heading">
              <div>
                <p className="kicker">Profile</p>
                <h2>
                  Backend depth,
                  <br />
                  cross-platform reach.
                </h2>
              </div>
              <div className="about-lead">
                <p>{profile.summary}</p>
              </div>
            </div>

            <div className="credentials-grid" aria-label="Education and languages">
              <article className="credential-panel">
                <span className="fact-label">Education</span>
                <ul className="credential-list">
                  {profile.education.map((item) => (
                    <li key={`${item.institution}-${item.qualification}`}>
                      <div>
                        <strong>{item.qualification}</strong>
                        <span>{item.institution}</span>
                      </div>
                      <time>{item.dates}</time>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="credential-panel language-panel">
                <span className="fact-label">Languages</span>
                <ul className="language-list">
                  {profile.languages.map((language) => (
                    <li key={language.name}>
                      <strong>{language.name}</strong>
                      <span>{language.proficiency}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="skills-list" aria-label="Technical skills">
              {profile.skills.map((group, index) => (
                <article className="skill-row" key={group.name}>
                  <span className="row-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{group.name}</h3>
                  <ul>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="shell experience-layout">
            <div className="experience-intro">
              <p className="kicker">Experience</p>
              <h2>Systems work across products and platforms.</h2>
              <p>
                Backend, runtime, commerce, finance, and operational experience grounded in shipping
                and maintaining production software.
              </p>
            </div>
            <div className="timeline">
              {profile.experience.map((item, index) => (
                <article className="timeline-item" key={`${item.company}-${item.dates}`}>
                  <div className="timeline-marker" aria-hidden="true">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="timeline-content">
                    <p className="timeline-period">{item.dates}</p>
                    <h3>{item.role}</h3>
                    <p className="timeline-company">{item.company}</p>
                    {item.context ? <p className="timeline-context">{item.context}</p> : null}
                    <ul className="timeline-highlights">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="shell">
            <div className="section-heading work-heading">
              <div>
                <p className="kicker">Selected work</p>
                <h2>Systems with a job to do.</h2>
              </div>
              <p>
                Platforms, integrations, and product features developed across commerce, operations,
                finance, communications, and events.
              </p>
            </div>
            <ProjectGallery />
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="shell">
            <div className="section-heading service-heading">
              <div>
                <p className="kicker">What I can help with</p>
                <h2>Focused systems engineering.</h2>
              </div>
              <p>
                From backend foundations to cross-platform synchronization, I help make connected
                software clearer, more reliable, and easier to maintain.
              </p>
            </div>
            <div className="service-list">
              {services.map((service) => (
                <article className="service-row" key={service.title}>
                  <div className="service-icon">{service.icon}</div>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-glow" aria-hidden="true" />
          <div className="shell contact-inner">
            <p className="kicker kicker-light">Contact</p>
            <h2>Have a system worth improving?</h2>
            <p>
              Tell me what you&apos;re building, integrating, or troubleshooting. A clear first
              conversation is often the best place to start.
            </p>
            <a className="contact-email" href={`mailto:${identity.email}`}>
              {identity.email} <ArrowUpRight size={28} />
            </a>
            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/imam-syafii-9384b111b"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon /> LinkedIn
              </a>
              <a
                href="https://www.instagram.com/imam.syafii.ila"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon /> Instagram
              </a>
              <span>
                <LocationIcon /> {identity.location}
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <p>© {new Date().getFullYear()} {identity.name}</p>
          <p>{identity.title}</p>
          <a href="#top">
            Back to top <ArrowUpRight size={16} />
          </a>
        </div>
      </footer>
    </>
  );
}
