import {
  Clock,
  Car,
  Snowflake,
  UtensilsCrossed,
  MapPin,
  Phone,
  Mail,
  Globe,
  Navigation,
} from "lucide-react";
import { SITE, SPORTS, AMENITIES, TOTAL_COURTS } from "../config/site.js";
import { BrandLockup } from "../components/Brand.jsx";
import Button from "../components/Button.jsx";
import PhotoPlaceholder from "../components/PhotoPlaceholder.jsx";
import { peso } from "../utils/date.js";

/* Basic tier landing page: no header, smooth anchor scrolling, no animation. */

function Hero() {
  return (
    <section className="flex min-h-[90vh] flex-col bg-bg">
      <div className="mx-auto w-full max-w-6xl px-6 pt-8 lg:pl-24">
        <BrandLockup />
      </div>

      <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="display text-balance text-[clamp(3rem,8vw,6.5rem)]">
          {SITE.headline}
        </h1>
        <p className="mt-8 max-w-[36rem] text-balance text-lg leading-relaxed text-ink/75 sm:text-xl">
          {SITE.subheadline}
        </p>
        <div className="mt-11 flex flex-wrap justify-center gap-3">
          <Button to="/booking">Book a court</Button>
          <Button href="#courts" variant="ghost">
            See the courts
          </Button>
        </div>
        <p className="mt-8 text-sm text-ink/60">
          {TOTAL_COURTS} courts for pickleball, badminton, and basketball.
        </p>
      </div>
    </section>
  );
}

function QuickFacts() {
  const facts = [
    { icon: Clock, text: SITE.hours.label },
    { icon: Car, text: "Free parking on site" },
    { icon: Snowflake, text: "Air-conditioned indoor courts" },
    { icon: UtensilsCrossed, text: "Food stalls nearby" },
  ];
  return (
    <div className="border-y border-line bg-surface">
      <ul className="mx-auto grid max-w-6xl gap-x-8 gap-y-4 px-6 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:pl-24">
        {facts.map(({ icon: Icon, text }) => (
          <li
            key={text}
            className="flex items-center gap-3 text-sm font-medium"
          >
            <Icon
              size={18}
              className="shrink-0 text-accent"
              aria-hidden="true"
            />
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Courts() {
  return (
    <section id="courts" className="bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6 lg:pl-24">
        <h2 className="display text-4xl sm:text-5xl">Our courts</h2>
        <p className="mt-4 max-w-xl text-lg text-ink/70">
          Every court can be booked by the hour. Check a sport to see which
          courts are open today.
        </p>

        <div className="mt-14">
          {SPORTS.map((sport) => (
            <article
              key={sport.id}
              className="grid gap-10 border-t border-line py-14 first:border-t-0 first:pt-0 md:grid-cols-[1.1fr_1fr] md:items-center"
            >
              <PhotoPlaceholder sport={sport.id} className="aspect-[16/11]" />

              <div>
                <h3 className="display text-3xl sm:text-4xl">{sport.name}</h3>
                <p className="mt-4 leading-relaxed text-ink/75">
                  {sport.summary}
                </p>

                <dl className="mt-7 grid grid-cols-2 gap-4 border-y border-line py-5">
                  <div>
                    <dt className="text-sm text-ink/60">Courts</dt>
                    <dd className="display mt-1 text-2xl">
                      {sport.courts.length}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-ink/60">From</dt>
                    <dd className="display mt-1 text-2xl">
                      {peso(sport.rate)}
                      <span className="ml-1 font-sans text-sm font-normal text-ink/60">
                        per hour
                      </span>
                    </dd>
                  </div>
                </dl>

                <ul className="mt-5 space-y-2 text-sm">
                  {sport.courts.map((c) => (
                    <li key={c.id} className="flex justify-between gap-4">
                      <span className="font-semibold">{c.name}</span>
                      <span className="text-ink/65">{c.detail}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {sport.features.map((f) => (
                    <li
                      key={f}
                      className="rounded-full bg-soft px-3 py-1.5 text-xs font-medium text-ink/85"
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                <Button to={`/booking?sport=${sport.id}`} className="mt-8">
                  Check {sport.name.split(" /")[0].toLowerCase()} times
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Amenities() {
  return (
    <section id="amenities" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6 lg:pl-24">
        <h2 className="display text-4xl sm:text-5xl">What's here for you</h2>
        <p className="mt-4 max-w-xl text-lg text-ink/70">
          Everything players and their companions need before, during, and after
          a game.
        </p>

        <ul className="mt-12 grid gap-x-14 sm:grid-cols-2">
          {AMENITIES.map(({ icon: Icon, name, detail, status }) => (
            <li key={name} className="flex gap-4 border-b border-line py-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-raised text-accent">
                <Icon size={20} aria-hidden="true" />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold">{name}</p>
                  <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-ink/70">
                    {status}
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/70">
                  {detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Rates() {
  return (
    <section id="rates" className="bg-bg py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:pl-24">
        <div>
          <h2 className="display text-4xl sm:text-5xl">Hours and rates</h2>
          <p className="mt-4 text-lg text-ink/70">{SITE.hours.label}.</p>
          <p className="mt-2 text-ink/70">{SITE.peak.label}</p>
          <p className="mt-2 text-ink/70">All rates are per court, per hour.</p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-line bg-raised">
          <table className="w-full min-w-[28rem] text-left">
            <thead>
              <tr className="border-b border-line text-sm text-ink/60">
                <th className="px-6 py-4 font-medium">Sport</th>
                <th className="px-6 py-4 font-medium">Courts</th>
                <th className="px-6 py-4 font-medium">Regular</th>
                <th className="px-6 py-4 font-medium">Peak</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {SPORTS.map((s) => (
                <tr key={s.id}>
                  <td className="px-6 py-5 font-semibold">{s.name}</td>
                  <td className="px-6 py-5 tabular-nums">{s.courts.length}</td>
                  <td className="px-6 py-5 tabular-nums">{peso(s.rate)}</td>
                  <td className="px-6 py-5 tabular-nums">{peso(s.peakRate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function Location() {
  return (
    <section id="location" className="bg-surface py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:pl-24">
        <div>
          <h2 className="display text-4xl sm:text-5xl">Find us</h2>
          <address className="mt-6 not-italic leading-relaxed">
            <span className="block text-lg font-semibold">
              {SITE.address.street}
            </span>
            <span className="block text-ink/75">{SITE.address.area}</span>
            <span className="block text-ink/75">{SITE.address.region}</span>
          </address>
          <p className="mt-3 text-sm text-ink/65">{SITE.landmark}</p>

          <ul className="mt-8 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-accent" aria-hidden="true" />
              {SITE.phone}
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-accent" aria-hidden="true" />
              {SITE.email}
            </li>
            <li className="flex items-center gap-3">
              <Globe size={16} className="text-accent" aria-hidden="true" />
              {SITE.social}
            </li>
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={SITE.mapsUrl} target="_blank" rel="noreferrer">
              <Navigation size={16} aria-hidden="true" />
              Get directions
            </Button>
            <Button
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              variant="ghost"
            >
              Call us
            </Button>
          </div>
        </div>

        <div
          className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl border border-line bg-raised"
          style={{
            backgroundImage:
              "linear-gradient(var(--c-line) 1px, transparent 1px), linear-gradient(90deg, var(--c-line) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        >
          <span className="flex flex-col items-center gap-2 rounded-2xl bg-bg/85 px-5 py-4 text-center">
            <MapPin size={28} className="text-accent" aria-hidden="true" />
            <span className="text-sm font-medium">
              Embed your Google Map here
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-deep py-24 text-on-deep">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:pl-24">
        <div>
          <h2 className="display max-w-2xl text-4xl sm:text-6xl">
            Your next game is a few taps away.
          </h2>
          <p className="mt-5 max-w-lg text-lg opacity-80">
            See live court availability, pick your time, and lock it in before
            someone else does.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button to="/booking" variant="inverse">
            Book a court
          </Button>
          <Button href="#rates" variant="outlineInverse">
            View rates
          </Button>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-bg py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between lg:pl-24">
        <BrandLockup size="sm" />
        <nav
          className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/70"
          aria-label="Footer"
        >
          <a href="#courts" className="hover:text-ink">
            Courts
          </a>
          <a href="#amenities" className="hover:text-ink">
            Amenities
          </a>
          <a href="#rates" className="hover:text-ink">
            Rates
          </a>
          <a href="#location" className="hover:text-ink">
            Location
          </a>
        </nav>
        <p className="text-sm text-ink/55">
          © {new Date().getFullYear()} {SITE.businessName}
        </p>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <main>
      <Hero />
      <QuickFacts />
      <Courts />
      <Amenities />
      <Rates />
      <Location />
      <FinalCta />
      <Footer />
    </main>
  );
}
