import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Send, AlertCircle, Mail } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

type FormState = {
  name: string
  email: string
  phone: string
  company: string
  interest: string
  message: string
}

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  interest: 'Consultoria',
  message: '',
}

function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (!digits) return ''
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`
}

function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email.trim().toLowerCase())
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initial)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const masked = maskPhone(e.target.value)
    setForm({ ...form, phone: masked })
    if (phoneError) setPhoneError('')
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, email: e.target.value })
    if (emailError) setEmailError('')
  }

  const handleEmailBlur = () => {
    if (form.email && !validateEmail(form.email)) {
      setEmailError('E-mail inválido. Exemplo: nome@empresa.com')
    } else {
      setEmailError('')
    }
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    let valid = true
    const cleanEmail = form.email.trim().toLowerCase()

    if (!validateEmail(cleanEmail)) {
      setEmailError('Por favor, informe um e-mail válido (ex: nome@empresa.com)')
      valid = false
    } else {
      setEmailError('')
    }

    const phoneDigits = form.phone.replace(/\D/g, '')
    if (phoneDigits.length < 10) {
      setPhoneError('Informe um telefone válido com DDD (mínimo 10 dígitos)')
      valid = false
    } else {
      setPhoneError('')
    }

    if (!valid) return

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
          Nome: form.name,
          Email: cleanEmail,
          Telefone: form.phone,
          Empresa: form.company || 'Não informada',
          Interesse: form.interest,
          Mensagem: form.message,
          _subject: `Novo Lead Website - ${form.name} (${form.interest})`,
          _captcha: 'false',
          _template: 'table',
        }),
      })

      if (res.ok) {
        setStatus('sent')
        setForm(initial)
      } else {
        throw new Error('Falha no envio')
      }
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        'Ocorreu um erro ao enviar. Por favor, tente novamente ou entre em contato pelo e-mail groweeup.mkt@gmail.com.'
      )
    }
  }

  const field =
    'w-full rounded-2xl border border-border-subtle bg-bg-base/60 px-4 py-3 text-sm text-text-primary outline-none transition placeholder:text-text-secondary/70 focus:border-accent-primary/60 focus:ring-2 focus:ring-accent-primary/20'

  return (
    <section id="contato" className="relative scroll-mt-28 py-20 md:py-28">
      <div className="container-site">
        <div className="overflow-hidden rounded-[1.5rem] border border-border-subtle bg-bg-surface">
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            {/* Left Info / CTA Banner */}
            <div className="relative flex flex-col justify-between overflow-hidden bg-gradient-signature p-8 text-white md:p-12">
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  background:
                    'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.5), transparent 45%)',
                }}
              />
              <div className="relative">
                <p className="caption-mono text-white/80">Contato</p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Pronto para crescer com método?
                </h2>
                <p className="mt-4 max-w-md text-base text-white/80">
                  Conte um pouco do seu cenário. Retornamos com um diagnóstico inicial e os
                  próximos passos — sem compromisso.
                </p>
                <ul className="mt-8 space-y-3 text-sm text-white/90">
                  <li>• Condições para todos os níveis de empreendedores</li>
                  <li>• Escopo alinhado ao estágio do negócio</li>
                  <li>• Proposta com métricas e prioridades</li>
                </ul>
              </div>

              <div className="relative mt-10 pt-6 border-t border-white/20">
                <p className="text-xs uppercase font-mono tracking-wider text-white/70">Atendimento Direto</p>
                <div className="mt-3 space-y-2 text-sm text-white/95">
                  <p className="flex items-center gap-2">
                    <Mail className="size-4 text-white/80" />
                    <a href="mailto:groweeup.mkt@gmail.com" className="hover:underline">
                      groweeup.mkt@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="p-8 md:p-12">
              <SectionHeading
                eyebrow="Formulário"
                title="Fale com a gente"
                description="Preencha os dados abaixo para receber nossa proposta e diagnóstico comercial."
                className="mb-8"
              />

              <AnimatePresence mode="wait">
                {status === 'sent' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-start gap-4 rounded-[var(--radius-card)] border border-accent-glow/30 bg-bg-elevated/50 p-8"
                  >
                    <CheckCircle2 className="size-10 text-accent-glow" />
                    <h3 className="font-display text-2xl font-semibold">Lead recebido com sucesso!</h3>
                    <p className="text-text-secondary">
                      Obrigado pelo contato. Nossa equipe já recebeu seus dados e retornará em breve.
                    </p>
                    <Button type="button" variant="secondary" onClick={() => setStatus('idle')}>
                      Enviar nova mensagem
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    className="grid gap-4 sm:grid-cols-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Nome */}
                    <label className="block sm:col-span-1">
                      <span className="mb-2 block text-xs font-medium text-text-secondary">
                        Nome *
                      </span>
                      <input
                        required
                        className={field}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Seu nome completo"
                      />
                    </label>

                    {/* E-mail com máscara / validação */}
                    <label className="block sm:col-span-1">
                      <span className="mb-2 block text-xs font-medium text-text-secondary">
                        E-mail *
                      </span>
                      <input
                        required
                        type="email"
                        className={`${field} ${emailError ? 'border-red-500/70 focus:border-red-500' : ''}`}
                        value={form.email}
                        onChange={handleEmailChange}
                        onBlur={handleEmailBlur}
                        placeholder="voce@empresa.com"
                      />
                      {emailError && (
                        <span className="mt-1 flex items-center gap-1 text-xs text-red-400">
                          <AlertCircle className="size-3" /> {emailError}
                        </span>
                      )}
                    </label>

                    {/* Telefone / WhatsApp com Máscara */}
                    <label className="block sm:col-span-1">
                      <span className="mb-2 block text-xs font-medium text-text-secondary">
                        Telefone / WhatsApp *
                      </span>
                      <input
                        required
                        type="tel"
                        className={`${field} ${phoneError ? 'border-red-500/70 focus:border-red-500' : ''}`}
                        value={form.phone}
                        onChange={handlePhoneChange}
                        placeholder="(11) 99999-9999"
                        maxLength={15}
                      />
                      {phoneError && (
                        <span className="mt-1 flex items-center gap-1 text-xs text-red-400">
                          <AlertCircle className="size-3" /> {phoneError}
                        </span>
                      )}
                    </label>

                    {/* Empresa */}
                    <label className="block sm:col-span-1">
                      <span className="mb-2 block text-xs font-medium text-text-secondary">
                        Empresa
                      </span>
                      <input
                        className={field}
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Nome da sua empresa"
                      />
                    </label>

                    {/* Interesse */}
                    <label className="block sm:col-span-2">
                      <span className="mb-2 block text-xs font-medium text-text-secondary">
                        Interesse principal
                      </span>
                      <select
                        className={field}
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

                    {/* Mensagem */}
                    <label className="block sm:col-span-2">
                      <span className="mb-2 block text-xs font-medium text-text-secondary">
                        Mensagem *
                      </span>
                      <textarea
                        required
                        rows={4}
                        className={`${field} resize-y`}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Conte o momento do seu negócio e o que você busca..."
                      />
                    </label>

                    {/* Error Feedback */}
                    {status === 'error' && errorMessage && (
                      <div className="sm:col-span-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-300 flex items-center gap-2">
                        <AlertCircle className="size-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="sm:col-span-2">
                      <Button type="submit" size="lg" disabled={status === 'sending'}>
                        {status === 'sending' ? 'Enviando lead...' : 'Enviar mensagem'}
                        <Send className="size-4" />
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
