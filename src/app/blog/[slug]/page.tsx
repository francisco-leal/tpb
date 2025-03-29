import Link from "next/link"
import { MapPin, Calendar, Clock, ArrowLeft, Share2, Bookmark, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // This would normally fetch the blog post data based on the slug
  const post = {
    title: "Island Paradise: A Week in Santorini",
    date: "June 12, 2023",
    location: "Santorini, Greece",
    readTime: "8 min read",
    content: `
      <p>The moment I stepped off the ferry onto the volcanic shores of Santorini, I knew I was in for something special. The island, formed from a catastrophic volcanic eruption thousands of years ago, now stands as one of the most picturesque destinations in the world.</p>
      
      <h2>Arrival in Oia</h2>
      
      <p>My journey began in Oia, the postcard-perfect village perched on the northern tip of the island. Famous for its blue-domed churches and sunset views, Oia lives up to every bit of its reputation. I checked into a traditional cave house, carved into the volcanic cliff with a private terrace overlooking the caldera.</p>
      
      <p>The first evening was spent wandering through the narrow marble pathways of Oia, getting lost in the maze of white-washed buildings and blue accents. Every corner revealed a new breathtaking view of the Aegean Sea stretching out to the horizon.</p>
      
      <h2>Sunset Magic</h2>
      
      <p>Santorini sunsets are legendary for a reason. As the day drew to a close, I joined hundreds of other travelers at the Byzantine Castle ruins, the prime sunset-watching spot in Oia. As the sun dipped below the horizon, the sky transformed into a canvas of orange, pink, and purple hues, casting a golden glow over the white buildings. The collective gasp from the crowd as the final sliver of sun disappeared was a moment I'll never forget.</p>
      
      <h2>Beach Exploration</h2>
      
      <p>Santorini's beaches are unlike any other in Greece. Instead of the typical golden sand, you'll find beaches of red, black, and white volcanic pebbles. I spent a day exploring Red Beach, named for its dramatic red cliffs and sand. The contrast of the red shore against the deep blue water created a surreal landscape that felt almost Martian.</p>
      
      <p>Another day was dedicated to Perissa Beach, with its striking black sand that gets scorching hot under the midday sun (a lesson I learned the hard way!). The beach is lined with tavernas and beach bars, making it easy to spend an entire day there, alternating between swimming in the crystal-clear water and relaxing under an umbrella with a cold Mythos beer.</p>
      
      <h2>Culinary Delights</h2>
      
      <p>The food in Santorini deserves a special mention. The island's volcanic soil produces exceptional ingredients, particularly the famous Santorini tomatoes – small, intensely flavored, and perfect in the traditional Greek salad served at every taverna.</p>
      
      <p>I took a cooking class in a small village where we prepared traditional dishes like fava (a yellow split pea puree), tomato fritters, and fresh grilled fish caught that morning. Everything was accompanied by the crisp, mineral-rich local white wine made from Assyrtiko grapes grown in the island's unique basket-shaped vineyards designed to protect the grapes from strong winds.</p>
      
      <h2>Island Hopping</h2>
      
      <p>From Santorini, I took a day trip to the nearby island of Thirassia, which many say resembles what Santorini was like before tourism boomed. With only a few hundred inhabitants, Thirassia offers a glimpse into a more traditional way of Greek island life. The ferry ride there provided spectacular views of Santorini's caldera cliffs from the water – a perspective not to be missed.</p>
      
      <h2>Final Thoughts</h2>
      
      <p>As my week in Santorini came to an end, I found myself already planning a return trip. There's something magical about this crescent-shaped island that captures your heart. Perhaps it's the dramatic landscapes, the warm hospitality of the locals, or the sense of walking through a living postcard at every turn.</p>
      
      <p>If Santorini isn't on your travel bucket list yet, add it now. Just be prepared – once you've experienced the magic of this Greek island paradise, nowhere else quite compares.</p>
    `,
    author: {
      name: "Alex Morgan",
      image: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=600&width=1200",
    relatedPosts: [
      {
        title: "Island Hopping in the Cyclades",
        image: "/placeholder.svg?height=200&width=300",
        slug: "island-hopping-cyclades",
      },
      {
        title: "The Best Greek Islands for Every Type of Traveler",
        image: "/placeholder.svg?height=200&width=300",
        slug: "best-greek-islands",
      },
      {
        title: "Mediterranean Food Guide: From Greece to Spain",
        image: "/placeholder.svg?height=200&width=300",
        slug: "mediterranean-food-guide",
      },
    ],
  }

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
        <article className="container max-w-3xl py-12 md:py-20">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to all posts
          </Link>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                <span>{post.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <Avatar>
              <AvatarImage src={post.author.image} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{post.author.name}</div>
              <div className="text-sm text-muted-foreground">Travel Blogger</div>
            </div>
          </div>
          <div className="mt-8">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="aspect-video w-full rounded-lg object-cover"
            />
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Heart className="mr-1 h-4 w-4" />
                Like
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-1 h-4 w-4" />
                Share
              </Button>
            </div>
            <Button variant="outline" size="sm">
              <Bookmark className="mr-1 h-4 w-4" />
              Save
            </Button>
          </div>
          <Separator className="my-8" />
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          <Separator className="my-8" />
          <div className="space-y-8">
            <h2 className="text-2xl font-bold tracking-tight">Related Posts</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {post.relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                  <Card className="overflow-hidden">
                    <img
                      alt={relatedPost.title}
                      className="aspect-[4/3] w-full object-cover"
                      src={relatedPost.image || "/placeholder.svg"}
                    />
                    <CardContent className="p-4">
                      <h3 className="font-medium">{relatedPost.title}</h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </article>
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

