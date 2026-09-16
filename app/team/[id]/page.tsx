import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { teamData } from "@/data/team";

export default async function TeamProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const member = teamData.find((m) => m.id === id);

  if (!member) {
    notFound();
  }

  return (
    <main className="team-profile-page">
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
            <Link href="/#team" className="nav-cta button-outline" style={{ padding: '0.5rem 1rem' }}>
              ← Back to Team
            </Link>
          </nav>
        </div>
      </header>

      <section className="section profile-section">
        <div className="container profile-grid">
          <div className="profile-image-container">
            <div className="profile-image-wrapper">
              <Image
                src={member.image}
                alt={member.name}
                fill
                priority
                className="profile-image"
              />
            </div>
          </div>
          
          <div className="profile-content">
            <h1 className="profile-name">{member.name}</h1>
            <p className="profile-title">{member.title}</p>
            
            <div className="profile-bio">
              {member.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
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
