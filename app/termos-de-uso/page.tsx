import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Termos de Uso | BitWise Agency",
    description: "Confira os termos e condições gerais para a utilização do site e dos serviços digitais oferecidos pela BitWise Agency.",
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
    keywords: ["termos de uso", "bitwise agency", "condições de uso", "contrato de serviço digital"],
    openGraph: {
        title: "Termos de Uso | BitWise Agency",
        description: "Confira os termos e condições gerais para a utilização do site e dos serviços digitais oferecidos pela BitWise Agency.",
        url: "https://bitwiseagency.com.br/termos-de-uso",
        siteName: "BitWise Agency",
        images: [
            {
                url: "https://bitwiseagency.com.br/images/og-bitwise.png",
                width: 1200,
                height: 630,
                alt: "Termos de Uso da BitWise Agency",
            },
        ],
        locale: 'pt_BR',
        type: 'website',
    },
    alternates: {
        canonical: 'https://bitwiseagency.com.br/termos-de-uso',
    },
};

export default function TermosDeUso() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-10 text-sm leading-relaxed text-gray-300 bg-gray-900 shadow-lg rounded-lg my-8">
            <h1 className="text-4xl font-extrabold text-center text-blue-400 mb-8">Termos de Uso</h1>

            <p className="mb-6 text-base">
                Bem-vindo ao site da <strong>BitWise Agency</strong>. Ao acessar e utilizar este site, bem como os serviços nele oferecidos, você concorda em cumprir e estar vinculado aos seguintes <strong>Termos de Uso</strong> e à nossa <a href="/politica-de-privacidade" className="text-blue-400 hover:underline">Política de Privacidade</a>. Caso não concorde com qualquer um dos termos, por favor, não utilize nossos serviços e funcionalidades.
            </p>
            <p className="mb-6 text-base">
                Estes Termos de Uso aplicam-se a todos os visitantes, usuários e outros que acessam ou usam o Serviço.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">1. Aceitação dos Termos</h2>
            <p className="mb-4">
                Ao utilizar o site da <strong>BitWise Agency</strong>, você declara ter lido, compreendido e aceito integralmente estes Termos de Uso, que podem ser atualizados periodicamente. Seus termos permanecem válidos e vinculantes enquanto você utilizar o site.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">2. Uso do Site e dos Serviços</h2>
            <p className="mb-4">
                O conteúdo disponível neste site destina-se a informar sobre os serviços de desenvolvimento de software, design, consultoria e outras soluções digitais oferecidas pela <strong>BitWise Agency</strong>.
            </p>
            <ul className="list-disc ml-5 space-y-2 mb-6">
                <li><strong>Acesso e Disponibilidade:</strong> A BitWise Agency se esforça para manter o site e seus serviços disponíveis, mas não garante acesso ininterrupto ou livre de erros.</li>
                <li><strong>Finalidade:</strong> O site deve ser utilizado apenas para fins legítimos e de acordo com estes Termos de Uso.</li>
                <li><strong>Proibições:</strong> É estritamente proibido:
                    <ul className="list-circle ml-5 mt-2">
                        <li>Utilizar o site para qualquer finalidade ilegal ou fraudulenta.</li>
                        <li>Interferir na operação do site, incluindo o envio de vírus ou outros códigos maliciosos.</li>
                        <li>Coletar informações de outros usuários sem consentimento.</li>
                        <li>Tentar obter acesso não autorizado a sistemas ou redes conectadas ao site.</li>
                        <li>Realizar engenharia reversa, descompilar ou desmontar qualquer parte do site.</li>
                    </ul>
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">3. Propriedade Intelectual</h2>
            <p className="mb-6">
                Todo o conteúdo presente no site da <strong>BitWise Agency</strong>, incluindo, mas não se limitando a textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais, compilações de dados, software e o design visual, é de propriedade exclusiva da <strong>BitWise Agency</strong> ou de seus licenciadores e é protegido pelas leis brasileiras e internacionais de direitos autorais e propriedade intelectual. A reprodução, modificação, distribuição, transmissão, exibição ou performance de qualquer parte do conteúdo sem autorização prévia por escrito da <strong>BitWise Agency</strong> é estritamente proibida.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">4. Obrigações e Conduta do Usuário</h2>
            <p className="mb-4">
                Ao utilizar os formulários de contato ou quaisquer outras funcionalidades interativas do site, o usuário se compromete a:
            </p>
            <ul className="list-disc ml-5 space-y-2 mb-6">
                <li>Fornecer informações verdadeiras, precisas, completas e atualizadas.</li>
                <li>Manter a confidencialidade de quaisquer credenciais de acesso, se aplicável, sendo o único responsável por todas as atividades que ocorram sob sua conta.</li>
                <li>Não se passar por outra pessoa ou entidade.</li>
                <li>Não violar estes Termos de Uso ou quaisquer leis e regulamentos aplicáveis.</li>
            </ul>
            <p className="mb-6">
                A <strong>BitWise Agency</strong> não se responsabiliza por danos ou prejuízos resultantes de informações incorretas, falsas ou desatualizadas fornecidas pelo usuário, nem pelo uso indevido do site ou de seus serviços.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">5. Links para Sites de Terceiros</h2>
            <p className="mb-6">
                Nosso site pode conter links para sites, serviços ou recursos de terceiros que não são de propriedade ou controlados pela <strong>BitWise Agency</strong>. Não temos controle sobre e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros. Você reconhece e concorda que a <strong>BitWise Agency</strong> não será responsável, direta ou indiretamente, por qualquer dano ou perda causada ou alegadamente causada por ou em conexão com o uso ou dependência de qualquer conteúdo, bens ou serviços disponíveis em ou através de quaisquer sites ou serviços de terceiros.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">6. Isenção de Garantias</h2>
            <p className="mb-6">
                O site e seus serviços são fornecidos "como estão" e "conforme disponíveis", sem garantias de qualquer tipo, expressas ou implícitas, incluindo, mas não se limitando a, garantias implícitas de comercialização, adequação a uma finalidade específica, não infração ou curso de desempenho. A <strong>BitWise Agency</strong> não garante que o site funcionará sem interrupções, será seguro ou livre de erros; que quaisquer defeitos serão corrigidos; ou que o site ou o servidor que o torna disponível estão livres de vírus ou outros componentes prejudiciais.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">7. Limitação de Responsabilidade</h2>
            <p className="mb-6">
                Em nenhuma circunstância a <strong>BitWise Agency</strong>, seus diretores, funcionários, parceiros, agentes, fornecedores ou afiliados serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, sem limitação, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis, resultantes: (i) do seu acesso ou uso ou incapacidade de acessar ou usar o Serviço; (ii) de qualquer conduta ou conteúdo de terceiros no Serviço; (iii) de qualquer conteúdo obtido do Serviço; e (iv) de acesso não autorizado, uso ou alteração de suas transmissões ou conteúdo, seja com base em garantia, contrato, delito (incluindo negligência) ou qualquer outra teoria legal, independentemente de termos sido informados sobre a possibilidade de tais danos.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">8. Indenização</h2>
            <p className="mb-6">
                Você concorda em defender, indenizar e isentar de responsabilidade a <strong>BitWise Agency</strong>, seus licenciadores e seus respectivos funcionários, contratados, agentes, diretores e oficiais, de e contra todas e quaisquer reivindicações, danos, obrigações, perdas, responsabilidades, custos ou dívidas, e despesas (incluindo, mas não se limitando a honorários advocatícios), resultantes de (a) seu uso e acesso ao Serviço, por você ou qualquer pessoa que utilize sua conta e senha; (b) uma violação destes Termos; ou (c) o conteúdo postado no Serviço.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">9. Rescisão</h2>
            <p className="mb-6">
                Podemos rescindir ou suspender seu acesso ao nosso Serviço imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo, sem limitação, se você violar os Termos. Todas as disposições dos Termos que, por sua natureza, deveriam sobreviver à rescisão, sobreviverão à rescisão, incluindo, sem limitação, disposições de propriedade, isenções de garantia, indenização e limitações de responsabilidade.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">10. Modificações nos Termos</h2>
            <p className="mb-6">
                A <strong>BitWise Agency</strong> reserva-se o direito de modificar ou substituir estes Termos de Uso a qualquer momento, a nosso exclusivo critério. Notificaremos você sobre quaisquer alterações publicando os novos termos nesta página. Ao continuar a acessar ou usar nosso Serviço após essas revisões entrarem em vigor, você concorda em ficar vinculado aos termos revisados. Se você não concordar com os novos termos, não utilize o Serviço.
            </p>
            <p className="font-semibold text-right text-gray-500">Última atualização: 12 de junho de 2025.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">11. Disposições Gerais</h2>
            <ul className="list-disc ml-5 space-y-2 mb-6">
                <li><strong>Integralidade do Acordo:</strong> Estes Termos de Uso, juntamente com a Política de Privacidade, constituem o acordo integral entre você e a <strong>BitWise Agency</strong> em relação ao uso do site.</li>
                <li><strong>Nulidade Parcial:</strong> Se qualquer disposição destes Termos for considerada inválida ou inexequível por um tribunal competente, as demais disposições permanecerão em pleno vigor e efeito.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">12. Lei Aplicável e Foro</h2>
            <p className="mb-6">
                Estes Termos de Uso serão regidos e interpretados de acordo com as leis da <strong>República Federativa do Brasil</strong>. Fica eleito o foro da Comarca de <strong>Cascavel, Estado do Paraná</strong>, para dirimir quaisquer dúvidas ou litígios decorrentes destes Termos, com a exclusão de qualquer outro, por mais privilegiado que seja.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">13. Contato</h2>
            <p className="mb-6">
                Em caso de dúvidas sobre estes Termos de Uso, entre em contato com nossa equipe pelo e-mail:{" "}
                <a href="mailto:bitwiseagency@gmail.com
" className="text-blue-400 hover:underline font-medium">bitwiseagency@gmail.com
                </a>
            </p>
        </main>
    );
}