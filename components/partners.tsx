"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Heart, Gem, Users, Star } from "lucide-react"
import Image from "next/image"

// Empresas parceiras - Sites desenvolvidos pela BitWise
const partnerSites = [
  {
    title: "Legado & Conforto",
    description:
      "Plataforma digital para preservar e compartilhar memórias de quem partiu, de forma íntima, significativa e segura.",
    fullDescription:
      "Somos a Empresa Legado&Conforto e aqui lhe apresentamos carinhosamente um dos nossos produtos: APP Legado. Mais do que um aplicativo, somos uma plataforma que conecta memórias, emoções e pessoas. O APP LEGADO permite que famílias e amigos registrem fotos e mensagens de momentos especiais, criando um memorial digital que mantém viva a presença de quem foi importante para você.",
    url: "https://legadoeconforto.com.br/",
    image: "/placeholder.svg?height=300&width=400",
    category: "Plataforma Digital",
    icon: Heart,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-400/20",
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    results: ["Memorial Digital Inovador", "Interface Intuitiva", "Segurança de Dados", "Experiência Emocional"],
  },
  {
    title: "JPB Joias",
    description: "E-commerce especializado em venda de joias com design elegante e experiência de compra premium.",
    fullDescription:
      "Loja online especializada em vender joias com foco na experiência do cliente e apresentação premium dos produtos. Desenvolvemos uma plataforma que destaca a beleza e qualidade das peças, com navegação intuitiva e processo de compra otimizado.",
    url: "https://jpbjoias.com.br/",
    image: "/placeholder.svg?height=300&width=400",
    category: "E-commerce",
    icon: Gem,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400/20",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    results: ["Aumento nas Vendas", "UX Premium", "Catálogo Otimizado", "Checkout Simplificado"],
  },
]

const achievements = [
  {
    icon: Users,
    number: "2",
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
    number: "2",
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
                <div className="text-sm text-foreground/70">{achievement.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sites dos Parceiros */}
        <div className="space-y-12">
          {partnerSites.map((site, index) => (
            <Card
              key={index}
              className={`partner-card border ${site.borderColor} ${site.bgColor} backdrop-blur-sm hover:border-primary/50 transition-all duration-300 opacity-0 overflow-hidden`}
              data-delay={300 + index * 200}
            >
              <CardContent className="p-0">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Imagem */}
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={site.image || "/placeholder.svg"}
                      alt={site.title}
                      width={600}
                      height={400}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                        onClick={() => window.open(site.url, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className={`p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg ${site.bgColor}`}>
                        <site.icon className={`h-6 w-6 ${site.color}`} />
                      </div>
                      <div>
                        <span className={`text-sm ${site.color} font-medium`}>{site.category}</span>
                        <h3 className="text-2xl font-bold">{site.title}</h3>
                      </div>
                    </div>

                    <p className="text-foreground/80 mb-4 text-lg">{site.description}</p>

                    <p className="text-foreground/70 mb-6 text-sm leading-relaxed">{site.fullDescription}</p>

                    {/* Tecnologias */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Tecnologias Utilizadas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {site.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 ${site.bgColor} ${site.color} text-xs rounded-full border ${site.borderColor}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Resultados */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Resultados Alcançados:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {site.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center gap-2">
                            <div className={`w-2 h-2 ${site.color.replace("text-", "bg-")} rounded-full`} />
                            <span className="text-sm text-foreground/80">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      className={`bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity`}
                      onClick={() => window.open(site.url, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visitar Site
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
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
