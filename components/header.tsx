"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Serviços", href: "#services" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Sobre", href: "#about" },
  { name: "Soluções", href: "#features" },
  { name: "Contato", href: "#contact" },
]

function handleWhatsApp() {
  window.open(
    "https://wa.me/5545999403598?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.",
    "_blank"
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-gray-900/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8 md:w-10 md:h-10">
            <Image src="/images/logo.png" alt="BitWise Agency Logo" fill className="object-contain" priority />
          </div>
          <span className="text-lg md:text-xl font-bold">
            <span className="text-blue-500">Bit</span>
            <span className="text-yellow-500">Wise</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-300 hover:text-yellow-500 transition-colors">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            variant="secondary"
            className="group"
            onClick={() =>
              window.open(
                "https://wa.me/5545999403598?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.",
                "_blank"
              )
            }
          >
            <Lightbulb className="mr-2 h-4 w-4 group-hover:animate-pulse" />
            Solicitar Orçamento
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md shadow-lg">
          <nav className="container mx-auto px-4 flex flex-col py-4 gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-yellow-500 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="secondary" className="w-full mt-2 group" onClick={handleWhatsApp}>
              <Lightbulb className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Solicitar Orçamento
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
