import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.css';
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})
// These styles apply to every route in the application
import './globals.css'
 
export const metadata: Metadata = {
    title: 'MT Ibrow and Beauty',
    description: 'MT Ibrow and Beauty Canonsburg PA',
  }

export default function RootLayout({ children, } : {children: React.ReactNode}) {
    return (
      <html lang="en">
        <body className={`text-bg-dark ${roboto.className}`}>{children}</body>
      </html>
    )
  }