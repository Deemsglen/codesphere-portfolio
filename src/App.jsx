import { useEffect, useMemo, useRef, useState } from 'react'

/* ==========================================================
   DATA
========================================================== */

const members = [
  {
    id: 'deems',
    displayName: 'Deems Glen Clay Philip F. Bustani',
    shortName: 'Deems Glen',
    shortRole: 'Team Leader',
    role: 'Team Leader',
    label: 'Leader',
    image: '/team/deems.png',
    bio: 'One of the founding members of CodeSphere. Passionate about building complete web experiences — from clean, thoughtful interfaces to reliable backend logic. Believes that great teamwork and simple code are the keys to meaningful projects, and enjoys turning rough ideas into polished, working products.',
    birthday: 'October 8, 2006',
    address: 'Lagan Street, Rizal, Puerto Princesa City, Palawan',
    skills: ['Supabase', 'HTML', 'CSS', 'JavaScript', 'React', 'Figma'],
    github: 'https://github.com/Deemsglen',
    facebook: 'https://www.facebook.com/search/top?q=Deems%20Glen',
    instagram: 'https://www.instagram.com/de_glennn/',
    tiktok: 'https://www.tiktok.com/@deemsglen1',
    email: 'mailto:deemsglenbustani@gmail.com',
    phone: 'tel:+639275016642',
  },
  {
    id: 'jenalyn',
    displayName: 'Jenalyn Parangue',
    shortName: 'Jenalyn',
    shortRole: 'Member of CodeSphere',
    role: 'Member of CodeSphere',
    label: 'Member',
    image: '/team/jenalyn.png',
    bio: "The creative eye behind CodeSphere's visual identity. Loves shaping early ideas into clean, modern interfaces that feel natural to use. Brings both imagination and quiet structure to every project — from early sketches to the final polished screen.",
    birthday: 'March 5, 2007',
    address: 'Brgy. Sicsican, Puerto Princesa City, Palawan',
    skills: ['Figma', 'HTML', 'CSS', 'JavaScript', 'React'],
    github: 'https://github.com/jenalynparangue33-beep',
    facebook: 'https://www.facebook.com/search/top?q=Leanne%20Jane',
    instagram: 'https://www.instagram.com/_leannnexx/',
    tiktok: '',
    email: 'mailto:jenalynparangue33@gmail.com',
    phone: 'tel:+639931029588',
  },
  {
    id: 'angelo',
    displayName: 'Angelo Peduhan',
    shortName: 'Angelo',
    shortRole: 'Member of CodeSphere',
    role: 'Member of CodeSphere',
    label: 'Member',
    image: '/team/angelo.png',
    bio: 'A detail-driven member of CodeSphere who enjoys crafting responsive and user-friendly layouts. Focuses on clean structure, smooth interactions, and consistent styling — always eager to learn something new and improve with every build the team takes on.',
    birthday: 'November 24, 2007',
    address: 'Brgy. San Manuel, Puerto Princesa City, Palawan',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    github: 'https://github.com/peduhanangelo884-angelo',
    facebook: 'https://www.facebook.com/angelo.peduhan.2025',
    instagram: 'https://www.instagram.com/gelo_fugi/',
    tiktok: 'https://www.tiktok.com/@gelo_fugi',
    email: 'mailto:peduhanangelo884@gmail.com',
    phone: 'tel:+639072356289',
  },
]

/* ==========================================================
   PROJECTS — Go2School (3 slides) + Personal Portfolio (1 pic)
========================================================== */

const projects = [
  {
    title: 'Go2School',
    category: 'Web Apps',
    imageType: 'school',
    images: [
      '/projects/go2school-1.png',
      '/projects/go2school-2.png',
      '/projects/go2school-3.png',
    ],
    tags: ['React', 'Supabase', 'PWA'],
    description:
      'A student transportation PWA for parents, attendants, and administrators — with live tracking, QR attendance, and trip management.',
    longDescription:
      'Go2School is a Progressive Web App (PWA) built to connect parents, attendants, and administrators in one seamless flow — from the moment a student is picked up to the moment they are safely dropped off. It includes real-time trip tracking, QR-based attendance, push notifications, and mobile-first dashboards for both drivers and parents. Because it is a PWA, users can install it directly on their phones like a native app, and it continues to work even with limited internet connectivity.',
  },
  {
    title: 'Personal Portfolio',
    category: 'UI/UX',
    imageType: 'portfolio',
    images: [
      '/projects/portfolio-1.png',
    ],
    tags: ['React', 'CSS', 'JavaScript'],
    description:
      'A modern and responsive portfolio website with smooth animations and interactive elements.',
    longDescription:
      'A responsive portfolio site that showcases our work with smooth animations, clean typography, and an interactive browsing experience across desktop and mobile.',
  },
]

const skillLabData = [
  {
    id: 'react', name: 'React', type: 'react', tagline: 'Component-based UI library',
    projects: ['Go2School', 'CodeSphere Website'],
    usage: [
      'Reusable components across sections',
      'Dashboard interfaces in Go2School',
      'Parent + attendant screen flows',
      'Team cards, modals, project & skill sections',
      'Client-side routing & state-driven UI',
    ],
  },
  {
    id: 'javascript', name: 'JavaScript', type: 'js', tagline: 'Language of the interactive web',
    projects: ['Go2School', 'CodeSphere Website'],
    usage: [
      'Form validation & dynamic state',
      'Project filter & mobile menu logic',
      'Modal open/close behavior',
      'Animation & pointer interaction logic',
      'QR-related frontend interactions',
    ],
  },
  {
    id: 'html', name: 'HTML', type: 'html', tagline: 'Semantic structure of every page',
    projects: ['Go2School', 'CodeSphere Website'],
    usage: [
      'Semantic page section structure',
      'Navigation & content hierarchy',
      'Forms for records & assignments',
      'Accessible headings & landmarks',
    ],
  },
  {
    id: 'css', name: 'CSS', type: 'css', tagline: 'Styling, layout & motion',
    projects: ['Go2School', 'CodeSphere Website'],
    usage: [
      'Responsive layouts & breakpoints',
      'Gradients, glows & 3D effects',
      'Smooth animations & transitions',
      'Card styling & hover states',
    ],
  },
  {
    id: 'tailwind', name: 'Tailwind CSS', type: 'tailwind', tagline: 'Utility-first CSS framework',
    projects: ['CodeSphere Website'],
    usage: [
      'Utility classes for layout & spacing',
      'Responsive design helpers',
      'Consistent typography scale',
      'Fast component-level styling',
    ],
  },
  {
    id: 'vite', name: 'Vite', type: 'vite', tagline: 'Modern build tool',
    projects: ['CodeSphere Website'],
    usage: [
      'Fast dev server with instant HMR',
      'Production build bundling',
      'React + Tailwind integration',
      'Optimized asset handling',
    ],
  },
  {
    id: 'supabase', name: 'Supabase', type: 'supabase', tagline: 'Backend, auth & database layer',
    projects: ['Go2School'],
    usage: [
      'User authentication & sessions',
      'Student & guardian records',
      'Vehicle data & assignment tables',
      'Trips & notifications storage',
    ],
  },
  {
    id: 'github', name: 'GitHub', type: 'github', tagline: 'Version control & collaboration',
    projects: ['Go2School', 'CodeSphere Website'],
    usage: [
      'Source code hosting & repositories',
      'Commit history & versioning',
      'Team collaboration workflow',
      'Code backup & review',
    ],
  },
  {
    id: 'figma', name: 'Figma', type: 'figma', tagline: 'UI design & prototyping',
    projects: ['UI/UX Design'],
    usage: [
      'Wireframes & screen layouts',
      'Component & design planning',
      'Collaboration on visual direction',
      'Pre-development prototyping',
    ],
  },
]

/* ==========================================================
   ICONS
========================================================== */

function Icon({ name, size = 20 }) {
  const props = {
    width: size, height: size, viewBox: '0 0 24 24',
    fill: 'none', stroke: 'currentColor',
    strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round',
    'aria-hidden': true,
  }
  const paths = {
    arrowRight: (<><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></>),
    arrowUpRight: (<><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>),
    arrowDown: (<><path d="M12 5v14" /><path d="m6 13 6 6 6-6" /></>),
    close: (<><path d="M6 6l12 12" /><path d="M18 6 6 18" /></>),
    menu: (<><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>),
    github: (<><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.4-.4 7-1.7 7-7.5a5.8 5.8 0 0 0-1.6-4.1A5.4 5.4 0 0 0 19.3 0S18.3-.3 15 1.8a13.4 13.4 0 0 0-6 0C5.7-.3 4.7 0 4.7 0a5.4 5.4 0 0 0-.1 3.9A5.8 5.8 0 0 0 3 8c0 5.8 3.6 7.1 7 7.5a4.8 4.8 0 0 0-1 3.5v4" /><path d="M8 19c-3 .9-3-1.5-4.2-2" /></>),
    instagram: (<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></>),
    facebook: (<><path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.6.4-1 1-1Z" /></>),
    tiktok: (<><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor" stroke="none" /></>),
    mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>),
    phone: (<><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.2 19.2 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.4-1.3a2 2 0 0 1 2.1-.5 12.8 12.8 0 0 0 2.8.7 2 2 0 0 1 1.7 2Z" /></>),
    calendar: (<><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /></>),
    location: (<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>),
    globe: (<><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18" /><path d="M12 3a14 14 0 0 0 0 18" /></>),
    send: (<><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7Z" /></>),
  }
  return <svg {...props}>{paths[name]}</svg>
}

/* ==========================================================
   BRAND LOGOS
========================================================== */

function BrandLogo({ type, size = 40 }) {
  switch (type) {
    case 'react':
      return (
        <svg width={size} height={size} viewBox="-12 -12 24 24" aria-hidden="true">
          <circle cx="0" cy="0" r="1.9" fill="#61DAFB" />
          <g fill="none" stroke="#61DAFB" strokeWidth="0.85">
            <ellipse cx="0" cy="0" rx="10.5" ry="4" />
            <ellipse cx="0" cy="0" rx="10.5" ry="4" transform="rotate(60)" />
            <ellipse cx="0" cy="0" rx="10.5" ry="4" transform="rotate(120)" />
          </g>
        </svg>
      )
    case 'js':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
          <rect width="24" height="24" rx="2" fill="#F7DF1E" />
          <path d="M13.1 18.6c.5.9 1.3 1.6 2.8 1.6 1.7 0 2.8-.9 2.8-2.5 0-1.5-.9-2.1-2.3-2.8-1.2-.5-1.5-.8-1.5-1.3 0-.4.3-.7.8-.7.5 0 .8.2 1.1.7l1.6-1c-.6-1-1.5-1.5-2.7-1.5-1.6 0-2.7.9-2.7 2.3 0 1.3.8 2 2.1 2.6 1.2.5 1.6.7 1.6 1.2 0 .4-.3.7-1 .7-.7 0-1.2-.4-1.5-1z" fill="#000" />
          <path d="M9.5 18.1c.4.6.8 1.1 1.7 1.1 1.4 0 2.1-.8 2.1-2.4v-6.2h-1.9v6.1c0 .5-.2.7-.5.7-.3 0-.5-.2-.7-.6z" fill="#000" />
        </svg>
      )
    case 'html':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 2.5 4.8 20.5 12 22.5 19.2 20.5 21 2.5Z" fill="#E34F26" />
          <path d="M12 3.6v17.7l5.9-1.6L19.2 3.6Z" fill="#F06529" />
          <text x="12" y="16" fill="#ffffff" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="Arial, sans-serif">5</text>
        </svg>
      )
    case 'css':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 2.5 4.8 20.5 12 22.5 19.2 20.5 21 2.5Z" fill="#1572B6" />
          <path d="M12 3.6v17.7l5.9-1.6L19.2 3.6Z" fill="#33A9DC" />
          <text x="12" y="16" fill="#ffffff" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="Arial, sans-serif">3</text>
        </svg>
      )
    case 'tailwind':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.5 9.5c.9-1.8 2-3.1 3.9-3.1 1.9 0 2.9 1.2 3.7 2.5.9 1.5 1.9 2.6 3.8 2.6 1.8 0 2.9-1.2 3.9-3.1-.9 1.8-2 3.1-3.9 3.1-1.9 0-2.9-1.2-3.7-2.5-.9-1.5-1.9-2.6-3.8-2.6-1.8 0-2.9 1.2-3.9 3.1Zm-6 5c.9-1.8 2-3.1 3.9-3.1 1.9 0 2.9 1.2 3.7 2.5.9 1.5 1.9 2.6 3.8 2.6 1.8 0 2.9-1.2 3.9-3.1-.9 1.8-2 3.1-3.9 3.1-1.9 0-2.9-1.2-3.7-2.5-.9-1.5-1.9-2.6-3.8-2.6-1.8 0-2.9 1.2-3.9 3.1Z" fill="#38BDF8" />
        </svg>
      )
    case 'vite':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
          <defs>
            <linearGradient id="viteGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#646CFF" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <path d="M21.6 3.6 12.6 20.4c-.2.4-.8.4-1 0L2.4 3.6c-.3-.5.2-1 .7-.9l8.4 1.5c.1 0 .2 0 .3 0l9.1-1.5c.5-.1 1 .4.7.9Z" fill="url(#viteGrad)" />
          <path d="M15.5 1.5 11.7 9.4c-.2.4.1.8.6.8h1.7l-1.3 3.7c-.1.4.4.7.7.3l3.6-6.4c.2-.4-.1-.8-.5-.8h-1.6l1.5-5c.1-.4-.4-.7-.7-.4Z" fill="#FFD028" />
        </svg>
      )
    case 'supabase':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
          <defs>
            <linearGradient id="supaGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#3ECF8E" />
              <stop offset="1" stopColor="#1F9E6B" />
            </linearGradient>
          </defs>
          <path d="M13.4 1.5 3 13.8c-.4.5 0 1.2.6 1.2h8.5v7.4c0 .7.9 1 1.3.5L23.8 10.6c.4-.5 0-1.2-.6-1.2h-8.5V2c0-.7-.9-1-1.3-.5Z" fill="url(#supaGrad)" />
          <path d="M13.4 1.5 3 13.8c-.4.5 0 1.2.6 1.2h8.5v-13.5c0-.7-.9-1-1.3-.5Z" fill="#3ECF8E" opacity="0.6" />
        </svg>
      )
    case 'github':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.3 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" fill="#F5F5F5" />
        </svg>
      )
    case 'figma':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 2h4v6H8a3 3 0 0 1 0-6Z" fill="#F24E1E" />
          <path d="M12 2h4a3 3 0 0 1 0 6h-4V2Z" fill="#FF7262" />
          <path d="M8 8h4v6H8a3 3 0 0 1 0-6Z" fill="#A259FF" />
          <path d="M12 8h4a3 3 0 0 1 0 6h-4V8Z" fill="#1ABCFE" />
          <path d="M8 14h4v3a3 3 0 1 1-4-3Z" fill="#0ACF83" />
        </svg>
      )
    default:
      return null
  }
}

/* ==========================================================
   HOOKS
========================================================== */

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches
  })
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setIsDesktop(mq.matches)
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])
  return isDesktop
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])
  return reduced
}

function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

/* ==========================================================
   GLOBAL EFFECTS
========================================================== */

function ScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return <div className="scroll-progress" style={{ '--p': `${p}%` }} aria-hidden="true" />
}

function CursorGlow() {
  const isDesktop = useIsDesktop()
  const ref = useRef(null)
  useEffect(() => {
    if (!isDesktop) return
    const el = ref.current
    if (!el) return
    let raf = 0
    let tx = -200, ty = -200, cx = -200, cy = -200
    const onMove = (e) => { tx = e.clientX; ty = e.clientY; if (!raf) raf = requestAnimationFrame(tick) }
    const tick = () => {
      cx += (tx - cx) * 0.16
      cy += (ty - cy) * 0.16
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`
      if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) raf = requestAnimationFrame(tick)
      else raf = 0
    }
    window.addEventListener('pointermove', onMove)
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [isDesktop])
  if (!isDesktop) return null
  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}

function ParticleField() {
  const particles = useMemo(() => {
    const arr = []
    for (let i = 0; i < 14; i++) {
      arr.push({
        left: `${6 + Math.random() * 88}%`,
        top: `${6 + Math.random() * 88}%`,
        size: 2 + Math.random() * 3,
        delay: `${(Math.random() * 6).toFixed(2)}s`,
        duration: `${(6 + Math.random() * 7).toFixed(2)}s`,
      })
    }
    return arr
  }, [])
  return (
    <div className="particles" aria-hidden="true">
      {particles.map((p, i) => (
        <span key={i} className="particle" style={{ left: p.left, top: p.top, width: p.size, height: p.size, animationDelay: p.delay, animationDuration: p.duration }} />
      ))}
    </div>
  )
}

/* ==========================================================
   TILT
========================================================== */

function Tilt({ children, maxTilt = 4, lift = 5, className = '' }) {
  const ref = useRef(null)
  const isDesktop = useIsDesktop()
  useEffect(() => {
    if (!isDesktop) return
    const el = ref.current
    if (!el) return
    let raf = 0
    let trx = 0, tryy = 0, tlift = 0
    let crx = 0, cry = 0, clift = 0
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      trx = (0.5 - py) * maxTilt * 2
      tryy = (px - 0.5) * maxTilt * 2
      tlift = -lift
      el.style.setProperty('--mx', `${px * 100}%`)
      el.style.setProperty('--my', `${py * 100}%`)
      if (!raf) raf = requestAnimationFrame(tick)
    }
    const onLeave = () => {
      trx = 0; tryy = 0; tlift = 0
      if (!raf) raf = requestAnimationFrame(tick)
    }
    const tick = () => {
      crx += (trx - crx) * 0.18
      cry += (tryy - cry) * 0.18
      clift += (tlift - clift) * 0.18
      el.style.setProperty('--rx', `${crx.toFixed(3)}deg`)
      el.style.setProperty('--ry', `${cry.toFixed(3)}deg`)
      el.style.setProperty('--lift', `${clift.toFixed(2)}px`)
      if (Math.abs(trx - crx) > 0.02 || Math.abs(tryy - cry) > 0.02 || Math.abs(tlift - clift) > 0.02) raf = requestAnimationFrame(tick)
      else raf = 0
    }
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [isDesktop, maxTilt, lift])
  return <div ref={ref} className={`tilt ${className}`}>{children}</div>
}

/* ==========================================================
   MAGNETIC CTA
========================================================== */

function MagneticCTA({ children, onClick, className = 'animated-main-button' }) {
  const ref = useRef(null)
  const isDesktop = useIsDesktop()
  useEffect(() => {
    if (!isDesktop) return
    const el = ref.current
    if (!el) return
    let raf = 0
    let tx = 0, ty = 0, cx = 0, cy = 0
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      if (!raf) raf = requestAnimationFrame(tick)
    }
    const onLeave = () => { tx = 0; ty = 0; if (!raf) raf = requestAnimationFrame(tick) }
    const tick = () => {
      cx += (tx - cx) * 0.2
      cy += (ty - cy) * 0.2
      el.style.setProperty('--mag-x', `${(cx * 4).toFixed(2)}px`)
      el.style.setProperty('--mag-y', `${(cy * 4).toFixed(2)}px`)
      if (Math.abs(tx - cx) > 0.005 || Math.abs(ty - cy) > 0.005) raf = requestAnimationFrame(tick)
      else raf = 0
    }
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [isDesktop])
  return <button ref={ref} type="button" className={className} onClick={onClick}>{children}</button>
}

/* ==========================================================
   HELPERS
========================================================== */

function Brand() {
  return (
    <span className="brand">
      <span className="brand-logo"><span /><span /><span /></span>
      <span className="brand-name">Code<span>Sphere</span></span>
    </span>
  )
}

function openExternal(url) {
  if (!url || url === '#') return
  window.open(url, '_blank', 'noopener,noreferrer')
}

function navigateTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Reveal({ children, className = '', delay = 0 }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>
      {children}
    </div>
  )
}

/* ==========================================================
   HERO WELCOME — Welcome text ↔ Team photos
========================================================== */

function HeroWelcome() {
  const [phase, setPhase] = useState('welcome')
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    const id = window.setInterval(() => {
      setPhase((p) => (p === 'welcome' ? 'team' : 'welcome'))
    }, 4200)
    return () => window.clearInterval(id)
  }, [reduced])

  return (
    <div className={`hero-welcome ${phase === 'team' ? 'is-team' : 'is-welcome'} ${reduced ? 'is-static' : ''}`}>
      <h1 className="hero-welcome-title" aria-hidden={phase === 'team'}>
        <span className="hero-welcome-prefix">Welcome to</span>
        <span className="hero-welcome-brand">
          <span className="hero-welcome-brand-text">
            Code<span>Sphere</span>
          </span>
          <span className="hero-welcome-shine" aria-hidden="true" />
        </span>
      </h1>

      <div className="hero-team-row" aria-hidden={phase !== 'team'}>
        {members.map((m, i) => (
          <div className="hero-team-card" key={m.id} style={{ '--i': i }}>
            <div className="hero-team-card-img">
              <img src={m.image} alt={m.shortName} loading="lazy" draggable="false" />
              <span className="hero-team-card-shine" aria-hidden="true" />
            </div>
            <div className="hero-team-card-info">
              <strong>{m.shortName}</strong>
              <small>{m.role}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ==========================================================
   EASTER EGG
========================================================== */

function EasterEgg({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="easter-egg-backdrop" onClick={onClose}>
      <div className="easter-egg-panel" onClick={(e) => e.stopPropagation()}>
        <div className="easter-egg-head">
          <span className="easter-egg-dot" />
          <span className="easter-egg-title">CODESPHERE SYSTEM</span>
        </div>
        <div className="easter-egg-body">
          <div className="easter-egg-line"><span className="easter-egg-num">3</span> MEMBERS</div>
          <div className="easter-egg-line"><span className="easter-egg-num">1</span> TEAM</div>
          <div className="easter-egg-line"><span className="easter-egg-num">∞</span> BUILD · DESIGN · DEVELOP</div>
        </div>
        <button type="button" className="easter-egg-close" onClick={onClose}>
          <Icon name="close" size={14} />
        </button>
      </div>
    </div>
  )
}

/* ==========================================================
   HEADER
========================================================== */

function Header({ onEggTrigger }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  const scrolled = useScrolled(20)
  const clickCountRef = useRef(0)
  const clickTimerRef = useRef(null)

  const links = [
    ['home', 'Home'], ['about', 'About'], ['team', 'Team'],
    ['projects', 'Projects'], ['skills', 'Skills'], ['contact', 'Contact'],
  ]

  useEffect(() => {
    const sections = links.map(([id]) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleBrandClick = () => {
    navigateTo('home')
    clickCountRef.current += 1
    if (clickTimerRef.current) window.clearTimeout(clickTimerRef.current)
    clickTimerRef.current = window.setTimeout(() => {
      clickCountRef.current = 0
    }, 1800)
    if (clickCountRef.current >= 5) {
      clickCountRef.current = 0
      onEggTrigger()
    }
  }

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <button type="button" className="brand-button" onClick={handleBrandClick} aria-label="CodeSphere Home">
          <Brand />
        </button>
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          {links.map(([id, label]) => (
            <button type="button" key={id} className={active === id ? 'active' : ''} onClick={() => { navigateTo(id); setMenuOpen(false) }}>
              {label}
            </button>
          ))}
        </nav>
        <div className="header-actions">
          <button type="button" className="header-github" onClick={() => openExternal('https://github.com/Deemsglen')}>
            <Icon name="github" size={14} />
            <span>View on GitHub</span>
          </button>
          <button type="button" className="mobile-menu" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

/* ==========================================================
   HERO
========================================================== */

function Hero() {
  return (
    <section id="home" className="hero section-anchor">
      <div className="hero-decoration hero-decoration-left" />
      <div className="hero-decoration hero-decoration-right" />
      <div className="hero-wave wave-left" />
      <div className="hero-wave wave-right" />
      <div className="hero-light-beam hero-light-beam-center" aria-hidden="true" />

      <div className="hero-orbit-deco orbit-deco-1" aria-hidden="true" />
      <div className="hero-orbit-deco orbit-deco-2" aria-hidden="true" />
      <div className="hero-orbit-deco orbit-deco-3" aria-hidden="true" />

      <ParticleField />

      <div className="container hero-centered">
        <span className="hero-label animate-text delay-1">
          BUILD&nbsp;&nbsp;·&nbsp;&nbsp;CREATE&nbsp;&nbsp;·&nbsp;&nbsp;INNOVATE
        </span>

        <HeroWelcome />

        <h2 className="hero-subtitle animate-text delay-4">
          Three Minds. One Vision.
        </h2>

        <p className="hero-description animate-text delay-5">
          We are a team of passionate developers, designers, and problem
          solvers, creating modern web experiences and digital solutions
          for a better tomorrow.
        </p>

        <div className="hero-buttons animate-text delay-5">
          <MagneticCTA onClick={() => navigateTo('team')}>
            <span>Meet Our Team</span>
            <span className="button-icon"><Icon name="arrowRight" size={14} /></span>
          </MagneticCTA>
          <MagneticCTA className="animated-outline-button" onClick={() => navigateTo('projects')}>
            View Projects
          </MagneticCTA>
        </div>
      </div>

      <button type="button" className="scroll-cue" onClick={() => navigateTo('about')} aria-label="Scroll to About">
        <span>SCROLL</span>
        <Icon name="arrowDown" size={11} />
      </button>
    </section>
  )
}

/* ==========================================================
   ABOUT
========================================================== */

function About() {
  return (
    <section id="about" className="section section-anchor">
      <div className="container">
        <Reveal>
          <div className="about-layout">
            <div className="about-copy">
              <span className="section-label">ABOUT US</span>
              <h2 className="section-heading heading-reveal">
                A Small Team of
                <span className="gradient-text">IT Students</span>
              </h2>
              <p className="section-description">
                CodeSphere is made up of three second-year Information
                Technology students from section IT2A. We&rsquo;re classmates
                who share the same curiosity for the web — learning together,
                experimenting with ideas, and growing as future developers
                and designers.
              </p>

              <div className="about-badges">
                <span className="about-badge">IT2A</span>
                <span className="about-badge">2nd Year</span>
                <span className="about-badge">3 Members</span>
                <span className="about-badge">Puerto Princesa</span>
              </div>
            </div>

            <Tilt maxTilt={3} lift={4}>
              <div className="brand-card">
                <div className="brand-card-mark" aria-hidden="true">
                  <span className="mark-bracket">&lt;</span>
                  <span className="mark-slash">/</span>
                  <span className="mark-bracket">&gt;</span>
                </div>
                <div className="brand-card-text">
                  <strong>CodeSphere</strong>
                  <small>Three Minds. One Vision.</small>
                </div>
              </div>
            </Tilt>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ==========================================================
   TEAM
========================================================== */

function SocialButton({ icon, label, onClick }) {
  return (
    <button type="button" className="social-button" aria-label={label} title={label} onClick={onClick}>
      <Icon name={icon} size={15} />
    </button>
  )
}

function MemberCard({ member, index, onOpen, spotlight, onSpotlight }) {
  const dim = spotlight !== null && spotlight !== member.id
  return (
    <Reveal delay={index * 120}>
      <div className={`spotlight-wrap ${dim ? 'is-dimmed' : ''} ${spotlight === member.id ? 'is-spotlight' : ''}`}>
        <Tilt maxTilt={4} lift={5}>
          <article className={`member-card member-${index + 1}`}>
            <div className="member-top">
              <div className="member-image-wrap">
                <button type="button" className="member-image-button" onClick={() => onOpen(member)} aria-label={`Open ${member.displayName} profile`}>
                  <img src={member.image} alt={member.displayName} className="member-image" loading="lazy" />
                </button>
              </div>
              <div className="member-body">
                <span className="member-badge">{member.label}</span>
                <h3>{member.displayName}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
                <span className="skills-title">Skills</span>
                <div className="member-skill-list">
                  {member.skills.map((skill) => (<span key={skill}>{skill}</span>))}
                </div>
              </div>
            </div>
            <div className="member-footer">
              <div className="member-socials">
                {member.github && member.github !== '#' && (<SocialButton icon="github" label="GitHub" onClick={() => openExternal(member.github)} />)}
                {member.facebook && member.facebook !== '#' && (<SocialButton icon="facebook" label="Facebook" onClick={() => openExternal(member.facebook)} />)}
                {member.instagram && member.instagram !== '#' && (<SocialButton icon="instagram" label="Instagram" onClick={() => openExternal(member.instagram)} />)}
                {member.tiktok && member.tiktok !== '#' && (<SocialButton icon="tiktok" label="TikTok" onClick={() => openExternal(member.tiktok)} />)}
              </div>
              <div className="member-actions">
                <button
                  type="button"
                  className={`member-spotlight-btn ${spotlight === member.id ? 'is-on' : ''}`}
                  onClick={() => onSpotlight(spotlight === member.id ? null : member.id)}
                  aria-label={`Spotlight ${member.displayName}`}
                  title="Spotlight"
                >
                  <span className="spotlight-dot" />
                </button>
                <button type="button" className="member-arrow" onClick={() => onOpen(member)} aria-label={`View ${member.displayName}`}>
                  <Icon name="arrowUpRight" size={14} />
                </button>
              </div>
            </div>
          </article>
        </Tilt>
      </div>
    </Reveal>
  )
}

function Team({ onOpenMember }) {
  const [spotlight, setSpotlight] = useState(null)
  return (
    <section id="team" className="section section-anchor">
      <div className="container">
        <Reveal>
          <span className="section-label">OUR TEAM</span>
          <h2 className="section-heading compact heading-reveal">Meet the Members</h2>
          <p className="section-description compact-description">
            Three individuals. Different strengths. Same goal. Tap the dot to spotlight a member.
          </p>
        </Reveal>
        <div className="team-grid">
          {members.map((member, index) => (
            <MemberCard
              key={member.id}
              member={member}
              index={index}
              onOpen={onOpenMember}
              spotlight={spotlight}
              onSpotlight={setSpotlight}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ==========================================================
   PROJECTS — may image slideshow
========================================================== */

/* Fallback visual kung walang image */
function SchoolPreview() {
  return (
    <div className="project-art school-art">
      <div className="laptop-mock">
        <div className="laptop-mock-screen">
          <div className="dashboard-header"><i /><i /><i /></div>
          <div className="dashboard">
            <div className="dashboard-sidebar" />
            <div className="dashboard-panels"><span /><span /><span /><span /></div>
          </div>
        </div>
        <div className="laptop-mock-base" />
      </div>
      <div className="art-glow" />
    </div>
  )
}

function PortfolioPreview() {
  return (
    <div className="project-art portfolio-art">
      <div className="portfolio-window">
        <div className="portfolio-header"><span /><span /><span /></div>
        <div className="portfolio-title-line" />
        <div className="portfolio-mid-line" />
        <div className="portfolio-small-line" />
        <div className="portfolio-boxes"><div /><div /></div>
      </div>
    </div>
  )
}

function ProjectVisual({ type }) {
  if (type === 'portfolio') return <PortfolioPreview />
  return <SchoolPreview />
}

/* ==========================================================
   ProjectMedia — image slideshow (1 image = static, 2+ = slide)
========================================================== */

function ProjectMedia({ project }) {
  const images = project.images || []
  const [index, setIndex] = useState(0)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (images.length <= 1 || reduced) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 3200)
    return () => window.clearInterval(id)
  }, [images.length, reduced])

  // Walang images — fallback sa CSS art
  if (images.length === 0) {
    return <ProjectVisual type={project.imageType} />
  }

  return (
    <div className="project-media">
      {images.map((src, i) => (
        <div
          key={src}
          className={`project-media-slide ${i === index ? 'is-active' : ''}`}
          aria-hidden={i !== index}
        >
          <img
            src={src}
            alt={`${project.title} preview ${i + 1}`}
            loading="lazy"
            draggable="false"
          />
        </div>
      ))}

      {images.length > 1 && (
        <div className="project-media-dots" aria-hidden="true">
          {images.map((_, i) => (
            <span key={i} className={i === index ? 'is-active' : ''} />
          ))}
        </div>
      )}

      {images.length > 1 && (
        <div className="project-media-count" aria-hidden="true">
          {index + 1}/{images.length}
        </div>
      )}
    </div>
  )
}

function ProjectCard({ project, index, onOpen }) {
  return (
    <Reveal delay={index * 120}>
      <Tilt maxTilt={4} lift={5}>
        <article className="project-card">
          <button type="button" className="project-card-button" onClick={() => onOpen(project)} aria-label={`Open ${project.title} preview`}>
            <div className="project-visual">
              <ProjectMedia project={project} />
            </div>
            <div className="project-content">
              <div className="project-heading-row">
                <h3>{project.title}</h3>
                <span className="project-number">0{index + 1}</span>
              </div>
              <div className="project-tags">
                {project.tags.map((tag) => (<span key={tag}>{tag}</span>))}
              </div>
              <p>{project.description}</p>
              <span className="project-link">
                <span>View Project</span>
                <Icon name="arrowRight" size={13} />
              </span>
            </div>
          </button>
        </article>
      </Tilt>
    </Reveal>
  )
}

function ProjectPreviewModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    const onKeyDown = (e) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="project-preview-backdrop" onClick={onClose}>
      <div className="project-preview-window" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="project-preview-chrome">
          <span className="chrome-dot" />
          <span className="chrome-dot" />
          <span className="chrome-dot" />
          <span className="project-preview-url">codesphere.dev/projects/{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
        </div>
        <div className="project-preview-body">
          <div className="project-preview-visual">
            <ProjectMedia project={project} />
          </div>
          <div className="project-preview-info">
            <span className="section-label">PROJECT PREVIEW</span>
            <h3>{project.title}</h3>
            <p>{project.longDescription || project.description}</p>
            <div className="project-preview-tech">
              <span className="project-preview-tech-label">Technologies</span>
              <div className="project-tags">
                {project.tags.map((tag) => (<span key={tag}>{tag}</span>))}
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="project-preview-close" onClick={onClose} aria-label="Close">
          <Icon name="close" size={16} />
        </button>
      </div>
    </div>
  )
}

function Projects() {
  const [filter, setFilter] = useState('All')
  const [preview, setPreview] = useState(null)

  const categories = ['All', 'Web Apps', 'UI/UX']

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <section id="projects" className="section section-anchor">
      <div className="container">
        <Reveal>
          <div className="projects-head">
            <div>
              <span className="section-label">OUR PROJECTS</span>
              <h2 className="section-heading compact heading-reveal">Featured Projects</h2>
              <p className="section-description">
                Some of the projects we&rsquo;ve worked on to showcase our skills and creativity.
              </p>
            </div>
            <div className="project-filter">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={filter === category ? 'active' : ''}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="project-grid" key={filter}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${filter}`} project={project} index={index} onOpen={setPreview} />
          ))}
        </div>
      </div>
      <ProjectPreviewModal project={preview} onClose={() => setPreview(null)} />
    </section>
  )
}

/* ==========================================================
   SKILL LAB
========================================================== */

function SkillDetail({ skill }) {
  return (
    <div className="skill-detail" key={skill.id}>
      <div className="skill-detail-header">
        <span className="skill-detail-icon">
          <BrandLogo type={skill.type} size={40} />
        </span>
        <div className="skill-detail-title">
          <h3>{skill.name}</h3>
          <p>{skill.tagline}</p>
        </div>
      </div>

      <div className="skill-detail-section">
        <span className="skill-detail-label">Where we used it</span>
        <div className="skill-detail-chips">
          {skill.projects.map((p) => (
            <span key={p} className="skill-chip">{p}</span>
          ))}
        </div>
      </div>

      <div className="skill-detail-section">
        <span className="skill-detail-label">What we used it for</span>
        <ul className="skill-detail-list">
          {skill.usage.map((u, i) => (
            <li key={u} style={{ '--i': i }}>{u}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function SkillLab() {
  const [activeId, setActiveId] = useState(null)
  const hideTimerRef = useRef(null)

  useEffect(() => () => {
    if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current)
  }, [])

  const handleSelect = (id) => {
    setActiveId((prev) => {
      const next = prev === id ? null : id
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current)
      if (next !== null) {
        hideTimerRef.current = window.setTimeout(() => setActiveId(null), 5500)
      }
      return next
    })
  }

  const active = useMemo(
    () => skillLabData.find((s) => s.id === activeId) || null,
    [activeId],
  )

  return (
    <section id="skills" className="section section-anchor">
      <div className="container">
        <Reveal>
          <span className="section-label">TECHNOLOGIES &amp; SKILLS</span>
          <h2 className="section-heading compact heading-reveal">Our Skills</h2>
          <p className="section-description">
            Click a technology to see where and how we used it across our projects.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="skill-lab">
            <div className="skill-logos-grid" role="tablist" aria-label="Technologies">
              {skillLabData.map((skill) => {
                const isActive = skill.id === activeId
                return (
                  <button
                    key={skill.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`skill-logo-tile ${isActive ? 'is-active' : ''}`}
                    onClick={() => handleSelect(skill.id)}
                  >
                    <span className="skill-logo-icon">
                      <BrandLogo type={skill.type} size={44} />
                    </span>
                    <span className="skill-logo-name">{skill.name}</span>
                    <span className="skill-logo-shine" aria-hidden="true" />
                  </button>
                )
              })}
            </div>

            <div className={`skill-detail-panel ${active ? 'is-visible' : ''}`} aria-live="polite">
              {active && <SkillDetail skill={active} />}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ==========================================================
   MEMBER MODAL
========================================================== */

function MemberModal({ member, onClose }) {
  useEffect(() => {
    if (!member) return
    const onKeyDown = (e) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [member, onClose])

  if (!member) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="member-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          <Icon name="close" size={16} />
        </button>
        <div className="modal-photo">
          <img src={member.image} alt={member.displayName} />
        </div>
        <div className="modal-info">
          <span className="section-label">{member.label}</span>
          <h3>{member.displayName}</h3>
          <strong>{member.role}</strong>
          <p>{member.bio}</p>

          <div className="modal-skills">
            {member.skills.map((skill) => (<span key={skill}>{skill}</span>))}
          </div>

          {(member.birthday || member.address) && (
            <div className="modal-meta">
              {member.birthday && (
                <div className="modal-meta-item">
                  <span className="modal-meta-icon"><Icon name="calendar" size={14} /></span>
                  <div className="modal-meta-text">
                    <small>Birthday</small>
                    <strong>{member.birthday}</strong>
                  </div>
                </div>
              )}
              {member.address && (
                <div className="modal-meta-item">
                  <span className="modal-meta-icon"><Icon name="location" size={14} /></span>
                  <div className="modal-meta-text">
                    <small>Address</small>
                    <strong>{member.address}</strong>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="modal-contact">
            {member.email && member.email !== '#' && (
              <button type="button" onClick={() => { window.location.href = member.email }}>
                <Icon name="mail" size={13} />
                {member.email.replace('mailto:', '')}
              </button>
            )}
            {member.phone && member.phone !== '#' && (
              <button type="button" onClick={() => { window.location.href = member.phone }}>
                <Icon name="phone" size={13} />
                {member.phone.replace('tel:', '')}
              </button>
            )}
          </div>
          <div className="modal-socials">
            {member.github && member.github !== '#' && (<SocialButton icon="github" label="GitHub" onClick={() => openExternal(member.github)} />)}
            {member.facebook && member.facebook !== '#' && (<SocialButton icon="facebook" label="Facebook" onClick={() => openExternal(member.facebook)} />)}
            {member.instagram && member.instagram !== '#' && (<SocialButton icon="instagram" label="Instagram" onClick={() => openExternal(member.instagram)} />)}
            {member.tiktok && member.tiktok !== '#' && (<SocialButton icon="tiktok" label="TikTok" onClick={() => openExternal(member.tiktok)} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ==========================================================
   CONTACT FORM
========================================================== */

function ContactForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const teamEmail = 'codesphere.team@gmail.com'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim() || !message.trim()) return
    const subject = encodeURIComponent(`CodeSphere · Message from ${email}`)
    const body = encodeURIComponent(`${message}\n\n— From: ${email}`)
    window.location.href = `mailto:${teamEmail}?subject=${subject}&body=${body}`
    setSent(true)
    window.setTimeout(() => setSent(false), 5000)
  }

  return (
    <div className="contact-card">
      <div className="contact-card-info">
        <span className="section-label">GET IN TOUCH</span>
        <h3 className="contact-card-title">Send us a message</h3>
        <p className="contact-card-text">
          Questions, feedback, or just want to say hi? Drop us a line
          and we&rsquo;ll get back to you from our team email.
        </p>
        <a className="contact-card-email" href={`mailto:${teamEmail}`}>
          <Icon name="mail" size={16} />
          <span>{teamEmail}</span>
        </a>
        <div className="contact-card-loc">
          <Icon name="location" size={16} />
          <span>Puerto Princesa City, Palawan · Philippines</span>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="contact-field">
          <span className="contact-field-label">Your Email</span>
          <input
            type="email"
            className="contact-input"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="contact-field">
          <span className="contact-field-label">Message</span>
          <textarea
            className="contact-textarea"
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            required
          />
        </label>

        <button type="submit" className="contact-submit">
          <span>{sent ? 'Opening your mail app…' : 'Send Message'}</span>
          <span className="button-icon">
            <Icon name="send" size={14} />
          </span>
        </button>

        {sent && (
          <p className="contact-sent-note">
            Your email app should open — just hit send and we&rsquo;ll receive it.
          </p>
        )}
      </form>
    </div>
  )
}

/* ==========================================================
   FOOTER
========================================================== */

function Footer() {
  return (
    <footer id="contact" className="footer section-anchor">
      <div className="container footer-main">
        <div className="footer-brand">
          <Brand />
          <p>Three Minds. One Vision.</p>
          <div className="footer-socials">
            <SocialButton icon="github" label="GitHub" onClick={() => openExternal('https://github.com/Deemsglen')} />
            <SocialButton icon="instagram" label="Instagram" onClick={() => openExternal('https://www.instagram.com/de_glennn/')} />
            <SocialButton icon="facebook" label="Facebook" onClick={() => openExternal('https://www.facebook.com/search/top?q=Deems%20Glen')} />
            <SocialButton icon="tiktok" label="TikTok" onClick={() => openExternal('https://www.tiktok.com/@deemsglen1')} />
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <button type="button" onClick={() => navigateTo('home')}>Home</button>
          <button type="button" onClick={() => navigateTo('about')}>About</button>
          <button type="button" onClick={() => navigateTo('team')}>Team</button>
        </div>
        <div className="footer-links">
          <h4>&nbsp;</h4>
          <button type="button" onClick={() => navigateTo('projects')}>Projects</button>
          <button type="button" onClick={() => navigateTo('skills')}>Skills</button>
          <button type="button" onClick={() => navigateTo('contact')}>Contact</button>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <a href="mailto:codesphere.team@gmail.com"><Icon name="mail" size={13} />codesphere.team@gmail.com</a>
          <span><Icon name="globe" size={13} />Philippines</span>
        </div>
        <div className="footer-quote">
          <p>Let&rsquo;s build<br />something amazing!</p>
          <span />
        </div>
      </div>

      <div className="footer-form-section">
        <div className="container">
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} CodeSphere. All rights reserved.</span>
          <span className="built-with">
            Crafted by CodeSphere · IT2A
            <span className="built-with-dot" />
          </span>
        </div>
      </div>
    </footer>
  )
}

/* ==========================================================
   APP
========================================================== */

function App() {
  const [selectedMember, setSelectedMember] = useState(null)
  const [eggOpen, setEggOpen] = useState(false)

  return (
    <div className="app">
      <ScrollProgress />
      <CursorGlow />
      <Header onEggTrigger={() => setEggOpen(true)} />
      <main>
        <Hero />
        <About />
        <Team onOpenMember={setSelectedMember} />
        <Projects />
        <SkillLab />
      </main>
      <Footer />
      <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      <EasterEgg open={eggOpen} onClose={() => setEggOpen(false)} />
    </div>
  )
}

export default App