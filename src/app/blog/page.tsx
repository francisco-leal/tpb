import Link from "next/link"
import { MapPin, Calendar, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BlogPage() {
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Travel Blog</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Stories, tips, and adventures from my journeys around the world.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-2xl mt-8">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search blog posts..."
                  className="w-full appearance-none bg-background pl-8 shadow-none"
                />
              </div>
            </div>
            <div className="mt-8">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="w-full max-w-md mx-auto grid grid-cols-4 mb-8">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="destinations">Destinations</TabsTrigger>
                  <TabsTrigger value="tips">Tips</TabsTrigger>
                  <TabsTrigger value="stories">Stories</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-0">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="p-0">
                        <img
                          alt="Santorini, Greece"
                          className="aspect-[4/3] w-full rounded-t-lg object-cover"
                          src="/placeholder.svg?height=400&width=600"
                        />
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>Santorini, Greece</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>June 12, 2023</span>
                          </div>
                        </div>
                        <CardTitle className="text-xl">Island Paradise: A Week in Santorini</CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">
                          White-washed buildings, blue domes, and breathtaking sunsets - my unforgettable experience
                          exploring the magical island of Santorini.
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="px-6 pb-6 pt-0">
                        <Link href="/blog/santorini-greece">
                          <Button variant="outline" size="sm">
                            Read More
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader className="p-0">
                        <img
                          alt="Kyoto, Japan"
                          className="aspect-[4/3] w-full rounded-t-lg object-cover"
                          src="/placeholder.svg?height=400&width=600"
                        />
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>Kyoto, Japan</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>April 5, 2023</span>
                          </div>
                        </div>
                        <CardTitle className="text-xl">Cherry Blossoms in Kyoto</CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">
                          Experiencing the magical sakura season in Japan's ancient capital - temples, gardens, and the
                          beautiful ephemeral nature of cherry blossoms.
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="px-6 pb-6 pt-0">
                        <Link href="/blog/kyoto-japan">
                          <Button variant="outline" size="sm">
                            Read More
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader className="p-0">
                        <img
                          alt="Marrakech, Morocco"
                          className="aspect-[4/3] w-full rounded-t-lg object-cover"
                          src="/placeholder.svg?height=400&width=600"
                        />
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>Marrakech, Morocco</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>March 18, 2023</span>
                          </div>
                        </div>
                        <CardTitle className="text-xl">Lost in the Medina of Marrakech</CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">
                          Navigating the labyrinthine streets of Marrakech's ancient medina - spices, souks, and the
                          sensory overload of this vibrant North African city.
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="px-6 pb-6 pt-0">
                        <Link href="/blog/marrakech-morocco">
                          <Button variant="outline" size="sm">
                            Read More
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader className="p-0">
                        <img
                          alt="Bali, Indonesia"
                          className="aspect-[4/3] w-full rounded-t-lg object-cover"
                          src="/placeholder.svg?height=400&width=600"
                        />
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>Bali, Indonesia</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>February 3, 2023</span>
                          </div>
                        </div>
                        <CardTitle className="text-xl">Finding Peace in Ubud</CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">
                          Yoga retreats, rice terraces, and spiritual awakening in Bali's cultural heart - my month-long
                          journey to find inner peace in Ubud.
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="px-6 pb-6 pt-0">
                        <Link href="/blog/bali-indonesia">
                          <Button variant="outline" size="sm">
                            Read More
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader className="p-0">
                        <img
                          alt="New York City, USA"
                          className="aspect-[4/3] w-full rounded-t-lg object-cover"
                          src="/placeholder.svg?height=400&width=600"
                        />
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>New York City, USA</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>January 15, 2023</span>
                          </div>
                        </div>
                        <CardTitle className="text-xl">Winter in the Big Apple</CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">
                          Snow-covered Central Park, cozy cafes, and the magic of New York City during the winter months
                          - a different perspective on the city that never sleeps.
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="px-6 pb-6 pt-0">
                        <Link href="/blog/new-york-usa">
                          <Button variant="outline" size="sm">
                            Read More
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader className="p-0">
                        <img
                          alt="Cape Town, South Africa"
                          className="aspect-[4/3] w-full rounded-t-lg object-cover"
                          src="/placeholder.svg?height=400&width=600"
                        />
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>Cape Town, South Africa</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>December 10, 2022</span>
                          </div>
                        </div>
                        <CardTitle className="text-xl">Adventures at the Cape of Good Hope</CardTitle>
                        <CardDescription className="mt-2 line-clamp-3">
                          From Table Mountain to penguin beaches - exploring the stunning landscapes and diverse culture
                          of South Africa's most beautiful city.
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="px-6 pb-6 pt-0">
                        <Link href="/blog/cape-town-south-africa">
                          <Button variant="outline" size="sm">
                            Read More
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="destinations" className="mt-0">
                  {/* Destinations content would go here */}
                </TabsContent>
                <TabsContent value="tips" className="mt-0">
                  {/* Tips content would go here */}
                </TabsContent>
                <TabsContent value="stories" className="mt-0">
                  {/* Stories content would go here */}
                </TabsContent>
              </Tabs>
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline">Load More</Button>
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

