"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
  {
    url: "https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?w=2070&q=80",
    title: "Men's Premium Cuts",
    description: "Expert precision cuts and contemporary styles for the modern gentleman"
  },
  {
    url: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=2070&q=80",
    title: "Women's Styling",
    description: "Creating beautiful, personalized looks that enhance your natural beauty"
  },
  {
    url: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=2070&q=80",
    title: "Kids' Haircuts",
    description: "Gentle, patient care in a welcoming environment for our youngest clients"
  },
  {
    url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=2070&q=80",
    title: "Color & Highlights",
    description: "Expert coloring services that bring your vision to life"
  },
  {
    url: "https://images.unsplash.com/photo-1560869713-da86a9ec0744?w=2070&q=80",
    title: "Bridal Styling",
    description: "Make your special day even more memorable with our bridal hair services"
  },
  {
    url: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=2070&q=80",
    title: "Luxury Experience",
    description: "Relax and rejuvenate in our premium salon environment"
  },
  {
    url: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=2070&q=80",
    title: "Beard Grooming",
    description: "Professional beard trimming and styling services"
  },
  {
    url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=2070&q=80",
    title: "Hair Treatments",
    description: "Revitalize your hair with our premium treatment services"
  },
  {
    url: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=2070&q=80",
    title: "Modern Styles",
    description: "Stay on trend with the latest hair styling techniques"
  }
]

export function HeroCarousel() {
  return (
    <div className="relative mt-8 mb-16">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-200 via-transparent to-zinc-200 dark:from-zinc-800 dark:to-zinc-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                  <img 
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm text-zinc-200">{image.description}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  )
}