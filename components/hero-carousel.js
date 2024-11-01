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
    url: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=2070&q=80",
    title: "Color & Highlights",
    description: "Expert color treatments and dimensional highlighting techniques"
  },
  {
    url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=2070&q=80",
    title: "Bridal Services",
    description: "Luxurious bridal hair styling for your special day"
  },
  {
    url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=2070&q=80",
    title: "Professional Styling",
    description: "Contemporary styling for any occasion"
  },
  {
    url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=2070&q=80",
    title: "Luxury Experience",
    description: "Premium salon services in an elegant atmosphere"
  },
  {
    url: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=2070&q=80",
    title: "Expert Care",
    description: "Dedicated stylists committed to your satisfaction"
  },
  {
    url: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=2070&q=80",
    title: "Modern Techniques",
    description: "Contemporary approaches to classic and modern styles"
  }
]

export function HeroCarousel() {
  return (
    <section className="relative mt-16 mb-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[80vh] md:h-[60vh] rounded-2xl overflow-hidden flex items-center justify-center">
                  <img 
                    src={image.url}
                    alt={image.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{image.title}</h3>
                    <p className="text-zinc-200 text-sm md:text-base max-w-2xl">{image.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 md:left-8 -translate-y-1/2" />
          <CarouselNext className="right-4 md:right-8 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  )
}