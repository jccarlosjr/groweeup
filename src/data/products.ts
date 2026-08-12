import {
  Megaphone,
  MessageSquareText,
  LineChart,
  Share2,
  Settings2,
  Code,
  type LucideIcon,
} from 'lucide-react'

export type Product = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  tags: string[]
}

export const products: Product[] = [
  {
    id: 'consultoria',
    title: 'Consultoria em Marketing e Branding',
    description:
      'Posicionamento, narrativa e plano de crescimento alinhados ao negócio.',
    icon: Megaphone,
    tags: ['Estratégia', 'Marca'],
  },
  {
    id: 'crm-whatsapp',
    title: 'CRM para API de WhatsApp',
    description:
      'Atendimento, funis e automações no canal que conecta o mundo inteiro.',
    icon: MessageSquareText,
    tags: ['CRM', 'WhatsApp'],
  },
  {
    id: 'trafego',
    title: 'Tráfego Pago',
    description:
      'Campanhas e criativos, para conectar sua marca aos seus clientes.',
    icon: LineChart,
    tags: ['Ads', 'Performance'],
  },
  {
    id: 'social',
    title: 'Gerenciamento de Redes Sociais',
    description:
      'Conteúdo, calendário e comunidade com consistência de marca e métricas que importam.',
    icon: Share2,
    tags: ['Conteúdo', 'Social'],
  },
  {
    id: 'meta-business',
    title: 'Configuração da API Oficial do WhatsApp',
    description:
      'Configuração e lançamento do WhatsApp Business API, para conectar sua marca aos seus clientes.',
    icon: Settings2,
    tags: ['Setup', 'Meta'],
  },
  {
    id: 'sites-landing',
    title: 'Sistemas e Sites',
    description:
      'Desenvolvimento de sistemas e sites, para presença digital e credibilidade dos dados.',
    icon: Code,
    tags: ['SaaS', 'Sites'],
  },
]
