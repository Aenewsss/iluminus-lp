import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iluminus - Energia Solar',
  description: '',
  authors: {
    name: "Aenã Martinelli",
    url: "https://aenamartinelli.com.br"
  },
  creator: "Aenã Martinelli",
  category: "Energia Solar, painéis solares"
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" />
        <script crossOrigin="anonymous" src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" />
        <link rel="icon" href="favicon.png" type="image/png" />
        <meta name="theme-color" content="#000" />
        <meta name="facebook-domain-verification" content="vxts5yasipoxrikgnmx65iqxj197nz" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
