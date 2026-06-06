import { FaStar } from "react-icons/fa";
import { RatingCard } from "../../../components/RatingCard";

function CustomerReviewSection() {
  return (
    <section className="bg-surface-container px-8 py-8 md:px-32 md:py-24">
      <div className="grid grid-cols-1 xl:grid-cols-10 mb-16">
        <div className="col-span-3">
          <div className="font-sans text-[9px] uppercase text-on-surface-variant tracking-[0.2em] mb-6">
            Reviews
          </div>
          <div className="font-black font-display text-6xl mb-4 text-on-background">
            4.7
            <FaStar className="inline text-primary text-2xl" />
          </div>
          <div className="font-sans text-[8px] uppercase text-on-surface-variant tracking-[0.2em] mb-8">
            From 1,240 verified buyers
          </div>
        </div>

        <div className="col-span-7 grid grid-cols-1 gap-6 xl:grid-cols-3">
          <RatingCard
            rating={4.6}
            comment="comment1"
            name="name1"
            title={0}
            size="L"
          />
          <RatingCard
            rating={5}
            comment="comment2"
            name="name2"
            title={1}
            size="M"
          />
          <RatingCard
            rating={4.7}
            comment="comment3"
            name="name3"
            title={3}
            size="S"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center border-t border-outline-variant py-10">
        <div className="font-sans text-[8px] uppercase text-on-surface-variant tracking-[0.2em] mb-8">
          As featured in
        </div>

        <div className="flex flex-wrap gap-10 font-black font-display text-lg tracking-tight text-on-surface-variant/60">
          <div>The Drop</div>
          <div>Capsule Weekly</div>
          <div>Culture Press</div>
          <div>DRIP Magazine</div>
          <div>Street Edition</div>
        </div>
      </div>
    </section>
  );
}

export { CustomerReviewSection };
