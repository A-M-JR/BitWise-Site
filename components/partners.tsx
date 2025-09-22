"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Heart, Gem, Users, Star, Baby } from "lucide-react"
import Image from "next/image"

const partnerSites = [
  {
    title: "Legado & Conforto",
    description:
      "Plataforma digital para preservar e compartilhar memórias de quem partiu, de forma íntima, significativa e segura.",
    fullDescription:
      "Somos a Empresa Legado&Conforto e aqui lhe apresentamos carinhosamente um dos nossos produtos: APP Legado. Mais do que um aplicativo, somos uma plataforma que conecta memórias, emoções e pessoas. O APP LEGADO permite que famílias e amigos registrem fotos e mensagens de momentos especiais, criando um memorial digital que mantém viva a presença de quem foi importante para você.",
    url: "https://legadoeconforto.com.br/",
    image: "/images/projetos/legado-degrade.png",
    category: "Plataforma Digital",
    icon: Heart,
    color: "text-emerald-700",
    bgColor: "bg-emerald-400/10",
    borderColor: "border-emerald-600",
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    results: ["Memorial Digital Inovador", "Interface Intuitiva", "Segurança de Dados", "Experiência Emocional"],
    imageAspect: "aspect-[4/3]", // Mantive 4/3 para Legado & Conforto.
  },
  {
    title: "JPB Joias",
    description: "E-commerce especializado em venda de joias com design elegante e experiência de compra premium.",
    fullDescription:
      "Loja online especializada em vender joias com foco na experiência do cliente e apresentação premium dos produtos. Desenvolvemos uma plataforma que destaca a beleza e qualidade das peças, com navegação intuitiva e processo de compra otimizado.",
    url: "https://jpbjoias.com.br/",
    image: "/images/projetos/jpb.png",
    category: "E-commerce",
    icon: Gem,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400/20",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    results: ["Aumento nas Vendas", "UX Premium", "Catálogo Otimizado", "Checkout Simplificado"],
    imageAspect: "aspect-[4/3]", // Mudei para 4/3. Para a JPB Joias, 1:1 pode ser bom se o logo é quadrado. Teste se 4/3 ou 1/1 funciona melhor para o visual do logo dentro da imagem.
  },
{
    title: "Carmax Baterias",
    description: "Landing page voltada para serviços realizados na Carmax Baterias.",
    fullDescription:
      "A Carmax Baterias é uma empresa de alta tecnologia no ramo automotivo, especializada em produtos de ponta, como baterias de última geração, som automotivo e alarmes. Sua plataforma digital é uma vitrine para seus serviços e um ponto de contato para a excelência automotiva.",
    url: "https://www.carmaxbaterias.com.br/",
    image: "/images/projetos/carmax-logo.jpg",
    category: "Automotivo", 
    icon: 'Bolt', 
    color: "text-yellow-500", 
    bgColor: "bg-yellow-500/10", 
    borderColor: "border-yellow-500/20", 
    tech: ["Next.js", "Tailwind CSS", "Supabase", "Stripe"],
    results: [
      "Vitrine de Produtos Otimizada", 
      "Aumento na Geração de Leads", 
      "Presença Digital Forte", 
      "Comunicação Direta com o Cliente", 
    ],
    imageAspect: "aspect-[4/3]",
  }
]

const achievements = [
  {
    icon: Users,
    number: "3",
    label: "Empresas Parceiras",
    description: "Sites desenvolvidos e em funcionamento",
  },
  {
    icon: Star,
    number: "100%",
    label: "Satisfação",
    description: "Clientes satisfeitos com nossos serviços",
  },
  {
    icon: ExternalLink,
    number: "3",
    label: "Sites Ativos",
    description: "Projetos online gerando resultados",
  },
]

export default function Partners() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute("data-delay") || "0"
            setTimeout(() => {
              entry.target.classList.add("animate-scale")
            }, Number.parseInt(delay))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".partner-card")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary glow-text">Nossos</span>{" "}
            <span className="text-secondary glow-text-gold">Parceiros</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg mb-8">
            Conheça as empresas que confiaram na BitWise Agency para desenvolver suas soluções digitais.
            <strong className="text-primary"> Cada projeto é uma história de sucesso!</strong>
          </p>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg border border-white/10 max-w-3xl mx-auto">
            <p className="text-foreground/90 italic">
              💼 <strong>Empresas Parceiras:</strong> Desenvolvemos soluções personalizadas que geram resultados reais.
              Cada site é único e criado especificamente para as necessidades do cliente.
            </p>
          </div>
        </div>

        {/* Estatísticas dos Parceiros */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="partner-card text-center border border-white/5 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 opacity-0"
              data-delay={index * 100}
            >
              <CardContent className="pt-6">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-primary/20">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold mb-1 text-secondary">{achievement.number}</div>
                <div className="font-medium mb-1">{achievement.label}</div>
                <div className="text-sm text-foreground/90">{achievement.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sites dos Parceiros - NOVO LAYOUT MAIS COMPACTO */}
        {/* Usando um grid responsivo para cards menores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnerSites.map((site, index) => (
            <Card
              key={index}
              // Removido `overflow-hidden` do card para que o hover da imagem funcione sem cortar
              className={`partner-card border ${site.borderColor} ${site.bgColor} backdrop-blur-sm hover:border-primary/50 transition-all duration-300 opacity-0`}
              data-delay={300 + index * 150} // Ajustei o delay para animações sequenciais
            >
              {/* Ajustei o padding do CardContent e adicionei flex-col para layout vertical */}
              <CardContent className="p-4 flex flex-col h-full">
                {/* Contêiner da imagem com aspect-ratio para proporção */}
                <div className={`relative ${site.imageAspect || "aspect-[4/3]"} overflow-hidden rounded-md mb-4`}>
                  {/* Image do Next.js agora dentro de um contêiner com proporção */}
                  <Image
                    src={site.image || "/placeholder.svg"}
                    alt={site.title}
                    // Definindo width e height para otimização do Next.js.
                    // Para 4:3, um bom par pode ser 1200x900, 800x600, etc.
                    // O importante é que a proporção 4/3 seja mantida aqui para otimização.
                    width={1200}
                    height={900}
                    // w-full h-full para preencher o div pai com aspect-ratio
                    // object-cover para evitar distorção e cortar o excesso
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Gradiente e Botão de Link no topo da imagem */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-2 right-2">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      onClick={() => window.open(site.url, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Bloco de Informações do Card */}
                {/* Icone e Categoria */}
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-1.5 rounded-lg ${site.bgColor}`}>
                    <site.icon className={`h-5 w-5 ${site.color}`} />
                  </div>
                  <span className={`text-xs ${site.color} font-medium`}>{site.category}</span>
                </div>
                {/* Título */}
                <h3 className="text-lg font-bold mb-2">{site.title}</h3>
                {/* Descrição - usando line-clamp para limitar a 2 linhas e manter altura consistente */}
                <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{site.description}</p>

                {/* Botão Visitar Site - com mt-auto para alinhar na parte inferior */}
                <Button
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity mt-auto"
                  size="sm" // Tamanho menor para o botão no card compacto
                  onClick={() => window.open(site.url, "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visitar
                </Button>
                {/* Removido Tecnologias e Resultados detalhados para o card compacto */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action (mantido igual) */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">Quer ser nosso</span>{" "}
              <span className="text-secondary">próximo parceiro?</span>
            </h3>
            <p className="text-foreground/80 mb-6 text-lg">
              Assim como a Legado & Conforto e JPB Joias, sua empresa pode ter uma presença digital de alto impacto.
              Nossos vendedores especializados estão prontos para criar a solução perfeita para seu negócio.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() =>
                  window.open(
                    "https://wa.me/5545999403598?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.",
                    "_blank"
                  )
                }
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-black font-semibold transition-all group"
              >
                <Heart className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Falar com Vendedor Especializado
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                Ver Mais Projetos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}