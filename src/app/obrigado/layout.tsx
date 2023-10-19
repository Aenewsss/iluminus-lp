import PixelObrigado from "@components/components/PixelMeta/PixelObrigado";

export default function ThanksLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <PixelObrigado />
      </head>
      <body>{children}</body>
    </html>
  )
}