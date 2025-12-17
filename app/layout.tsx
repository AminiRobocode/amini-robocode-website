import type React from "react"
import type { Metadata } from "next"
import { Vazirmatn } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "آمینی روبوکُد | آموزش رباتیک و برنامه‌نویسی برای کودکان و نوجوانان",
  description:
    "آموزش رباتیک، برنامه‌نویسی، و تقویت هوش فضایی کودکان و نوجوانان با رویکرد روان‌شناسی و پروژه‌محور",
  keywords:
    "آموزش رباتیک کودکان، آموزش برنامه‌نویسی، تقویت هوش فضایی، رفع اختلالات یادگیری با رباتیک، الگوریتم و فلوچارت",
  generator: "v0.app",
  openGraph: {
    title: "آمینی روبوکُد | آموزش رباتیک و برنامه‌نویسی",
    description: "آموزش رباتیک، برنامه‌نویسی، و تقویت هوش فضایی کودکان و نوجوانان",
    type: "website",
    locale: "fa_IR",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
