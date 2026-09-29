import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { GrowthLine } from '@/components/ui/GrowthLine'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 4.2a7.6 7.6 0 0 0-6.5 11.4L4.2 19.8l4.3-1.1A7.6 7.6 0 1 0 12 4.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.3 9.6c.15-.35.35-.36.55-.36h.45c.15 0 .35.02.5.38.15.35.55 1.3.6 1.4.05.1.02.25-.08.38l-.28.35c-.1.12-.18.25-.05.45.2.32.65 1.05 1.4 1.45.28.16.45.13.58-.02l.42-.48c.12-.14.28-.12.45-.07.18.05 1.05.5 1.22.58.18.1.3.15.32.32.04.2-.02.75-.32 1.12-.32.4-.95.68-1.32.7-.28.02-1.5-.28-2.55-1.05-1.2-.88-2-2.1-2.1-2.28-.12-.25-.62-.95-.62-1.78 0-.78.38-1.22.55-1.4Z"
        fill="currentColor"
      />
    </svg>
  )
}

// function LinkedInIcon({ className }: { className?: string }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//       <path d="M6.5 9.5H4V20h2.5V9.5ZM5.25 4a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM20 20h-2.5v-5.3c0-1.5-.5-2.5-1.85-2.5-1 0-1.55.7-1.8 1.35-.1.25-.1.6-.1.95V20H11.3s.05-9.1 0-10.05H13.8v1.45c.35-.55 1-1.6 2.55-1.6 1.85 0 3.65 1.2 3.65 4.35V20Z" />
//     </svg>
//   )
// }

const institutional = [
  { label: 'Sobre', to: '/sobre' },
  { label: 'Termos de Serviço', to: '/termos' },
  { label: 'Política de Privacidade', to: '/privacidade' },
]

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border bg-surface">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 opacity-40">
        <GrowthLine opacity={0.35} />
      </div>
      <div className="container-site relative grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-5">
          <Logo size="md" />
          <p className="max-w-sm text-sm leading-relaxed text-text-secondary">
            Crescimento previsível para marcas que querem performance com clareza. Marketing, CRM,
            tráfego e operação — conectados por dados.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="mailto:groweeup.mkt@gmail.com"
              className="inline-flex size-11 items-center justify-center rounded-xl border border-border text-text-secondary transition-colors duration-200 hover:border-brand-600 hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-600"
              aria-label="E-mail"
            >
              <Mail className="size-4" />
            </a>
            <a
              href="https://www.instagram.com/groweeup"
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-11 items-center justify-center rounded-xl border border-border text-text-secondary transition-colors duration-200 hover:border-brand-600 hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-600"
              aria-label="Instagram"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href="https://wa.me/557998046306"
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-11 items-center justify-center rounded-xl border border-border text-text-secondary transition-colors duration-200 hover:border-brand-600 hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-600"
              aria-label="WhatsApp +55 79 9804-6306"
            >
              <WhatsAppIcon className="size-4" />
            </a>
            {/* <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-xl border border-border-subtle text-text-secondary transition hover:border-accent-primary/50 hover:text-text-primary"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="size-4" />
            </a> */}
          </div>
        </div>

        <div>
          <p className="caption-mono mb-4 text-text-secondary">Institucional</p>
          <ul className="space-y-3">
            {institutional.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="inline-flex min-h-11 items-center text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="caption-mono mb-4 text-text-secondary">Contato</p>
          <ul className="space-y-3 text-sm text-text-secondary">
            <li>
              <a
                href="mailto:contato@groweeup.com.br"
                className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-600"
              >
                contato@groweeup.com.br
              </a>
            </li>
            <li>
              <a
                href="/#contato"
                className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-600"
              >
                Solicitar diagnóstico
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-site flex flex-col gap-2 border-t border-border py-6 text-sm text-text-secondary sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Growee Up. Todos os direitos reservados.</p>
        <p>Marketing, CRM e sistemas</p>
      </div>
    </footer>
  )
}
