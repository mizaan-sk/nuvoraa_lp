import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { defaultMetadata } from './metadata'

export const metadata: Metadata = {
  title: defaultMetadata.title,
  description: defaultMetadata.description,
  keywords: defaultMetadata.keywords,
  robots: 'index, follow',
  openGraph: {
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    url: 'https://www.nuvoraa.com',
    siteName: 'Nuvoraa',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultMetadata.title,
    description: defaultMetadata.description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
         <link rel="canonical" href="https://www.nuvoraa.com/" />
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NZ5JV9J8');`}
        </Script>
        {/* End Google Tag Manager */}
        
        {/* TARS Chatbot Widget */}
        <Script id="tars-widget" strategy="afterInteractive">
          {`(function(){var js,fs,d=document,id="tars-widget-script",b="https://tars-file-upload.s3.amazonaws.com/bulb/";if(!d.getElementById(id)){js=d.createElement("script");js.id=id;js.type="text/javascript";js.src=b+"js/widget.js";fs=d.getElementsByTagName("script")[0];fs.parentNode.insertBefore(js,fs)}})();window.tarsSettings = {"convid":"5cNn3e"};`}
        </Script>
        {/* End TARS Chatbot Widget */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-NZ5JV9J8"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        
        {children}
      </body>
    </html>
  )
}