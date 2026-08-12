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
    <footer className="relative mt-24 overflow-hidden border-t border-border-subtle bg-bg-surface">
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
              className="inline-flex size-10 items-center justify-center rounded-xl border border-border-subtle text-text-secondary transition hover:border-accent-primary/50 hover:text-text-primary"
              aria-label="E-mail"
            >
              <Mail className="size-4" />
            </a>
            <a
              href="https://www.instagram.com/groweeup"
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-xl border border-border-subtle text-text-secondary transition hover:border-accent-primary/50 hover:text-text-primary"
              aria-label="Instagram"
            >
              <InstagramIcon className="size-4" />
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
                  className="text-sm text-text-secondary transition hover:text-text-primary"
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
              <a href="mailto:groweeup.mkt@gmail.com" className="transition hover:text-text-primary">
                groweeup.mkt@gmail.com
              </a>
            </li>
            <li>
              <a href="/#contato" className="transition hover:text-text-primary">
                Solicitar orçamento
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-site flex flex-col gap-2 border-t border-border-subtle py-6 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Growee Up. Todos os direitos reservados.</p>
        <p className="font-mono tracking-wide uppercase">Crescimento · Dados · Sistemas</p>
      </div>
    </footer>
  )
}
