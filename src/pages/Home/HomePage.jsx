import { HeroSection } from "./home-components/HeroSection";
import { ShopByCategorySection } from "./home-components/ShopByCategorySection";
import { NewArrivalSection } from "./home-components/NewArrivalSection";
import { BestSellersSection } from "./home-components/BestSellersSection";
import { OurStory } from "./home-components/OurStorySection";
import { CustomerReviewSection } from "./home-components/CustomerReviewSection";
import { SubscriberListSection } from "./home-components/SubscriberListSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <ShopByCategorySection />
      <NewArrivalSection />
      <BestSellersSection />
      <OurStory />
      <CustomerReviewSection />
      <SubscriberListSection />
    </>
  );
}

export { HomePage };
