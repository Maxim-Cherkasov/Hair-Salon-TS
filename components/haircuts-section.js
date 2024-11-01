"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card, CardContent } from "@/components/ui/card"

const haircutTypes = {
  signature: {
    title: "Signature Cuts",
    description: "Our signature men's cuts combine classic techniques with modern styling for a sophisticated look that suits your personality and lifestyle.",
    image: "https://images.unsplash.com/photo-1593702295094-aea22597af65?w=800&q=80",
    services: [
      "Classic Gentleman's Cut",
      "Modern Fade",
      "Executive Style",
      "Beard Trim & Styling"
    ]
  },
  women: {
    title: "Women's Styles",
    description: "Transformative cuts and styles that enhance your natural beauty, from classic bobs to modern layered looks.",
    image: "https://images.unsplash.com/photo-1522336284037-91f7da073525?w=800&q=80",
    services: [
      "Precision Cut",
      "Layered Styling",
      "Bob & Lob Cuts",
      "Special Occasion Styling"
    ]
  },
  color: {
    title: "Color Services",
    description: "Expert color treatments from subtle highlights to bold transformations, customized to your desired look.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80",
    services: [
      "Full Color",
      "Balayage",
      "Highlights & Lowlights",
      "Color Correction"
    ]
  },
  treatments: {
    title: "Hair Treatments",
    description: "Revitalize your hair with our premium treatment services for healthier, more beautiful hair.",
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&q=80",
    services: [
      "Deep Conditioning",
      "Keratin Treatment",
      "Scalp Treatment",
      "Hair Repair Therapy"
    ]
  }
}

export function HaircutsSection() {
  return (
    <section id="services" className="py-24 bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 bg-clip-text text-transparent dark:from-zinc-200 dark:via-zinc-400 dark:to-zinc-200">
          Our Services
        </h2>

        <Tabs defaultValue="signature" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="flex flex-col sm:flex-row h-auto sm:h-12 p-1.5 bg-white dark:bg-zinc-900/50 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl sm:rounded-full">
              {Object.entries(haircutTypes).map(([key, { title }]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="w-full sm:w-auto px-6 py-2.5 sm:py-1.5 mb-1 sm:mb-0 last:mb-0 rounded-xl sm:rounded-full data-[state=active]:bg-zinc-950 data-[state=active]:text-white dark:data-[state=active]:bg-zinc-200 dark:data-[state=active]:text-zinc-950 transition-all"
                >
                  {title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.entries(haircutTypes).map(([key, section]) => (
            <TabsContent key={key} value={key} className="mt-0 focus-visible:outline-none">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative group order-2 md:order-1">
                  <div className="absolute -inset-1 bg-gradient-to-br from-zinc-200 via-transparent to-zinc-200 dark:from-zinc-800 dark:to-zinc-800 rounded-2xl opacity-75" />
                  <Card className="relative overflow-hidden border-0 bg-background/80 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <AspectRatio ratio={4/3}>
                        <img
                          src={section.image}
                          alt={section.title}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                      </AspectRatio>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-8 order-1 md:order-2">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 bg-clip-text text-transparent dark:from-zinc-100 dark:via-zinc-400 dark:to-zinc-100">
                      {section.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                      {section.description}
                    </p>
                  </div>

                  <div className="grid gap-4">
                    {section.services.map((service, index) => (
                      <Card key={index} className="border-2 border-zinc-100 dark:border-zinc-800/50 transition-colors hover:border-zinc-200 dark:hover:border-zinc-700">
                        <CardContent className="p-4">
                          <p className="font-medium">{service}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}