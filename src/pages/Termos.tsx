import { LegalLayout } from '@/components/sections/LegalLayout'

export function Termos() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Termos de Serviço"
      updatedAt="03 de agosto de 2026"
      intro="Estes Termos regulam o uso do site e dos serviços da Growee Up. Ao navegar ou contratar, você declara ter lido e compreendido as condições abaixo."
      sections={[
        {
          id: 'objeto',
          title: '1. Objeto',
          content: (
            <>
              <p>
                Os presentes Termos de Serviço (“Termos”) estabelecem as condições gerais de uso do
                website institucional da Growee Up e a contratação de serviços de consultoria em
                marketing, branding, tráfego pago, gerenciamento de redes sociais, CRM para API de
                WhatsApp e configuração do Meta Business.
              </p>
              <p>
                A prestação efetiva de serviços será detalhada em proposta comercial, contrato ou
                ordem de serviço específica, que prevalecerá em caso de conflito com estas
                disposições gerais.
              </p>
            </>
          ),
        },
        {
          id: 'cadastro',
          title: '2. Cadastro e Uso',
          content: (
            <>
              <p>
                O usuário compromete-se a fornecer informações verdadeiras nos formulários de
                contato e a utilizar o site de forma lícita, sem tentar comprometer a segurança,
                disponibilidade ou integridade da plataforma.
              </p>
              <p>
                A Growee Up poderá recusar, suspender ou encerrar o atendimento a solicitações que
                violem estes Termos ou a legislação aplicável.
              </p>
            </>
          ),
        },
        {
          id: 'planos',
          title: '3. Planos e Pagamento',
          content: (
            <>
              <p>
                Valores, prazos, escopo e forma de pagamento serão definidos em proposta comercial
                aceita pelo cliente. Serviços recorrentes poderão ser cobrados mensalmente, conforme
                acordado.
              </p>
              <p>
                Atrasos no pagamento poderão resultar em suspensão dos serviços após aviso prévio,
                sem prejuízo da cobrança de valores devidos.
              </p>
            </>
          ),
        },
        {
          id: 'responsabilidades',
          title: '4. Responsabilidades',
          content: (
            <>
              <p>
                A Growee Up empregará esforços razoáveis para executar os serviços com qualidade
                técnica. Resultados de marketing dependem de fatores externos (mercado, produto,
                orçamento, aprovação de criativos, políticas de plataformas) e não são garantidos de
                forma absoluta.
              </p>
              <p>
                O cliente é responsável por fornecer acessos, materiais, aprovações e informações
                necessárias em tempo hábil, bem como por garantir que possui direitos sobre
                conteúdos e dados fornecidos.
              </p>
            </>
          ),
        },
        {
          id: 'propriedade',
          title: '5. Propriedade Intelectual',
          content: (
            <>
              <p>
                Marcas, logos, textos, layouts e demais elementos do site são de titularidade da
                Growee Up ou de licenciantes, sendo vedada a reprodução sem autorização.
              </p>
              <p>
                Entregáveis produzidos no âmbito de contratos específicos terão titularidade
                definida no instrumento contratual correspondente.
              </p>
            </>
          ),
        },
        {
          id: 'cancelamento',
          title: '6. Cancelamento',
          content: (
            <>
              <p>
                O cancelamento de serviços recorrentes deverá observar o aviso prévio e as condições
                previstas no contrato ou proposta. Valores referentes a períodos já executados ou
                investimentos de mídia já comprometidos permanecerão devidos.
              </p>
            </>
          ),
        },
        {
          id: 'gerais',
          title: '7. Disposições Gerais',
          content: (
            <>
              <p>
                Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o
                foro da comarca da sede da Growee Up, salvo disposição legal em contrário.
              </p>
              <p>
                A Growee Up poderá atualizar estes Termos a qualquer momento, publicando a nova
                versão neste site com indicação da data de atualização.
              </p>
            </>
          ),
        },
      ]}
    />
  )
}
