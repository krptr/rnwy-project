import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import { PromoHeadline } from "./components/PromoHeadline";
import { HeroSection } from "./pages/Home/components/HeroSection";

function App() {
  return (
    <>
      <PromoHeadline />
      <Navbar />
      <HeroSection />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export { App };
