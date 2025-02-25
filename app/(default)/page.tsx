export const metadata = {
  title: "ScoutiFi - Empowering Sports Performance Investments",
  description: "ScoutiFi - Empowering Sports Performance Investments",
  icons: {
    apple: [{ url: '/images/apple-touch-icon.png', sizes: '180x180' }],
    icon: [
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ]
  },
  manifest: '/images/site.webmanifest',
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Tokenomics from "@/components/tokenomics";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Features />
      <Workflows />
      <Tokenomics />
      <Cta />
    </>
  );
}
