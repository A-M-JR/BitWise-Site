import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "BitWise Agency | Desenvolvimento Web, CRM e BI",
  description: "Transformamos suas ideias em soluções digitais de alta performance. Especialistas em desenvolvimento de sistemas web, landing pages, CRM, BI e automações.",

  keywords: [
    "BitWise Agency",
    "criação de site profissional",
    "desenvolvimento de sistemas web sob medida",
    "sistemas personalizados para empresas",
    "CRM integrado com site",
    "plataforma de vendas online personalizada",
    "consultoria em Business Intelligence",
    "painéis de BI para empresas",
    "landing page com alta conversão",
    "automação de processos empresariais",
    "software de gestão personalizado",
    "integração com ERP e CRM",
    "agência de tecnologia para empresas",
    "dashboard de vendas e resultados",
    "landing page para captação de leads",
    "soluções digitais para empresas",
    "desenvolvimento web para negócios B2B",
    "automatização de fluxos de trabalho",
    "plataforma de atendimento ao cliente personalizada"
  ],

  metadataBase: new URL("https://www.bitwiseagency.com.br"),

  authors: [{ name: "BitWise Agency", url: "https://www.bitwiseagency.com.br" }],
  creator: "BitWise Agency",
  publisher: "BitWise Agency",

  alternates: {
    canonical: "https://www.bitwiseagency.com.br",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "BitWise Agency | Soluções Tecnológicas Inteligentes",
    description: "Tecnologia e estratégia para empresas que buscam automação, performance e resultados reais.",
    url: "https://www.bitwiseagency.com.br",
    siteName: "BitWise Agency",
    images: [
      {
        url: "https://www.bitwiseagency.com.br/images/og-bitwise.png",
        width: 1200,
        height: 630,
        alt: "BitWise Agency - Soluções em Tecnologia",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Tecnologia da Informação",

  applicationName: "BitWise Agency",

  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "BitWise Agency",
      "url": "https://www.bitwiseagency.com.br",
      "logo": "https://www.bitwiseagency.com.br/images/images/og-bitwise.png",
      "image": "https://www.bitwiseagency.com.br/images/images/og-bitwise.png",
      "description": "Agência de tecnologia especializada em desenvolvimento de sistemas web, landing pages, CRM, BI e automações para otimizar e expandir negócios.",
      "address": {
        "@type": "PostalAddress",

        "streetAddress": "",
        "addressLocality": "",
        "addressRegion": "",
        "postalCode": "",
        "addressCountry": "BR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-XX-XXXXX-XXXX", // Adicione seu telefone
        "contactType": "Customer Service"
      },
      "servesCuisine": "", // Não aplicável
      "priceRange": "$$$", // Opcional: indique a faixa de preço
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        }
      ]
    })
  }
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0A0118" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0118" }
  ],

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
