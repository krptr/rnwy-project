import { HeroSection } from "./home-components/HeroSection";
import { FeaturedProductsSection } from "./home-components/FeaturedProductsSection";
import { SubscriberListSection } from "./home-components/SubscriberListSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProductsSection />
      <SubscriberListSection />
    </>
  );
}

export { HomePage };
