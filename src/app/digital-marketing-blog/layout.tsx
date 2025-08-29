import type { Metadata } from 'next'
import { BlogMetadata } from '../metadata';

export const metadata: Metadata = {
  title: BlogMetadata.title,
  description: BlogMetadata.description,
  keywords: BlogMetadata.keywords,
  robots: 'index, follow',
  openGraph: {
    title: BlogMetadata.title,
    description: BlogMetadata.description,
    url: 'https://www.nuvoraa.com/digital-marketing-blog',
    siteName: 'Nuvoraa',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: BlogMetadata.title,
    description: BlogMetadata.description,
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
