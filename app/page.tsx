import { Hero } from "@/components/site/hero";
import { SignalStrip } from "@/components/site/signal-strip";
import { Pillar } from "@/components/site/pillar";
import { EntryCard } from "@/components/site/entry-card";
import { BuildColumn } from "@/components/site/build-column";
import { GovernanceBar } from "@/components/site/governance-bar";
import { CloseCta } from "@/components/site/close-cta";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main>
      {/* ───── HERO ───────────────────────────────────────────── */}
      <Hero
        eyebrow="Biopharma commercial consultancy"
        title={
          <>
            Signal to
            <br />
            <em>outcomes</em>
            <br />
            performance.
          </>
        }
        subtitle="We connect commercial strategy, experience design, and governed AI into one system — so biopharma signal converts into measurable outcomes."
        primaryCta={{ href: "/contact", label: "Start a conversation" }}
        secondaryCta={{ href: "#system", label: "See the system" }}
      />

      {/* ───── SIGNAL STRIP ──────────────────────────────────── */}
      <Section bg="paper" size="sm">
        <SignalStrip
          left={{
            label: "Where it starts",
            title: "Signal",
            description: "Claims, beliefs, behavior, market data — structured for commercial use.",
          }}
          middle={{
            label: "Where BeCon operates",
            title: "One integrated system that converts signal into outcomes",
          }}
          right={{
            label: "Where it lands",
            title: "Outcomes",
            description: "HCP adoption, patient pathways, lifecycle performance.",
          }}
        />
      </Section>

      {/* ───── THE LANDSCAPE ─────────────────────────────────── */}
      <Section bg="white" id="landscape">
        <div className="grid items-start gap-14 md:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="The Landscape"
              eyebrowTone="blue"
              title={
                <>
                  Biopharma commercial is <em>more connected</em> than ever.
                </>
              }
              size="md"
            />
            <blockquote className="mt-7 border-l-2 border-orange-500 pl-5 text-lead font-medium leading-snug text-ink">
              Strategy, experience, and AI now inform each other in real time. The organizations
              that build these as one system — rather than three separate workstreams — are the
              ones that convert signal into sustained commercial performance.
            </blockquote>
          </div>

          <div className="grid gap-3">
            {[
              {
                t: "Strategy that activates",
                b: "Commercial strategy is most powerful when it's designed to move — directly connected to experience architecture and the AI systems that execute it in the field.",
              },
              {
                t: "Experience that measures",
                b: "HCP and patient experiences designed from commercial objectives — with the measurement systems built in from the start, so every touchpoint compounds over time.",
              },
              {
                t: "AI that governs itself",
                b: "AI that earns trust by design — governed, auditable, and connected to the commercial logic it's meant to serve. Intelligence that improves with every cycle.",
              },
              {
                t: "The window is compressing",
                b: "First-mover commercial advantage now belongs to the organizations that connect intelligence, experience, and execution before launch — not in response to the first quarter's data.",
              },
            ].map((c) => (
              <Card key={c.t} interactive padding="sm" className="hover:border-blue-300/50">
                <h4 className="text-small font-bold text-ink">{c.t}</h4>
                <p className="mt-1 text-small font-normal leading-relaxed text-gray-700">{c.b}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* ───── THE SYSTEM ────────────────────────────────────── */}
      <Section bg="orange-mid" id="system">
        <SectionHeader
          eyebrow="The System"
          eyebrowTone="navy"
          title={
            <>
              Three disciplines.
              <br />
              <em>One operating system.</em>
            </>
          }
          subtitle="Commercial strategy, experience design, and governed AI — designed together, delivered by one team, measured against one outcome."
          size="lg"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <Pillar
            number="01"
            eyebrow="Commercial Precision"
            title="Strategy built from the outcome back."
            tone="white"
            accent="blue"
            items={[
              "Commercial opportunity & value architecture",
              "Market segmentation & cohort intelligence",
              "GTM design & lifecycle sequencing",
            ]}
          />
          <Pillar
            number="02"
            eyebrow="Experience Design"
            title="Journeys designed from outcome to touchpoint."
            tone="ink"
            accent="orange"
            items={[
              "HCP journey architecture & design",
              "Omnichannel engagement strategy",
              "Patient pathway & adherence design",
            ]}
          />
          <Pillar
            number="03"
            eyebrow="Governed AI"
            title="ML loops that compound — measured and accountable."
            tone="blue-soft"
            accent="blue"
            items={[
              "Predictive cohort & signal intelligence",
              "Governed Machine Learning loop design",
              "Agentic workflow design & governance",
            ]}
          />
        </div>

        <div className="mt-10">
          <GovernanceBar
            label="The BeCon Principle"
            quote="Governed AI is not a feature — it is the architecture that makes every outcome defensible."
            body="Every AI system BeCon designs has human judgment at the center — transparent, auditable, and connected to the commercial logic it serves. Governance is what makes AI defensible to legal, compliance, and the C-suite."
          />
        </div>
      </Section>

      {/* ───── HOW WE WORK ───────────────────────────────────── */}
      <Section bg="blue" id="how">
        <SectionHeader
          eyebrow="How We Work"
          eyebrowTone="blue"
          title={
            <>
              We meet you <em>where you are.</em>
            </>
          }
          subtitle="Every engagement is scoped to where you are. Every output is designed to compound forward."
          size="lg"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <EntryCard
            number="01"
            title="Pre-Launch"
            when="When the need is strategy"
            brings="Signal audit · Cohort intelligence · Launch blueprint. Two-week structured analysis with a clear owned output."
            output="Signal-to-Launch Blueprint"
          />
          <EntryCard
            number="02"
            title="Active Launch"
            when="When the need is execution"
            brings="Performance diagnostic · Governed AI activation · Outcomes measurement. Plugged into your in-market system without disruption."
            output="Commercial Performance System"
          />
          <EntryCard
            number="03"
            title="Portfolio Scale"
            when="When the need is coherence"
            brings="Portfolio signal architecture · AI governance framework · Operating model alignment across multiple assets."
            output="Intelligence Operating Model"
          />
        </div>
      </Section>

      {/* ───── WHAT WE BUILD ─────────────────────────────────── */}
      <Section bg="blue-bold" id="build">
        <SectionHeader
          eyebrow="What We Build"
          eyebrowTone="white"
          title={
            <>
              Named deliverables. <em>Owned by you.</em>
            </>
          }
          subtitle="Every engagement ends with something you own, operate, and build on — across oncology, rare disease, specialty, CNS, and cell & gene therapy."
          size="lg"
          className="text-white [&_blockquote]:text-white [&_p]:text-white/72"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <BuildColumn
            heading="Commercial Precision"
            headTone="ink"
            items={[
              "Signal Audit & Cohort Map",
              "Launch Excellence Assessment",
              "Commercial Opportunity Architecture",
              "Value Architecture & GTM Blueprint",
              "Cross-stakeholder Market Segmentation Design",
              "Access & Lifecycle Architecture",
            ]}
          />
          <BuildColumn
            heading="Experience Design"
            headTone="navy"
            items={[
              "HCP Journey Architecture",
              "Patient Pathway Design",
              "Omnichannel Engagement Blueprint",
              "Message Architecture Framework",
              "Moments-That-Matter Mapping",
              "Engagement Measurement System",
            ]}
          />
          <BuildColumn
            heading="Governed AI"
            headTone="ink"
            items={[
              "AI Opportunity Map & Prioritization",
              "Governed Machine Learning Loop Design",
              "Agentic Workflow Design",
              "AI Architecture Blueprint",
              "AI Governance Framework",
              "Outcomes Attribution Model",
            ]}
          />
        </div>
      </Section>

      {/* ───── CLOSE ─────────────────────────────────────────── */}
      <CloseCta
        eyebrow="BeCon Group"
        title={
          <>
            The signal is there.
            <br />
            <em>The system that converts it</em>
            <br />
            is what we build.
          </>
        }
        subtitle="Every biopharma asset deserves a commercial system built from the start to connect strategy, experience, and intelligence into one compounding arc."
        primaryCta={{ href: "/contact", label: "Schedule a conversation" }}
      />
    </main>
  );
}
