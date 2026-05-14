import { profile, socials } from '@/data/portfolio'
import FadeIn from '@/components/animations/FadeIn'
import { Github, Linkedin, Twitter, Instagram, MessageCircle, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const iconMap = { Github, Linkedin, Twitter, Instagram, MessageCircle }

export default function ContactSection() {
  return (
    <section id="contact" aria-label="Contact information" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-bg">
      <div className="max-w-7xl mx-auto">

        <FadeIn direction="up" delay={0.1}>
          <span className="section-label mb-4 inline-block">Contact</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-black mb-10 leading-tight">
            Let's Build<br />Something Great.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* Contact details */}
          <FadeIn direction="left" delay={0.15} className="lg:col-span-5 flex flex-col gap-4">
            <div className="brutal-card p-6 flex flex-col gap-5">
              <a href={`mailto:${profile.email}`}
                className="flex items-center gap-4 group" aria-label={`Email ${profile.email}`}>
                <div className="w-10 h-10 border-2 border-black rounded-[4px] bg-yellow flex items-center justify-center shadow-brutal-sm group-hover:shadow-brutal transition-all">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">Email</p>
                  <p className="font-heading text-sm font-bold text-black group-hover:text-yellow transition-colors">{profile.email}</p>
                </div>
              </a>

              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 group" aria-label={`Call ${profile.phone}`}>
                <div className="w-10 h-10 border-2 border-black rounded-[4px] bg-white flex items-center justify-center shadow-brutal-sm group-hover:shadow-brutal transition-all">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">Phone</p>
                  <p className="font-heading text-sm font-bold text-black group-hover:text-yellow transition-colors">{profile.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border-2 border-black rounded-[4px] bg-white flex items-center justify-center shadow-brutal-sm">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">Location</p>
                  <p className="font-heading text-sm font-bold text-black">{profile.location}</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="brutal-card p-5">
              <p className="font-mono text-xs text-stone-400 uppercase tracking-widest mb-4">Connect</p>
              <div className="flex flex-wrap gap-3" role="list">
                {socials.map((s) => {
                  const Icon = iconMap[s.icon]
                  return Icon ? (
                    <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer"
                      aria-label={s.label} role="listitem"
                      className="flex items-center gap-2 px-3 py-2 border-2 border-black rounded-[4px] font-heading text-xs font-bold bg-white shadow-brutal-sm hover:bg-yellow hover:shadow-brutal transition-all">
                      <Icon size={13} />
                      {s.platform}
                    </a>
                  ) : null
                })}
              </div>
            </div>

            {/* CTA */}
            <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer"
              className="btn-brutal btn-brutal-primary text-sm self-start" aria-label="Chat on WhatsApp">
              <MessageCircle size={15} />
              Chat on WhatsApp
              <ArrowUpRight size={14} />
            </a>
          </FadeIn>

          {/* Map */}
          <FadeIn direction="right" delay={0.2} className="lg:col-span-7">
            <div className="border-3 border-black rounded-[6px] overflow-hidden shadow-brutal h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252628.116754014!2d8.7732236!3d9.8965273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105373d2f0135e31%3A0x1a3d3fb6e5b3094f!2sJos%2C%20Plateau%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1718900000000!5m2!1sen!2sng"
                width="100%" height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Jos, Plateau State, Nigeria"
                aria-label="Map showing Madaki's location in Jos, Plateau State, Nigeria"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
