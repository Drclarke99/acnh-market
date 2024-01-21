import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Nook's Cay`,
  description: 'Created by David Clarke',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>hello world</h1>
        {children}
      </body>
    </html>
  )
}
