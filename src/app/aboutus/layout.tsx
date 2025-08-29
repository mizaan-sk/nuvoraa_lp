import type { Metadata } from 'next'
import { aboutMetadata } from '../metadata'

export const metadata: Metadata = {
  title: aboutMetadata.title,
  description: aboutMetadata.description,
  keywords: aboutMetadata.keywords,
  robots: 'index, follow',
  openGraph: {
    title: aboutMetadata.title,
    description: aboutMetadata.description,
    url: 'https://www.nuvoraa.com/aboutus',
    siteName: 'Nuvoraa',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: aboutMetadata.title,
    description: aboutMetadata.description,
  },
}

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
