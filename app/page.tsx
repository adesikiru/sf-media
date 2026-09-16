import Image from "next/image";

import Link from "next/link";
import { teamData } from "../data/team";
import MediaCoverage from "./components/MediaCoverage";

const services = [
  {
    number: "01",
    title: "Media Management",
    description:
      "Professional media planning, coordination and management designed to strengthen visibility and public presence.",
  },
  {
    number: "02",
    title: "Strategic Communications",
    description:
      "Clear, purposeful communication strategies tailored to organisations, institutions, brands and public figures.",
  },
  {
    number: "03",
    title: "Public Relations",
    description:
      "Building credibility, managing public perception and creating meaningful connections between clients and their audiences.",
  },
  {
    number: "04",
    title: "Brand Management",
    description:
      "Strategic brand development and management that helps organisations establish a distinctive and credible identity.",
  },
  {
    number: "05",
    title: "Event Coverage",
    description:
      "Professional coverage and content production for events, campaigns, public engagements and corporate activities.",
  },
  {
    number: "06",
    title: "Digital Content",
    description:
      "Creative digital content developed for modern audiences across websites, social platforms and digital channels.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <header className="site-header">
        <div className="container nav-container">
          <Link href="/" className="logo">
            <span className="logo-mark">SF</span>
            <span className="logo-text">
              <strong>SF MEDIA</strong>
              <small>MANAGEMENT & MULTIPURPOSE INC.</small>
            </span>
          </Link>

          <nav className="desktop-nav">
            <Link href="/">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#team">Team</Link>
            <Link href="#presence">Our Presence</Link>
            <Link href="#contact" className="nav-cta">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-grid" />

        <div className="container hero-content">
          <div className="hero-copy">
            <p className="eyebrow">CANADA · NIGERIA · BEYOND</p>

            <h1>
              Communication that
              <span> connects.</span>
            </h1>

            <p className="hero-description">
              SF Media Management and Multipurpose Inc. delivers professional
              media, communications, brand-management and multipurpose
              solutions for organisations, institutions, businesses, brands
              and individuals.
            </p>

            <div className="hero-actions">
              <Link href="#services" className="button button-primary">
                Explore Our Services
              </Link>

              <Link href="#about" className="button button-outline">
                Discover SF Media
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-circle visual-circle-one" />
            <div className="visual-circle visual-circle-two" />

            <div className="visual-card">
              <span>SF</span>
              <p>MEDIA</p>
              <small>EST. 2021 · ONTARIO, CANADA</small>
            </div>

            <div className="floating-card">
              <strong>2022+</strong>
              <span>Growing portfolio</span>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="container hero-bottom-inner">
            <span>MEDIA</span>
            <span>COMMUNICATIONS</span>
            <span>BRAND MANAGEMENT</span>
            <span>PUBLIC RELATIONS</span>
            <span>EVENTS</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about-section">
        <div className="container about-grid">
          <div>
            <p className="section-label">ABOUT SF MEDIA</p>
            <h2>
              International experience.
              <br />
              <span>Local understanding.</span>
            </h2>
          </div>

          <div className="about-copy">
            <p>
              SF Media Management and Multipurpose Inc. is a Canadian media,
              communications, brand-management and multipurpose services
              company headquartered in Ontario, Canada, with a branch office
              in Nigeria.
            </p>

            <p>
              We provide professional media and communication solutions to
              government institutions, political organisations, corporate
              bodies, community organisations, businesses, brands and
              individuals.
            </p>

            <p>
              By combining international experience with a strong
              understanding of the Nigerian media and public environment, SF
              Media delivers creative, timely and results-oriented solutions
              tailored to each client&apos;s objectives.
            </p>

            <Link href="#contact" className="text-link">
              Work with SF Media <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section services-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-label">WHAT WE DO</p>
              <h2>
                Solutions built for
                <br />
                <span>visibility and impact.</span>
              </h2>
            </div>

            <p>
              From strategic communication to media production and brand
              management, we help clients communicate with clarity, build
              credibility and remain relevant.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <span className="service-arrow"></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <MediaCoverage />

      {/* History */}
      <section className="section history-section">
        <div className="container history-grid">
          <div className="history-intro">
            <p className="section-label">OUR JOURNEY</p>
            <h2>
              Building a growing
              <span> portfolio since 2022.</span>
            </h2>

            <p>
              Incorporated in Ontario, Canada in 2021, SF Media began its
              professional journey with a commitment to high-quality media
              management, brand development, strategic communication and
              multipurpose services.
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span>2021</span>
              <div>
                <h3>Founded in Ontario</h3>
                <p>
                  SF Media Management and Multipurpose Inc. was incorporated
                  under the Ontario Business Corporations Act.
                </p>
              </div>
            </div>

            <div className="timeline-item active">
              <span>2022+</span>
              <div>
                <h3>Professional operations</h3>
                <p>
                  The company expanded its portfolio across media management,
                  public relations, political communication, content
                  development, event coverage and community-focused publicity.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span>NIGERIA</span>
              <div>
                <h3>Expanding local operations</h3>
                <p>
                  SF Media established its Nigerian branch to strengthen
                  operations and better serve clients within the country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section team-section">
        <div className="container">
          <div className="section-heading centered">
            <p className="section-label">MEET OUR TEAM</p>
            <h2>
              The people behind
              <br />
              <span>the vision.</span>
            </h2>
          </div>

          <div className="team-grid">
            {teamData.map((member) => (
              <Link href={`/team/${member.id}`} key={member.id} className="team-card">
                <div className="team-image-wrapper">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="team-image"
                  />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p>{member.shortTitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="presence" className="section presence-section">
        <div className="container">
          <div className="section-heading centered">
            <p className="section-label">OUR PRESENCE</p>
            <h2>
              Connecting markets,
              <br />
              <span>serving people.</span>
            </h2>
          </div>

          <div className="locations-grid">
            <article className="location-card">
              <div className="location-top">
                <span className="location-code">CA</span>
                <span>HEAD OFFICE</span>
              </div>

              <h3>Ontario, Canada</h3>

              <p>
                SF Media Management and Multipurpose Inc.
                <br />
                109-7800 Lundys Lane
                <br />
                Niagara Falls, ON
                <br />
                L2H 1H1, Canada
              </p>

              <div className="location-meta">
                <span>Ontario Corporation No.</span>
                <strong>1000002607</strong>
              </div>
            </article>

            <article className="location-card location-card-dark">
              <div className="location-top">
                <span className="location-code">NG</span>
                <span>BRANCH OFFICE</span>
              </div>

              <h3>Ikorodu, Lagos</h3>

              <p>
                SF Media Management & Multipurpose Limited
                <br />
                22 Ogunde Street, Off Adeola, Agric,
                <br />
                Ikorodu, Lagos State, Nigeria
              </p>

              <div className="location-meta">
                <span>RC Number</span>
                <strong>9390287</strong>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="contact-section">
        <div className="container contact-inner">
          <div>
            <p className="section-label">LET&apos;S CONNECT</p>
            <h2>
              Have a story,
              <br />
              <span>brand or message?</span>
            </h2>
          </div>

          <div className="contact-content">
            <p>
              Whether you are a government institution, organisation,
              business, brand or individual, SF Media is ready to help you
              communicate with purpose.
            </p>

            <a
              href="mailto:sfmediamgtinc@gmail.com"
              className="button button-light"
            >
              Contact SF Media →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <div className="footer-logo">SF</div>

            <h3>SF MEDIA</h3>

            <p>
              Management & Multipurpose Inc.
            </p>

            <span>
              Media Management · Brand Management · Events · Strategic
              Communications · General Contracts
            </span>
          </div>

          <div className="footer-column">
            <h4>Canada</h4>
            <p>
              109-7800 Lundys Lane
              <br />
              Niagara Falls, ON
              <br />
              L2H 1H1, Canada
            </p>

            <a href="tel:+14379252089">+1 437 925 2089</a>
          </div>

          <div className="footer-column">
            <h4>Nigeria</h4>
            <p>
              22 Ogunde Street, Off Adeola, Agric,
              <br />
              Ikorodu, Lagos State
              <br />
              Nigeria
            </p>

            <span>Nigeria telephone — +234 802 122 3377</span>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <a href="mailto:sfmediamgtinc@gmail.com">
              sfmediamgtinc@gmail.com
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © 2026 SF Media Management and Multipurpose Inc. All Rights
            Reserved.
          </span>

          <span>Canada · Nigeria · Beyond</span>
        </div>
      </footer>
    </main>
  );
}
