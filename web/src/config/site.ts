import type { SiteConfig } from "@/lib/types/site";

export const siteConfig: SiteConfig = {
  name: "Cutting-edge Learning Tool | Words Builds Worlds",
  author: "Kurt San Jose",
  description: "An experimental tool to replace traditional learning using linguistic theory.",
  keywords: [
    "experimental learning",
    "language theory",
    "cognitive science",
    "education technology",
  ],
  url: {
    base: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    author: "https://kurtsanjose.dev",
  },
  links: {
    github: "https://github.com/ssanjose/wordsbuildsworlds",
  },
  ogImage: `${process.env.NEXT_PUBLIC_APP_URL}/transact_landing.jpg`,
  navLinks: [
    { href: "/", text: "Home" },
    { href: "/#features", text: "Features" },
    { href: "/#about", text: "About" },
    { href: "/overview", text: "Overview" },
  ]
}