export interface TeamMember {
  id: string;
  name: string;
  title: string;
  shortTitle: string;
  image: string;
  bio: string[];
}

export const teamData: TeamMember[] = [
  {
    id: "ceo",
    name: "Emmanuel Adediran Ojo",
    title: "Chief Executive Officer",
    shortTitle: "Chief Executive Officer",
    image: "/team/ceo_sfmedia2.jpg",
    bio: [
      "Emmanuel Adediran Ojo is the Chief Executive Officer of SF Media Management and Multipurpose Inc., a registered Canadian company with ability to scale.",
      "He is an accomplished media, brand-management and communications professional with extensive experience in new media, public relations, digital content development, event publicity, reputation management and strategic brand positioning.",
      "Through SF Media, Emmanuel leads the development and delivery of creative, professional and results-oriented solutions for individuals, businesses, corporate organisations, public institutions and community-based organisations. His leadership combines an understanding of diverse audiences with international experience gained over a decade ago.",
    ]
  },
  {
    id: "secretary",
    name: "Ayodele Kotey B.A., LL.B., LL.M., ACIS, DCP",
    title: "Corporate Lawyer, Chartered Company Secretary, Governance Professional and International Development Strategist",
    shortTitle: "Corporate Secretary",
    image: "/team/secretary_sfmedia.jpg",
    bio: [
      "Ayodele Kotey is a Corporate Lawyer, Chartered Company Secretary, Governance Professional and International Development Strategist with over 10 years of experience advising multinational companies, investment platforms, development institutions, government stakeholders and high-growth businesses across corporate governance, legal advisory, investment facilitation, public-private partnerships and economic development.",
      "She has built a career at the intersection of law, business, policy and international cooperation, supporting organisations to navigate complex regulatory environments, structure strategic partnerships, mobilise investment and strengthen institutional governance.",
    ]
  },
  {
    id: "Tech-Lead",
    name: "Ademola Sikiru Akeso",
    title: "Chief Technology Officer",
    shortTitle: "CTO",
    image: "/team/techlead.jpg",
    bio: [
      "Ademola Sikiru Akeso is a Software Engineer, Technology Entrepreneur, AI and Blockchain Enthusiast, Youth Leadership Advocate and Community Builder with professional experience spanning software development, web technologies, blockchain, digital products, technology education and emerging technology ecosystems.",
      "He has built his career at the intersection of technology, entrepreneurship, innovation and community development, with a particular interest in using digital solutions to solve practical problems and create opportunities for individuals, businesses and communities. His technical experience covers frontend and backend engineering, full-stack web development, application architecture, databases, APIs, cloud deployment, blockchain technologies and digital product development.",
       ]
  }
];
