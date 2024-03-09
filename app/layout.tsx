import '../styles/global.css'

export const metadata = {
  title: 'Köln City Cricket Club e.V',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
