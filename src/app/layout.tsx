import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Saritha Tadlapalli - Portfolio',
  description: 'Professional portfolio showcasing projects and expertise',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <div className="text-2xl font-bold text-blue-600">ST</div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p> {new Date().getFullYear()} Saritha Tadlapalli. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
