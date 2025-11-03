"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppWidget() {
  const phoneNumber = "923159833484"
  const message = "Hello, I would like to inquire about your legal services."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
    >
      <MessageCircle size={24} />
    </a>
  )
}
