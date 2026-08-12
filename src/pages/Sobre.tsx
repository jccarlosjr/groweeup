import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, Code2, ShieldCheck, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { products } from '@/data/products'
import logoMark from '@/assets/logo-dark.png'

const values = [
  {
    icon: ShieldCheck,
    title: 'Transparência total',
    description: 'Sem métricas de vaidade. Relatórios objetivos e acompanhamento constante dos seus resultados.',
  },
  {
    icon: Zap,
    title: 'Confiança no método',
    description: 'Estratégia, execução e análise de dados lado a lado para alavancar seu negócio.',
  },
  {
    icon: BarChart3,
    title: 'Conexão total',
    description: 'Mídia, CRM, conteúdo e desenvolvimento conversando em uma só operação.',
  },
  {
    icon: Code2,
    title: 'Sistemas & Tecnologia',
    description: 'Desenvolvimento sob medida e automações para dar credibilidade e eficiência à sua empresa.',
  },
]

export function Sobre() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 50% -10%, rgba(0, 102, 255, 0.22), transparent)',
          }}
        />
        <div className="container-site relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Badge>Sobre a Growee Up</Badge>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight text-text-primary md:text-6xl">
              Crescemos marcas com <span className="text-gradient">método e dados</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
              Somos uma agência de marketing e desenvolvimento focada em criar soluções para empresas de diferentes nichos e portes. Trabalhamos com marketing, tráfego pago, CRM para WhatsApp, redes sociais e desenvolvimento de sistemas — tudo orquestrado para gerar resultado mensurável.
            </p>
            <div className="mt-8">
              <Button to="/#contato" size="lg">
                Falar com o time
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
          <motion.div
            className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-10 rounded-[2rem] border border-border-subtle bg-bg-elevated/50 shadow-[0_0_50px_rgba(0,102,255,0.15)]" />
            <img
              src={logoMark}
              alt="Growee Up"
              className="relative z-10 h-40 w-40 object-contain drop-shadow-[0_20px_50px_rgba(0,102,255,0.4)]"
            />
          </motion.div>
        </div>
      </section>

      {/* Services / Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Nossos Serviços"
            title="Para escalar e crescer"
            description="Frentes integradas para posicionar sua marca, captar clientes e estruturar sua presença digital."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className="flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-border-subtle bg-bg-elevated text-accent-primary shadow-[0_0_24px_rgba(0,100,255,0.15)]">
                          <Icon className="size-5" />
                        </div>
                        <div className="flex flex-wrap justify-end gap-2">
                          {p.tags.map((tag) => (
                            <span
                              key={tag}
                              className="caption-mono rounded-full border border-border-subtle px-2.5 py-1 text-[0.7rem] text-text-secondary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-text-primary">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
                        {p.description}
                      </p>
                    </div>
                    <Link
                      to="/#produtos"
                      className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-primary hover:text-accent-glow transition-colors"
                    >
                      Ver detalhes na home <ArrowRight className="size-3.5" />
                    </Link>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values / Differentials Section */}
      <section className="py-16 md:py-24 bg-bg-surface/50 border-y border-border-subtle">
        <div className="container-site">
          <SectionHeading
            eyebrow="O que nos diferencia"
            title="Crescimento com excelência operacional"
            description="Profissionalismo, expertise técnica e atualizações constantes do mercado."
            align="center"
            className="mb-12"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Card className="h-full">
                    <div className="mb-5 inline-flex size-11 items-center justify-center rounded-2xl border border-border-subtle bg-bg-elevated text-accent-glow shadow-[0_0_24px_rgba(0,100,255,0.15)]">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-text-primary">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
                      {v.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 md:py-24">
        <div className="container-site">
          <div className="overflow-hidden rounded-[1.5rem] bg-gradient-signature p-8 text-white md:p-12">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
                  Pronto para alavancar seu negócio?
                </h2>
                <p className="mt-3 max-w-xl text-base text-white/80">
                  Conte o momento da sua empresa e vamos montar uma proposta objetiva com metas e prioridades claras.
                </p>
              </div>
              <Button
                to="/#contato"
                variant="secondary"
                size="lg"
                className="shrink-0 border-white/20 bg-white text-brand-950 hover:bg-white/90"
              >
                Falar com a gente
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
