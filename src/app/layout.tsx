import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from "next/script"

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
        <link rel="icon" href="favicon.svg" type="image/png" />
        <meta name="theme-color" content="#000" />
        <meta name="facebook-domain-verification" content="vxts5yasipoxrikgnmx65iqxj197nz" />

        {/* Meta Pixel Code  */}
        <Script id="fb-pixel" 
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2005714673161741');
              fbq('track', 'PageView');
          `
          }}
        />
        <noscript>
          {/* @ts-ignore */}
          <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2005714673161741&ev=PageView&noscript=1" /></noscript>
        {/* End Meta Pixel Code  */}
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
