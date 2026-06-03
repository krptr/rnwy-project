import { Button } from "../../../components/Buttons";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function FilterButtonsSection({
  activeCategory,
  setActiveCategory,
  maxPrice,
  setMaxPrice,
  sortBy,
  setSortBy,
}) {
  return (
    <section className="bg-surface-container border-t border-b border-outline-variant px-8 py-4 sticky z-20 top-16">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex gap-3 flex-wrap">
          <Button
            onClick={() => setActiveCategory("all")}
            variant={activeCategory === "all" ? "primary" : "outline"}
            className="text-xs font-medium px-5"
          >
            All
          </Button>
          <Button
            onClick={() => setActiveCategory("tops")}
            variant={activeCategory === "tops" ? "primary" : "outline"}
            className="text-xs font-medium px-5"
          >
            Tops
          </Button>
          <Button
            onClick={() => setActiveCategory("bottoms")}
            variant={activeCategory === "bottoms" ? "primary" : "outline"}
            className="text-xs font-medium px-5"
          >
            Bottoms
          </Button>
          <Button
            onClick={() => setActiveCategory("outerwear")}
            variant={activeCategory === "outerwear" ? "primary" : "outline"}
            className="text-xs font-medium px-5"
          >
            Outerwear
          </Button>
          <Button
            onClick={() => setActiveCategory("accessories")}
            variant={activeCategory === "accessories" ? "primary" : "outline"}
            className="text-xs font-medium px-5"
          >
            Accessories
          </Button>
          <Button
            onClick={() => setActiveCategory("footwear")}
            variant={activeCategory === "footwear" ? "primary" : "outline"}
            className="text-xs font-medium px-5"
          >
            Footwear
          </Button>
        </div>

        <div className="flex gap-6 items-center flex-wrap">
          <div className="flex items-center gap-3">
            <label className="font-sans text-[9px] uppercase text-on-surface-variant tracking-[0.2em]">
              Max {maxPrice}
            </label>
            <input
              type="range"
              min={35}
              max={600}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="accent-primary w-40 h-1 hover:primary/15"
            />
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-surface-container-lowest h-9 text-xs pl-4 pr-8 rounded-3xl text-on-surface border border-outline-variant focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <MdOutlineKeyboardArrowDown className="text-on-surface" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { FilterButtonsSection };
