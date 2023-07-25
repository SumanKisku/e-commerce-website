import NavigationBar from "@/components/NavigationBar"
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-commerce website',
  description: 'E-commerce website made with next js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <NavigationBar />
          {children}
        </body>
      </html>
  )
}
