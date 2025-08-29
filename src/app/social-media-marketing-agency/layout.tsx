import type { Metadata } from 'next'
import { socialMediaMetadata } from '../metadata';

export const metadata: Metadata = {
  title: socialMediaMetadata.title,
  description: socialMediaMetadata.description,
  keywords: socialMediaMetadata.keywords,
  robots: 'index, follow',
  openGraph: {
    title: socialMediaMetadata.title,
    description: socialMediaMetadata.description,
    url: 'https://www.nuvoraa.com/social-media-marketing-agency',
    siteName: 'Nuvoraa',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: socialMediaMetadata.title,
    description: socialMediaMetadata.description,
  },
}

export default function SocialMediaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
