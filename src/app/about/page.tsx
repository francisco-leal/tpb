import Link from "next/link"
import { Instagram, Twitter, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <span>Wanderlust</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/destinations" className="text-sm font-medium hover:underline underline-offset-4">
              Destinations
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Hi there! I'm Alex, a passionate traveler, photographer, and storyteller with an insatiable
                  wanderlust.
                </p>
                <div className="mt-8 space-y-4">
                  <p>
                    My journey began in 2015 when I quit my corporate job to backpack through Southeast Asia for what
                    was supposed to be a 6-month trip. Six years and 47 countries later, I've turned my passion for
                    travel into a full-time lifestyle.
                  </p>
                  <p>
                    Through this blog, I aim to share authentic travel experiences, practical tips, and stories that
                    inspire others to explore our beautiful world. I believe that travel is not just about checking
                    places off a bucket list but about immersing yourself in different cultures, connecting with locals,
                    and growing as a person.
                  </p>
                  <p>
                    When I'm not on the road, you can find me in my home base of Barcelona, planning my next adventure,
                    editing photos, or enjoying a good book at a local café.
                  </p>
                </div>
                <div className="mt-8 flex gap-4">
                  <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </Link>
                  <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                  <Link href="mailto:hello@wanderlust.com">
                    <Button variant="outline" size="icon">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="space-y-8">
                <img
                  alt="Alex Morgan - Travel Blogger"
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                  src="/placeholder.svg?height=600&width=800"
                />
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold">Quick Facts</h2>
                    <Separator className="my-4" />
                    <dl className="grid gap-4">
                      <div className="grid grid-cols-2 gap-2">
                        <dt className="font-medium">Countries Visited:</dt>
                        <dd>47</dd>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <dt className="font-medium">Favorite Destination:</dt>
                        <dd>Japan</dd>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <dt className="font-medium">Travel Style:</dt>
                        <dd>Slow Travel, Cultural Immersion</dd>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <dt className="font-medium">Camera:</dt>
                        <dd>Sony Alpha a7 III</dd>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <dt className="font-medium">Languages:</dt>
                        <dd>English, Spanish, Basic Japanese</dd>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <dt className="font-medium">Home Base:</dt>
                        <dd>Barcelona, Spain</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="mt-16">
              <h2 className="text-2xl font-bold tracking-tight">My Travel Philosophy</h2>
              <div className="mt-6 grid gap-8 md:grid-cols-3">
                <div className="space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
                      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
                      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
                      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
                      <rect width="7" height="5" x="7" y="7" rx="1" />
                      <rect width="7" height="5" x="10" y="12" rx="1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Authentic Experiences</h3>
                  <p className="text-muted-foreground">
                    I believe in going beyond tourist attractions to discover the authentic heart of a destination
                    through local connections and off-the-beaten-path adventures.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                      <circle cx="12" cy="12" r="2" />
                      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Sustainable Travel</h3>
                  <p className="text-muted-foreground">
                    I'm committed to responsible tourism that respects local communities, preserves cultural heritage,
                    and minimizes environmental impact.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m2 12 20 0" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Cultural Immersion</h3>
                  <p className="text-muted-foreground">
                    I travel to learn about different cultures, traditions, and perspectives, believing that cultural
                    exchange leads to personal growth and global understanding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 Wanderlust. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

