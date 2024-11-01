"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card, CardContent } from "@/components/ui/card"

const haircutTypes = {
  signature: {
    title: "Signature Cuts",
    description: "Our signature men's cuts combine classic techniques with modern styling for a sophisticated look that suits your personality and lifestyle.",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=800&q=80",
    services: [
      "Precision Cut",
      "Layered Styling",
      "Bob & Lob Cuts",
      "Special Occasion Styling"
    ]
  },
  children: {
    title: "Kids' Cuts",
    description: "Gentle, patient styling services for children in a friendly, welcoming environment.",
    image: "https://images.unsplash.com/photo-1632167764165-74a3d686e9f8?w=800&q=80",
    services: [
      "First Haircut Experience",
      "Boys' Trendy Cuts",
      "Girls' Styled Cuts",
      "Family Packages"
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
          <div className="flex justify-center mb-8">
            <TabsList className="flex flex-col sm:flex-row">
              <TabsTrigger value="signature">Signature Cuts</TabsTrigger>
              <TabsTrigger value="women">Women's Styles</TabsTrigger>
              <TabsTrigger value="children">Kids' Cuts</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(haircutTypes).map(([key, section]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <Card className="overflow-hidden border-0 bg-background/80 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
                  <CardContent className="p-0">
                    <AspectRatio ratio={4/3}>
                      <img
                        src={section.image}
                        alt={section.title}
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{section.title}</h3>
                    <p className="text-muted-foreground">{section.description}</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Our Services Include:</h4>
                    <ul className="grid gap-2">
                      {section.services.map((service, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-zinc-950 dark:bg-zinc-200" />
                          <span className="text-muted-foreground">{service}</span>
                        </li>
                      ))}
                    </ul>
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