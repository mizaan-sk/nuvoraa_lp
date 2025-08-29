import type { Metadata } from 'next'
import { WebMetadata } from '../metadata'

export const metadata: Metadata = {
  title: WebMetadata.title,
  description: WebMetadata.description,
  keywords: WebMetadata.keywords,
  robots: 'index, follow',
  openGraph: {
    title: WebMetadata.title,
    description: WebMetadata.description,
    url: 'https://www.nuvoraa.com/website-design-development-agency',
    siteName: 'Nuvoraa',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: WebMetadata.title,
    description: WebMetadata.description,
  },
}

export default function WebLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
