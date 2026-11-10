export type PortfolioImage = {
  src: string
  alt: string
  title: string
  category: string
  year: string
  layout: "feature" | "portrait" | "wide"
}

export type PortfolioPackage = {
  name: string
  price: string
  description: string
  details: string[]
  featured?: boolean
}

export const contactEmail = "hello@anaisrocha.studio"

// These Unsplash images are placeholders. Replace each URL, caption, and alt text with the owner's final work before launch.
export const portfolioImages: PortfolioImage[] = [
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=85",
    alt: "Woman in a dark jacket standing against a textured wall",
    title: "Quiet Forms",
    category: "Portraits",
    year: "2024",
    layout: "feature",
  },
  {
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85",
    alt: "Person walking across a sunlit modernist building",
    title: "Between Light",
    category: "Editorial",
    year: "2024",
    layout: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1400&q=85",
    alt: "Portrait of a person looking toward the camera",
    title: "The Long Look",
    category: "Portraits",
    year: "2023",
    layout: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
    alt: "Warmly lit creative studio with desks and plants",
    title: "A Place To Make",
    category: "Spaces",
    year: "2023",
    layout: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=85",
    alt: "Person in a white shirt seated in soft window light",
    title: "Soft Focus",
    category: "Portraits",
    year: "2022",
    layout: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=85",
    alt: "Person in a flowing coat standing on a city street",
    title: "In Motion",
    category: "Fashion",
    year: "2022",
    layout: "feature",
  },
]

export const packages: PortfolioPackage[] = [
  {
    name: "The Short Story",
    price: "€480",
    description: "A focused portrait session for one person, with room to settle into the frame.",
    details: ["90 minutes", "1 location", "35 edited images"],
  },
  {
    name: "The Full Story",
    price: "€920",
    description: "A considered session with space to explore a few places, moods, and versions of you.",
    details: ["3 hours", "2 locations", "75 edited images"],
    featured: true,
  },
  {
    name: "The Commission",
    price: "From €1,600",
    description: "A tailored visual series for a brand, team, or story that needs more time to unfold.",
    details: ["Half or full day", "Creative direction", "Usage licensing"],
  },
]
