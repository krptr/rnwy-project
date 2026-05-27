import { Button } from "../../../components/Buttons";

function HeroSection() {
  return (
    <section className="bg-surface-container-lowest grid grid-cols-1 md:grid-cols-12 md:pt-20 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-32 relative">
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
          <Button variant="primary" size="md" radius="xxl">
            Shop Now <span>→</span>
          </Button>
          <Button variant="outline" size="md" radius="xxl">
            Our Story
          </Button>
        </div>

        <div className="border-t border-outline-variant flex gap-16 md:w-3/5 pt-8">
          <span className="font-display font-black text-2xl w-1/4">
            O4
            <span className=" block mt-2 smallcaps font-sans text-[8px] uppercase text-on-surface-variant tracking-[0.2em] font-normal">
              Drops/Yr
            </span>
          </span>
          <span className="font-display font-black text-2xl w-1/4">
            120
            <span className=" block mt-2 smallcaps font-sans text-[8px] uppercase text-on-surface-variant tracking-[0.2em] font-normal">
              Per run
            </span>
          </span>
          <span className="font-display font-black text-2xl w-1/4">
            09
            <span className="block mt-2 smallcaps font-sans text-[8px] uppercase text-on-surface-variant tracking-[0.2em] font-normal">
              cities
            </span>
          </span>
        </div>
      </div>
      <div className="bg-blue-100 col-span-5">hello</div>
    </section>
  );
}

export { HeroSection };
