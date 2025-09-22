import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background/95 border-t border-white/10 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10">
                <Image src="/images/logo.png" alt="BitWise Agency Logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-primary">Bit</span>
                <span className="text-secondary">Wise</span>
              </span>
            </Link>
            <p className="text-foreground/70 mb-4">
              Transformando dados em soluções inteligentes para o crescimento do seu negócio.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Desenvolvimento
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  CRM
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  SQL & Banco de Dados
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#portfolio" className="text-foreground/70 hover:text-primary transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-foreground/70 hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Nosso Time
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Parceiros</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://legadoeconforto.com.br/"
                  target="_blank"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Legado & Conforto
                </Link>
              </li>
              <li>
                <Link
                  href="https://jpbjoias.com.br/"
                  target="_blank"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  JPB Joias
                </Link>
              </li>
              <li>
                <Link
                  href="https://carmaxbaterias.com.br/"
                  target="_blank"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Carmax Baterias
                </Link>
              </li>
              
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Seja Nosso Parceiro
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} BitWise Agency. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-foreground/50 hover:text-primary text-sm transition-colors">
              Termos
            </Link>
            <Link href="#" className="text-foreground/50 hover:text-primary text-sm transition-colors">
              Privacidade
            </Link>
            <Link href="#" className="text-foreground/50 hover:text-primary text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
