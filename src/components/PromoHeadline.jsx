function PromoHeadline() {
  return (
    <div className="flex justify-center w-full bg-primary-container text-on-primary-container">
      <span className="flex justify-center font-sans items-center text-[10px] uppercase w-3/4 p-3 tracking-[0.2em]">
        Free shipping on orders over $150
        <span className="hidden md:block mx-1"> · </span>
        <br className="block md:hidden"></br>New drop every Friday
      </span>
    </div>
  );
}

export { PromoHeadline };
