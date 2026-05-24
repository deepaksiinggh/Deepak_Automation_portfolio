import type { Metadata } from "next";
import { Barlow_Semi_Condensed } from 'next/font/google'

const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Deepak Singh | Automation Developer",
  description: "Welcome to Deepak's portfolio. Explore projects and skills of a passionate Automation developer.",
  icons: {
    icon: '/images/favicon.png',
  },
 verification: {
    google: "o9WajoQ7J5PUc2EaxWvRk9SelGHobgM-AKK-8ZfTE7w"
  },
  openGraph: {
    title: "Deepak Singh – QA Automation Portfolio",
    description: "QA Automation Engineer skilled in Java, Selenium, Playwright, API Testing, TestNG, Postman, SQL, and Automation Framework Development.",
    url: "https://deepak-automation-portfolio.vercel.app",
    siteName: "Deepak Singh Portfolio",
    images: [
      {
        url: "https://deepak-automation-portfolio.vercel.app/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Deepak Singh QA Automation Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Deepak Singh – QA Automation Portfolio",
    description: "QA Automation Engineer skilled in Java, Selenium, Playwright, API Testing, TestNG, Postman, SQL, and Automation Framework Development.",
    images: ["https://deepak-automation-portfolio.vercel.app/thumbnail.png"],
  },

  metadataBase: new URL("https://deepak-automation-portfolio.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlowSemiCondensed.className}>
        {children}
      </body>
    </html>
  );
}