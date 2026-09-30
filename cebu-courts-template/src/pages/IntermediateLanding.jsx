import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { SITE, SPORTS, TOTAL_COURTS } from "../config/site.js";
import { useShowcase } from "../context/ShowcaseContext.jsx";
import Button from "../components/Button.jsx";
import SiteHeader from "../components/intermediate/SiteHeader.jsx";
import SplitFlap from "../components/intermediate/SplitFlap.jsx";
import SportPanels from "../components/intermediate/SportPanels.jsx";
import PullOut from "../components/intermediate/PullOut.jsx";
import AmenityBoard from "../components/intermediate/AmenityBoard.jsx";
import { Location, FinalCta, Footer } from "./Landing.jsx";

const SOFT = [0.22, 1, 0.36, 1];

function Hero({ active }) {
  const [settled, setSettled] = useState(false);
  const reveal = (delay) => ({
    initial: { opacity: 0, y: 18 },
    animate: settled ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    transition: { duration: 0.8, delay, ease: SOFT },
  });

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32 text-center">
      <h1 className="w-full max-w-6xl text-[clamp(1.9rem,9vw,3rem)] sm:text-[clamp(2rem,6vw,5.75rem)]">
        <span className="sr-only">{SITE.headline}</span>
        <SplitFlap
          text={SITE.headline}
          active={active}
          onSettled={() => setSettled(true)}
        />
      </h1>

      <motion.p
        {...reveal(0)}
        className="mt-10 max-w-[36rem] text-balance text-lg leading-relaxed text-ink/75 sm:text-xl"
      >
        {SITE.subheadline}
      </motion.p>

      <motion.div
        {...reveal(0.12)}
        className="mt-11 flex flex-wrap justify-center gap-3"
      >
        <Button to="/booking">Book a court</Button>
        <Button href="#sports" variant="ghost">
          See the courts
        </Button>
      </motion.div>

      <motion.p {...reveal(0.24)} className="mt-8 text-sm text-ink/60">
        {TOTAL_COURTS} courts for pickleball, badminton, and basketball.
      </motion.p>

      <motion.a
        href="#sports"
        aria-label="Scroll to courts"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink/50 hover:text-ink"
        initial={{ opacity: 0 }}
        animate={settled ? { opacity: 1, y: [0, 6, 0] } : { opacity: 0 }}
        transition={
          settled
            ? {
                opacity: { delay: 0.6, duration: 0.6 },
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }
            : {}
        }
      >
        <ChevronDown size={26} aria-hidden="true" />
      </motion.a>
    </section>
  );
}

/* Intermediate tier landing page */
export default function IntermediateLanding() {
  const { loading, loaderKey } = useShowcase();

  return (
    <>
      <SiteHeader />
      <main>
        {/* Keyed to the loader so a replay re-runs the split-flap */}
        <Hero key={loaderKey} active={!loading} />
        <SportPanels />
        <div id="courts" className="overflow-x-clip bg-bg">
          {SPORTS.map((sport, i) => (
            <PullOut key={sport.id} sport={sport} index={i} />
          ))}
        </div>
        <AmenityBoard />

        <Location />
        <FinalCta />
        <Footer />
      </main>
    </>
  );
}
