"use client"

import { useState, useCallback } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsAppClick = useCallback(() => {
    const phoneNumber = "5511999999999"
    const message = "Olá! Gostaria de solicitar um orçamento para desenvolvimento de landing page."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }, [])

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <>
      {/* Botão Principal */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <Button
          onClick={toggleMenu}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 group"
          size="icon"
          aria-label="WhatsApp"
        >
          {isOpen ? (
            <X className="h-5 w-5 md:h-6 md:w-6 text-white" />
          ) : (
            <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-white group-hover:animate-bounce" />
          )}
        </Button>
      </div>

      {/* Menu Expandido */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 md:bottom-24 md:right-6 z-40 animate-scale">
          <div className="bg-background/95 backdrop-blur-sm border border-white/10 rounded-lg p-4 shadow-xl max-w-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">BitWise Agency</h4>
                <p className="text-xs text-green-500">Online agora</p>
              </div>
            </div>
            <p className="text-sm text-foreground/80 mb-3">
              Olá! 👋 Como podemos ajudar você hoje? Fale conosco no WhatsApp!
            </p>
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
              size="sm"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Iniciar Conversa
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
