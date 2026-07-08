import { Hero } from "@/components/site/hero";
import { SignalStrip } from "@/components/site/signal-strip";
import { Pillar } from "@/components/site/pillar";
import { EntryCard } from "@/components/site/entry-card";
import { BuildColumn } from "@/components/site/build-column";
import { GovernanceBar } from "@/components/site/governance-bar";
import { CloseCta } from "@/components/site/close-cta";
import { Reveal } from "@/components/site/reveal";
import { Card } from "@/components/ui/card";
import { headers } from "next/headers";
import type { Metadata } from "next";
import { isRxHost } from "@/lib/brand";
import RxPage from "./rx/page";

/**
 * Host-aware root route. becongroup.io renders the BeConGroup home; beconrx.io
 * renders the BeConRx page at its own domain root.
 */
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ brand?: string }>;
}) {
  // Brand is normally chosen by hostname (becongroup.io vs beconrx.io). On a
  // Vercel *preview* URL (neither domain), ?brand=rx / ?brand=group lets you
  // view either site. Harmless in production — the domains never pass ?brand.
  const sp = await searchParams;
  const host = (await headers()).get("host");
  const isRx =
    sp.brand === "rx" || (sp.brand !== "group" && isRxHost(host));
  return isRx ? <RxPage /> : <GroupHome />;
}

export async function generateMetadata(): Promise<Metadata> {
  const isRx = isRxHost((await headers()).get("host"));
  if (isRx) {
    return {
      title: "Where medical signal becomes market impact",
      description:
        "We turn complex medical, market, and customer insights into brand strategy, creative intelligence, and activation that drive meaningful outcomes.",
      alternates: { canonical: "/" },
    };
  }
  return { alternates: { canonical: "/" } };
}

const IconTarget = (
  <svg width="32" height="32" viewBox="0 0 34 34" fill="none" stroke="#5B86E8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="17" cy="17" r="13" />
    <circle cx="17" cy="17" r="5" />
    <path d="M17 1 v6 M17 27 v6 M1 17 h6 M27 17 h6" />
  </svg>
);
const IconLens = (
  <svg width="32" height="32" viewBox="0 0 34 34" fill="none" stroke="#F26B20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 17 C 9 7, 25 7, 31 17 C 25 27, 9 27, 3 17 Z" />
    <circle cx="17" cy="17" r="4" />
  </svg>
);
const IconShield = (
  <svg width="32" height="32" viewBox="0 0 34 34" fill="none" stroke="#F26B20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3.5 L28.3 10 L28.3 24 L17 30.5 L5.7 24 L5.7 10 Z" />
    <path d="M12 17 l4 4 l7 -8" />
  </svg>
);

function GroupHome() {
  return (
    <main>
      {/* ───── HERO ───────────────────────────────────────────── */}
      <Hero
        brand="group"
        eyebrow="Biopharma Commercial Consultancy"
        title={
          <>
            Signal to <span className="orange">outcomes</span>
            <br />
            performance.
          </>
        }
        subtitle="We connect commercial strategy, experience design, and governed AI into one operating system — so biopharma signal converts into measurable outcomes."
        primaryCta={{ href: "/contact", label: "Start a conversation" }}
        secondaryCta={{ href: "#system", label: "See the system" }}
      />

      {/* ───── PIPELINE RAIL ──────────────────────────────────── */}
      <section className="section sx-white">
        <div className="wrap">
          <div className="eyebrow">
            <i />
            <b>The Convergence Arc</b>
          </div>
          <h2 className="h2" style={{ maxWidth: "640px", marginBottom: "44px" }}>
            One arc, end to end — signal, system, outcomes.
          </h2>
          <SignalStrip
            items={[
              { kicker: "Where it starts", title: "Signal", desc: "Claims, beliefs, behavior, market data — structured for commercial use." },
              { kicker: "Where BeCon operates", title: "System", desc: "One integrated system that converts signal into outcomes — strategy, experience, and governed AI." },
              { kicker: "Where it lands", title: "Outcomes", desc: "HCP adoption, patient pathways, lifecycle performance." },
            ]}
          />
        </div>
      </section>

      {/* ───── THE LANDSCAPE ──────────────────────────────────── */}
      <section className="section sx-ice" id="landscape">
        <div className="wrap grid-2">
          <div>
            <div className="eyebrow blue">
              <i />
              <b>The Landscape</b>
            </div>
            <h2 className="h2">
              Biopharma commercial is <span className="em-focal">more connected</span> than ever.
            </h2>
            <blockquote className="pull">
              Strategy, experience, and AI now inform each other in real time. The organizations that
              build these as one system — rather than three separate workstreams — are the ones that
              convert signal into sustained commercial performance.
            </blockquote>
          </div>
          <Reveal className="stack">
            <Card>
              <h4>Strategy that activates</h4>
              <p>Commercial strategy is most powerful when it&apos;s designed to move — directly connected to experience architecture and the AI systems that execute it in the field.</p>
            </Card>
            <Card>
              <h4>Experience that measures</h4>
              <p>HCP and patient experiences designed from commercial objectives — with measurement built in from the start, so every touchpoint compounds over time.</p>
            </Card>
            <Card>
              <h4>AI that governs itself</h4>
              <p>AI that earns trust by design — governed, auditable, and connected to the commercial logic it&apos;s meant to serve. Intelligence that improves with every cycle.</p>
            </Card>
            <Card>
              <h4>The window is compressing</h4>
              <p>First-mover advantage now belongs to organizations that connect intelligence, experience, and execution before launch — not in response to the first quarter&apos;s data.</p>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* ───── THE SYSTEM ─────────────────────────────────────── */}
      <section className="section sx-navy" id="system">
        <div className="wrap">
          <div className="eyebrow">
            <i />
            <b>The System</b>
          </div>
          <h2 className="h2" style={{ maxWidth: "720px" }}>
            Three disciplines.
            <br />
            <span className="em-focal">One operating system.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: "640px", marginTop: "16px" }}>
            Commercial strategy, experience design, and governed AI — designed together, delivered by
            one team, measured against one outcome.
          </p>
          <Reveal className="disciplines">
            <Pillar
              number="01"
              title="Commercial Precision"
              tagline="Strategy built from the outcome back."
              icon={IconTarget}
              bullet="blue"
              items={["Commercial opportunity & value architecture", "Market segmentation & cohort intelligence", "GTM design & lifecycle sequencing"]}
            />
            <Pillar
              number="02"
              title="Experience Design"
              tagline="Journeys designed from outcome to touchpoint."
              icon={IconLens}
              bullet="orange"
              items={["HCP journey architecture & design", "Omnichannel engagement strategy", "Patient pathway & adherence design"]}
            />
            <Pillar
              number="03"
              title="Governed AI"
              tagline="ML loops that compound — measured and accountable."
              icon={IconShield}
              bullet="orange"
              items={["Predictive cohort & signal intelligence", "Governed Machine Learning loop design", "Agentic workflow design & governance"]}
            />
          </Reveal>
        </div>
      </section>

      {/* ───── THE BECON PRINCIPLE ────────────────────────────── */}
      <section className="section principle sx-deep">
        <span className="burst" />
        <GovernanceBar
          label="The BeCon Principle"
          quote={
            <>
              Governed AI is not a feature — it is the architecture that makes every{" "}
              <span style={{ color: "var(--focal)" }}>outcome</span> defensible.
            </>
          }
          body="Every AI system BeCon designs has human judgment at the center — transparent, auditable, and connected to the commercial logic it serves. Governance is what makes AI defensible to legal, compliance, and the C-suite."
        />
      </section>

      {/* ───── HOW WE WORK ────────────────────────────────────── */}
      <section className="section sx-white" id="how">
        <div className="wrap">
          <div className="eyebrow">
            <i />
            <b>How We Work</b>
          </div>
          <h2 className="h2">
            We meet you <span className="em-focal">where you are.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: "640px", marginTop: "16px" }}>
            Every engagement is scoped to where you are. Every output is designed to compound forward.
          </p>
          <div className="process">
            <EntryCard number="01" when="When the need is strategy" title="Pre-Launch" brings="Signal audit · Cohort intelligence · Launch blueprint. A two-week structured analysis with a clear owned output." output="Signal-to-Launch Blueprint" />
            <EntryCard number="02" when="When the need is execution" title="Active Launch" brings="Performance diagnostic · Governed AI activation · Outcomes measurement. Plugged into your in-market system without disruption." output="Commercial Performance System" />
            <EntryCard number="03" when="When the need is coherence" title="Portfolio Scale" brings="Portfolio signal architecture · AI governance framework · Operating model alignment across multiple assets." output="Intelligence Operating Model" />
          </div>
        </div>
      </section>

      {/* ───── WHAT WE BUILD ──────────────────────────────────── */}
      <section className="section sx-ice" id="build">
        <div className="wrap">
          <div className="eyebrow">
            <i />
            <b>What We Build</b>
          </div>
          <h2 className="h2">
            Named deliverables. <span className="em-focal">Owned by you.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: "660px", marginTop: "16px" }}>
            Every engagement ends with something you own, operate, and build on — across oncology,
            rare disease, specialty, CNS, and cell &amp; gene therapy.
          </p>
          <Reveal className="build">
            <BuildColumn heading="Commercial Precision" bullet="blue" items={["Signal Audit & Cohort Map", "Launch Excellence Assessment", "Commercial Opportunity Architecture", "Value Architecture & GTM Blueprint", "Market Segmentation Design", "Access & Lifecycle Architecture"]} />
            <BuildColumn heading="Experience Design" bullet="orange" items={["HCP Journey Architecture", "Patient Pathway Design", "Omnichannel Engagement Blueprint", "Message Architecture Framework", "Moments-That-Matter Mapping", "Engagement Measurement System"]} />
            <BuildColumn heading="Governed AI" bullet="orange" items={["AI Opportunity Map & Prioritization", "Governed Machine Learning Loop Design", "Agentic Workflow Design", "AI Architecture Blueprint", "AI Governance Framework", "Outcomes Attribution Model"]} />
          </Reveal>
        </div>
      </section>

      {/* ───── CLOSE ──────────────────────────────────────────── */}
      <CloseCta
        eyebrow="BeCon Group"
        title={
          <>
            The signal is there.
            <br />
            The system that converts it
            <br />
            is <span className="orange">what we build.</span>
          </>
        }
        subtitle="Every biopharma asset deserves a commercial system built from the start to connect strategy, experience, and intelligence into one compounding arc."
        primaryCta={{ href: "/contact", label: "Schedule a conversation" }}
      />
    </main>
  );
}
