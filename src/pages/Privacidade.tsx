import { LegalLayout } from '@/components/sections/LegalLayout'

export function Privacidade() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Política de Privacidade"
      updatedAt="03 de agosto de 2026"
      intro="Esta Política descreve como a Growee Up trata dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)."
      sections={[
        {
          id: 'dados',
          title: '1. Dados coletados',
          content: (
            <>
              <p>Podemos coletar, conforme a interação com o site ou serviços:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Dados de identificação e contato (nome, e-mail, empresa, telefone);</li>
                <li>Conteúdo de mensagens enviadas por formulários;</li>
                <li>Dados de navegação e dispositivo (IP, páginas visitadas, cookies);</li>
                <li>Dados operacionais necessários à execução de contratos de serviço.</li>
              </ul>
            </>
          ),
        },
        {
          id: 'finalidade',
          title: '2. Finalidade do tratamento',
          content: (
            <>
              <p>Utilizamos dados pessoais para:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Responder solicitações de contato e orçamento;</li>
                <li>Executar e melhorar serviços contratados;</li>
                <li>Cumprir obrigações legais e regulatórias;</li>
                <li>Analisar uso do site e aprimorar a experiência;</li>
                <li>Comunicar novidades relacionadas aos serviços, quando houver base legal.</li>
              </ul>
            </>
          ),
        },
        {
          id: 'compartilhamento',
          title: '3. Compartilhamento de dados',
          content: (
            <>
              <p>
                Podemos compartilhar dados com prestadores de infraestrutura (hospedagem, e-mail,
                analytics) e plataformas necessárias à operação dos serviços (ex.: Meta, Google),
                sempre sob contratos e medidas adequadas de segurança.
              </p>
              <p>
                Não vendemos dados pessoais. O compartilhamento com autoridades ocorrerá quando
                houver obrigação legal ou ordem válida.
              </p>
            </>
          ),
        },
        {
          id: 'direitos',
          title: '4. Direitos do titular (LGPD)',
          content: (
            <>
              <p>Nos termos da LGPD, você pode solicitar:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Confirmação da existência de tratamento e acesso aos dados;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                <li>Portabilidade e informação sobre compartilhamentos;</li>
                <li>Revogação do consentimento, quando esta for a base legal.</li>
              </ul>
              <p>
                Para exercer seus direitos, entre em contato pelo e-mail indicado na seção de
                Contato do DPO.
              </p>
            </>
          ),
        },
        {
          id: 'cookies',
          title: '5. Cookies',
          content: (
            <>
              <p>
                Utilizamos cookies e tecnologias similares para funcionamento do site, preferências
                e métricas de audiência. Você pode gerenciar cookies nas configurações do navegador;
                a desativação pode impactar algumas funcionalidades.
              </p>
            </>
          ),
        },
        {
          id: 'seguranca',
          title: '6. Segurança',
          content: (
            <>
              <p>
                Adotamos medidas técnicas e organizacionais razoáveis para proteger dados pessoais
                contra acessos não autorizados, perda ou alteração. Nenhum sistema é totalmente
                isento de riscos; em caso de incidente relevante, adotaremos os procedimentos
                previstos na legislação.
              </p>
            </>
          ),
        },
        {
          id: 'dpo',
          title: '7. Contato do DPO',
          content: (
            <>
              <p>
                Para dúvidas sobre privacidade ou exercício de direitos, contate nosso canal de
                proteção de dados:
              </p>
              <p>
                <strong className="text-text-primary">E-mail:</strong>{' '}
                <a href="mailto:privacidade@groweeup.com" className="text-accent-primary hover:underline">
                  privacidade@groweeup.com
                </a>
              </p>
              <p>Esta Política poderá ser atualizada periodicamente, com indicação da data vigente.</p>
            </>
          ),
        },
      ]}
    />
  )
}
