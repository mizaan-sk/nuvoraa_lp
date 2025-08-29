import type { Metadata } from 'next'
import { contactusMetadata } from '../metadata'

export const metadata: Metadata = {
  title: contactusMetadata.title,
  description: contactusMetadata.description,
  keywords: contactusMetadata.keywords,
  robots: 'index, follow',
  openGraph: {
    title: contactusMetadata.title,
    description: contactusMetadata.description,
    url: 'https://www.nuvoraa.com/contactus',
    siteName: 'Nuvoraa',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: contactusMetadata.title,
    description: contactusMetadata.description,
  },
}

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
