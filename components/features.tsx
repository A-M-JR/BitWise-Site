"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";

const features = [
  "Desenvolvimento ágil e eficiente",
  "Soluções personalizadas para seu negócio",
  "Tecnologias de ponta e inovadoras",
  "Equipe especializada e experiente",
  "Suporte técnico contínuo",
  "Análise de dados avançada",
];

export default function Features() {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        if (
          rect.top < window.innerHeight - 80 && 
          rect.bottom > 0
        ) {
          setShow(true);
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="features" className="py-20 md:py-32 circuit-pattern">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div
            ref={contentRef}
            className={`
              order-2 lg:order-1
              transition-all duration-700
              ${show
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"}
            `}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-primary glow-text">Tecnologia</span>{" "}
              <span className="text-secondary glow-text-gold">que transforma</span>
            </h2>
            <p className="text-foreground/70 mb-8 text-lg">
              Na BitWise Agency, combinamos expertise técnica com visão estratégica para desenvolver sites, landing
              pages e soluções que realmente fazem a diferença no seu negócio. Nossos vendedores especializados estão
              prontos para criar a solução perfeita para você.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-white/10">
              <p className="text-foreground/90 italic">
                "Desenvolvemos sites e landing pages de alta conversão. Consulte nossos vendedores especializados para
                transformar suas ideias em soluções digitais de alto impacto."
              </p>
            </div>
          </div>

          <div
            ref={imageRef}
            className={`
              relative order-1 lg:order-2
              transition-all duration-700
              ${show
                ? "opacity-100 -translate-x-0"
                : "opacity-0 -translate-x-10"}
            `}
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl opacity-30 animate-pulse-slow" />
            <div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-1">
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/30 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary rounded-sm" />
                    </div>
                    <div>
                      <div className="w-20 h-3 bg-foreground/20 rounded mb-1" />
                      <div className="w-16 h-2 bg-foreground/10 rounded" />
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-secondary/50 rounded-full" />
                    <div className="w-2 h-2 bg-foreground/20 rounded-full" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-primary/10 rounded-lg p-3 border border-primary/20">
                    <div className="w-4 h-4 bg-primary/50 rounded mb-2" />
                    <div className="w-8 h-2 bg-primary/30 rounded mb-1" />
                    <div className="w-12 h-3 bg-primary rounded" />
                  </div>
                  <div className="bg-secondary/10 rounded-lg p-3 border border-secondary/20">
                    <div className="w-4 h-4 bg-secondary/50 rounded mb-2" />
                    <div className="w-8 h-2 bg-secondary/30 rounded mb-1" />
                    <div className="w-12 h-3 bg-secondary rounded" />
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                    <div className="w-4 h-4 bg-green-500/50 rounded mb-2" />
                    <div className="w-8 h-2 bg-green-500/30 rounded mb-1" />
                    <div className="w-12 h-3 bg-green-500 rounded" />
                  </div>
                </div>

                <div className="bg-background/30 rounded-lg p-4 mb-4 border border-white/5">
                  <div className="flex items-end justify-between h-20 gap-1">
                    {[40, 65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                      <div key={i} className="flex flex-col items-center gap-1 flex-1">
                        <div
                          className={`w-full rounded-t ${i % 3 === 0
                              ? "bg-primary"
                              : i % 3 === 1
                                ? "bg-secondary"
                                : "bg-green-500"
                            } transition-all duration-1000 ease-out`}
                          style={{
                            height: `${height}%`,
                            animationDelay: `${i * 0.1}s`,
                          }}
                        />
                        <div className="w-2 h-1 bg-foreground/20 rounded" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 bg-primary/5 rounded border border-primary/10">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <div className="flex-1">
                      <div className="w-24 h-2 bg-primary/30 rounded mb-1" />
                      <div className="w-16 h-1.5 bg-foreground/20 rounded" />
                    </div>
                    <div className="w-8 h-2 bg-primary/50 rounded" />
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-secondary/5 rounded border border-secondary/10">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <div className="flex-1">
                      <div className="w-20 h-2 bg-secondary/30 rounded mb-1" />
                      <div className="w-14 h-1.5 bg-foreground/20 rounded" />
                    </div>
                    <div className="w-6 h-2 bg-secondary/50 rounded" />
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-green-500/5 rounded border border-green-500/10">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <div className="flex-1">
                      <div className="w-28 h-2 bg-green-500/30 rounded mb-1" />
                      <div className="w-18 h-1.5 bg-foreground/20 rounded" />
                    </div>
                    <div className="w-10 h-2 bg-green-500/50 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
