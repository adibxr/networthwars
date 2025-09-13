import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Networthwars - Learn Finance the Fun Way | Interactive Finance Education Platform",
  description:
    "Master finance through interactive, chapter-based learning with daily quizzes and hackathons. Join 10,000+ learners building their financial literacy with gamified education. Founded by Eeshit Mishra.",
  keywords: [
    "finance education",
    "financial literacy",
    "interactive learning",
    "finance courses",
    "investment education",
    "personal finance",
    "finance quizzes",
    "finance hackathons",
    "gamified learning",
    "financial planning",
    "budgeting",
    "investing",
    "Eeshit Mishra",
    "Networthwars",
    "duolingo for finance",
    "finance app",
    "money management",
    "financial skills",
  ],
  authors: [{ name: "Eeshit Mishra" }],
  creator: "Eeshit Mishra",
  publisher: "Networthwars",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://networthwars.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Networthwars - Learn Finance the Fun Way | Interactive Finance Education",
    description:
      "Master finance through interactive, chapter-based learning with daily quizzes and hackathons. Join 10,000+ learners worldwide.",
    url: "https://networthwars.com",
    siteName: "Networthwars",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Networthwars - Interactive Finance Education Platform with Gamified Learning",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Networthwars - Learn Finance the Fun Way",
    description:
      "Master finance through interactive, chapter-based learning with daily quizzes and hackathons. Join 10,000+ learners worldwide.",
    images: ["/og-image.png"],
    creator: "@networthwars",
    site: "@networthwars",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  generator: "v0.app",
  category: "Education",
  classification: "Finance Education Platform",
  referrer: "origin-when-cross-origin",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e3a8a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Networthwars",
              description:
                "Interactive finance education platform with chapter-based learning, daily quizzes, and hackathons. Making financial literacy accessible and engaging for everyone.",
              url: "https://networthwars.com",
              logo: "https://networthwars.com/logo.png",
              image: "https://networthwars.com/og-image.png",
              founder: {
                "@type": "Person",
                name: "Eeshit Mishra",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "admin@networthwars.com",
                contactType: "customer service",
                availableLanguage: "English",
              },
              sameAs: ["https://www.instagram.com/networthwars/", "https://github.com/adibxr"],
              offers: {
                "@type": "Offer",
                category: "Education",
                description: "Interactive finance education courses",
                availability: "https://schema.org/InStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "10000",
                bestRating: "5",
                worstRating: "1",
              },
              educationalCredentialAwarded: "Financial Literacy Certificate",
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                name: "Financial Literacy Certification",
                description: "Comprehensive finance education completion certificate",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Networthwars?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Networthwars is an interactive finance education platform that teaches financial literacy through gamified, chapter-based learning with daily quizzes and hackathons.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does Networthwars work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Similar to Duolingo, Networthwars breaks down complex finance topics into bite-sized, interactive lessons. Users progress through chapters, complete daily challenges, and participate in hackathons to reinforce their learning.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who founded Networthwars?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Networthwars was founded by Eeshit Mishra with the mission to make financial literacy accessible and engaging for everyone.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
