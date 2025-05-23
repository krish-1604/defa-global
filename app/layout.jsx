import StickyEnquire from './components/stickyEnquiry'
import Navbar from './navbar/navbar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        <StickyEnquire/>
        {children}
      </body>
    </html>
  )
}
