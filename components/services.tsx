"use client"

import { useEffect } from "react"
import { Code, Database, LineChart, Layout, Server, Cpu } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Desenvolvimento",
    description: "Criamos sites, sistemas e soluções personalizadas com as tecnologias mais modernas do mercado.",
    icon: Code,
    color: "text-primary",
    delay: 0,
  },
  {
    title: "CRM",
    description: "Sistemas de gestão de relacionamento com clientes para otimizar suas vendas e processos.",
    icon: Server,
    color: "text-secondary",
    delay: 100,
  },
  {
    title: "BI",
    description: "Business Intelligence para transformar dados em insights estratégicos e decisões inteligentes.",
    icon: LineChart,
    color: "text-primary",
    delay: 200,
  },
  {
    title: "Landing Pages",
    description:
      "Páginas de alta conversão desenvolvidas por nossos vendedores especializados para captar leads e impulsionar resultados.",
    icon: Layout,
    color: "text-secondary",
    delay: 300,
  },
  {
    title: "SQL",
    description: "Desenvolvimento e otimização de bancos de dados para melhor desempenho e segurança.",
    icon: Database,
    color: "text-primary",
    delay: 400,
  },
  {
    title: "Automação",
    description: "Automatize processos repetitivos e aumente a produtividade da sua equipe com nossas soluções.",
    icon: Cpu,
    color: "text-secondary",
    delay: 500,
  },
]

export default function Services() {
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

    const elements = document.querySelectorAll(".service-card")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary glow-text">Nossos</span>{" "}
            <span className="text-secondary glow-text-gold">Serviços</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Oferecemos soluções completas em tecnologia para impulsionar o crescimento do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="service-card border border-white/5 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 opacity-0"
              data-delay={service.delay}
            >
              <CardHeader>
                <div
                  className={`${service.color} p-2 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4`}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-foreground/70">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
