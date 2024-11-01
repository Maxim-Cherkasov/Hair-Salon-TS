"use client"

import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Scissors } from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"

const menuItems = [
  { href: "#services", label: "Услуги" },
  { href: "#gallery", label: "Наши работы" },
  { href: "#prices", label: "Цены" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#contact", label: "Контакты" }
]

export function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSectionClick = (href) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between max-w-7xl">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader className="mb-6">
                <SheetTitle className="flex items-center gap-2">
                  <Scissors className="h-5 w-5" />
                  <span>СтильСтрижка</span>
                </SheetTitle>
                <SheetDescription>
                  Премиум Салон Красоты
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <button
                      onClick={() => handleSectionClick(item.href)}
                      className="text-left text-lg px-2 py-1 rounded-md hover:bg-accent transition-colors"
                    >
                      {item.label}
                    </button>
                  </SheetClose>
                ))}
                <Separator className="my-4" />
                <div className="px-2 py-4 bg-muted rounded-lg">
                  <p className="text-sm font-medium mb-2">Записаться на приём</p>
                  <SheetClose asChild>
                    <a 
                      href="tel:+74951234567" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +7 (495) 123-45-67
                    </a>
                  </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          
          <Link href="/" className="flex items-center space-x-2">
            <Scissors className="h-6 w-6" />
            <span className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">СтильСтрижка</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleSectionClick(item.href)}
              className="text-sm font-medium text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-200 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="w-10" />
      </div>
    </header>
  )
}