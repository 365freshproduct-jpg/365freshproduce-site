import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/lib/site-data";
import { getSiteContent } from "@/lib/site-data";

import { ArrowUpRightIcon, CheckIcon, MailIcon, MapPinIcon, PhoneIcon, solutionIcons } from "./icons";
import { LeadForm } from "./lead-form";
import { Logo } from "./logo";
import { ProjectsTabs } from "./projects-tabs";
import { SiteHeader } from "./site-header";

type SiteShellProps = {
  locale: Locale;
};

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <span
        className={`eyebrow ${
          light ? "border-white/15 bg-white/10 text-mint" : "border-canvas/10 bg-white text-canvas"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl ${
          light ? "text-white" : "text-graphite"
        }`}
      >
        {title}
      </h2>
      <p className={`mt-5 max-w-2xl text-base leading-8 ${light ? "text-white/70" : "text-graphite/70"}`}>
        {description}
      </p>
    </div>
  );
}

export function SiteShell({ locale }: SiteShellProps) {
  const content = getSiteContent(locale);

  return (
    <div className="bg-cloud text-graphite">
      <div className="relative overflow-hidden bg-canvas">
        <div className="absolute inset-0">
          <Image
            src="/hero-greenhouse.svg"
            alt="Premium industrial greenhouse concept"
            fill
            priority
            className="object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(11,124,189,0.94)_12%,rgba(15,145,205,0.58)_52%,rgba(8,88,138,0.9)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[40%] bg-[linear-gradient(180deg,rgba(24,167,218,0),rgba(26,154,205,0.4)_18%,rgba(21,145,197,0.58)_100%)]" />
          <div className="absolute inset-0 bg-grid bg-[size:84px_84px] opacity-[0.08]" />
          <div className="hero-glow absolute -left-24 top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(137,210,61,0.36),transparent_68%)]" />
        </div>

        <SiteHeader companyName={content.company.name} locale={locale} nav={content.nav} />

        <section className="relative isolate min-h-screen pt-32 pb-20 sm:pt-36 lg:pb-28">
          <div className="shell grid items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_420px] lg:pt-24">
            <div className="max-w-3xl">
              <span className="eyebrow border-white/15 bg-white/10 text-mint">{content.hero.eyebrow}</span>
              <h1 className="mt-7 max-w-4xl font-display text-[2.8rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-[4rem] lg:text-[5.2rem]">
                {content.hero.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">{content.hero.description}</p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href={`/${locale}#calculator`} className="btn-primary">
                  {content.hero.primaryCta}
                </Link>
                <Link href={`/${locale}#projects`} className="btn-secondary">
                  {content.hero.secondaryCta}
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {content.hero.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-5 lg:justify-self-end">
              <div className="panel p-6 animate-rise">
                <p className="text-xs uppercase tracking-[0.26em] text-pine">{content.hero.panelTitle}</p>
                <p className="mt-4 text-sm leading-7 text-white/75">{content.hero.panelText}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {content.hero.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                      <p className="font-display text-3xl font-semibold text-white">{metric.value}</p>
                      <p className="mt-2 text-sm text-white/60">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="panel p-6 animate-rise [animation-delay:140ms]">
                <p className="text-xs uppercase tracking-[0.26em] text-pine">Strategic scope</p>
                <div className="mt-4 space-y-3">
                  {[
                    "Turnkey greenhouse structures",
                    "Climate, cooling and heating packages",
                    "Watering, automation and long-term support",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-white/70">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main>
        <section id={content.about.id} className="section-space">
          <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
            <div className="space-y-8">
              <SectionHeading
                eyebrow={content.about.eyebrow}
                title={content.about.title}
                description={content.about.description}
              />

              <div className="space-y-4">
                {content.about.trustPoints.map((point) => (
                  <div key={point} className="flex items-center gap-4 rounded-[1.4rem] border border-black/10 bg-white px-5 py-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-canvas text-white">
                      <CheckIcon className="h-5 w-5" />
                    </span>
                    <p className="text-sm font-medium text-graphite/80">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="overflow-hidden rounded-[2rem] border border-canvas/10 bg-canvas shadow-panel">
                <div className="relative h-[340px]">
                  <Image
                    src="/engineering-visual.svg"
                    alt="Engineering greenhouse systems illustration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas/65 via-canvas/5 to-transparent" />
                  <div className="absolute inset-x-6 bottom-6 flex flex-wrap gap-3">
                    <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/70">
                      European systems
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/70">
                      Turkey + Spain structures
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {content.about.advantages.map((item) => (
                  <article key={item.title} className="panel-light p-6">
                    <h3 className="font-display text-2xl font-semibold text-graphite">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-graphite/70">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id={content.solutions.id} className="section-space relative overflow-hidden bg-canvas">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(166,224,255,0.22),transparent_40%),radial-gradient(circle_at_100%_40%,rgba(69,173,225,0.34),transparent_42%)]" />
          <div className="absolute inset-0 bg-grid bg-[size:80px_80px] opacity-[0.05]" />
          <div className="shell relative">
            <SectionHeading
              eyebrow={content.solutions.eyebrow}
              title={content.solutions.title}
              description={content.solutions.description}
              light
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {content.solutions.items.map((item) => {
                const Icon = solutionIcons[item.key];
                const isStructures = item.key === "structures";

                return (
                  <article
                    key={item.title}
                    className={`group rounded-[2rem] border border-white/10 bg-white/[0.04] text-white/75 backdrop-blur transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] ${
                      isStructures ? "overflow-hidden sm:col-span-2" : "p-6"
                    }`}
                  >
                    {isStructures ? (
                      <>
                        <div className="relative h-64 overflow-hidden border-b border-white/10">
                          <Image
                            src="/greenhouse-structures.jpeg"
                            alt="Greenhouse structure frame"
                            fill
                            className="object-cover transition duration-700 group-hover:scale-[1.04]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/25 to-transparent" />
                        </div>
                        <div className="p-6">
                          <div className="flex h-14 w-14 items-center justify-center rounded-[1.3rem] border border-white/10 bg-white/5 text-pine">
                            <Icon className="h-7 w-7" />
                          </div>
                          <h3 className="mt-6 font-display text-2xl font-semibold text-white">{item.title}</h3>
                          <p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex h-14 w-14 items-center justify-center rounded-[1.3rem] border border-white/10 bg-white/5 text-pine">
                          <Icon className="h-7 w-7" />
                        </div>
                        <h3 className="mt-6 font-display text-2xl font-semibold text-white">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p>
                      </>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id={content.process.id} className="section-space">
          <div className="shell">
            <SectionHeading
              eyebrow={content.process.eyebrow}
              title={content.process.title}
              description={content.process.description}
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {content.process.steps.map((step, index) => (
                <article key={step.title} className="panel-light flex min-h-[220px] flex-col p-6">
                  <span className="text-xs uppercase tracking-[0.24em] text-pine/60">
                    Step {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-graphite">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-graphite/70">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={content.calculator.id} className="section-space bg-stone">
          <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <div className="lg:pr-6">
              <SectionHeading
                eyebrow={content.calculator.eyebrow}
                title={content.calculator.title}
                description={content.calculator.description}
              />

              <div className="mt-10 space-y-4">
                {content.calculator.helperPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-4 rounded-[1.5rem] border border-black/10 bg-white/90 px-5 py-4 shadow-[0_12px_30px_rgba(12,21,19,0.05)]"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-canvas text-white">
                      <ArrowUpRightIcon className="h-5 w-5" />
                    </span>
                    <p className="text-sm text-graphite/70">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <LeadForm
              locale={locale}
              areaLabel={content.calculator.areaLabel}
              systemsLabel={content.calculator.systemsLabel}
              submitLabel={content.calculator.submitLabel}
              successMessage={content.calculator.successMessage}
              labels={content.calculator.labels}
              systemOptions={content.calculator.systemOptions}
            />
          </div>
        </section>

        <section id={content.projects.id} className="section-space">
          <div className="shell">
            <SectionHeading
              eyebrow={content.projects.eyebrow}
              title={content.projects.title}
              description={content.projects.description}
            />
            <div className="mt-12">
              <ProjectsTabs filters={content.projects.filters} projects={content.projects.items} />
            </div>
          </div>
        </section>

        <section id={content.reasons.id} className="section-space relative overflow-hidden bg-canvas">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(174,232,255,0.28),transparent_28%),radial-gradient(circle_at_0%_100%,rgba(86,182,228,0.3),transparent_36%)]" />
          <div className="shell relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px]">
            <div>
              <SectionHeading
                eyebrow={content.reasons.eyebrow}
                title={content.reasons.title}
                description={content.reasons.description}
                light
              />

              <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {content.reasons.items.map((item) => (
                  <div key={item} className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] px-5 py-5 text-white/75">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-pine">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      <p className="text-sm font-medium">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="panel flex flex-col justify-between p-7">
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-pine">Execution mindset</p>
                <p className="mt-5 font-display text-3xl font-semibold leading-tight text-white">
                  {content.reasons.quote}
                </p>
              </div>
              <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-white/70">
                The visual system is structured for future SEO content, multilingual expansion and easy project updates from a central data file.
              </div>
            </aside>
          </div>
        </section>

        <section className="section-space">
          <div className="shell">
            <div className="overflow-hidden rounded-[2.4rem] bg-[linear-gradient(135deg,rgba(14,126,190,1),rgba(9,91,146,1))] px-7 py-10 text-white shadow-panel sm:px-10 lg:px-14 lg:py-14">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-pine">Next step</p>
                  <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                    {content.cta.title}
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">{content.cta.description}</p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href={`/${locale}#calculator`} className="btn-primary">
                    {content.cta.primaryCta}
                  </Link>
                  <Link href={`/${locale}#contact`} className="btn-secondary">
                    {content.cta.secondaryCta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-black/10 bg-white">
        <div className="shell grid gap-10 py-12 lg:grid-cols-[minmax(0,1.1fr)_repeat(3,minmax(0,0.6fr))]">
          <div className="space-y-5">
            <Logo href={`/${locale}`} label={content.company.logoLabel} light={false} />
            <p className="max-w-sm text-sm leading-7 text-graphite/70">{content.company.tagline}</p>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-graphite/40">Contact</p>
            <a href={`tel:${content.company.phone}`} className="flex items-center gap-3 text-sm text-graphite/70 transition hover:text-graphite">
              <PhoneIcon className="h-4 w-4" />
              <span>{content.company.phone}</span>
            </a>
            <a href={`mailto:${content.company.email}`} className="flex items-center gap-3 text-sm text-graphite/70 transition hover:text-graphite">
              <MailIcon className="h-4 w-4" />
              <span>{content.company.email}</span>
            </a>
            <div className="flex items-start gap-3 text-sm text-graphite/70">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{content.company.address}</span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-graphite/40">Navigation</p>
            {content.nav.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="block text-sm text-graphite/70 transition hover:text-graphite"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-graphite/40">Social</p>
            {content.footer.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-graphite/70 transition hover:text-graphite"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-black/10">
          <div className="shell flex flex-col gap-3 py-5 text-xs uppercase tracking-[0.2em] text-graphite/40 sm:flex-row sm:items-center sm:justify-between">
            <span>{content.footer.copyright}</span>
            <span>English interface ready for future Russian and Armenian localization.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
