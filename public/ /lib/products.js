export const products = [
  {
    slug: "artisan-watch-candle",
    title: "Artisan Watch + Luxe Candle Bundle",
    description: "A hand-crafted timepiece paired with a premium soy-based scented candle. Curated for refined evenings.",
    price: 349,
    image: "/products/artisan-watch-candle.jpg"
  },
  {
    slug: "prestige-chest",
    title: "Prestige Chest: Ring, Watch, Silk Pillow",
    description: "Valestra’s signature gift chest: a refined jewelry ring, artisanal watch, and luxe silk pillow for display.",
    price: 525,
    image: "/products/prestige-chest.jpg"
  },
  {
    slug: "goddess-ritual-kit",
    title: "Goddess Ritual Spa Kit",
    description: "A complete self-care experience featuring rose bath bombs, silk eye mask, and a ritual candle.",
    price: 299,
    image: "/products/goddess-ritual.jpg"
  },
  {
    slug: "gentlemans-ritual",
    title: "Gentleman’s Ritual Bundle",
    description: "Includes a glass whiskey set, premium leather valet tray, and boutique cologne spray.",
    price: 389,
    image: "/products/gentlemans-ritual.jpg"
  }
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug)
}
