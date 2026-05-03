export const site = {
  name: "CYBER ODANE",
  nameBody: "Cyberodane",
  tagline: "Cybersecurity Research & Consultancy Institute",
  description:
    "Cyberodane bridges the frontier between academic cybersecurity scholarship and real-world industry application — winning grants, engineering solutions, and publishing findings that define the discipline.",
  url: "https://cyberodane.ac.uk",
  email: "research@cyberodane.ac.uk",
  linkedin: "linkedin.com/company/cyberodane",
  location: "United Kingdom (Remote & On-Site)",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#grants", label: "Grants" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
] as const;

export const hero = {
  kicker: "Cybersecurity research & consultancy institute",
  titleLine1: "Where rigorous research",
  titleEm: "shapes cyber defence",
  sub: site.description,
  primaryCta: { href: "#partnerships", label: "Explore partnerships" },
  secondaryCta: { href: "#research", label: "Our research areas" },
  stats: [
    { value: "12", suffix: "+", label: "Peer-reviewed publications" },
    { value: "8", suffix: "+", label: "Industry collaborations" },
    { value: "Q1", suffix: "/Q2", label: "Journal target classification" },
    { value: "6", suffix: "+", label: "Active research themes" },
  ],
} as const;

export const about = {
  label: "Who we are",
  title: "A research institute at the intersection of academia and industry",
  quote:
    "We do not merely study threats — we build the intellectual frameworks and deployable defences that neutralise them.",
  quoteCite: "— Cyberodane research philosophy",
  pillars: [
    {
      n: "01",
      title: "Research-first ethos",
      body: "Every engagement is grounded in empirical evidence, reproducible methodology, and rigorous peer-review standards.",
    },
    {
      n: "02",
      title: "Industry-integrated scholarship",
      body: "We embed industry partners as co-investigators, ensuring research problems are real and outputs are deployable.",
    },
    {
      n: "03",
      title: "Grant-driven sustainability",
      body: "We identify, bid for, and manage competitive research funding from national and international bodies to sustain long-term programmes.",
    },
    {
      n: "04",
      title: "Open science commitment",
      body: "Findings are disseminated through Q1 journals, open-access repositories, and conference proceedings for maximum societal impact.",
    },
  ],
  missionLabel: "Our mission & origin",
  missionTitle: "Founded to close the gap between research and real-world cyber defence",
  missionParas: [
    "Cyberodane was established in response to a persistent and dangerous gap in the cybersecurity landscape: organisations face evolving, sophisticated threats while the academic community produces increasingly advanced knowledge that rarely reaches operational teams in time or form to be useful.",
    "Our mandate is to serve as the connective tissue between these two worlds. We operate as a specialist research consultancy with the credibility of an academic institute and the pragmatism of an industry partner — co-creating knowledge, co-developing tools, and co-authoring publications that carry weight in both boardrooms and journals.",
    "Anchored in the United Kingdom and collaborating internationally, Cyberodane brings together practitioner-researchers — cybersecurity professionals who are simultaneously active academics — to conduct research programmes that are measurably relevant and publication-ready.",
  ],
  affiliations: [
    {
      tag: "Affiliated",
      text: "University of the West of England, Bristol — Senior Lectureship in Cybersecurity & Digital Forensics",
    },
    {
      tag: "Doctoral",
      text: "Glasgow Caledonian University — Active DPhil: ML-based phishing email detection systems",
    },
    {
      tag: "Certified",
      text: "CISSP · CEH · VP Cybersecurity Operations, Barclays Bank",
    },
  ],
} as const;

export type ServiceTag =
  | "CORE OFFERING"
  | "STRATEGIC"
  | "ADVISORY"
  | "PUBLICATION"
  | "RESEARCH"
  | "EDUCATION";

export const services: {
  title: string;
  body: string;
  tag: ServiceTag;
  icon: "partnership" | "grant" | "advisory" | "publication" | "shield" | "training";
}[] = [
  {
    icon: "partnership",
    title: "Industry research partnerships",
    body: "We co-design research programmes with industry organisations, acting as your embedded academic partner. We define the research question, ethics framework, methodology, and dissemination plan — while your organisation provides domain access, operational data, and co-investigator status for grant applications.",
    tag: "CORE OFFERING",
  },
  {
    icon: "grant",
    title: "Grant bid consultancy",
    body: "Securing competitive research funding is a discipline in itself. Cyberodane identifies suitable funding calls — including EPSRC, Innovate UK, EU Horizon Europe, NCSC, and DSTL grants — and leads the writing, costing, and submission of full research proposals. We increase your organisation's probability of success substantially.",
    tag: "STRATEGIC",
  },
  {
    icon: "advisory",
    title: "Cybersecurity R&D advisory",
    body: "We advise CISOs, product managers, and innovation leads on how to embed research rigour into product development cycles. This includes threat modelling grounded in academic literature, evaluation frameworks for ML-based security tooling, and structured knowledge transfer from recent research to engineering teams.",
    tag: "ADVISORY",
  },
  {
    icon: "publication",
    title: "Publication & dissemination support",
    body: "We produce peer-review-ready manuscripts for Q1 and Q2 indexed journals including IEEE Transactions, Springer Nature, Elsevier, and ACM Digital Library. We manage the full submission lifecycle: manuscript preparation, reviewer response, revision, and final publication. We also support conference paper preparation for leading venues such as IEEE S&P and USENIX Security.",
    tag: "PUBLICATION",
  },
  {
    icon: "shield",
    title: "Threat intelligence research",
    body: "Cyberodane conducts primary research into advanced persistent threats, ransomware ecosystems (CL0P, Black Basta, LockBit), phishing infrastructure, dark web monitoring, and ML-based detection systems. Outputs include intelligence reports, MITRE ATT&CK-aligned analyses, and detection artefacts including trained models and datasets.",
    tag: "RESEARCH",
  },
  {
    icon: "training",
    title: "Training & capacity building",
    body: "We design and deliver research-informed CPD programmes for cybersecurity practitioners, executive briefings for board-level audiences, and bespoke technical upskilling workshops. Our content is anchored in the latest academic findings and translated for operational relevance — not standard compliance training.",
    tag: "EDUCATION",
  },
];

export const howItWorks = {
  label: "Collaboration model",
  title: "How we partner with industry",
  intro: [
    "Cyberodane operates a structured four-stage partnership model that transforms an industry problem statement into a peer-reviewed research output — with your organisation named as co-investigator and beneficiary.",
    "This is not traditional consultancy. It is a collaborative research programme where your organisation's intellectual investment yields grant funding, academic credibility, publishable findings, and deployable products simultaneously.",
  ],
  cta: { href: "#contact", label: "Initiate a partnership discussion" },
  steps: [
    {
      n: "01",
      title: "Problem discovery",
      body: "Joint scoping workshop to define the research question, articulate the industry need, and assess grant alignment.",
    },
    {
      n: "02",
      title: "Grant identification & bidding",
      body: "Cyberodane leads the grant application with your organisation as named co-applicant, covering costs and timelines.",
    },
    {
      n: "03",
      title: "Research execution",
      body: "Rigorous data collection, experimentation, modelling, and validation under an agreed ethics and IP framework.",
    },
    {
      n: "04",
      title: "Publication & deployment",
      body: "Q1 journal submission, conference presentation, and delivery of deployable artefacts, tools, or policy recommendations.",
    },
  ],
} as const;

export const research = {
  label: "Active research",
  title: "Six defining research themes",
  intro: [
    "Cyberodane's research agenda is structured around six interconnected themes that collectively span the threat lifecycle — from detection and attribution to policy and resilience.",
    "Each theme is driven by active projects, industry engagement, and an explicit publication trajectory targeting high-impact journals.",
  ],
  publicationTargetLabel: "Current publication target",
  publicationTarget:
    "IEEE Transactions on Information Forensics and Security · Springer Discover Networks · Computers & Security (Elsevier)",
  themes: [
    {
      id: "THEME // 01",
      title: "ML-augmented threat detection",
      body: "Development and comparative evaluation of machine learning models — XGBoost, Random Forest, Decision Trees, and Logistic Regression — for phishing, intrusion, and malware detection at scale.",
      tags: ["XGBoost", "NLP", "Phishing", "IDS"],
    },
    {
      id: "THEME // 02",
      title: "Ransomware ecosystem analysis",
      body: "In-depth technical and operational analysis of ransomware groups including CL0P, Black Basta, and LockBit, encompassing attack vectors, TTPs, encryption mechanisms, and defensive countermeasures.",
      tags: ["CL0P", "Black Basta", "MITRE", "CTI"],
    },
    {
      id: "THEME // 03",
      title: "Digital forensics & incident investigation",
      body: "Research into forensic artefact recovery, evidence chain management, post-breach timeline reconstruction, and the deployment of forensic toolkits in cloud-hybrid environments.",
      tags: ["Forensics", "Cloud", "Chain of custody"],
    },
    {
      id: "THEME // 04",
      title: "Mobile & IoT security in developing economies",
      body: "Research into mobile cybersecurity threats and IoT cryptographic weaknesses in Sub-Saharan Africa and other emerging digital markets, identifying region-specific risk profiles and mitigation strategies.",
      tags: ["West Africa", "IoT", "AES", "Mobile"],
    },
    {
      id: "THEME // 05",
      title: "Graph neural networks for threat intelligence",
      body: "Novel application of GNN architectures to malicious IP detection, threat actor attribution, and knowledge graph construction for cyber threat intelligence enrichment.",
      tags: ["GNN", "Threat intel", "Attribution"],
    },
    {
      id: "THEME // 06",
      title: "Multi-source intelligence frameworks",
      body: "Design and empirical validation of structured intelligence frameworks — including the Cyberodane Multi-Source Intelligence Framework (MSIF) — for integrating OSINT, dark web, HUMINT, and telemetry data into unified analytical pipelines.",
      tags: ["OSINT", "MSIF", "HUMINT", "Dark web"],
    },
  ],
  flagship: {
    label: "Flagship product",
    title: "Odane Guard — AI-powered phishing detection system",
    paras: [
      "Developed as part of our doctoral research programme, Odane Guard is a production-grade phishing email detection system trained on a corpus of approximately 49,000 emails. The system leverages an XGBoost classification model achieving 96.8% detection accuracy with sub-100ms inference latency.",
      "Odane Guard is now the centrepiece of a broader research-to-product pipeline — demonstrating Cyberodane's capacity to take academic findings through prototype to deployable enterprise tooling.",
    ],
    metrics: [
      { label: "Detection accuracy", value: "96.8%" },
      { label: "Training dataset", value: "~49K emails" },
      { label: "Primary model", value: "XGBoost · RF · DT · LR", mono: true },
      { label: "Status", value: "Production-grade prototype", accent: true },
    ],
  },
} as const;

export const publications = {
  label: "Scholarly output",
  title: "Selected publications & research output",
  intro:
    "Cyberodane targets publication in the highest-ranked cybersecurity and information security journals, ensuring maximum reach and academic impact.",
  items: [
    {
      year: "2025",
      title:
        "Multi-Source Intelligence Framework (MSIF) for Advanced Ransomware Attribution: A Case Study of Black Basta",
      meta: "Jude Osamor et al. · Springer — Discover Networks · DOI: 10.1007/s44244-XXX",
      badge: "Springer Q1",
      badgeStyle: "springer" as const,
    },
    {
      year: "2025",
      title:
        "CL0P Ransomware: Detection Strategies, Mitigation Frameworks, and Threat Actor Profiling Using MITRE ATT&CK",
      meta: "Jude Osamor et al. · IEEE Transactions on Information Forensics and Security · Under review",
      badge: "IEEE",
      badgeStyle: "ieee" as const,
    },
    {
      year: "2024",
      title:
        "Comparative Evaluation of Machine Learning Classifiers for Phishing Email Detection: XGBoost, Random Forest, Decision Tree, and Logistic Regression on a 49K-Sample Corpus",
      meta: "Jude Osamor · Doctoral thesis chapter — Glasgow Caledonian University · Academic year 2024–25",
      badge: "Doctoral",
      badgeStyle: "neutral" as const,
    },
    {
      year: "2024",
      title:
        "Mobile Cybersecurity Threat Landscape in West Africa: Empirical Analysis and a Regional Risk Framework",
      meta: "Jude Osamor et al. · Computers & Security — Elsevier · Target submission Q3 2025",
      badge: "Elsevier Q1",
      badgeStyle: "neutral" as const,
    },
    {
      year: "2024",
      title:
        "Port of Nagoya Ransomware Incident: Post-Breach Forensic Analysis and Critical Infrastructure Protection Implications",
      meta: "Jude Osamor et al. · Journal of Cybersecurity and Information Management · Published",
      badge: "Published",
      badgeStyle: "neutral" as const,
    },
    {
      year: "2023",
      title:
        "Graph Neural Networks for Malicious IP Detection: A Scalable Threat Attribution Approach for Enterprise Networks",
      meta: "Jude Osamor et al. · IEEE Access · In preparation",
      badge: "IEEE Access",
      badgeStyle: "ieee" as const,
    },
  ],
  ctas: [
    { href: "#contact", label: "Request full publication list" },
    { href: "#contact", label: "Collaborate on a manuscript" },
  ],
} as const;

export const trust = {
  sectorsTitle: "We welcome partners across the following sectors",
  sectors: [
    "Financial services",
    "Critical infrastructure",
    "Healthcare & NHS",
    "Government & defence",
    "Higher education",
    "Technology vendors",
    "Legal & professional services",
    "Logistics & supply chain",
    "Telco & media",
  ],
  venues: ["IEEE", "Springer Nature", "Elsevier", "ACM Digital Library", "EPSRC", "Innovate UK", "Horizon Europe"],
  statsRecap: [
    { value: "12+", label: "Publications pipeline" },
    { value: "8+", label: "Industry collaborations" },
    { value: "Q1/Q2", label: "Journal targets" },
  ],
} as const;

export const grants = {
  label: "Funding & grants",
  title: "Research funding strategy",
  intro:
    "Cyberodane has a dedicated grant intelligence function that monitors funding landscapes across the UK, Europe, and internationally. We actively pursue funding from EPSRC, Innovate UK, EU Horizon Europe, DSTL, NCSC, and charitable research foundations. Our track record in grant writing positions us as a credible lead applicant or co-investigator on competitive bids.",
  rows: [
    {
      programme: "AI Economy Research Grant",
      funder: "Microsoft AI Economy Institute",
      org: "Microsoft",
      focus: "AI-cybersecurity skills gap in technical college education for working professionals",
      status: "Submitted",
      statusTone: "active" as const,
    },
    {
      programme: "Cyber Resilience for Critical Infrastructure",
      funder: "EPSRC — New Horizons",
      org: "EPSRC / UKRI",
      focus: "Automated detection and response frameworks for CNI ransomware attacks using ML and SOAR",
      status: "Targeting 2025",
      statusTone: "seeking" as const,
    },
    {
      programme: "Innovate UK Cyber Catalyst",
      funder: "Innovate UK",
      org: "Innovate UK",
      focus: "Product development funding for Odane Guard enterprise phishing detection deployment",
      status: "In development",
      statusTone: "seeking" as const,
    },
    {
      programme: "Horizon Europe — Secure AI",
      funder: "European Research Executive Agency",
      org: "EU Horizon",
      focus: "Trustworthy and explainable AI for cybersecurity threat detection in federated network environments",
      status: "Monitoring",
      statusTone: "seeking" as const,
    },
    {
      programme: "NCSC Academic Starter Grant",
      funder: "National Cyber Security Centre",
      org: "NCSC / GCHQ",
      focus: "Dark web intelligence collection methodologies and automated threat actor profiling",
      status: "Targeting 2026",
      statusTone: "seeking" as const,
    },
  ],
  cta: {
    title: "Co-apply for research funding with us",
    body: "Your organisation's participation as a named industry partner significantly strengthens grant applications to EPSRC, Innovate UK, and EU Horizon. We handle the writing, budgeting, and submission — you contribute domain access and co-investigator status.",
    href: "#contact",
    label: "Discuss co-application",
  },
} as const;

export const team = {
  label: "Leadership & research team",
  title: "Practitioner-researchers leading the institute",
  intro:
    "Cyberodane is led by cybersecurity professionals who are simultaneously active academics, practitioners, and published researchers — bringing dual-domain credibility to every engagement.",
  members: [
    {
      initials: "JO",
      name: "Dr. Jude Osamor",
      role: "Founder & principal research director",
      bio: "VP of Cybersecurity Operations at Barclays Bank and Senior Lecturer at the University of the West of England, Bristol. Active DPhil candidate at Glasgow Caledonian University researching ML-based phishing detection. Co-founder of CyBlack, a community-focused cybersecurity initiative. Author of peer-reviewed publications on ransomware, threat intelligence, and ML-driven security.",
      creds: ["CISSP", "CEH", "DPhil (Cand.)", "Senior lecturer", "Barclays VP"],
    },
    {
      initials: "RI",
      name: "Research & industry fellows",
      role: "Visiting researchers & practitioners",
      bio: "Cyberodane maintains a network of visiting research fellows drawn from UK universities, financial institutions, and government cybersecurity bodies. Fellows contribute domain expertise, peer-review capacity, and co-authorship to active research programmes, ensuring both breadth and depth across our six research themes.",
      creds: ["IEEE members", "CREST registered", "Doctoral supervisors"],
    },
    {
      initials: "AC",
      name: "Academic collaborators",
      role: "University research partners",
      bio: "Through existing academic affiliations at UWE Bristol and Glasgow Caledonian University, Cyberodane maintains structured research collaboration agreements with faculty members in cybersecurity, computer science, information systems, and AI. These relationships enable joint grant applications and access to institutional research infrastructure including datasets, labs, and ethics boards.",
      creds: ["UWE Bristol", "Glasgow Caledonian", "Multi-university"],
    },
  ],
  fellowship: {
    title: "Join our research network",
    body: "We invite academics, doctoral candidates, and cybersecurity practitioners to affiliate with Cyberodane as research fellows or associate researchers.",
    href: "#contact",
    label: "Apply for fellowship",
  },
} as const;

export const insights = {
  label: "Research intelligence",
  title: "Insights, commentary & analysis",
  intro:
    "Perspectives from the Cyberodane research team on the evolving threat landscape, emerging academic findings, and policy implications for practitioners and decision-makers.",
  items: [
    {
      cat: "Threat landscape",
      title: "The CL0P playbook: How ransomware groups are industrialising extortion at scale",
      body: "A deep technical breakdown of CL0P's operational evolution — from MOVEit exploitation to quadruple extortion strategies — and what defenders must do differently in 2025 to disrupt their kill chain at each stage.",
      date: "March 2025",
      featured: true,
      gradient: "from-[#0a1a14] to-[#0d2238]",
    },
    {
      cat: "Machine learning",
      title: "Why XGBoost outperforms neural networks for phishing detection in production",
      body: "An honest analysis of where gradient boosting methods retain an advantage over deep learning when inference latency, interpretability, and dataset size matter in enterprise email security.",
      date: "February 2025",
      featured: false,
      gradient: "from-[#0f1a2a] to-[#1a0f2a]",
    },
    {
      cat: "Policy & regulation",
      title: "NIS2 directive: What UK financial institutions must address before enforcement bites",
      body: "A practitioner's guide to mapping NIS2 obligations against existing ISO 27001 and DORA compliance programmes — identifying the gaps most organisations will overlook.",
      date: "January 2025",
      featured: false,
      gradient: "from-[#1a0a0a] to-[#2a1010]",
    },
    {
      cat: "Research methods",
      title: "Graph neural networks for threat attribution: Promise, pitfalls, and a practical evaluation framework",
      body: "An accessible introduction to GNN architectures for malicious IP detection, reviewing key papers and outlining evaluation criteria for practitioners considering deployment.",
      date: "December 2024",
      featured: false,
      gradient: "from-[#0a1520] to-[#0a2010]",
    },
    {
      cat: "Developing economies",
      title: "West Africa's mobile cybersecurity deficit: Why standard frameworks fail and what replaces them",
      body: "Drawing on our primary research, we outline the distinct threat profile facing mobile users across Sub-Saharan Africa and propose a regionally-adapted security framework for telcos and regulators.",
      date: "November 2024",
      featured: false,
      gradient: "from-[#1a1a0a] to-[#2a200a]",
    },
  ],
  viewAll: { href: "#insights", label: "View all research insights" },
} as const;

export const ctaBand = {
  title: "Ready to fund rigorous cyber research?",
  body: "Partner with Cyberodane on grants, publications, and deployable security outcomes — with a team that speaks both boardroom and peer review.",
  primary: { href: "#contact", label: "Start a conversation" },
  secondary: { href: "#partnerships", label: "See partnership model" },
} as const;

export const contact = {
  label: "Get in touch",
  title: "Start a research partnership",
  intro:
    "Whether you are an organisation seeking to embed research into your cybersecurity strategy, an academic institution exploring collaboration, or a funder considering a research portfolio — we welcome the conversation.",
  channels: [
    {
      label: "Research enquiries",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      label: "Institute location",
      value: site.location,
    },
    {
      label: "Academic & LinkedIn",
      value: site.linkedin,
      href: "https://www.linkedin.com/company/cyberodane",
    },
  ],
  commitment:
    "Response commitment: All partnership and research enquiries receive a substantive response from our research team within 5 working days. Grant co-application discussions are scheduled within 10 working days.",
  form: {
    enquiryOptions: [
      "Research partnership",
      "Grant co-application",
      "Publication collaboration",
      "R&D advisory",
      "Training & capacity building",
      "Research fellowship",
      "General enquiry",
    ],
  },
} as const;

export const footer = {
  blurb:
    "A specialist cybersecurity research consultancy institute. We bridge academic scholarship and industry application through grant-funded, publication-driven research partnerships.",
  affiliations: ["IEEE", "EPSRC", "UWE Bristol", "GCU"],
  cols: [
    {
      title: "Institute",
      links: [
        { href: "#about", label: "About Cyberodane" },
        { href: "#team", label: "Research team" },
        { href: "#partnerships", label: "Partnership model" },
        { href: "#grants", label: "Grants & funding" },
        { href: "#contact", label: "Fellowship applications" },
      ],
    },
    {
      title: "Research",
      links: [
        { href: "#research", label: "Research themes" },
        { href: "#publications", label: "Publications" },
        { href: "#research", label: "Odane Guard" },
        { href: "#insights", label: "Research insights" },
        { href: "#contact", label: "Collaborate" },
      ],
    },
    {
      title: "Services",
      links: [
        { href: "#services", label: "Industry partnerships" },
        { href: "#services", label: "Grant bid consultancy" },
        { href: "#services", label: "R&D advisory" },
        { href: "#services", label: "Publication support" },
        { href: "#services", label: "Training & CPD" },
      ],
    },
  ],
  legal: "Privacy policy · Terms of engagement · Research ethics statement",
  copyright: "© 2026 Cyberodane Research Consultancy Institute. All rights reserved.",
} as const;
