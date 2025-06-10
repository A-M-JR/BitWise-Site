"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Lightbulb, Code, Database, LineChart } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Hero() {
  const circuitRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden circuit-pattern">
      <div className="absolute inset-0 z-0 opacity-30">
        <svg ref={circuitRef} className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,100 Q50,50 100,100 T200,100 T300,100 T400,100"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="0.5"
            strokeDasharray="5,5"
            className="animate-circuit-flow"
          />
          <path
            d="M0,200 Q100,150 200,200 T400,200"
            fill="none"
            stroke="#eab308"
            strokeWidth="0.5"
            strokeDasharray="5,5"
            className="animate-circuit-flow"
          />
          <path
            d="M100,0 Q150,100 100,200 T100,400"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="0.5"
            strokeDasharray="5,5"
            className="animate-circuit-flow"
          />
          <path
            d="M300,0 Q250,100 300,200 T300,400"
            fill="none"
            stroke="#eab308"
            strokeWidth="0.5"
            strokeDasharray="5,5"
            className="animate-circuit-flow"
          />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-on-scroll">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                <span className="text-primary glow-text animate-typing">Transformando</span> <br />
                <span className="text-secondary glow-text-gold">dados em soluções</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 max-w-lg">
                Desenvolvemos sites, landing pages e tecnologias inteligentes que impulsionam o crescimento do seu
                negócio. Consulte nossos vendedores especializados!
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
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
                <Lightbulb className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                Solicitar Orçamento
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10 transition-colors"
              >
                Fale Conosco
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-10 h-10 rounded-full border-2 border-background",
                      i % 2 === 0 ? "bg-primary" : "bg-secondary",
                    )}
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/70">
                <span className="font-bold text-foreground">+100</span> clientes satisfeitos
              </p>
            </div>
          </div>

          <div className="relative animate-on-scroll">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl opacity-30 animate-pulse-slow" />
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 animate-rotate" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-1/2 h-1/2 rounded-full border border-primary/30 animate-rotate"
                  style={{ animationDirection: "reverse", animationDuration: "15s" }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-1/3 h-1/3 rounded-full border border-secondary/30 animate-rotate"
                  style={{ animationDuration: "10s" }}
                />
              </div>
              <div className="absolute top-0 left-0 p-4 bg-background/10 backdrop-blur-sm rounded-lg border border-white/10 shadow-xl animate-float">
                <Code className="h-8 w-8 text-primary" />
                <p className="mt-1 font-medium">Desenvolvimento</p>
              </div>
              <div
                className="absolute bottom-0 left-1/4 p-4 bg-background/10 backdrop-blur-sm rounded-lg border border-white/10 shadow-xl animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Database className="h-8 w-8 text-secondary" />
                <p className="mt-1 font-medium">SQL & Dados</p>
              </div>
              <div
                className="absolute top-1/4 right-0 p-4 bg-background/10 backdrop-blur-sm rounded-lg border border-white/10 shadow-xl animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <LineChart className="h-8 w-8 text-primary" />
                <p className="mt-1 font-medium">BI & Analytics</p>
              </div>
              <Image
                src="/images/logo.png"
                alt="BitWise Agency"
                width={200}
                height={200}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
