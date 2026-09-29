import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Code2, ShieldCheck, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { products } from '@/data/products'
import { reveal } from '@/lib/motion'

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
      <section className="border-b border-border bg-surface pt-16 pb-16 md:pt-20 md:pb-20">
        <motion.div
          className="container-site max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge>Sobre a Growee Up</Badge>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
            Crescemos marcas com método e dados
          </h1>
          <p className="mt-5 max-w-[65ch] text-lg leading-relaxed text-text-secondary">
            Somos uma agência de marketing e desenvolvimento focada em empresas de diferentes nichos
            e portes. Trabalhamos com marketing, tráfego pago, CRM para WhatsApp, redes sociais e
            sistemas — no mesmo plano, com resultado mensurável.
          </p>
          <div className="mt-8">
            <Button to="/#contato" size="lg">
              Falar com o time
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>
        </motion.div>
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
                <motion.div key={p.id} {...reveal(i * 0.05)}>
                  <Card className="flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-canvas text-brand-600">
                          <Icon className="size-5" aria-hidden />
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
                      className="mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors duration-200 hover:text-brand-900 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-600"
                    >
                      Ver detalhes na home <ArrowRight className="size-3.5" aria-hidden />
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
                <motion.div key={v.title} {...reveal(i * 0.06)}>
                  <Card className="h-full" hover={false}>
                    <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl border border-border bg-canvas text-brand-600">
                      <Icon className="size-5" aria-hidden />
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
                <p className="mt-3 max-w-xl text-base text-white">
                  Conte o momento da sua empresa e vamos montar uma proposta objetiva com metas e prioridades claras.
                </p>
              </div>
              <Button
                to="/#contato"
                variant="secondary"
                size="lg"
                className="shrink-0 border-white bg-white text-brand-900 hover:bg-canvas"
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
