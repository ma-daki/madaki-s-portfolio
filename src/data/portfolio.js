// ─── Profile ──────────────────────────────────────────────────────────────
export const profile = {
  name: 'Madaki Shepherd',
  shortName: 'MADAKI',
  title: 'Frontend Developer',
  tagline: 'Building modern digital systems & premium interfaces.',
  bio: "I'm a passionate frontend developer based in Plateau, Nigeria. I specialise in crafting clean, responsive, and high-performance web experiences. Currently expanding into backend development with Python to become a full-stack engineer.",
  location: 'Plateau, Nigeria',
  email: 'madakishepherd@gmail.com',
  phone: '+234 913 395 6038',
  whatsapp: 'https://wa.me/2349133956038',
  availability: 'Available for work',
  availabilityStatus: true,
}

// ─── Animated Roles ────────────────────────────────────────────────────────
export const roles = [
  'Frontend Developer',
  'UI Engineer',
  'React Developer',
  'Creative Coder',
]

// ─── Social Links ─────────────────────────────────────────────────────────
export const socials = [
  {
    platform: 'GitHub',
    url: 'https://github.com/Sheff-ma',
    label: 'Visit my GitHub profile',
    icon: 'Github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/madaki-shepherd-65379b282/',
    label: 'Visit my LinkedIn profile',
    icon: 'Linkedin',
  },
  {
    platform: 'Twitter',
    url: 'https://x.com/madaks9',
    label: 'Visit my Twitter profile',
    icon: 'Twitter',
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/ma.d.a.k.i/',
    label: 'Visit my Instagram profile',
    icon: 'Instagram',
  },
  {
    platform: 'WhatsApp',
    url: 'https://wa.me/2349133956038',
    label: 'Chat with me on WhatsApp',
    icon: 'MessageCircle',
  },
]

// ─── Tech Stack ────────────────────────────────────────────────────────────
export const techStack = [
  { name: 'HTML5',       icon: '/img/html.png',       color: '#E34F26' },
  { name: 'CSS3',        icon: '/img/css.png',         color: '#1572B6' },
  { name: 'JavaScript',  icon: '/img/js.png',          color: '#F7DF1E' },
  { name: 'React',       icon: null,                   color: '#61DAFB', emoji: '⚛️' },
  { name: 'Tailwind',    icon: '/img/tailwind.png',    color: '#06B6D4' },
  { name: 'Bootstrap',   icon: '/img/bootstrap.png',   color: '#7952B3' },
  { name: 'Figma',       icon: '/img/figma.png',       color: '#F24E1E' },
]

// ─── Stats ─────────────────────────────────────────────────────────────────
export const stats = [
  { label: 'Projects Built',    value: 5,  suffix: '+' },
  { label: 'Tech Skills',       value: 7,  suffix: ''  },
  { label: 'Months Coding',     value: 18, suffix: '+'  },
  { label: 'GitHub Repos',      value: 10, suffix: '+'  },
]

// ─── Projects ──────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'ELIXIR — Landing Page',
    description:
      'A premium product landing page for ELIXIR, featuring modern layout composition, rich animations, and a high-conversion UI architecture.',
    shortDesc: 'Premium product landing page with rich animations.',
    image: '/img/project 1.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    accent: '#FACC15',
  },
  {
    id: 2,
    title: 'Grid Card System',
    description:
      'An editorial CSS grid card layout system demonstrating advanced grid composition, card hierarchy, and responsive behaviour.',
    shortDesc: 'Advanced CSS grid card layout system.',
    image: '/img/project 2.png',
    tags: ['CSS Grid', 'HTML', 'Layout'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    accent: '#111111',
  },
  {
    id: 3,
    title: 'Albishir NGO Website',
    description:
      'A multi-section NGO landing page built to Themeforest design standards, featuring animated sections, a donation CTA flow, and full responsiveness.',
    shortDesc: 'NGO landing page with animations and donation flow.',
    image: '/img/project 3.png',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JS'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    accent: '#22C55E',
  },
  {
    id: 4,
    title: 'Positivus — Multi-page',
    description:
      'A multi-page marketing website for Positivus, rebuilt from a Figma design system with precision layout and interactive elements.',
    shortDesc: 'Multi-page marketing site from Figma design.',
    image: '/img/project 4.png',
    tags: ['HTML', 'CSS', 'Figma', 'Multi-page'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    accent: '#6366F1',
  },
  {
    id: 5,
    title: 'Developer Portfolio v1',
    description:
      'The original portfolio — the foundation this very rebuild is based on. Built with Bootstrap and Vanilla JS.',
    shortDesc: 'Original portfolio — the foundation for this rebuild.',
    image: '/img/project 5.png',
    tags: ['Bootstrap', 'JS', 'ScrollReveal'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    accent: '#F59E0B',
  },
]
