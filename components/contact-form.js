"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.target)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
          'Accept': 'application/json',
        },
      })
      
      const data = await response.json()

      if (data.success) {
        toast.success("Thanks for your message! We'll get back to you soon.")
        e.target.reset()
      } else {
        throw new Error("Something went wrong")
      }
    } catch (error) {
      toast.error("Sorry, something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 via-transparent to-zinc-200 dark:from-zinc-800 dark:to-zinc-800 rounded-xl" />
      <Card className="relative border-0 bg-background/80 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
        <CardHeader>
          <CardTitle className="text-2xl bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent dark:from-zinc-100 dark:via-zinc-400 dark:to-zinc-100">
            Get in Touch
          </CardTitle>
          <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input 
              type="hidden" 
              name="access_key" 
              value="322cc816-d2e8-4dfb-bd3b-72b571d86eba"
            />

            <div className="space-y-2">
              <Input
                type="tel"
                name="phone"
                placeholder="Phone number"
                required
                className="h-12 bg-background shadow-[0_2px_10px_rgb(0,0,0,0.02)] dark:shadow-[0_2px_10px_rgb(0,0,0,0.08)]"
              />
            </div>

            <div className="space-y-2">
              <Textarea
                name="message"
                placeholder="Your message"
                required
                minLength={10}
                rows={4}
                className="resize-none bg-background shadow-[0_2px_10px_rgb(0,0,0,0.02)] dark:shadow-[0_2px_10px_rgb(0,0,0,0.08)]"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-base font-medium bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 hover:from-zinc-800 hover:to-zinc-800 dark:from-zinc-200 dark:via-zinc-300 dark:to-zinc-200 dark:hover:from-zinc-300 dark:hover:to-zinc-300 dark:text-zinc-900 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}