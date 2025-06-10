"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Lightbulb, Users, TrendingUp, Award, Rocket, Heart, Zap, CheckCircle2 } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Inovação Constante",
    description:
      "Estamos sempre em busca das mais recentes tecnologias e tendências para oferecer soluções inovadoras.",
    color: "text-primary",
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Cada landing page é desenvolvida com foco na conversão e no retorno do investimento do cliente.",
    color: "text-secondary",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Entendemos que cada empresa é única e oferecemos soluções sob medida para cada necessidade.",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    title: "Crescimento Contínuo",
    description: "Investimos constantemente em aprendizado e capacitação para acompanhar as evoluções do mercado.",
    color: "text-secondary",
  },
]

const stats = [
  { number: "100+", label: "Projetos Entregues", icon: Award },
  { number: "50+", label: "Clientes Satisfeitos", icon: Heart },
  { number: "3+", label: "Anos de Experiência", icon: Rocket },
  { number: "24/7", label: "Suporte Disponível", icon: Zap },
]

const expertise = [
  "Landing Pages de Alta Conversão",
  "Desenvolvimento Web Responsivo",
  "Otimização para SEO",
  "Integração com Ferramentas de Marketing",
  "Analytics e Monitoramento",
  "Testes A/B e Otimização",
  "Design UX/UI Profissional",
  "Automação de Processos",
]

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute("data-delay") || "0"
            setTimeout(() => {
              entry.target.classList.add("animate-slide-up")
            }, Number.parseInt(delay))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".about-animate")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-background/95 to-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 about-animate opacity-0" data-delay="0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary glow-text">Sobre</span>{" "}
            <span className="text-secondary glow-text-gold">Nós</span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Somos a BitWise Agency, especialistas em desenvolver landing pages e buscar soluções inovadoras para
            empresas que desejam crescer no ambiente digital.
          </p>
        </div>

        {/* Nossa História */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="about-animate opacity-0" data-delay="100">
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-primary">Nossa</span> <span className="text-secondary">História</span>
            </h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                Nascemos da paixão por tecnologia e do desejo de ajudar empresas a alcançarem seus objetivos através de
                soluções digitais eficientes. Especializamo-nos em landing pages porque acreditamos que uma página bem
                desenvolvida pode transformar visitantes em clientes.
              </p>
              <p>
                Nossa jornada é marcada pelo <strong className="text-primary">constante aprendizado</strong> e pela
                busca incessante por <strong className="text-secondary">inovações</strong> que possam satisfazer as
                necessidades específicas de cada situação e cliente.
              </p>
              <p>
                Entendemos que cada empresa tem suas particularidades, por isso desenvolvemos soluções personalizadas
                que se adaptam perfeitamente ao seu negócio e objetivos.
              </p>
            </div>
          </div>

          <div className="about-animate opacity-0" data-delay="200">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-primary">Nossa</span> <span className="text-secondary">Missão</span>
              </h3>
              <blockquote className="text-lg italic text-foreground/90 mb-6">
                "Transformar ideias em soluções digitais de alto impacto, desenvolvendo landing pages e sistemas que
                geram resultados reais para nossos clientes."
              </blockquote>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Foco em conversão e resultados</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>Inovação constante em tecnologia</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Atendimento personalizado e humanizado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="about-animate opacity-0 text-center border border-white/5 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              data-delay={300 + index * 100}
            >
              <CardContent className="pt-6">
                <div className="flex justify-center mb-3">
                  <div className={`p-3 rounded-full ${index % 2 === 0 ? "bg-primary/20" : "bg-secondary/20"}`}>
                    <stat.icon className={`h-6 w-6 ${index % 2 === 0 ? "text-primary" : "text-secondary"}`} />
                  </div>
                </div>
                <div className="text-2xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Nossos Valores */}
        <div className="mb-20">
          <div className="text-center mb-12 about-animate opacity-0" data-delay="700">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-primary">Nossos</span> <span className="text-secondary">Valores</span>
            </h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho e nossa relação com cada cliente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="about-animate opacity-0 border border-white/5 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                data-delay={800 + index * 100}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${index % 2 === 0 ? "bg-primary/20" : "bg-secondary/20"}`}>
                      <value.icon className={`h-6 w-6 ${value.color}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                      <p className="text-foreground/70">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nossa Expertise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="about-animate opacity-0" data-delay="1200">
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-primary">Nossa</span> <span className="text-secondary">Expertise</span>
            </h3>
            <p className="text-foreground/70 mb-6">
              Especializamo-nos em diversas áreas do desenvolvimento digital, sempre com foco em landing pages de alta
              conversão e soluções que geram resultados reais.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {expertise.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-animate opacity-0" data-delay="1300">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-primary">Por que</span>{" "}
                <span className="text-secondary">Escolher a BitWise?</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/80">
                    <strong>Especialização em Landing Pages:</strong> Focamos no que fazemos de melhor - páginas que
                    convertem visitantes em clientes.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/80">
                    <strong>Aprendizado Constante:</strong> Sempre atualizados com as últimas tendências e tecnologias
                    do mercado digital.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/80">
                    <strong>Soluções Personalizadas:</strong> Cada projeto é único e desenvolvido especificamente para
                    suas necessidades.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/80">
                    <strong>Vendedores Especializados:</strong> Nossa equipe está pronta para entender seu negócio e
                    criar a solução ideal.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button className="bg-secondary hover:bg-secondary/90 text-black font-semibold transition-all group">
                  <Lightbulb className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                  Conheça Nossos Vendedores
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
