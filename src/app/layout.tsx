import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'Google',
  description: 'Google Clone created by nextjs 13',
  icons: {
    icon: '/favicon.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative min-h-screen'>
        {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
