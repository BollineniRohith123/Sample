import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Saritha Tadlapalli - Portfolio',
  description: 'Professional portfolio showcasing projects and expertise',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Saritha Tadlapalli
            </Link>
            <div className="space-x-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link href="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
              <Link href="/education" className="text-gray-700 hover:text-blue-600">Education</Link>
            </div>
          </div>
        </nav>
        
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p> {new Date().getFullYear()} Saritha Tadlapalli. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
