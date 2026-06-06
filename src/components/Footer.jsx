import { Link } from "react-router";
import { FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-surface-container-lowest pt-8 px-12 md:pt-16 md:px-20 lg:pt-20 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 pb-8 md:grid-cols-2 lg:grid-cols-4 gap-6 md:pb-12 lg:pb-24">
        <div>
          <Link to="/">
            <span className="text-on-background text-3xl font-black font-display tracking-tight">
              RNWY<span className="text-primary">.</span>
            </span>
          </Link>
          <span className="block mt-7 text-on-surface-variant">
            Wear the culture. Independent streetwear made in limited runs.
          </span>
          <div className="flex items-center justify-start gap-4 text-on-surface-varian text-xl mt-3">
            <a className="transition-transform duration-500 hover:translate-x-[25%]">
              <FaXTwitter />
            </a>
            <a className="transition-transform duration-500 hover:translate-x-[25%]">
              <FaInstagram />
            </a>
            <a className="transition-transform duration-500 hover:translate-x-[25%]">
              <FaFacebook />
            </a>
            <a className="transition-transform duration-500 hover:translate-x-[25%]">
              <MdOutlineMail />
            </a>
          </div>
        </div>

        <div>
          <span className="block smallcaps font-sans text-[9px] uppercase text-on-surface-variant tracking-[0.2em] mb-6">
            Shop
          </span>
          <nav
            aria-label="Footer Navigation"
            className="flex flex-col lg:gap-4 text-on-surface-variant"
          >
            <Link
              to="/shop?category=tops"
              onClick={() =>
                document
                  .getElementById("shop")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>Tops</span>
            </Link>
            <Link
              to="/shop?category=bottoms"
              onClick={() =>
                document
                  .getElementById("shop")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>Bottoms</span>
            </Link>
            <Link
              to="/shop?category=outerwear"
              onClick={() =>
                document
                  .getElementById("shop")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>Outerwear</span>
            </Link>
            <Link
              to="/shop?category=accessories"
              onClick={() =>
                document
                  .getElementById("shop")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>Accessories</span>
            </Link>
            <Link
              to="/shop?category=footwear"
              onClick={() =>
                document
                  .getElementById("shop")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>Footwear</span>
            </Link>
            <Link
              to="/shop?category=all"
              onClick={() =>
                document
                  .getElementById("shop")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>New Arrivals</span>
            </Link>
          </nav>
        </div>

        <div>
          <span className="block smallcaps font-sans text-[9px] uppercase text-on-surface-variant tracking-[0.2em] mb-6">
            Help
          </span>
          <nav
            aria-label="Footer Navigation"
            className="flex flex-col lg:gap-4 text-on-surface-variant"
          >
            <Link>
              <span>FAQ</span>
            </Link>
            <Link>
              <span>Shipping & Returns</span>
            </Link>
            <Link>
              <span>Size Guide</span>
            </Link>
            <Link>
              <span>Track Order</span>
            </Link>
            <Link>
              <span>Contact Us</span>
            </Link>
          </nav>
        </div>

        <div>
          <span className="block smallcaps font-sans text-[9px] uppercase text-on-surface-variant tracking-[0.2em] mb-6">
            Legal
          </span>
          <nav
            aria-label="Footer Navigation"
            className="flex flex-col lg:gap-4 text-on-surface-variant"
          >
            <Link>
              <span>Privacy Policy</span>
            </Link>
            <Link>
              <span>Terms of Service</span>
            </Link>
            <Link>
              <span>Cookie Policy</span>
            </Link>
          </nav>
        </div>
      </div>

      <div className="absolute left-0 right-0 border-b border-outline-variant" />
      <div className="flex justify-between items-center py-6">
        <div>
          <span className="text-[10px] text-on-surface-variant">
            © {currentYear} RNWY Studio
          </span>
        </div>

        <div>
          <span className="font-sans text-[9px] items-center uppercase text-on-surface-variant tracking-[0.2em] mb-6">
            Wear the culture.
          </span>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
