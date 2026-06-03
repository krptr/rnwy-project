import { Button } from "../../../components/Buttons";

function SubscriberListSection() {
  return (
    <section className="bg-surface-variant px-8 py-8 lg:px-32 lg:py-20">
      <div className="flex flex-col justify-center items-center">
        <div>
          <span className="block font-sans text-[9px] uppercase text-on-surface-variant tracking-[0.2em] mb-3 text-center">
            The List
          </span>
          <span className="block font-display font-black text-on-background text-xl md:text-2xl lg:text-5xl mb-4 leading-0.95 text-center">
            First access.<span className="text-primary"> Always.</span>
          </span>
          <span className="block font-sans text-sm tracking-wide text-on-surface-variant mb-8 text-center">
            Drops sell out in minutes. Subscribers get a 24-hour head start.
          </span>

          <div className="flex gap-4 justify-center">
            <div className="inline">
              <input
                type="email"
                placeholder="you@domain.com"
                className="bg-surface text-on-surface border border-outline-variant flex-1 rounded-3xl pl-4 md:pr-32 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <Button variant="primary" radius="xxxl">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { SubscriberListSection };
