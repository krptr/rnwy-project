import { Button } from "../../../components/Buttons";
import hero from "../../../assets/hero.jpg";
import { useNavigate } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="bg-surface-container-lowest grid grid-cols-1 lg:grid-cols-12 lg:pt-20 lg:pb-24 px-4 sm:px-6 md:px-8 lg:px-32">
      <div className="col-span-7 py-8">
        <span className="block smallcaps font-sans text-[9px] uppercase text-on-surface-variant tracking-[0.2em] mb-8">
          Own the drip
        </span>

        <h1 className="font-display font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
          <span className="text-on-background block">Wear the</span>
          <span className="text-primary">culture.</span>
        </h1>
        <div className="text-on-surface-variant leading-relaxed my-8">
          <p>
            Garments built in limited runs. Editorial silhouettes,
            <span className="md:block">
              considered materials, and a quiet kind of confidence.
            </span>
          </p>
        </div>

        <div className="flex gap-3 mb-16">
          <Button
            onClick={() => navigate("/shop")}
            variant="primary"
            size="md"
            radius="xxl"
          >
            Shop Now{" "}
            <span>
              <FaArrowRightLong />
            </span>
          </Button>

          <Button
            onClick={() =>
              document
                .getElementById("our-story")
                .scrollIntoView({ behavior: "smooth" })
            }
            variant="outline"
            size="md"
            radius="xxl"
          >
            Our Story
          </Button>
        </div>

        <div className="border-t border-outline-variant flex gap-16 md:w-3/5 pt-8">
          <span className="font-display font-black text-2xl w-1/4 text-on-background">
            04
            <span className=" block mt-2 smallcaps font-sans text-[8px] uppercase text-on-surface-variant tracking-[0.2em] font-normal">
              Drops/Yr
            </span>
          </span>
          <span className="font-display font-black text-2xl w-1/4 text-on-background">
            120
            <span className=" block mt-2 smallcaps font-sans text-[8px] uppercase text-on-surface-variant tracking-[0.2em] font-normal">
              Per run
            </span>
          </span>
          <span className="font-display font-black text-2xl w-1/4 text-on-background">
            09
            <span className="block mt-2 smallcaps font-sans text-[8px] uppercase text-on-surface-variant tracking-[0.2em] font-normal">
              cities
            </span>
          </span>
        </div>
      </div>

      {/* Hero-Image Carousel Container */}
      <div className="col-span-5 w-full aspect-2/3 relative p-4 lg:p-6 bg-surface-container-lowest">
        <div
          aria-hidden="true"
          className="absolute inset-0 border-2 border-primary rounded-2xl pointer-events-none"
        />

        <div className="w-full h-full rounded-xl overflow-hidden relative">
          <div className="bg-primary text-on-primary text-[10px] font-sans px-4 py-1 rounded-2xl absolute bottom-4 right-4">
            New
          </div>
          <div className="absolute bg-surface/85 backdrop-blur px-4 py-1 rounded-xl bottom-4 left-4">
            <span className="font-sans text-[8px] text-on-surface-variant smallcaps uppercase tracking-widest">
              Feel 01
              <span className="block font-extrabold font-display text-on-background text-[12px] normal-case">
                Shadow Hoodie
              </span>
            </span>
          </div>
          <img
            src={hero}
            alt="Hero editorial model"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
