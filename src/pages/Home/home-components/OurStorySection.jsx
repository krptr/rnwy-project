function OurStory() {
  return (
    <section id="our-story" className="px-8 py-8 md:px-32 md:py-24">
      <div className="flex flex-col gap-10 lg:grid lg:gap-12 lg:grid-cols-12">
        <div className="col-span-7">
          <span className="block smallcaps font-sans text-[9px] uppercase text-on-surface-variant tracking-[0.2em] mb-4">
            our story
          </span>
          <h1 className="font-black font-display text-3xl md:text-4xl lg:text-5xl tracking-tight">
            <span className="block text-on-background">Independent.</span>
            <span className="block text-primary">By design.</span>
          </h1>

          <div className="mt-6 font-sans text-[17px] text-on-surface-variant">
            <p>
              RNWY began as a one-room studio driven by a single belief:
              streetwear should embody the same craftsmanship and simplicity as
              the fashion houses it draws inspiration from. We release four
              capsule collections annually, with limited runs of 120 pieces, and
              we do not restock.
            </p>
            <p className="mt-6">
              Each piece is designed in-house, sampled twice, and produced in
              collaboration with partners we visit personally. There are no
              marketing campaigns or markdown sales, only the focus on the
              craftsmanship and the community of wearers.
            </p>
          </div>
        </div>

        <div className="col-span-5 lg:border-l lg:border-outline-variant flex gap-10 justify-between lg:flex-col lg:justify-start lg:pl-16">
          <div>
            <div className="font-display font-black text-2xl md:text-4xl lg:text-5xl text-on-background">
              04
            </div>
            <div className="font-sans text-[8px] uppercase text-on-surface-variant tracking-wide md:tracking-[0.2em] font-normal mt-3">
              Drops per year
            </div>
          </div>

          <div>
            <div className="font-display font-black text-2xl md:text-4xl lg:text-5xl text-on-background">
              120
            </div>
            <div className=" block font-sans text-[8px] uppercase text-on-surface-variant tracking-wide md:tracking-[0.2em] font-normal mt-3">
              Pieces per run
            </div>
          </div>

          <div>
            <div className="font-display font-black text-2xl md:text-4xl lg:text-5xl text-on-background">
              09
            </div>
            <div className="block font-sans text-[8px] uppercase text-on-surface-variant tracking-wide md:tracking-[0.2em] font-normal mt-3">
              cities stocked
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { OurStory };
