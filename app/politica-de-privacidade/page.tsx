import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidade | BitWise Agency",
    description: "Saiba como a BitWise Agency coleta, armazena, usa e protege suas informações pessoais, em conformidade com a LGPD. Sua segurança e transparência são nossa prioridade.",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    keywords: ["política de privacidade", "bitwise agency", "LGPD", "dados pessoais", "segurança da informação", "privacidade de dados"],
    openGraph: {
        title: "Política de Privacidade | BitWise Agency",
        description: "Saiba como a BitWise Agency coleta, armazena, usa e protege suas informações pessoais, em conformidade com a LGPD. Sua segurança e transparência são nossa prioridade.",
        url: "https://bitwiseagency.com.br/politica-de-privacidade",
        siteName: "BitWise Agency",
        images: [
            {
                url: "https://bitwiseagency.com.br/og-image.jpg", // Substitua pela URL de uma imagem relevante
                width: 1200,
                height: 630,
                alt: "Política de Privacidade da BitWise Agency",
            },
        ],
        locale: 'pt_BR',
        type: 'website',
    },

    alternates: {
        canonical: 'https://bitwiseagency.com.br/politica-de-privacidade',
    },
};

export default function PoliticaDePrivacidade() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-10 text-sm leading-relaxed text-gray-300 bg-gray-900 shadow-lg rounded-lg my-8">
            <h1 className="text-4xl font-extrabold text-center text-blue-400 mb-8">Política de Privacidade</h1>

            <p className="mb-6 text-base">
                Na <strong>BitWise Agency</strong>, levamos sua privacidade a sério e estamos comprometidos com a proteção dos seus dados pessoais. Esta Política de Privacidade detalha como coletamos, usamos, armazenamos e protegemos as informações fornecidas pelos usuários em nosso site <strong>bitwiseagency.com.br</strong>, em total conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>.
            </p>
            <p className="mb-6 text-base">
                Ao utilizar nossos serviços e navegar em nosso site, você concorda com os termos desta política. Recomendamos a leitura completa deste documento.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">1. Definições Importantes</h2>
            <ul className="list-disc ml-5 space-y-2 mb-6">
                <li><strong>Dados Pessoais:</strong> Qualquer informação relacionada a pessoa natural identificada ou identificável.</li>
                <li><strong>Tratamento:</strong> Qualquer operação realizada com dados pessoais, como coleta, armazenamento, uso, acesso, transmissão, dentre outros.</li>
                <li><strong>Controlador:</strong> A BitWise Agency, responsável pelas decisões referentes ao tratamento dos seus dados pessoais.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">2. Informações que Coletamos</h2>
            <p className="mb-4">Coletamos os seguintes tipos de informações:</p>
            <ul className="list-disc ml-5 space-y-2">
                <li><strong>Dados Pessoais Fornecidos por Você:</strong> Incluem nome, e-mail, telefone, nome da empresa e qualquer outra informação que você insira voluntariamente em formulários de contato, solicitação de orçamento ou inscrição em newsletters.</li>
                <li><strong>Dados de Navegação:</strong> Coletamos informações automaticamente através de cookies e tecnologias similares, como endereço IP, tipo de navegador, páginas visitadas, tempo de permanência no site e interações. Isso nos ajuda a entender como os usuários utilizam nosso site e a melhorar a experiência.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">3. Como Utilizamos Suas Informações (Finalidades e Base Legal)</h2>
            <p className="mb-4">Utilizamos suas informações para as seguintes finalidades, com as respectivas bases legais da LGPD:</p>
            <ul className="list-disc ml-5 space-y-2">
                <li>
                    <strong>Para Contato e Atendimento:</strong>
                    <ul className="list-circle ml-5">
                        <li>Finalidade: Responder às suas perguntas, solicitações de orçamento e fornecer suporte.</li>
                        <li>Base Legal: Execução de contrato ou procedimentos preliminares relacionados a contrato (Art. 7º, V, LGPD) e Legítimo Interesse (Art. 7º, IX, LGPD).</li>
                    </ul>
                </li>
                <li>
                    <strong>Para Marketing e Comunicação:</strong>
                    <ul className="list-circle ml-5">
                        <li>Finalidade: Enviar newsletters, promoções e informações sobre nossos serviços.</li>
                        <li>Base Legal: Consentimento (Art. 7º, I, LGPD), quando aplicável. Você pode cancelar a inscrição a qualquer momento.</li>
                    </ul>
                </li>
                <li>
                    <strong>Para Melhoria dos Serviços e do Site:</strong>
                    <ul className="list-circle ml-5">
                        <li>Finalidade: Analisar o desempenho do site, identificar tendências de uso e otimizar a navegação e a oferta de serviços.</li>
                        <li>Base Legal: Legítimo Interesse (Art. 7º, IX, LGPD).</li>
                    </ul>
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">4. Compartilhamento com Terceiros</h2>
            <p className="mb-6">
                A <strong>BitWise Agency</strong> não vende, aluga ou compartilha suas informações pessoais com terceiros para fins de marketing. No entanto, podemos compartilhar seus dados em situações específicas:
            </p>
            <ul className="list-disc ml-5 space-y-2">
                <li><strong>Prestadores de Serviço:</strong> Com parceiros e fornecedores que nos auxiliam na operação do site, como ferramentas de envio de e-mail, plataformas de CRM (Customer Relationship Management) e serviços de hospedagem. Esses parceiros são contratualmente obrigados a proteger seus dados e utilizá-los apenas para os fins específicos para os quais foram contratados.</li>
                <li><strong>Exigência Legal ou Regulatório:</strong> Quando exigido por lei, ordem judicial ou regulamentação aplicável, para proteger nossos direitos, propriedade ou segurança, ou de terceiros.</li>
                <li><strong>Reorganização Societária:</strong> Em caso de fusão, aquisição ou venda de ativos, seus dados podem ser transferidos para a nova entidade.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">5. Armazenamento e Segurança dos Dados</h2>
            <p className="mb-4">
                Seus dados pessoais são armazenados em servidores seguros, utilizando tecnologias e procedimentos de segurança da informação atualizados para proteger contra acessos não autorizados, perdas, vazamentos ou alterações. Empregamos medidas como criptografia, firewalls e controle de acesso.
            </p>
            <p className="mb-6">
                <strong>Tempo de Retenção:</strong> Seus dados serão mantidos pelo tempo necessário para cumprir as finalidades para as quais foram coletados, para cumprir obrigações legais ou regulatórias, ou para o exercício regular de direitos em processos judiciais, administrativos ou arbitrais.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">6. Uso de Cookies e Tecnologias Semelhantes</h2>
            <p className="mb-4">
                Utilizamos cookies e outras tecnologias de rastreamento para melhorar sua experiência de navegação, personalizar conteúdo, analisar o tráfego do site e lembrar suas preferências.
            </p>
            <ul className="list-disc ml-5 space-y-2 mb-6">
                <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site.</li>
                <li><strong>Cookies de Desempenho:</strong> Coletam informações sobre como você usa o site para melhorar sua performance.</li>
                <li><strong>Cookies de Funcionalidade:</strong> Lembram suas escolhas para personalizar sua experiência.</li>
                <li><strong>Cookies de Publicidade:</strong> Usados para exibir anúncios mais relevantes a você.</li>
            </ul>
            <p className="mb-6">Você pode gerenciar ou desativar os cookies a qualquer momento através das configurações do seu navegador. Contudo, a desativação de certos cookies pode afetar a funcionalidade do site.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">7. Seus Direitos como Titular dos Dados (LGPD)</h2>
            <p className="mb-4">
                De acordo com a LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:
            </p>
            <ul className="list-disc ml-5 space-y-2">
                <li><strong>Confirmação e Acesso:</strong> Saber se seus dados estão sendo tratados e acessá-los.</li>
                <li><strong>Correção:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
                <li><strong>Anonimização, Bloqueio ou Eliminação:</strong> De dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.</li>
                <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado e transferi-los a outro fornecedor de serviço ou produto.</li>
                <li><strong>Eliminação:</strong> Solicitar a eliminação de dados tratados com seu consentimento, exceto nas hipóteses previstas em lei.</li>
                <li><strong>Informação sobre Compartilhamento:</strong> Saber com quais entidades públicas e privadas a BitWise Agency compartilhou seus dados.</li>
                <li><strong>Informação sobre Não Fornecimento do Consentimento:</strong> Ser informado sobre as consequências de não fornecer o consentimento para o tratamento de seus dados.</li>
                <li><strong>Revogação do Consentimento:</strong> Retirar seu consentimento a qualquer momento, sem afetar a legalidade do tratamento realizado antes da revogação.</li>
                <li><strong>Oposição:</strong> Opor-se a tratamentos de dados que não estejam em conformidade com a LGPD.</li>
            </ul>
            <p className="mt-6">Para exercer qualquer um desses direitos, por favor, entre em contato conosco através do e-mail: <a href="mailto:bitwiseagency@gmail.com" className="text-blue-400 hover:underline font-medium">bitwiseagency@gmail.com</a>. Faremos o possível para atender à sua solicitação no prazo legal.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">8. Dados de Crianças e Adolescentes</h2>
            <p className="mb-6">
                Nosso site e serviços não são direcionados a crianças e adolescentes. Não coletamos intencionalmente dados pessoais de indivíduos com menos de 18 anos. Caso tenhamos conhecimento de que dados de menores foram coletados sem o consentimento dos pais ou responsáveis legais, faremos os esforços razoáveis para removê-los de nossos registros.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">9. Transferência Internacional de Dados</h2>
            <p className="mb-6">
                Caso seus dados pessoais sejam transferidos para outros países (por exemplo, através de serviços de nuvem ou ferramentas de análise hospedadas fora do Brasil), a <strong>BitWise Agency</strong> se compromete a garantir que essas transferências ocorram em conformidade com a LGPD, utilizando mecanismos como Cláusulas Contratuais Padrão ou outras salvaguardas apropriadas.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">10. Alterações nesta Política de Privacidade</h2>
            <p className="mb-6">
                Esta política de privacidade poderá ser atualizada periodicamente para refletir mudanças em nossas práticas ou em virtude de novas regulamentações legais. A versão mais recente estará sempre disponível em nosso site. Recomendamos que você a revise regularmente.
            </p>
            <p className="font-semibold text-right text-gray-500">Última atualização: 10 de junho de 2025.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">11. Como Falar Conosco</h2>
            <p className="mb-6">
                Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados pessoais, por favor, entre em contato com nosso Encarregado de Dados (DPO) através do e-mail: <a href="mailto:bitwiseagency@gmail.com" className="text-blue-400 hover:underline font-medium">bitwiseagency@gmail.com</a>.
            </p>
        </main>
    );
}