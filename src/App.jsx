import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import { PromoHeadline } from "./components/PromoHeadline";
// import { HomePage } from "./pages/Home/HomePage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <PromoHeadline />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export { App };
