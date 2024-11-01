"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const works = [
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80",
  "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?w=800&q=80",
  "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800&q=80",
  "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&q=80",
  "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&q=80",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80"
]

export function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {works.map((image, index) => (
        <div key={index} className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-200 via-transparent to-zinc-200 dark:from-zinc-800 dark:to-zinc-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Card className="relative border-0 rounded-xl overflow-hidden bg-background/80 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)]">
            <CardContent className="p-0">
              <AspectRatio ratio={1}>
                <img
                  src={image}
                  alt={`Hairstyle ${index + 1}`}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </AspectRatio>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}