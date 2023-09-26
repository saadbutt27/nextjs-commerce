import { Carousel as Carousel2 } from 'components/carousel';
import Carousel from 'components/grid/Carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';

// export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <Carousel />
      <ThreeItemGrid />
      <Carousel2 />
      <Suspense>
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
