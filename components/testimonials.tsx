"use client"

import { useEffect, useState, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"
// REMOVER: import { useRouter } from "next/navigation" // Não precisamos mais do useRouter aqui

const testimonials = [
  {
    name: "Carlos Silva",
    company: "TechSolutions",
    role: "CEO",
    content: "A BitWise transformou completamente nossa infraestrutura de dados. Aumentamos nossa receita em 35%.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
    result: "+35% receita",
  },
  {
    name: "Ana Oliveira",
    company: "Inova Digital",
    role: "Diretora de Marketing",
    content: "O sistema de CRM desenvolvido aumentou nossas conversões em 40%. Equipe extremamente profissional!",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
    result: "+40% conversões",
  },
  {
    name: "Roberto Mendes",
    company: "Global Tech",
    role: "Gerente de TI",
    content: "As soluções de BI nos permitiram identificar oportunidades que antes passavam despercebidas.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
    result: "ROI excepcional",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  // REMOVER: const router = useRouter() // Esta linha não é mais necessária

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const handleRequestQuoteClick = useCallback(() => {
    const phoneNumber = "5545999403598" 
    const message = "Olá! Gostaria de solicitar um orçamento para desenvolvimento de landing page." // Mensagem pré-preenchida

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }, []) 

  const currentTestimonial = testimonials[activeIndex]

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-background/95 to-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary glow-text">O que nossos</span>{" "}
            <span className="text-secondary glow-text-gold">clientes dizem</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Histórias reais de transformação e sucesso
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border border-white/10 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12 text-center">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <Quote className="h-12 w-12 text-secondary/50" />
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl md:text-2xl text-foreground/90 italic mb-8 leading-relaxed">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center gap-4 mb-8">
                <Image
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-secondary/30"
                />
                <div>
                  <p className="font-semibold text-lg">{currentTestimonial.name}</p>
                  <p className="text-secondary font-medium">{currentTestimonial.role}</p>
                  <p className="text-sm text-foreground/70">{currentTestimonial.company}</p>
                </div>
              </div>

              {/* Result Badge */}
              <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-8">
                <span className="text-sm font-medium">Resultado:</span>
                <span className="font-bold text-secondary">{currentTestimonial.result}</span>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="border-white/20 hover:border-primary/50"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                {/* Indicators */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 rounded-full transition-all ${index === activeIndex ? "bg-secondary w-8" : "bg-foreground/30 w-2"
                        }`}
                      onClick={() => setActiveIndex(index)}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="border-white/20 hover:border-primary/50"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg border border-white/10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">Pronto para ser</span>{" "}
              <span className="text-secondary">nosso próximo caso de sucesso?</span>
            </h3>
            <p className="text-foreground/80 mb-6">
              Junte-se a essas empresas que já transformaram seus resultados.
            </p>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-black font-semibold"
              onClick={handleRequestQuoteClick} // O onClick continua chamando a função
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}