import { Button } from "../../../components/Buttons";

function SubscriberListSection() {
  return (
    <section className="bg-surface-variant px-8 py-8 md:mx-32 md:my-32 lg:px-24 lg:py-20 md:rounded-2xl shadow-md shadow-outline-variant">
      <div className="flex flex-col items-start md:justify-center md:items-center">
        <div>
          <span className="block font-sans text-[9px] uppercase text-on-surface-variant tracking-[0.2em] mb-3 md:text-center">
            The List
          </span>
          <span className="block font-display font-black text-on-background text-xl md:text-2xl lg:text-5xl mb-4 leading-0.95 md:text-center">
            First access.<span className="text-primary"> Always.</span>
          </span>
          <span className="block font-sans text-sm tracking-wide text-on-surface-variant mb-8 md:text-center">
            Drops sell out in minutes. Subscribers get a 24-hour head start.
          </span>

          <div className="flex gap-4 justify-center flex-col md:flex-row">
            <div className="inline">
              <input
                type="email"
                placeholder="you@domain.com"
                className="bg-surface text-on-surface border border-outline-variant flex-1 rounded-2xl w-72 md:w-80 h-12 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <Button
              variant="primary"
              radius="xxl"
              className="px-0 py-0 h-12 w-35 md:w-30"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { SubscriberListSection };
