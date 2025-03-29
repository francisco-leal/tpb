import Link from "next/link";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import LandingImage from "@/images/IMG_1369.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <span>Wanderlust</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/destinations"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Destinations
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Explore the World Through My Eyes
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join me on my journey as I discover breathtaking landscapes,
                    vibrant cultures, and unforgettable experiences around the
                    globe.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/blog">
                    <Button size="lg">
                      Read My Stories
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline">
                      About Me
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                alt="Travel Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                src={LandingImage}
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Recent Adventures
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Check out my latest travel stories and experiences from around
                  the world.
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
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
                  <CardTitle className="text-xl">
                    Island Paradise: A Week in Santorini
                  </CardTitle>
                  <CardDescription className="mt-2 line-clamp-3">
                    White-washed buildings, blue domes, and breathtaking sunsets
                    - my unforgettable experience exploring the magical island
                    of Santorini.
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
                  <CardTitle className="text-xl">
                    Cherry Blossoms in Kyoto
                  </CardTitle>
                  <CardDescription className="mt-2 line-clamp-3">
                    Experiencing the magical sakura season in Japan's ancient
                    capital - temples, gardens, and the beautiful ephemeral
                    nature of cherry blossoms.
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
                  <CardTitle className="text-xl">
                    Lost in the Medina of Marrakech
                  </CardTitle>
                  <CardDescription className="mt-2 line-clamp-3">
                    Navigating the labyrinthine streets of Marrakech's ancient
                    medina - spices, souks, and the sensory overload of this
                    vibrant North African city.
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
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/blog">
                <Button variant="outline">
                  View All Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Popular Destinations
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Explore my favorite places around the world, organized by
                  continent and country.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              <Link
                href="/destinations/europe"
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  alt="Europe"
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="/placeholder.svg?height=300&width=300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">Europe</h3>
                </div>
              </Link>
              <Link
                href="/destinations/asia"
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  alt="Asia"
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="/placeholder.svg?height=300&width=300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">Asia</h3>
                </div>
              </Link>
              <Link
                href="/destinations/north-america"
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  alt="North America"
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="/placeholder.svg?height=300&width=300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">
                    North America
                  </h3>
                </div>
              </Link>
              <Link
                href="/destinations/south-america"
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  alt="South America"
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="/placeholder.svg?height=300&width=300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">
                    South America
                  </h3>
                </div>
              </Link>
              <Link
                href="/destinations/africa"
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  alt="Africa"
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="/placeholder.svg?height=300&width=300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">Africa</h3>
                </div>
              </Link>
              <Link
                href="/destinations/oceania"
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  alt="Oceania"
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="/placeholder.svg?height=300&width=300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">Oceania</h3>
                </div>
              </Link>
              <Link
                href="/destinations/antarctica"
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  alt="Antarctica"
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="/placeholder.svg?height=300&width=300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">Antarctica</h3>
                </div>
              </Link>
              <Link
                href="/destinations/middle-east"
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  alt="Middle East"
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="/placeholder.svg?height=300&width=300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">Middle East</h3>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Stay Updated
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Subscribe to my newsletter to receive updates on new travel
                    stories, tips, and exclusive content.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <div className="flex-1">
                    <Input placeholder="Enter your email" type="email" />
                  </div>
                  <Button>Subscribe</Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Travel Tips
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Check out my latest travel tips and recommendations.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>
                      Pack light, but pack smart - essentials for every trip
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>How to find authentic local experiences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Budget travel without sacrificing comfort</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Photography tips for capturing your journey</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>
                      Sustainable travel practices for eco-conscious explorers
                    </span>
                  </li>
                </ul>
                <div>
                  <Link href="/tips">
                    <Button variant="outline">
                      View All Tips
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
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
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
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
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
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
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
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
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
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
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
