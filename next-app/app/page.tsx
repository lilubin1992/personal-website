import Image from "next/image"

import { contactEmail, packages, portfolioImages } from "./portfolio-data"

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
]

export default function Page() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#intro" aria-label="Anais Rocha home">
          AR<span className="wordmark-dot">.</span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-contact" href={`mailto:${contactEmail}`}>
          <span>Let&apos;s talk</span>
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero-section" id="intro" aria-labelledby="intro-title">
          <div className="hero-copy">
            <p className="eyebrow">Photographer / Lisbon + wherever</p>
            <h1 id="intro-title">
              Images with <em>room</em> to breathe.
            </h1>
            <p className="hero-description">
              I make quiet, honest photographs for people and places with
              something to say. Portraits, spaces, and stories in natural light.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                See selected work
                <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href={`mailto:${contactEmail}`}>
                Start a conversation <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="hero-side">
            <div className="hero-note">
              <span className="note-line" aria-hidden="true" />
              <p>
                Photography for the in-between moments, the well-worn places,
                and the people who make them matter.
              </p>
            </div>
            <figure className="hero-image-frame image-frame">
              <Image
                src={portfolioImages[0].src}
                alt={portfolioImages[0].alt}
                fill
                priority
                sizes="(max-width: 900px) 90vw, 44vw"
              />
              <figcaption>
                <span>01</span>
                <span>{portfolioImages[0].title}</span>
              </figcaption>
            </figure>
          </div>

          <div className="hero-footer">
            <span>Based in Lisbon</span>
            <span>Available worldwide</span>
            <a href="#work" aria-label="Scroll to selected work">
              Scroll to explore <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section className="work-section content-section" id="work" aria-labelledby="work-title">
          <div className="section-heading section-heading-work">
            <p className="eyebrow">A selection / 2022—2024</p>
            <h2 id="work-title">
              Selected <em>work</em>
            </h2>
            <p className="section-intro">
              A collection of portraits, places, and visual stories made with
              people who value the details.
            </p>
          </div>

          <div className="work-grid">
            {portfolioImages.map((image, index) => (
              <figure className={`work-item work-item-${image.layout}`} key={image.title}>
                <div className="work-image-frame image-frame">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                  <span className="work-index">0{index + 1}</span>
                </div>
                <figcaption className="work-caption">
                  <div>
                    <h3>{image.title}</h3>
                    <p>{image.category}</p>
                  </div>
                  <span>{image.year}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="about-section content-section" id="about" aria-labelledby="about-title">
          <div className="about-marker">
            <span className="eyebrow">About the work</span>
            <span className="marker-number">02</span>
          </div>
          <div className="about-copy">
            <h2 id="about-title">
              Paying attention is a form of <em>care.</em>
            </h2>
            <p className="about-lead">
              My work starts with listening. I want the people I photograph to
              feel like themselves, and the places I document to keep their own
              rhythm.
            </p>
            <div className="about-details">
              <div>
                <span className="detail-label">I photograph</span>
                <p>People / spaces / small rituals</p>
              </div>
              <div>
                <span className="detail-label">I work in</span>
                <p>Lisbon / Porto / wherever the story is</p>
              </div>
            </div>
            <a className="text-link text-link-light" href={`mailto:${contactEmail}`}>
              Tell me what you&apos;re making <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="pricing-section content-section" id="pricing" aria-labelledby="pricing-title">
          <div className="section-heading pricing-heading">
            <div>
              <p className="eyebrow">Working together / 2025</p>
              <h2 id="pricing-title">
                Ways to work <em>together</em>
              </h2>
            </div>
            <p className="section-intro">
              Start with the shape that feels closest. Every commission gets a
              thoughtful plan before we make anything.
            </p>
          </div>

          <div className="pricing-grid">
            {packages.map((item, index) => (
              <article className={`pricing-card${item.featured ? " pricing-card-featured" : ""}`} key={item.name}>
                <div className="pricing-card-topline">
                  <span>0{index + 1}</span>
                  {item.featured ? <span className="featured-label">Most requested</span> : null}
                </div>
                <h3>{item.name}</h3>
                <p className="pricing-description">{item.description}</p>
                <p className="pricing-price">{item.price}</p>
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>
                      <span aria-hidden="true">+</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <a className="card-link" href={`mailto:${contactEmail}?subject=${encodeURIComponent(`${item.name} inquiry`)}`}>
                  Ask about {item.name} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
          <p className="pricing-footnote">
            Travel, additional edits, and commercial usage are quoted separately.
          </p>
        </section>
      </main>

      <footer className="site-footer" id="contact" aria-labelledby="contact-title">
        <div className="footer-topline">
          <span className="eyebrow">Have a story in mind?</span>
          <span>03 / Contact</span>
        </div>
        <div className="footer-main">
          <h2 id="contact-title">
            Let&apos;s make something <em>felt.</em>
          </h2>
          <a className="footer-email" href={`mailto:${contactEmail}`}>
            {contactEmail} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Anais Rocha</span>
          <span>Lisbon / Portugal</span>
          <a href="#intro">Back to top <span aria-hidden="true">↑</span></a>
        </div>
        <p className="replacement-note">
          Placeholder imagery is ready to replace in <code>app/portfolio-data.ts</code> — swap the six URLs and alt texts with the final work before launch.
        </p>
      </footer>
    </div>
  )
}
