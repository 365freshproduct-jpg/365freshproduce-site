export const supportedLocales = ["en", "ru", "hy"] as const;

export type Locale = (typeof supportedLocales)[number];
export type SolutionKey =
  | "structures"
  | "fogging"
  | "cooling"
  | "heating"
  | "screening"
  | "irrigation"
  | "climate"
  | "automation"
  | "turnkey";
export type ProjectFilter = "all" | "completed" | "progress" | "turnkey";

export type NavItem = {
  label: string;
  href: string;
};

type SiteContent = {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  company: {
    name: string;
    shortName: string;
    tagline: string;
    phone: string;
    email: string;
    address: string;
    logoLabel: string;
  };
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    highlights: string[];
    metrics: Array<{ value: string; label: string }>;
    panelTitle: string;
    panelText: string;
  };
  about: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    trustPoints: string[];
    advantages: Array<{
      title: string;
      description: string;
    }>;
  };
  solutions: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      key: SolutionKey;
      title: string;
      description: string;
    }>;
  };
  process: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  calculator: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    areaLabel: string;
    systemsLabel: string;
    submitLabel: string;
    successMessage: string;
    helperPoints: string[];
    systemOptions: Array<{
      key: SolutionKey;
      label: string;
      description: string;
    }>;
    labels: {
      width: string;
      length: string;
      name: string;
      phone: string;
      email: string;
      comment: string;
    };
  };
  projects: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    filters: Array<{
      id: ProjectFilter;
      label: string;
    }>;
    items: Array<{
      name: string;
      location: string;
      summary: string;
      area: string;
      statusLabel: string;
      tags: Exclude<ProjectFilter, "all">[];
      systems: string[];
      image: string;
    }>;
  };
  reasons: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
    quote: string;
  };
  cta: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  footer: {
    copyright: string;
    social: Array<{
      label: string;
      href: string;
    }>;
  };
};

const englishContent: SiteContent = {
  metadata: {
    title: "AUREN Greenhouse Systems | Turnkey Industrial Greenhouses",
    description:
      "Premium B2B greenhouse construction company delivering turnkey industrial greenhouses with structures from Turkey and Spain and engineering systems from Europe.",
    keywords: [
      "industrial greenhouse construction",
      "turnkey greenhouse solutions",
      "greenhouse climate control",
      "greenhouse irrigation systems",
      "greenhouse automation",
      "European greenhouse technology",
    ],
  },
  company: {
    name: "AUREN Greenhouse Systems",
    shortName: "AUREN",
    tagline: "Engineering industrial greenhouses with trusted European supply chains.",
    phone: "+374 10 000 000",
    email: "info@auren-greenhouse.com",
    address: "Business Campus, Yerevan, Armenia",
    logoLabel: "Auren Greenhouse Systems",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Solutions", href: "#solutions" },
    { label: "Process", href: "#process" },
    { label: "Calculator", href: "#calculator" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Premium Industrial Greenhouse Engineering",
    title: "ТЕПЛИЦЫ ПОД КЛЮЧ",
    description:
      "We design, source, deliver, install and launch greenhouse complexes with structures from Turkey and Spain, engineering systems from Europe and a full-cycle implementation approach for serious agricultural investors.",
    primaryCta: "Request a quote",
    secondaryCta: "Our projects",
    highlights: [
      "Structures from Turkey and Spain",
      "European engineering systems",
      "Design, delivery, installation and commissioning",
    ],
    metrics: [
      { value: "3", label: "strategic sourcing regions" },
      { value: "8", label: "integrated engineering systems" },
      { value: "7", label: "delivery stages from concept to launch" },
    ],
    panelTitle: "Integrated technical scope",
    panelText:
      "From venlo-type steel structures to climate control, irrigation and automation, every system is coordinated as one buildable investment package.",
  },
  about: {
    id: "about",
    eyebrow: "About the company",
    title: "A trusted engineering partner for high-performance greenhouse assets.",
    description:
      "AUREN manages the full implementation cycle for industrial greenhouse projects. We coordinate design logic, supplier selection, logistics, site installation and launch planning so each complex is delivered as a reliable production environment rather than a collection of isolated systems.",
    trustPoints: [
      "International supplier network",
      "Engineering-led equipment selection",
      "Disciplined installation management",
    ],
    advantages: [
      {
        title: "European technology",
        description:
          "We specify proven greenhouse equipment and internal systems from advanced European manufacturers.",
      },
      {
        title: "Turnkey delivery",
        description:
          "From first concept and bill of materials to commissioning, the project is delivered through one coordinated execution flow.",
      },
      {
        title: "Engineering expertise",
        description:
          "Each layout, climate concept and system package is selected around crop goals, site context and operational efficiency.",
      },
      {
        title: "Reliable partnerships",
        description:
          "Long-term relationships with suppliers in Turkey, Spain and Europe support lead-time visibility and dependable delivery.",
      },
    ],
  },
  solutions: {
    id: "solutions",
    eyebrow: "Our solutions",
    title: "A complete system architecture for modern industrial greenhouse operations.",
    description:
      "We integrate structural packages and internal technical systems into one coherent greenhouse environment, balancing energy performance, crop protection and production control.",
    items: [
      {
        key: "structures",
        title: "Greenhouse structures",
        description:
          "Robust steel structures sourced from Turkey and Spain for scalable industrial greenhouse layouts.",
      },
      {
        key: "fogging",
        title: "Fogging systems",
        description:
          "High-pressure humidification and adiabatic cooling support stable crop conditions during peak thermal loads.",
      },
      {
        key: "cooling",
        title: "Cooling systems",
        description:
          "Pad-and-fan or advanced cooling strategies help reduce heat stress and stabilize greenhouse performance.",
      },
      {
        key: "heating",
        title: "Heating systems",
        description:
          "Efficient heat distribution solutions preserve production continuity and protect crop cycles in colder periods.",
      },
      {
        key: "screening",
        title: "Screening systems",
        description:
          "Energy, shading and blackout screens help fine-tune light, heat retention and crop protection objectives.",
      },
      {
        key: "irrigation",
        title: "Irrigation systems",
        description:
          "Accurate fertigation and irrigation packages improve water efficiency and support consistent plant development.",
      },
      {
        key: "climate",
        title: "Climate control",
        description:
          "Integrated sensing and control strategies maintain balanced internal conditions for demanding cultivation programs.",
      },
      {
        key: "automation",
        title: "Automation and monitoring",
        description:
          "Centralized monitoring and automation reduce operational friction and increase traceability across the facility.",
      },
      {
        key: "turnkey",
        title: "Turnkey greenhouse solutions",
        description:
          "One execution partner coordinating structures, systems, installation, launch and long-term operational readiness.",
      },
    ],
  },
  process: {
    id: "process",
    eyebrow: "Turnkey construction",
    title: "A structured delivery model from consultation to operational support.",
    description:
      "Our implementation path is designed to reduce ambiguity, align suppliers early and keep technical scope visible through every project milestone.",
    steps: [
      {
        title: "Consultation",
        description:
          "We define production targets, site constraints, investment priorities and required technical scope.",
      },
      {
        title: "Design",
        description:
          "Preliminary layout, engineering logic and system strategy are shaped into a coordinated project concept.",
      },
      {
        title: "Equipment selection",
        description:
          "Structures and internal systems are specified from trusted suppliers in Turkey, Spain and Europe.",
      },
      {
        title: "Delivery",
        description:
          "Procurement, logistics planning and sequencing are aligned to site readiness and installation priorities.",
      },
      {
        title: "Installation",
        description:
          "On-site assembly and system integration are supervised to protect quality, schedule and technical consistency.",
      },
      {
        title: "Commissioning",
        description:
          "We launch the greenhouse environment, verify critical systems and prepare the facility for production startup.",
      },
      {
        title: "Support",
        description:
          "Operational guidance and supplier coordination continue after handover to sustain long-term performance.",
      },
    ],
  },
  calculator: {
    id: "calculator",
    eyebrow: "Request calculator",
    title: "Build a tailored greenhouse request in one step.",
    description:
      "Share the greenhouse dimensions, required systems and contact details. The form calculates the area instantly and prepares a complete inquiry for our engineering team.",
    areaLabel: "Estimated greenhouse area",
    systemsLabel: "Select required systems",
    submitLabel: "Send request",
    successMessage: "Thank you. Your request has been sent. Our team will contact you soon.",
    helperPoints: [
      "Instant area calculation in square meters",
      "Structured system checklist for engineering review",
      "SMTP-ready endpoint for company email delivery",
    ],
    systemOptions: [
      {
        key: "climate",
        label: "Climate control",
        description: "Sensors, controllers and greenhouse climate strategy",
      },
      {
        key: "fogging",
        label: "Fogging system",
        description: "Humidity support and adiabatic cooling",
      },
      {
        key: "cooling",
        label: "Cooling system",
        description: "Thermal management for hot seasons",
      },
      {
        key: "heating",
        label: "Heating system",
        description: "Heat generation and distribution",
      },
      {
        key: "screening",
        label: "Screening system",
        description: "Energy and shading screens",
      },
      {
        key: "irrigation",
        label: "Irrigation system",
        description: "Watering and fertigation solutions",
      },
      {
        key: "automation",
        label: "Automation",
        description: "Monitoring, dashboards and controls",
      },
    ],
    labels: {
      width: "Width (m)",
      length: "Length (m)",
      name: "Name",
      phone: "Phone",
      email: "Email",
      comment: "Project details / comment",
    },
  },
  projects: {
    id: "projects",
    eyebrow: "Completed works",
    title: "Project references prepared to speak the language of investors and operators.",
    description:
      "The portfolio area is structured for future growth, so your team can keep replacing placeholders with completed greenhouse references, progress snapshots and turnkey cases.",
    filters: [
      { id: "all", label: "All projects" },
      { id: "completed", label: "Completed projects" },
      { id: "progress", label: "In progress" },
      { id: "turnkey", label: "Turnkey projects" },
    ],
    items: [
      {
        name: "Armavir Tomato Production Campus",
        location: "Armavir, Armenia",
        summary:
          "Multi-bay vegetable greenhouse with integrated irrigation, heating, screening and central climate management.",
        area: "18,000 m²",
        statusLabel: "Completed",
        tags: ["completed", "turnkey"],
        systems: ["Heating", "Climate control", "Irrigation", "Automation"],
        image: "/project-armavir.svg",
      },
      {
        name: "Ankara Propagation Greenhouse",
        location: "Ankara, Turkey",
        summary:
          "Nursery-focused greenhouse package with fogging, cooling and automation configured for propagation stability.",
        area: "12,500 m²",
        statusLabel: "In progress",
        tags: ["progress"],
        systems: ["Fogging", "Cooling", "Automation", "Screening"],
        image: "/project-ankara.svg",
      },
      {
        name: "Almeria Fresh Produce Unit",
        location: "Almeria, Spain",
        summary:
          "Turnkey greenhouse concept developed around strong structure, climate logic and phased equipment delivery.",
        area: "24,000 m²",
        statusLabel: "Completed",
        tags: ["completed", "turnkey"],
        systems: ["Structures", "Climate control", "Irrigation", "Screening"],
        image: "/project-almeria.svg",
      },
      {
        name: "Marseille Climate Retrofit Program",
        location: "Marseille, France",
        summary:
          "Engineering upgrade for an existing greenhouse block focused on cooling, screening and monitoring reliability.",
        area: "9,800 m²",
        statusLabel: "In progress",
        tags: ["progress"],
        systems: ["Cooling", "Screening", "Climate control", "Automation"],
        image: "/project-marseille.svg",
      },
    ],
  },
  reasons: {
    id: "why-us",
    eyebrow: "Why choose us",
    title: "Built for agribusiness clients that value dependable delivery and technical clarity.",
    description:
      "The site positions AUREN as a high-trust industrial partner: not just a supplier of components, but a company that understands sequencing, performance and execution risk.",
    items: [
      "Advanced European equipment",
      "Full-cycle implementation",
      "Custom engineering approach",
      "Reliable delivery chain",
      "Modern climate solutions",
      "Professional installation",
    ],
    quote:
      "We coordinate structure, systems and site execution as one disciplined greenhouse program.",
  },
  cta: {
    title: "Plan your greenhouse project with us.",
    description:
      "Start with a concise technical brief and we will shape a sourcing and implementation path that fits your greenhouse investment.",
    primaryCta: "Request a quote",
    secondaryCta: "Contact our team",
  },
  footer: {
    copyright: "© 2026 AUREN Greenhouse Systems. All rights reserved.",
    social: [
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "YouTube", href: "https://www.youtube.com/" },
      { label: "WhatsApp", href: "https://www.whatsapp.com/" },
    ],
  },
};

const siteContent: Record<Locale, SiteContent> = {
  en: englishContent,
  ru: englishContent,
  hy: englishContent,
};

export function isSupportedLocale(locale: string): locale is Locale {
  return supportedLocales.includes(locale as Locale);
}

export function getSiteContent(locale: string) {
  return isSupportedLocale(locale) ? siteContent[locale] : siteContent.en;
}
