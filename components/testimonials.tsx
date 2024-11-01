"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue } from "framer-motion"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    text: "Absolutely amazing experience! The stylist understood exactly what I wanted. My hair has never looked better. The attention to detail and professionalism is outstanding!",
    author: "Sarah M.",
    role: "Regular Client",
    initialX: -20,
    initialY: 10,
    rotation: -5
  },
  {
    id: 2,
    text: "I've been coming here for years and have never been disappointed. The atmosphere is luxurious, and the staff is incredibly skilled. It's more than just a haircut - it's an experience.",
    author: "James P.",
    role: "VIP Client",
    initialX: 20,
    initialY: -20,
    rotation: 3
  },
  {
    id: 3,
    text: "The best salon in the city! They take their time to understand what you want and deliver results that exceed expectations. The attention to detail is remarkable.",
    author: "Emily R.",
    role: "First-time Client",
    initialX: -10,
    initialY: 30,
    rotation: 2
  },
  {
    id: 4,
    text: "From the moment you walk in, you know you're in good hands. The team is professional, talented, and makes you feel like a VIP. My new go-to place for all things hair!",
    author: "Michael K.",
    role: "Monthly Client",
    initialX: 30,
    initialY: 5,
    rotation: -3
  }
]

export function Testimonials() {
  const [draggedId, setDraggedId] = useState<number | null>(null)
  const constraintsRef = useRef(null)

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 bg-clip-text text-transparent dark:from-zinc-100 dark:via-zinc-400 dark:to-zinc-100">
          Client Stories
        </h2>

        <div 
          ref={constraintsRef} 
          className="relative h-[600px] mx-auto max-w-4xl"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.1}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
              initial={{ 
                x: testimonial.initialX, 
                y: testimonial.initialY,
                rotate: testimonial.rotation
              }}
              whileDrag={{ 
                scale: 1.05,
                zIndex: 20
              }}
              onDragStart={() => setDraggedId(testimonial.id)}
              onDragEnd={() => setDraggedId(null)}
              className="absolute cursor-grab active:cursor-grabbing"
              style={{
                width: "calc(100% - 40px)",
                maxWidth: "500px",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)"
              }}
            >
              <Card className={`p-6 backdrop-blur-sm border-2 ${
                draggedId === testimonial.id 
                  ? "border-zinc-300 dark:border-zinc-700 shadow-lg" 
                  : "border-zinc-200 dark:border-zinc-800"
              } bg-white/90 dark:bg-zinc-900/90`}>
                <div className="space-y-4">
                  <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-8 text-zinc-500 dark:text-zinc-400 text-sm animate-pulse">
          Drag the cards to explore more testimonials
        </p>
      </div>
    </section>
  )
}