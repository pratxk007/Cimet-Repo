import {Metadata} from 'next';
import './app.css'

export const metadata: Metadata = {
  title: {
    default:'Next.js',
    template:'%s| Pratik'
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"> 
      <body>
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  )
}
