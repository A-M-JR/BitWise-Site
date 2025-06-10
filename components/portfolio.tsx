"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Globe, Smartphone, Monitor, Lightbulb } from "lucide-react"
import Image from "next/image"

// Dados dos sites desenvolvidos - SUBSTITUA PELAS URLs REAIS
const portfolioSites = [
  {
    title: "E-commerce Moderno",
    description: "Plataforma completa de vendas online com sistema de pagamento integrado",
    url: "https://exemplo-ecommerce.com",
    image: "/placeholder.svg?height=300&width=400",
    category: "E-commerce",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    title: "Dashboard Corporativo",
    description: "Sistema de gestão empresarial com relatórios em tempo real",
    url: "https://exemplo-dashboard.com",
    image: "/placeholder.svg?height=300&width=400",
    category: "Dashboard",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Landing Page Conversão",
    description: "Página otimizada para captação de leads com alta taxa de conversão",
    url: "https://exemplo-landing.com",
    image: "/placeholder.svg?height=300&width=400",
    category: "Landing Page",
    tech: ["Next.js", "Tailwind", "Analytics"],
  },
  {
    title: "App Mobile Híbrido",
    description: "Aplicativo multiplataforma para iOS e Android",
    url: "https://exemplo-app.com",
    image: "/placeholder.svg?height=300&width=400",
    category: "Mobile App",
    tech: ["React Native", "Firebase", "API REST"],
  },
  {
    title: "Sistema CRM",
    description: "Gestão completa de relacionamento com clientes",
    url: "https://exemplo-crm.com",
    image: "/placeholder.svg?height=300&width=400",
    category: "CRM",
    tech: ["Vue.js", "Laravel", "MySQL"],
  },
  {
    title: "Portal Institucional",
    description: "Site corporativo com área administrativa completa",
    url: "https://exemplo-portal.com",
    image: "/placeholder.svg?height=300&width=400",
    category: "Institucional",
    tech: ["WordPress", "PHP", "MySQL"],
  },
]

const categories = ["Todos", "E-commerce", "Dashboard", "Landing Page", "Mobile App", "CRM", "Institucional"]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [filteredSites, setFilteredSites] = useState(portfolioSites)

  useEffect(() => {
    if (selectedCategory === "Todos") {
      setFilteredSites(portfolioSites)
    } else {
      setFilteredSites(portfolioSites.filter((site) => site.category === selectedCategory))
    }
  }, [selectedCategory])

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

    const elements = document.querySelectorAll(".portfolio-card")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [filteredSites])

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Mobile App":
        return <Smartphone className="h-4 w-4" />
      case "Dashboard":
      case "CRM":
        return <Monitor className="h-4 w-4" />
      default:
        return <Globe className="h-4 w-4" />
    }
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary glow-text">Nosso</span>{" "}
            <span className="text-secondary glow-text-gold">Portfólio</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg mb-8">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes.
            <strong className="text-primary"> Consulte um de nossos vendedores especializados</strong> para criar sua
            landing page personalizada!
          </p>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg border border-white/10 max-w-3xl mx-auto">
            <p className="text-foreground/90 italic">
              💡 <strong>Dica:</strong> Cada projeto é único! Nossos vendedores especializados podem criar landing pages
              sob medida para seu negócio, com foco em conversão e resultados comprovados.
            </p>
          </div>
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category
                  ? "bg-gradient-to-r from-primary to-secondary text-white"
                  : "border-white/20 hover:border-primary/50"
              } transition-all`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSites.map((site, index) => (
            <Card
              key={index}
              className="portfolio-card border border-white/5 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 opacity-0 group"
              data-delay={index * 100}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={site.image || "/placeholder.svg"}
                    alt={site.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      onClick={() => window.open(site.url, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-primary">{getCategoryIcon(site.category)}</div>
                    <span className="text-sm text-foreground/70">{site.category}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{site.title}</h3>
                  <p className="text-foreground/70 mb-4 text-sm">{site.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {site.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/30 hover:bg-primary/10"
                    onClick={() => window.open(site.url, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visitar Site
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">Pronto para ter seu</span>{" "}
              <span className="text-secondary">projeto aqui?</span>
            </h3>
            <p className="text-foreground/80 mb-6 text-lg">
              Nossos vendedores especializados estão prontos para criar a solução perfeita para seu negócio.
              Desenvolvemos desde landing pages de alta conversão até sistemas complexos.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity group"
            >
              <Lightbulb className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Falar com Vendedor Especializado
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
