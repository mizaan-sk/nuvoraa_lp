import type { Metadata } from 'next'
import { SeoMetadata } from '../metadata'

export const metadata: Metadata = {
  title: SeoMetadata.title,
  description: SeoMetadata.description,
  keywords: SeoMetadata.keywords,
  robots: 'index, follow',
  openGraph: {
    title: SeoMetadata.title,
    description: SeoMetadata.description,
    url: 'https://www.nuvoraa.com/search-engine-optimization-agency',
    siteName: 'Nuvoraa',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SeoMetadata.title,
    description: SeoMetadata.description,
  },
}

export default function SeoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
