import type { Metadata } from 'next'
import { Vidmetadata } from '../metadata'

export const metadata: Metadata = {
  title: Vidmetadata.title,
  description: Vidmetadata.description,
  keywords: Vidmetadata.keywords,
  robots: 'index, follow',
  openGraph: {
    title: Vidmetadata.title,
    description: Vidmetadata.description,
    url: 'https://www.nuvoraa.com/video-production-company-services',
    siteName: 'Nuvoraa',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: Vidmetadata.title,
    description: Vidmetadata.description,
  },
}

export default function VideoProductionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
