'use client'

import { useState } from 'react'
import StickyEnquire from './components/stickyEnquiry'
import Navbar from './navbar/navbar'
import './globals.css'
import Modal from './components/Modal'
import Contact from './contact/page'
import Footer from './home/footer'

export default function RootLayout({ children }) {
  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <html lang="en">
      <body className="relative">
        <div className={`${showContactModal ? 'overflow-hidden' : ''}`}>
          <Navbar onContactClick={() => setShowContactModal(true)} />
          <StickyEnquire onContactClick={() => setShowContactModal(true)}/>
          {children}
          <Modal isOpen={showContactModal} onClose={() => setShowContactModal(false)}>
            <Contact onClose={() => setShowContactModal(false)} />
          </Modal>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
