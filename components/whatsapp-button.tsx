"use client"
import { useState, useCallback, useRef, useEffect } from "react"
import { X } from "lucide-react" 
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"

import { FaWhatsapp } from "react-icons/fa" 
interface WhatsAppButtonProps {
  phoneNumber?: string
  defaultMessage?: string
  companyName?: string
}

export default function WhatsAppButton({
  phoneNumber = "5545999403598",
  defaultMessage = "Olá! Gostaria de solicitar um orçamento para desenvolvimento de landing page.", 
  companyName = "BitWise Agency", 
}: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null) 

  // Callback para abrir o WhatsApp
  const handleWhatsAppClick = useCallback(() => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
    setIsOpen(false); // Fecha o menu após abrir o WhatsApp
  }, [phoneNumber, defaultMessage])

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && !(event.target as HTMLElement).closest('.whatsapp-main-button')) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuRef]) 


  const menuVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: 20 }, 
  }

  return (
    <>
      {/* Botão Principal */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <Button
          onClick={toggleMenu}
          className="whatsapp-main-button w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
          size="icon"
          aria-label={isOpen ? "Fechar chat WhatsApp" : "Abrir chat WhatsApp"}
        >
          {isOpen ? (
            <X className="h-5 w-5 md:h-6 md:w-6 text-white" />
          ) : (
            // AQUI ESTÁ A MUDANÇA: Usando o ícone FaWhatsapp
            <FaWhatsapp className="h-5 w-5 md:h-6 md:w-6 text-white group-hover:animate-pulse" />
          )}
        </Button>
      </div>

      {/* Menu Expandido (com Framer Motion para animações) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef} 
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.2, ease: "easeOut" }} 
            className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-40" 
          >
            <div className="bg-background/95 backdrop-blur-sm border border-white/10 rounded-lg p-4 shadow-xl max-w-xs text-white"> 
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-full flex items-center justify-center">
                  {/* AQUI ESTÁ A MUDANÇA: Usando o ícone FaWhatsapp */}
                  <FaWhatsapp className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{companyName}</h4>
                  <p className="text-xs text-green-400">Online agora</p> 
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-3"> 
                Olá! 👋 Como podemos ajudar você hoje? Fale conosco no WhatsApp!
              </p>
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white"
                size="sm"
              >
              
                <FaWhatsapp className="h-4 w-4 mr-2" />
                Iniciar Conversa
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}