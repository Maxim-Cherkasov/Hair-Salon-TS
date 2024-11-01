"use client"

import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin, Clock, Scissors } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

export function Footer() {
  const mapInitialized = useRef(false)

  useEffect(() => {
    if (mapInitialized.current) return
    
    if (!document.querySelector('script[src*="api-maps.yandex.ru"]')) {
      const script = document.createElement("script")
      script.src = "https://api-maps.yandex.ru/2.1/?apikey=your-api-key&lang=ru_RU"
      script.async = true
      document.body.appendChild(script)

      script.onload = () => {
        // @ts-ignore
        ymaps.ready(() => {
          // @ts-ignore
          new ymaps.Map("ymap", {
            center: [55.7558, 37.6173], // Moscow coordinates
            zoom: 15,
            controls: ["zoomControl", "fullscreenControl"]
          })
        })
      }
    }

    mapInitialized.current = true

    return () => {
      mapInitialized.current = false
    }
  }, [])

  return (
    <footer className="bg-zinc-950 text-zinc-200">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 gap-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Scissors className="h-6 w-6" />
                <span className="text-xl font-semibold tracking-tight">СтильСтрижка</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Премиум салон красоты, предоставляющий исключительные услуги стрижки в роскошной и уютной атмосфере.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Часы работы</h3>
              <div className="flex items-start gap-3 text-zinc-400">
                <Clock className="h-4 w-4 mt-1" />
                <div className="space-y-1 text-sm">
                  <p>Понедельник - Пятница: 9:00 - 20:00</p>
                  <p>Суббота: 10:00 - 18:00</p>
                  <p>Воскресенье: Выходной</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Контакты</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-zinc-400">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">info@stylecuts.ru</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">ул. Тверская 1, Москва, 125009</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[1024px] mx-auto w-full h-[300px] rounded-xl overflow-hidden bg-zinc-900">
            <div id="ymap" className="w-full h-full"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-zinc-400">
              © 2024 СтильСтрижка. Все права защищены.
            </div>

            <div className="flex gap-8 text-sm text-zinc-400">
              <a href="#" className="hover:text-zinc-200 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-zinc-200 transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}