function Catalogue() {
  return (
    <section className="bg-surface-container-lowest px-8 py-8 lg:px-32 lg:py-18">
      <div>
        <span className="block smallcaps font-sans text-[9px] uppercase text-on-surface-variant tracking-[0.2em] mb-4">
          Catalogue
        </span>
        <h1 className="font-display font-black text-4xl md:text-5xl lg:text-7xl tracking-tight">
          <span className="text-on-background">
            All <span className="text-primary">pieces.</span>
          </span>
        </h1>
      </div>
    </section>
  );
}

export { Catalogue };
