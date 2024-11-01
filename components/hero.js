"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, Send } from "lucide-react"

export function Hero() {
  return (
    <div className="container mx-auto px-4 relative max-w-7xl min-h-[90vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=2070&q=80')] bg-cover bg-center"
        style={{
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />
      <div className="absolute inset-0 bg-background/90" />
      
      <div className="relative text-center max-w-3xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-black bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 bg-clip-text text-transparent">
          Преобразите свой образ
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          Испытайте роскошный стайлинг в его лучшем проявлении. Наши мастера создают индивидуальные образы, соответствующие вашему стилю.
        </p>
      </div>

      {/* Sticky Contact Icons */}
      <div className="fixed bottom-8 right-8 z-50 flex gap-6">
        <Button
          variant="ghost"
          size="icon"
          className="w-14 h-14 rounded-full hover:bg-transparent"
          onClick={() => window.open('https://wa.me/74951234567', '_blank')}
        >
          <MessageSquare className="h-10 w-10 text-[#00D856] hover:scale-110 transition-transform" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="w-14 h-14 rounded-full hover:bg-transparent"
          onClick={() => window.open('https://t.me/stylecuts_ru', '_blank')}
        >
          <Send className="h-10 w-10 text-[#29B6F6] hover:scale-110 transition-transform" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="w-14 h-14 rounded-full hover:bg-transparent"
          onClick={() => window.location.href = 'tel:+74951234567'}
        >
          <Phone className="h-10 w-10 text-[#0088cc] hover:scale-110 transition-transform" />
        </Button>
      </div>
    </div>
  )
}