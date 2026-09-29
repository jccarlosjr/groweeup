import { useRef, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, Check, CheckCircle2, Mail, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'

type FormState = {
  name: string
  email: string
  phone: string
  company: string
  interest: string
  message: string
}

type FieldName = 'name' | 'email' | 'phone' | 'message'

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  interest: 'Consultoria',
  message: '',
}

const assurances = [
  'Condições para diferentes estágios de negócio',
  'Escopo alinhado ao momento da empresa',
  'Proposta com prioridades e indicadores',
]

function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (!digits) return ''
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim().toLowerCase())
}

function fieldErrors(form: FormState): Partial<Record<FieldName, string>> {
  const next: Partial<Record<FieldName, string>> = {}
  if (!form.name.trim()) next.name = 'Informe seu nome.'
  if (!validateEmail(form.email)) next.email = 'Informe um e-mail válido, como nome@empresa.com.'
  if (form.phone.replace(/\D/g, '').length < 10) next.phone = 'Informe um telefone com DDD.'
  if (!form.message.trim()) next.message = 'Conte o momento do negócio.'
  return next
}

const fieldClass =
  'min-h-11 w-full rounded-xl border border-border bg-canvas px-4 py-3 text-base text-text-primary transition-colors duration-200 placeholder:text-text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600'

export function Contact() {
  const [form, setForm] = useState<FormState>(initial)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const summaryRef = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLHeadingElement>(null)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const next = fieldErrors(form)
    setErrors(next)
    setSubmitted(true)

    if (Object.keys(next).length > 0) {
      requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }

    setStatus('sending')
    setErrorMessage('')

    try {
      const res = await fetch('https://formsubmit.co/ajax/groweeup.mkt@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Nome: form.name.trim(),
          Email: form.email.trim().toLowerCase(),
          Telefone: form.phone,
          Empresa: form.company || 'Não informada',
          Interesse: form.interest,
          Mensagem: form.message.trim(),
          _subject: `Novo Lead Website - ${form.name.trim()} (${form.interest})`,
          _captcha: 'false',
          _template: 'table',
        }),
      })

      if (!res.ok) throw new Error('Falha no envio')
      setStatus('sent')
      setForm(initial)
      setSubmitted(false)
      requestAnimationFrame(() => successRef.current?.focus())
    } catch {
      setStatus('error')
      setErrorMessage(
        'Não foi possível enviar agora. Tente de novo ou escreva para groweeup.mkt@gmail.com.',
      )
    }
  }

  const errorItems = (Object.keys(errors) as FieldName[])
    .filter((key) => errors[key])
    .map((key) => ({ id: key, message: errors[key]! }))

  const describedBy = (name: FieldName) => (errors[name] ? `${name}-erro` : undefined)

  return (
    <section id="contato" className="scroll-mt-20 py-20 md:py-24" aria-labelledby="contato-titulo">
      <div className="container-site">
        <div className="overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-between bg-brand-900 p-8 text-white md:p-12">
              <div>
                <p className="caption-mono text-white">Contato</p>
                <h2 id="contato-titulo" className="mt-4 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Pronto para crescer com método?
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-white">
                  Conte o cenário. Retornamos com um diagnóstico inicial e os próximos passos, sem
                  compromisso.
                </p>
                <ul className="mt-8 space-y-3 text-base text-white">
                  {assurances.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-1 size-4 shrink-0" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 border-t border-white/25 pt-6">
                <p className="caption-mono text-white">Atendimento direto</p>
                <a
                  href="mailto:groweeup.mkt@gmail.com"
                  className="mt-3 inline-flex min-h-11 items-center gap-2 text-base text-white underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
                >
                  <Mail className="size-4" aria-hidden />
                  groweeup.mkt@gmail.com
                </a>
              </div>
            </div>

            <div className="p-8 md:p-12">
              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-start gap-4 rounded-[var(--radius-card)] border border-border bg-canvas p-8"
                >
                  <CheckCircle2 className="size-8 text-success" aria-hidden />
                  <h3
                    ref={successRef}
                    tabIndex={-1}
                    className="font-display text-2xl font-semibold focus:outline-none"
                  >
                    Mensagem recebida
                  </h3>
                  <p className="text-base text-text-secondary">
                    Obrigado pelo contato. O time retorna com os próximos passos.
                  </p>
                  <Button type="button" variant="secondary" onClick={() => setStatus('idle')}>
                    Enviar nova mensagem
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={onSubmit}
                  noValidate
                  className="grid gap-4 sm:grid-cols-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="sm:col-span-2">
                    <h3 className="font-display text-2xl font-semibold text-text-primary">
                      Fale com a gente
                    </h3>
                    <p className="mt-2 text-base text-text-secondary">
                      Os campos com asterisco são obrigatórios.
                    </p>
                  </div>

                  {submitted && errorItems.length > 0 ? (
                    <div
                      ref={summaryRef}
                      tabIndex={-1}
                      role="alert"
                      aria-labelledby="erro-titulo"
                      className="rounded-xl border border-danger/40 bg-canvas p-4 focus:outline-none sm:col-span-2"
                    >
                      <h4 id="erro-titulo" className="font-semibold text-danger">
                        Há campos para corrigir
                      </h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                        {errorItems.map((item) => (
                          <li key={item.id}>
                            <a href={`#${item.id}`} className="text-brand-900 underline underline-offset-2">
                              {item.message}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  <label className="block" htmlFor="name">
                    <span className="mb-2 block text-sm font-medium text-text-primary">Nome *</span>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={describedBy('name')}
                      className={fieldClass}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Seu nome"
                    />
                    {errors.name ? (
                      <span id="name-erro" className="mt-1 flex items-center gap-1 text-sm text-danger">
                        <AlertCircle className="size-3.5" aria-hidden /> {errors.name}
                      </span>
                    ) : null}
                  </label>

                  <label className="block" htmlFor="email">
                    <span className="mb-2 block text-sm font-medium text-text-primary">E-mail *</span>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={describedBy('email')}
                      className={fieldClass}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onBlur={() => {
                        if (!form.email) return
                        setErrors((current) => ({
                          ...current,
                          email: validateEmail(form.email)
                            ? undefined
                            : 'Informe um e-mail válido, como nome@empresa.com.',
                        }))
                      }}
                      placeholder="voce@empresa.com"
                    />
                    {errors.email ? (
                      <span id="email-erro" className="mt-1 flex items-center gap-1 text-sm text-danger">
                        <AlertCircle className="size-3.5" aria-hidden /> {errors.email}
                      </span>
                    ) : null}
                  </label>

                  <label className="block" htmlFor="phone">
                    <span className="mb-2 block text-sm font-medium text-text-primary">
                      Telefone / WhatsApp *
                    </span>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={describedBy('phone')}
                      className={fieldClass}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: maskPhone(e.target.value) })}
                      placeholder="(11) 99999-9999"
                      maxLength={15}
                    />
                    {errors.phone ? (
                      <span id="phone-erro" className="mt-1 flex items-center gap-1 text-sm text-danger">
                        <AlertCircle className="size-3.5" aria-hidden /> {errors.phone}
                      </span>
                    ) : null}
                  </label>

                  <label className="block" htmlFor="company">
                    <span className="mb-2 block text-sm font-medium text-text-primary">Empresa</span>
                    <input
                      id="company"
                      name="organization"
                      autoComplete="organization"
                      className={fieldClass}
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Nome da empresa"
                    />
                  </label>

                  <label className="block sm:col-span-2" htmlFor="interest">
                    <span className="mb-2 block text-sm font-medium text-text-primary">
                      Interesse principal
                    </span>
                    <select
                      id="interest"
                      name="interest"
                      className={fieldClass}
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    >
                      <option>Consultoria</option>
                      <option>CRM WhatsApp</option>
                      <option>Tráfego Pago</option>
                      <option>Redes Sociais</option>
                      <option>Meta Business</option>
                      <option>Sistemas e Sites</option>
                      <option>Pacote completo</option>
                    </select>
                  </label>

                  <label className="block sm:col-span-2" htmlFor="message">
                    <span className="mb-2 block text-sm font-medium text-text-primary">Mensagem *</span>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={describedBy('message')}
                      className={`${fieldClass} min-h-32 resize-y`}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Conte o momento do negócio e o que você busca."
                    />
                    {errors.message ? (
                      <span id="message-erro" className="mt-1 flex items-center gap-1 text-sm text-danger">
                        <AlertCircle className="size-3.5" aria-hidden /> {errors.message}
                      </span>
                    ) : null}
                  </label>

                  {status === 'error' && errorMessage ? (
                    <div
                      role="alert"
                      className="flex items-start gap-2 rounded-xl border border-danger/40 bg-canvas p-3 text-sm text-danger sm:col-span-2"
                    >
                      <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
                      <span>{errorMessage}</span>
                    </div>
                  ) : null}

                  <div className="sm:col-span-2">
                    <Button type="submit" size="lg" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
                      <Send className="size-4" aria-hidden />
                    </Button>
                  </div>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
