

import Image from "next/image";

const LOGO_URL =
  "https://bafybeihi36u7hvbjmhksyo5r7b6cfvhpyjmiqteb72yldb2tp4qit7htga.ipfs.dweb.link?filename=images.png";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 md:px-6">{children}</div>;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mb-3 flex justify-center">
        <Pill>{eyebrow}</Pill>
      </div>
      <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-balance text-sm leading-relaxed text-zinc-300 md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Card({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-theusd/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-theusd/15 blur-3xl" />
      </div>
      <div className="relative">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-theusd">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-300">{desc}</p>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="my-16 h-px w-full bg-white/10" />;
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-theusd/15 text-theusd ring-1 ring-theusd/25">
        ✓
      </span>
      <span className="text-sm text-zinc-300">{children}</span>
    </li>
  );
}

export default function Page() {
  return (
    <main>
      <div className="pointer-events-none fixed inset-x-0 top-[-120px] z-0 mx-auto h-[360px] w-[900px] max-w-[95vw] rounded-full bg-theusd/20 blur-3xl" />
      <div className="pointer-events-none fixed inset-x-0 top-[80px] z-0 mx-auto h-[260px] w-[760px] max-w-[92vw] rounded-full bg-white/5 blur-3xl" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <Image src={LOGO_URL} alt="TheUSD logo" fill className="object-contain p-1" priority />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">TheUSD</div>
                <div className="text-xs text-zinc-400">theusd.shop</div>
              </div>
            </div>

            <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
              <a className="hover:text-white" href="#about">About</a>
              <a className="hover:text-white" href="#how">How it works</a>
              <a className="hover:text-white" href="#roadmap">Roadmap</a>
              <a className="hover:text-white" href="#faq">FAQ</a>
            </nav>

            <div className="flex items-center gap-3">
              <a href="#early-access" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-white/10">
                Early Access
              </a>
              <a href="#faq" className="hidden rounded-xl bg-theusd px-4 py-2 text-sm font-semibold text-black hover:brightness-110 md:inline-flex">
                Read Docs
              </a>
            </div>
          </div>
        </Container>
      </header>

      <section className="relative z-10 pt-14 md:pt-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex justify-center gap-2">
              <Pill>Stablecoin Ecosystem</Pill>
              <Pill>Cross-Chain Bridging</Pill>
              <Pill>Unified Layer</Pill>
            </div>

            <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              A Unified Stablecoin Layer Across Chains
            </h1>

            <p className="mt-5 text-balance text-base leading-relaxed text-zinc-300 md:text-lg">
              TheUSD bridges stable value across networks with a shared integrated layer —{" "}
              <span className="text-zinc-100">ایجاد یک لایه یکپارچه مشترک بین تمام شبکه‌ها</span>.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#early-access" className="inline-flex w-full items-center justify-center rounded-2xl bg-theusd px-6 py-3 text-sm font-semibold text-black hover:brightness-110 sm:w-auto">
                Get Early Access
              </a>
              <a href="#how" className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 sm:w-auto">
                How it works
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 text-left sm:grid-cols-3">
              {[
                ["Network-agnostic", "Route value across chains seamlessly."],
                ["Security-first", "Controlled rollout, monitoring & audits."],
                ["Builder-friendly", "Simple primitives for apps & payments."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-sm font-semibold">{t}</div>
                  <div className="mt-1 text-xs leading-relaxed text-zinc-400">{d}</div>
                </div>
              ))}
            </div>
          </div>

          <Divider />
        </Container>
      </section>

      <section id="about" className="relative z-10 py-2 md:py-6">
        <Container>
          <SectionTitle
            eyebrow="What is TheUSD?"
            title="Stable value, designed for a multi-chain world"
            subtitle="TheUSD is more than a token: it’s an interoperability layer coordinating stable transfers, liquidity routing, and settlement across networks."
          />

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card title="Unified Layer" desc="One shared standard for stable value and consistent UX across chains." icon={<span className="text-lg">⛓️</span>} />
            <Card title="Bridging & Routing" desc="Efficient paths for moving stable value where it needs to go—automatically." icon={<span className="text-lg">🧭</span>} />
            <Card title="Ecosystem Utilities" desc="Payments, treasury flows, DeFi rails, and merchant-ready integrations." icon={<span className="text-lg">💳</span>} />
          </div>

          <Divider />
        </Container>
      </section>

      <section id="how" className="relative z-10 py-2 md:py-6">
        <Container>
          <SectionTitle
            eyebrow="How it works"
            title="Mint → Route → Settle → Use"
            subtitle="A simple model for stable value movement across networks, built to scale from early access to production usage."
          />

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-sm font-semibold text-zinc-100">Flow overview</div>
              <ol className="mt-4 space-y-3 text-sm text-zinc-300">
                {[
                  ["1", "Mint / Acquire", "TheUSD via supported routes."],
                  ["2", "Route", "across chains using optimized liquidity paths."],
                  ["3", "Settle", "with security controls and monitoring."],
                  ["4", "Use", "anywhere: payments, dApps, treasury flows."],
                ].map(([n, b, t]) => (
                  <li key={n} className="flex gap-3">
                    <span className="mt-[2px] inline-flex h-6 w-6 items-center justify-center rounded-lg bg-theusd/15 text-theusd ring-1 ring-theusd/25">
                      {n}
                    </span>
                    <span><b className="text-zinc-100">{b}</b> {t}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-sm font-semibold text-zinc-100">What you get</div>
              <ul className="mt-4 space-y-3">
                <CheckItem>One stable experience across supported networks.</CheckItem>
                <CheckItem>Builder primitives for stable transfers and settlement.</CheckItem>
                <CheckItem>Progressive rollout: test → harden → expand.</CheckItem>
                <CheckItem>Designed for integrations, not hype.</CheckItem>
              </ul>

              <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 text-xs text-zinc-400">
                Tip: Share your exact bridging mechanism (lock/mint vs burn/mint vs canonical messaging) and we’ll tailor this page precisely.
              </div>
            </div>
          </div>

          <Divider />
        </Container>
      </section>

      <section id="roadmap" className="relative z-10 py-2 md:py-6">
        <Container>
          <SectionTitle
            eyebrow="Roadmap"
            title="Ship fast, harden security, expand carefully"
            subtitle="A practical path from early access to production-grade stablecoin infrastructure."
          />

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              ["Phase 1", "Landing + community + early access list"],
              ["Phase 2", "Test routes + monitoring + partner onboarding"],
              ["Phase 3", "Mainnet rollout + liquidity integrations"],
              ["Phase 4", "SDK + ecosystem apps + multi-network expansion"],
            ].map(([p, d]) => (
              <div key={p} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-xs font-semibold text-theusd">{p}</div>
                <div className="mt-2 text-sm font-semibold">{d}</div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-1/2 rounded-full bg-theusd/70" />
                </div>
              </div>
            ))}
          </div>

          <Divider />
        </Container>
      </section>

      <section id="early-access" className="relative z-10 py-2 md:py-6">
        <Container>
          <SectionTitle
            eyebrow="Early Access"
            title="Get updates and access as we roll out"
            subtitle="Drop your email and we’ll notify you when TheUSD routes and tools open for early users and partners."
          />

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const email = (new FormData(form).get("email") || "").toString().trim();
                if (!email) return;
                window.location.href =
                  `mailto:contact@theusd.shop?subject=TheUSD%20Early%20Access&body=` +
                  `Please%20add%20me%20to%20early%20access.%0A%0AEmail:%20${encodeURIComponent(email)}%0A`;
              }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                name="email"
                type="email"
                placeholder="you@domain.com"
                required
                className="h-12 flex-1 rounded-2xl border border-white/10 bg-black/40 px-4 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-theusd/60"
              />
              <button type="submit" className="h-12 rounded-2xl bg-theusd px-6 text-sm font-semibold text-black hover:brightness-110">
                Request Access
              </button>
            </form>

            <p className="mt-3 text-xs text-zinc-500">No spam. You’ll only receive rollout updates.</p>
          </div>

          <Divider />
        </Container>
      </section>

      <section id="faq" className="relative z-10 py-2 md:py-6">
        <Container>
          <SectionTitle
            eyebrow="FAQ"
            title="Answers to common questions"
            subtitle="Clear expectations while we build and expand network support."
          />

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4">
            {[
              ["Is TheUSD a stablecoin or a protocol?", "Both: a stable asset plus infrastructure for routing and settlement across networks."],
              ["Which chains are supported?", "Support rolls out progressively based on security review, liquidity readiness, and partner integration timelines."],
              ["How do you handle bridge security?", "Security-first rollout: monitoring, access controls during early stages, and audits as components stabilize."],
              ["When can I use it?", "Early access opens in stages. Join the list to get notified."],
            ].map(([q, a]) => (
              <div key={q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-sm font-semibold">{q}</div>
                <div className="mt-2 text-sm leading-relaxed text-zinc-300">{a}</div>
              </div>
            ))}
          </div>

          <Divider />
        </Container>
      </section>

      <footer className="relative z-10 pb-12">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <Image src={LOGO_URL} alt="TheUSD logo" fill className="object-contain p-1" />
              </div>
              <div className="text-sm">
                <div className="font-semibold">TheUSD</div>
                <div className="text-xs text-zinc-500">© {new Date().getFullYear()} theusd.shop</div>
              </div>
            </div>

            <div className="text-center text-xs text-zinc-500 md:text-right">
              <div>Experimental technology. Not financial advice.</div>
              <div className="mt-1">
                Contact:{" "}
                <a className="text-zinc-300 hover:text-white" href="mailto:contact@theusd.shop">
                  contact@theusd.shop
                </a>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
