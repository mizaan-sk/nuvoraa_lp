import type { Metadata } from 'next'
import { performanceMetadata } from '../metadata'

export const metadata: Metadata = {
  title: performanceMetadata.title,
  description: performanceMetadata.description,
  keywords: performanceMetadata.keywords,
  robots: 'index, follow',
  openGraph: {
    title: performanceMetadata.title,
    description: performanceMetadata.description,
    url: 'https://www.nuvoraa.com/performance-marketing-agency',
    siteName: 'Nuvoraa',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: performanceMetadata.title,
    description: performanceMetadata.description,
  },
}

export default function PerformanceMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
