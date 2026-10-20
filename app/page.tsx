import Image from "next/image";
import { ProjectGallery } from "../components/ProjectGallery";
import { SiteHeader } from "../components/SiteHeader";
import { ArrowRight, ArrowUpRight, CodeIcon, InstagramIcon, LayersIcon, LinkedInIcon, LocationIcon, MessageIcon } from "../components/Icons";

const skillGroups = [
  { number: "01", title: "Backend systems", description: "Services, business logic, and maintainable application foundations.", skills: ["Go", "PHP", "Laravel", "Node.js", "Express"] },
  { number: "02", title: "Product interfaces", description: "Responsive interfaces connected thoughtfully to product workflows.", skills: ["JavaScript", "React", "Vue.js", "Nuxt", "HTML & CSS"] },
  { number: "03", title: "Data & integration", description: "Reliable connections between products, data stores, and external services.", skills: ["REST APIs", "MySQL", "MongoDB", "Payment APIs", "Scheduled jobs"] },
];

const experience = [
  { period: "2024 — present", role: "Backend Programmer (Go)", company: "Citra International Digital", description: "Currently focused on Go backend work, sports-data integrations, scheduled synchronization, and customized communication systems." },
  { period: "2018 — 2024", role: "Senior Programmer", company: "IMPORTIR.ORG", description: "Built and maintained product experiences across marketplace, seminar, payment, and operational workflows." },
  { period: "2016 — 2018", role: "Junior — Middle Programmer", company: "Earlier teams", description: "Developed admin modules and worked with travel booking APIs across web engineering roles at Ebizu and Golden Rama." },
];

const services = [
  { icon: <CodeIcon />, number: "01", title: "Web application engineering", description: "End-to-end implementation for focused web products, from domain logic and data models to responsive interfaces." },
  { icon: <LayersIcon />, number: "02", title: "Backend & API integrations", description: "Backend services and dependable integrations that keep data moving clearly between systems." },
  { icon: <MessageIcon />, number: "03", title: "Technical consultation & code review", description: "Practical review of architecture, implementation choices, and maintainability for an existing codebase." },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-backdrop" aria-hidden="true" />
          <div className="hero-grid shell">
            <div className="hero-copy">
              <p className="eyebrow"><span /> Full-stack / Backend Engineer</p>
              <h1>Building the systems<br /><span>behind good products.</span></h1>
              <p className="hero-intro">I&apos;m Imam Syafi&apos;i, a software engineer working across Go, PHP/Laravel, Node.js, Vue, and React to turn operational needs into dependable web products.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore selected work <ArrowRight size={18} /></a>
                <a className="text-link" href="mailto:imam.syafii.idn@gmail.com">Start a conversation <ArrowUpRight size={18} /></a>
              </div>
              <div className="hero-meta">
                <span><LocationIcon size={17} /> Tangerang, Indonesia</span>
                <span><i className="status-dot" /> Open to thoughtful conversations</span>
              </div>
            </div>
            <div className="hero-portrait-wrap">
              <div className="portrait-frame">
                <Image src="/images/profile.png" alt="Portrait of Imam Syafi'i" fill priority sizes="(max-width: 800px) 72vw, 38vw" className="portrait-image" />
                <span className="portrait-mark mark-one" aria-hidden="true" /><span className="portrait-mark mark-two" aria-hidden="true" />
              </div>
              <div className="code-note" aria-hidden="true"><span>engineer.ts</span><code><i>const</i> focus = [<b>&quot;clarity&quot;</b>, <b>&quot;reliability&quot;</b>];</code></div>
            </div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><span>Scroll to explore</span><i /></a>
        </section>

        <section className="section about-section" id="about">
          <div className="shell">
            <div className="section-heading two-column-heading">
              <div><p className="kicker">About</p><h2>Practical engineering,<br />made for real use.</h2></div>
              <div className="about-lead"><p>I build across the stack, with a backend-first way of thinking: understand the workflow, make the data model clear, and keep the system useful as it evolves.</p><p>My work has covered commerce, internal operations, event registration, ticketing, finance, real-time communication, and third-party data integrations.</p></div>
            </div>
            <div className="about-facts">
              <div className="fact-panel"><span className="fact-label">Education</span><strong>B.Sc. Computer Science</strong><p>Diponegoro University</p><span>2011 — 2015</span></div>
              <blockquote><span className="quote-mark">“</span><p>I like software that feels simple on the surface because the hard thinking happened underneath.</p></blockquote>
            </div>
            <div className="skills-list" aria-label="Technical skills">
              {skillGroups.map((group) => <article className="skill-row" key={group.title}><span className="row-number">{group.number}</span><div><h3>{group.title}</h3><p>{group.description}</p></div><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="shell experience-layout">
            <div className="experience-intro"><p className="kicker">Experience</p><h2>A career shaped by shipping and learning.</h2><p>Roles across product teams have built a broad view of how backend decisions affect the customer experience and daily operations.</p></div>
            <div className="timeline">
              {experience.map((item, index) => <article className="timeline-item" key={item.period}><div className="timeline-marker" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div><div className="timeline-content"><p className="timeline-period">{item.period}</p><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p>{item.description}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="shell">
            <div className="section-heading work-heading"><div><p className="kicker">Selected work</p><h2>Systems with a job to do.</h2></div><p>A cross-section of platforms, integrations, and product features developed for real operating contexts.</p></div>
            <ProjectGallery />
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="shell">
            <div className="section-heading service-heading"><div><p className="kicker">What I can help with</p><h2>Focused engineering support.</h2></div><p>From a new product surface to a stubborn integration, I can help clarify the problem and turn it into maintainable software.</p></div>
            <div className="service-list">{services.map((service) => <article className="service-row" key={service.title}><div className="service-icon">{service.icon}</div><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.description}</p></article>)}</div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-glow" aria-hidden="true" />
          <div className="shell contact-inner">
            <p className="kicker kicker-light">Contact</p><h2>Have a problem worth solving?</h2>
            <p>Tell me what you&apos;re building, improving, or untangling. A clear first conversation is often the best place to start.</p>
            <a className="contact-email" href="mailto:imam.syafii.idn@gmail.com">imam.syafii.idn@gmail.com <ArrowUpRight size={28} /></a>
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/imam-syafii-9384b111b" target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn</a>
              <a href="https://www.instagram.com/imam.syafii.ila" target="_blank" rel="noreferrer"><InstagramIcon /> Instagram</a>
              <span><LocationIcon /> Tangerang, Indonesia</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="shell footer-inner"><p>© {new Date().getFullYear()} Imam Syafi&apos;i</p><p>Full-stack / Backend Engineer</p><a href="#top">Back to top <ArrowUpRight size={16} /></a></div></footer>
    </>
  );
}
