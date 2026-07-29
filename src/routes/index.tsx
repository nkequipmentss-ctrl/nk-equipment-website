import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Clock3,
  Facebook,
  Factory,
  Globe2,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PackageSearch,
  Phone,
  Quote,
  Search,
  Send,
  ShieldCheck,
  Ship,
  Star,
  X,
  ZoomIn,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useEffect, useMemo, useState, type CSSProperties, type FormEvent, type ReactNode } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const images = {
  port: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2200&q=88',
  excavator: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1000&q=82',
  construction: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=82',
  loader: 'https://images.unsplash.com/photo-1580901369227-308f6f40bdeb?auto=format&fit=crop&w=1000&q=82',
  industrial: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1000&q=82',
  transport: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=82',
  premiumExcavator: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=84',
  premiumLoader: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=84',
  premiumSite: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=84',
}

const heroSlides = [
  { label: 'Container Port', image: images.port, position: 'center' },
  { label: 'Doosan Excavator', image: images.excavator, position: 'center 58%' },
  { label: 'Hyundai Excavator', image: images.construction, position: 'center' },
  { label: 'Hitachi Excavator', image: images.industrial, position: 'center' },
  { label: 'CAT Wheel Loader', image: images.loader, position: 'center' },
]

type MachineStatus = 'Available' | 'Sold' | 'Available on Booking' | 'Coming Soon'

type Machine = {
  id: string
  name: string
  model: string
  price: string
  status: MachineStatus
  year: string
  origin: string
  hours: string
  images: string[]
  description: string
}

const inventory: Machine[] = [
  { id: 'hitachi-ex200-europe', name: 'Hitachi', model: 'EX200-1', price: 'On Request', status: 'Available', year: 'N/A', origin: 'Europe', hours: 'N/A', images: ['/assets/machinery/hitachi-ex200-europe-1.jpg'], description: 'Full inspection details and condition notes are available from our team. This Europe-origin machine is shown loaded and ready for transport.' },
  { id: 'hitachi-ex60-europe', name: 'Hitachi', model: 'EX60-1', price: 'On Request', status: 'Sold', year: 'N/A', origin: 'Europe', hours: 'N/A', images: ['/assets/machinery/hitachi-ex60-europe-1.jpg', '/assets/machinery/hitachi-ex60-europe-2.jpg', '/assets/machinery/hitachi-ex60-europe-3.jpg'], description: 'This machine has been sold. Contact our team to source a similar Hitachi excavator from our international supplier network.' },
  { id: 'hitachi-ex200-china', name: 'Hitachi', model: 'EX200-1', price: 'On Request', status: 'Sold', year: 'N/A', origin: 'China', hours: 'N/A', images: ['/assets/machinery/hitachi-ex200-china-1.jpg', '/assets/machinery/hitachi-ex200-china-2.jpg', '/assets/machinery/hitachi-ex200-china-3.jpg'], description: 'This China-origin unit has been sold. Contact our team for availability of similar Hitachi EX200 machinery.' },
  { id: 'samsung-se130w', name: 'Samsung', model: 'SE130W-2', price: 'On Request', status: 'Available on Booking', year: '1994', origin: 'Europe', hours: 'N/A', images: ['/assets/machinery/samsung-se130w-2-europe-1.jpg', '/assets/machinery/samsung-se130w-2-europe-2.jpg', '/assets/machinery/samsung-se130w-2-europe-3.jpg'], description: 'Available on booking. Contact our team for reservation terms, inspection availability, and shipping guidance.' },
  { id: 'doosan-dx225lc', name: 'Doosan', model: 'DX225LC', price: 'On Request', status: 'Coming Soon', year: '2009', origin: 'Australia', hours: 'N/A', images: ['/assets/machinery/doosan-dx225lc-australia-1.jpg', '/assets/machinery/doosan-dx225lc-australia-2.jpg'], description: 'Coming soon from Australia. Contact our team for arrival timing, inspection details, and availability.' },
  { id: 'doosan-dx160w', name: 'Doosan', model: 'DX160W', price: 'On Request', status: 'Sold', year: '2008', origin: 'Europe', hours: 'N/A', images: ['/assets/machinery/doosan-dx160w-europe-1.jpg', '/assets/machinery/doosan-dx160w-europe-2.jpg', '/assets/machinery/doosan-dx160w-europe-3.jpg'], description: 'This wheeled excavator has been sold. Ask our team about sourcing another Doosan DX160W or a comparable machine.' },
]

const services: Array<[LucideIcon, string, string]> = [
  [Globe2, 'Heavy Machinery Import', 'End-to-end importing from the world’s most trusted equipment markets.'],
  [PackageSearch, 'Worldwide Equipment Sourcing', 'Targeted sourcing based on your brand, model, budget, and project needs.'],
  [ShieldCheck, 'Machine Inspection', 'Careful condition checks, documentation review, and transparent reporting.'],
  [Ship, 'Logistics & Shipping', 'Coordinated freight, documentation, port handling, and delivery support.'],
  [Factory, 'Used Equipment Sales', 'A curated selection of dependable construction and earthmoving machinery.'],
  [MessageCircle, 'Import Consultation', 'Practical guidance through selection, costing, import, and ownership.'],
]

const brands = [
  "CATERPILLAR",
  "KOMATSU",
  "HITACHI",
  "VOLVO",
  "HYUNDAI",
  "DOOSAN",
  "KOBELCO",
  "FIAT HITACHI",
  "SAMSUNG",
  "SANY",
  "XCMG",
  "JOHN DEERE",
];

const countries = [['Europe', '50%', '29%'], ['China', '74%', '39%'], ['Australia', '82%', '71%'], ['Canada', '18%', '23%'], ['United States', '20%', '42%'], ['Japan', '86%', '38%'], ['South Korea', '80%', '45%']]

const testimonials = [
  ['The entire process was transparent from machine selection to delivery. The excavator arrived exactly as described and has performed reliably on site.', 'Ahmed R.', 'Construction Contractor, Lahore'],
  ['NK Equipments Solution found the right Hitachi model within our budget and kept us updated at every stage. Professional, responsive, and honest.', 'Faisal K.', 'Equipment Dealer, Karachi'],
  ['Their Doosan inspection support gave us confidence before purchasing. We received clear details, photos, and practical advice without any sales pressure.', 'Imran S.', 'Project Director, Islamabad'],
]

const faqs = [
  ['Where do you import machinery from?', 'We import quality used heavy machinery into Pakistan from Europe, China, Australia, and Canada.'],
  ['Can I request a specific machine?', 'Yes. Share the brand, model, year range, operating hours, budget, and preferred origin. Our team will search our supplier network and present suitable options.'],
  ['Do you provide inspection reports?', 'Yes. Available inspection information can include condition photos, videos, serial details, operating hours, and third-party inspection support where required.'],
  ['What brands do you sell?', 'We regularly source Caterpillar, Komatsu, Hitachi, Volvo, Hyundai, Doosan, Kobelco, Case, JCB, SANY, XCMG, Liebherr, and other trusted brands.'],
  ['How can I contact you?', 'Use the contact form, send a WhatsApp message, call our sales team, or email us. We respond quickly to equipment and import inquiries.'],
]

type ModalType = 'request' | 'quote' | null

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modal, setModal] = useState<ModalType>(null)
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null)
  const [heroSlide, setHeroSlide] = useState(0)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = modal || selectedMachine || menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modal, selectedMachine, menuOpen])

  useEffect(() => {
    const timer = window.setInterval(() => setHeroSlide((current) => (current + 1) % heroSlides.length), 5000)
    return () => window.clearInterval(timer)
  }, [])

  const filteredInventory = useMemo(() => {
    const term = search.trim().toLowerCase()
    if (!term) return inventory
    return inventory.filter((item) => [item.name, item.model, item.price, item.status, item.year, item.origin, item.hours].some((value) => value.toLowerCase().includes(term)))
  }, [search])

  return (
    <main>
      <PageLoader />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} setModal={setModal} />

      <section className="hero" id="home">
        <div className="hero__slideshow" aria-live="off">
          {heroSlides.map((slide, index) => <img className={`hero__image ${index === heroSlide ? 'is-active' : ''}`} src={slide.image} alt={slide.label} style={{ objectPosition: slide.position }} key={slide.label} />)}
        </div>
        <div className="hero__veil" />
        <div className="hero__grid" />
        <div className="container hero__content">
          <div className="hero__eyebrow"><span /> Pakistan-based. Globally connected.</div>
          <h1>Trusted Global Importer of <em>Heavy Machinery</em></h1>
          <p>Importing Premium Used Heavy Machinery from Europe, China, Australia and Canada.</p>
          <div className="hero__actions">
            <a className="button button--orange" href="#inventory">View Inventory <ArrowRight size={18} /></a>
            <a className="button button--ghost" href="#contact">Contact Us <ArrowUpRight size={18} /></a>
          </div>
          <div className="hero__proof">
            <div><strong>4</strong><span>Global sourcing regions</span></div>
            <div><strong>12+</strong><span>Leading equipment brands</span></div>
            <div><strong>360°</strong><span>Import process support</span></div>
          </div>
        </div>
        <div className="hero__slides" aria-label="Hero slideshow">
          <span>{String(heroSlide + 1).padStart(2, '0')}</span>
          <div>{heroSlides.map((slide, index) => <button type="button" className={index === heroSlide ? 'is-active' : ''} onClick={() => setHeroSlide(index)} aria-label={`Show ${slide.label}`} key={slide.label} />)}</div>
          <strong>{heroSlides[heroSlide].label}</strong>
        </div>
        <a className="hero__scroll" href="#about"><span>Scroll to explore</span><ChevronDown size={18} /></a>
      </section>

      <section className="trust-strip" aria-label="Business strengths">
        <div className="container trust-strip__inner">
          <span><Globe2 size={18} /> Worldwide sourcing</span>
          <span><ShieldCheck size={18} /> Quality-first selection</span>
          <span><Ship size={18} /> Import &amp; logistics support</span>
          <span><Clock3 size={18} /> Fast response</span>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container about__grid">
          <div className="about__visual" data-reveal>
            <img src={images.premiumExcavator} alt="Cinematic heavy excavator working on a construction project" loading="lazy" />
            <div className="about__badge"><strong>GLOBAL</strong><span>Procurement network</span></div>
            <div className="about__line" />
          </div>
          <div className="about__copy" data-reveal>
            <SectionLabel>About NK Equipments</SectionLabel>
            <h2>Built on trust. Driven by <span>performance.</span></h2>
            <p className="lead">Welcome to NK EQUIPMENTS SOLUTION, a trusted importer and supplier of premium used heavy machinery.</p>
            <p>We specialize in importing reliable used machinery from Europe, China, Australia, and Canada. Every machine is carefully selected to deliver quality, performance, and lasting value.</p>
            <p>With honesty, reliability, and customer satisfaction at the center of our work, we help contractors, construction companies, mining businesses, and equipment dealers find the right machinery for every project.</p>
            <div className="about__checks">
              <span><CircleCheck size={18} /> Carefully sourced machines</span>
              <span><CircleCheck size={18} /> Clear, responsive communication</span>
              <span><CircleCheck size={18} /> Practical import support</span>
              <span><CircleCheck size={18} /> Long-term customer focus</span>
            </div>
            <button className="text-link" onClick={() => setModal('request')}>Request a machine <ArrowRight size={18} /></button>
          </div>
        </div>
      </section>

      <section className="section section--panel" id="services">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div><SectionLabel>Our Capabilities</SectionLabel><h2>A complete equipment <span>import solution.</span></h2></div>
            <p>From the first search to arrival in Pakistan, our team makes international machinery procurement clearer, safer, and more efficient.</p>
          </div>
          <div className="services-grid">
            {services.map(([Icon, title, description], index) => (
              <article className="service-card" data-reveal key={title} style={{ '--delay': `${index * 70}ms` } as CSSProperties}>
                <div className="service-card__number">0{index + 1}</div>
                <div className="service-card__icon"><Icon size={26} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ArrowUpRight className="service-card__arrow" size={20} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section inventory-section" id="inventory">
        <div className="container">
          <div className="inventory-head" data-reveal>
            <div><SectionLabel>Current Inventory</SectionLabel><h2>Used Heavy <span>Machinery.</span></h2><p>Browse our current selection and click any machine for full details.</p></div>
            <div className="inventory-search"><Search size={19} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search machine, model, status..." aria-label="Search used heavy machinery" />{search && <button onClick={() => setSearch('')} aria-label="Clear search"><X size={17} /></button>}</div>
          </div>
          <div className="inventory-grid">
            {filteredInventory.map((item) => (
              <button type="button" className="machine-card" key={item.id} data-reveal onClick={() => setSelectedMachine(item)} aria-label={`View details for ${item.name} ${item.model}`}>
                <div className="machine-card__image"><img src={item.images[0]} alt={`${item.name} ${item.model}`} loading="lazy" /><span className={`status status--${item.status.toLowerCase().replaceAll(' ', '-')}`}>{item.status}</span></div>
                <div className="machine-card__body">
                  <span>{item.name}</span><h3>{item.model}</h3>
                  <strong className="machine-card__price">{item.price}</strong>
                  <div className="machine-card__action">View full details <ArrowRight size={17} /></div>
                </div>
              </button>
            ))}
          </div>
          {filteredInventory.length === 0 && <div className="inventory-empty"><PackageSearch size={36} /><h3>No matching machine found</h3><p>Try another machine name, model, or status.</p><button className="button button--orange" onClick={() => setSearch('')}>View all machinery</button></div>}
        </div>
      </section>

      <section className="brands section--compact">
  <div className="container">
    <div className="brands__title">
      <span>Brands we source and supply</span>
      <i />
    </div>

    <div className="brand-grid">
      {brands.map((brand) => (
        <span key={brand}>
          <img
            src={`/assets/logos/${brand
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace("&", "and")}.png`}
            alt={brand}
          />
        </span>
      ))}
    </div>
  </div>
</section>

      <section className="section why">
        <div className="container why__grid">
          <div className="why__copy" data-reveal>
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2>The right machine. The right deal. <span>The right partner.</span></h2>
            <p>International equipment buying requires more than a listing. It requires local understanding, global relationships, and a team that protects your interests throughout the process.</p>
            <div className="why__list">
              {['Global equipment sourcing', 'Premium quality machines', 'Competitive prices', 'Trusted worldwide suppliers', 'Professional support', 'Fast response', 'Honest business', 'Reliable import process'].map((item) => <span key={item}><Check size={17} /> {item}</span>)}
            </div>
            <button className="button button--orange" onClick={() => setModal('quote')}>Get a quote <ArrowRight size={18} /></button>
          </div>
          <div className="why__visual" data-reveal>
            <img src={images.loader} alt="Heavy wheel loader at work" loading="lazy" />
            <div className="why__card"><ShieldCheck size={34} /><strong>Quality without compromise</strong><span>Every sourcing decision is guided by condition, performance, documentation, and value.</span></div>
          </div>
        </div>
      </section>

      <section className="section map-section" id="global">
        <div className="container">
          <div className="section-heading section-heading--center" data-reveal><div><SectionLabel>Global Sourcing Network</SectionLabel><h2>Worldwide reach. <span>Local commitment.</span></h2></div><p>We connect Pakistan’s equipment buyers with trusted machinery markets across Europe, China, Australia, and Canada.</p></div>
          <div className="world-map" data-reveal>
            <div className="world-map__glow" />
            <div className="continent continent--americas" />
            <div className="continent continent--eurasia" />
            <div className="continent continent--africa" />
            <div className="continent continent--australia" />
            {countries.map(([name, left, top]) => <div className="map-point" key={name} style={{ left, top }}><i /><span>{name}</span></div>)}
            <div className="map-hub"><MapPin size={16} /><strong>Pakistan</strong><span>Our home base</span></div>
          </div>
          <div className="country-list">{countries.map(([name]) => <span key={name}><i />{name}</span>)}</div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <div className="section-heading" data-reveal><div><SectionLabel>Client Confidence</SectionLabel><h2>Trusted by people who <span>build Pakistan.</span></h2></div><div className="rating"><strong>5.0</strong><span>{[1,2,3,4,5].map((i) => <Star key={i} size={16} fill="currentColor" />)}</span><small>Customer satisfaction</small></div></div>
          <div className="testimonial-grid">
            {testimonials.map(([review, name, role], index) => <article className="testimonial-card" key={name} data-reveal><Quote size={34} /><div className="stars">{[1,2,3,4,5].map((i) => <Star key={i} size={14} fill="currentColor" />)}</div><p>“{review}”</p><div><span>{name}</span><small>{role}</small></div><i>0{index + 1}</i></article>)}
          </div>
        </div>
      </section>

      <section className="section blog" id="insights">
        <div className="container">
          <div className="section-heading" data-reveal><div><SectionLabel>Equipment Insights</SectionLabel><h2>Buy smarter. Operate <span>with confidence.</span></h2></div><a className="text-link" href="#newsletter">Get new insights <ArrowRight size={18} /></a></div>
          <div className="blog-grid">
            {[
              ['Buying Guide', 'What to inspect before buying a used excavator', images.premiumExcavator, '6 min read'],
              ['Import Process', 'A practical guide to importing machinery into Pakistan', images.premiumSite, '8 min read'],
              ['Equipment Care', 'How operating hours affect used machine value', images.premiumLoader, '5 min read'],
            ].map(([tag, title, image, time]) => <article className="blog-card" key={title} data-reveal><img src={image} alt="" loading="lazy" /><div><span>{tag}</span><h3>{title}</h3><small>{time}</small><a href="#contact" aria-label={`Read ${title}`}><ArrowUpRight size={19} /></a></div></article>)}
          </div>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="container faq__grid">
          <div data-reveal><SectionLabel>Frequently Asked Questions</SectionLabel><h2>Clear answers before you <span>make a move.</span></h2><p>Need more detail about a machine, inspection, shipping, or import process? Our team is ready to help.</p><a className="button button--outline" href="#contact">Ask our team <ArrowRight size={18} /></a></div>
          <div className="faq__list" data-reveal>{faqs.map(([question, answer], index) => <FaqItem key={question} question={question} answer={answer} open={index === 0} />)}</div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact__map"><iframe title="Map showing NK Equipments Solution office in Tarnol, Islamabad" src="https://www.google.com/maps?q=Kadda%20Market%2C%20Tarnol%2C%20Islamabad%2C%20Pakistan&z=15&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        <div className="container contact__inner">
          <div className="contact__details" data-reveal>
            <SectionLabel>Contact Our Team</SectionLabel><h2>Call Our <span>Team.</span></h2><p>Speak with our team about current stock, upcoming machinery, booking options, inspections, and imports.</p>
            <div className="contact__links">
              <a href="tel:+923037188865"><span><Phone size={20} /></span><div><small>Call our sales team</small><strong>+92 303 718 8865</strong></div></a>
              <a href="mailto:nk.equipmentss@gmail.com"><span><Mail size={20} /></span><div><small>Email inquiries</small><strong>nk.equipmentss@gmail.com</strong></div></a>
              <a href="https://www.google.com/maps/search/?api=1&query=Kadda+Market+Opposite+Police+Station+Near+Al+Madina+Plaza+Tarnol+Islamabad+Pakistan" target="_blank" rel="noreferrer"><span><MapPin size={20} /></span><div><small>Office address</small><strong>Kadda Market, Opposite Police Station, Near Al Madina Plaza, Tarnol, Islamabad, Pakistan</strong></div></a>
            </div>
          </div>
          <NetlifyForm name="contact" className="contact-form" successMessage="Thank you. Our team has received your inquiry.">
            <div className="form-heading"><span>Send an inquiry</span><small>Fields marked * are required</small></div>
            <div className="form-grid"><Field label="Full name *" name="name" required /><Field label="Company" name="company" /><Field label="Email address *" name="email" type="email" required /><Field label="Phone / WhatsApp *" name="phone" required /><Field label="Equipment needed" name="equipment" wide /><label className="field field--wide"><span>How can we help? *</span><textarea name="message" rows={4} required placeholder="Tell us the machine, model, budget, or project requirement..." /></label></div>
            <button className="button button--orange button--full" type="submit">Send inquiry <Send size={18} /></button>
          </NetlifyForm>
        </div>
      </section>

      <section className="newsletter" id="newsletter">
        <div className="container newsletter__inner"><div><span>Stay equipment-ready</span><h2>New arrivals and market updates, directly to your inbox.</h2></div><NetlifyForm name="newsletter" className="newsletter__form" successMessage="You're on the list."><label><Mail size={18} /><input name="email" type="email" required placeholder="Your business email" aria-label="Email address" /></label><button type="submit">Subscribe <ArrowRight size={18} /></button></NetlifyForm></div>
      </section>

      <Footer />
      <a className="whatsapp-float" href="https://wa.me/923037188865" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={26} /><span>WhatsApp</span></a>
      {selectedMachine && <MachineDetailsModal machine={selectedMachine} onClose={() => setSelectedMachine(null)} />}
      {modal && <InquiryModal type={modal} onClose={() => setModal(null)} />}
    </main>
  )
}

function Header({ menuOpen, setMenuOpen, setModal }: { menuOpen: boolean; setMenuOpen: (open: boolean) => void; setModal: (modal: ModalType) => void }) {
  const links = [['About', '#about'], ['Used Machinery', '#inventory'], ['Services', '#services'], ['Global Network', '#global'], ['Contact', '#contact']]
  return <header className="site-header"><div className="container site-header__inner"><a className="brand" href="#home"><BrandMark /><span><strong>NK EQUIPMENTS</strong><small>SOLUTION</small></span></a><nav>{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav><button className="button button--header" onClick={() => setModal('quote')}>Request a Quote <ArrowUpRight size={17} /></button><button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu /></button></div>{menuOpen && <div className="mobile-menu"><div><a className="brand" href="#home" onClick={() => setMenuOpen(false)}><BrandMark /><span><strong>NK EQUIPMENTS</strong><small>SOLUTION</small></span></a><button onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button></div><nav>{links.map(([label, href], i) => <a key={href} href={href} onClick={() => setMenuOpen(false)}><span>0{i + 1}</span>{label}<ArrowUpRight size={18} /></a>)}</nav><button className="button button--orange" onClick={() => { setMenuOpen(false); setModal('quote') }}>Request a Quote</button></div>}</header>
}

function BrandMark() { return <span className="brand__mark"><img src="/assets/nk-logo.png" alt="NK Equipments Solution logo" /></span> }

function SectionLabel({ children }: { children: ReactNode }) { return <div className="section-label"><span />{children}</div> }

function Field({ label, name, type = 'text', required = false, wide = false }: { label: string; name: string; type?: string; required?: boolean; wide?: boolean }) { return <label className={`field ${wide ? 'field--wide' : ''}`}><span>{label}</span><input name={name} type={type} required={required} /></label> }

function NetlifyForm({ name, children, className, successMessage }: { name: string; children: ReactNode; className?: string; successMessage: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus('sending')
    try {
      const form = event.currentTarget
      const encoded = new URLSearchParams()
      new FormData(form).forEach((value, key) => encoded.append(key, String(value)))
      const response = await fetch('/__forms.html', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: encoded.toString() })
      if (!response.ok) throw new Error('Submission failed')
      setStatus('success'); form.reset()
    } catch { setStatus('error') }
  }
  return <form name={name} method="POST" data-netlify="true" netlify-honeypot="bot-field" className={className} onSubmit={submit}><input type="hidden" name="form-name" value={name} /><p className="hidden-field"><label>Do not fill this out: <input name="bot-field" /></label></p>{children}{status === 'sending' && <p className="form-status">Sending your request...</p>}{status === 'success' && <p className="form-status form-status--success"><CircleCheck size={17} /> {successMessage}</p>}{status === 'error' && <p className="form-status form-status--error">Something went wrong. Please try again or contact us directly.</p>}</form>
}

function FaqItem({ question, answer, open: defaultOpen }: { question: string; answer: string; open: boolean }) { const [open, setOpen] = useState(defaultOpen); return <div className={`faq-item ${open ? 'is-open' : ''}`}><button onClick={() => setOpen(!open)}><span>{question}</span><i>{open ? <X size={18} /> : <ChevronDown size={20} />}</i></button><div><p>{answer}</p></div></div> }

function MachineDetailsModal({ machine, onClose }: { machine: Machine; onClose: () => void }) {
  const [imageIndex, setImageIndex] = useState(0)
  const [zoomed, setZoomed] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [onClose])

  const showPrevious = () => setImageIndex((current) => (current - 1 + machine.images.length) % machine.images.length)
  const showNext = () => setImageIndex((current) => (current + 1) % machine.images.length)
  const activeImage = machine.images[imageIndex]

  return <div className="modal machine-modal" role="dialog" aria-modal="true" aria-labelledby="machine-dialog-title"><button className="modal__backdrop" onClick={onClose} aria-label="Close machine details" /><div className="machine-modal__panel"><button className="modal__close" onClick={onClose} aria-label="Close machine details"><X size={20} /></button><div className="machine-modal__slider"><button type="button" className="machine-modal__image" onClick={() => setZoomed(true)} aria-label="Zoom machine image"><img src={activeImage} alt={`${machine.name} ${machine.model} image ${imageIndex + 1}`} /><span className={`status status--${machine.status.toLowerCase().replaceAll(' ', '-')}`}>{machine.status}</span><span className="machine-modal__zoom"><ZoomIn size={17} /> Click to zoom</span></button><button type="button" className="machine-modal__arrow machine-modal__arrow--previous" onClick={showPrevious} aria-label="Previous machine image"><ChevronLeft size={24} /></button><button type="button" className="machine-modal__arrow machine-modal__arrow--next" onClick={showNext} aria-label="Next machine image"><ChevronRight size={24} /></button><div className="machine-modal__counter">{String(imageIndex + 1).padStart(2, '0')} / {String(machine.images.length).padStart(2, '0')}</div></div><div className="machine-modal__content"><SectionLabel>Machine Details</SectionLabel><span className="machine-modal__name">{machine.name}</span><h2 id="machine-dialog-title">{machine.model}</h2><strong className="machine-modal__price">{machine.price}</strong><p>{machine.description}</p><dl><div><dt>Origin</dt><dd>{machine.origin}</dd></div><div><dt>Year</dt><dd>{machine.year}</dd></div><div><dt>Operating Hours</dt><dd>{machine.hours}</dd></div><div><dt>Status</dt><dd>{machine.status}</dd></div></dl><a className="button button--orange" href={`https://wa.me/923037188865?text=${encodeURIComponent(`Hello NK Equipments Solution, I would like details about the ${machine.name} ${machine.model}.`)}`} target="_blank" rel="noreferrer">WhatsApp Inquiry <MessageCircle size={18} /></a></div></div>{zoomed && <div className="image-zoom" role="dialog" aria-modal="true" aria-label="Zoomed machine image"><button type="button" onClick={() => setZoomed(false)} aria-label="Close zoomed image"><X size={24} /></button><img src={activeImage} alt={`Zoomed ${machine.name} ${machine.model}`} /></div>}</div>
}

function InquiryModal({ type, onClose }: { type: Exclude<ModalType, null>; onClose: () => void }) {
  const isRequest = type === 'request'
  return <div className="modal" role="dialog" aria-modal="true" aria-label={isRequest ? 'Request a machine' : 'Request a quote'}><button className="modal__backdrop" onClick={onClose} aria-label="Close dialog" /><div className="modal__panel"><button className="modal__close" onClick={onClose}><X size={20} /></button><div className="modal__intro"><BrandMark /><SectionLabel>{isRequest ? 'Global Sourcing Request' : 'Equipment Quote'}</SectionLabel><h2>{isRequest ? 'Tell us the machine you need.' : 'Get a clear, competitive quote.'}</h2><p>{isRequest ? 'Share as much detail as you have. Our sourcing team will search trusted markets worldwide.' : 'Send your equipment requirements and our sales team will respond with suitable options and next steps.'}</p><div><span><Check size={16} /> Fast response</span><span><Check size={16} /> No obligation</span><span><Check size={16} /> Professional support</span></div></div><NetlifyForm name={isRequest ? 'machine-request' : 'quote-request'} className="modal-form" successMessage="Your request has been received. Our team will contact you shortly."><Field label="Full name *" name="name" required /><Field label="Phone / WhatsApp *" name="phone" required /><Field label="Email address *" name="email" type="email" required /><Field label="Company" name="company" /><Field label="Brand / model" name="machine" wide /><div className="form-grid form-grid--three"><Field label="Preferred year" name="year" /><Field label="Budget" name="budget" /><Field label="Quantity" name="quantity" /></div><label className="field field--wide"><span>Additional requirements</span><textarea name="message" rows={3} placeholder="Hours, condition, attachments, delivery location..." /></label><button className="button button--orange button--full" type="submit">{isRequest ? 'Submit machine request' : 'Request my quote'} <Send size={17} /></button></NetlifyForm></div></div>
}

function PageLoader() { const [hidden, setHidden] = useState(false); useEffect(() => { const timer = window.setTimeout(() => setHidden(true), 900); return () => window.clearTimeout(timer) }, []); return <div className={`page-loader ${hidden ? 'is-hidden' : ''}`}><BrandMark /><strong>NK EQUIPMENTS</strong><span><i /></span></div> }

function Footer() { return <footer id="privacy"><div className="container footer__top"><div className="footer__brand"><a className="brand" href="#home"><BrandMark /><span><strong>NK EQUIPMENTS</strong><small>SOLUTION</small></span></a><p>Trusted importer of premium used heavy machinery from Europe, China, Australia, and Canada.</p><div className="socials"><a href="https://www.facebook.com/share/1Bq7C92M3s/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a><a href="https://www.instagram.com/nk.equipments?igsh=MXFnN3k4MXFqN3kzbg==" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a><a href="https://wa.me/923037188865" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a></div></div><div className="footer__links"><div><strong>Company</strong><a href="#home">Home</a><a href="#about">About</a><a href="#inventory">Used Machinery</a><a href="#services">Services</a></div><div><strong>Connect</strong><a href="https://www.facebook.com/share/1Bq7C92M3s/" target="_blank" rel="noreferrer">Facebook</a><a href="https://www.instagram.com/nk.equipments?igsh=MXFnN3k4MXFqN3kzbg==" target="_blank" rel="noreferrer">Instagram</a><a href="https://wa.me/923037188865" target="_blank" rel="noreferrer">WhatsApp</a><a href="#faq">FAQ</a></div><div><strong>Contact</strong><a href="tel:+923037188865">+92 303 718 8865</a><a href="mailto:nk.equipmentss@gmail.com">nk.equipmentss@gmail.com</a><a href="https://www.google.com/maps/search/?api=1&query=Kadda+Market+Opposite+Police+Station+Near+Al+Madina+Plaza+Tarnol+Islamabad+Pakistan" target="_blank" rel="noreferrer">Kadda Market, Opposite Police Station, Near Al Madina Plaza, Tarnol, Islamabad, Pakistan</a></div></div></div><div className="container footer__bottom"><span>© 2026 NK EQUIPMENTS SOLUTION. All rights reserved.</span><span>Global machinery. Local trust.</span></div></footer> }
