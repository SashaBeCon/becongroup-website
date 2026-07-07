import type { Metadata } from "next";
import { Hero } from "@/components/site/hero";
import { SignalStrip } from "@/components/site/signal-strip";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ModelCard } from "@/components/site/model-card";
import { EngagementRow } from "@/components/site/engagement-row";
import { BuildColumn } from "@/components/site/build-column";
import { WhyBlock } from "@/components/site/why-block";
import { FluencyBlock } from "@/components/site/fluency-block";
import { CloseCta } from "@/components/site/close-cta";

export const metadata: Metadata = {
  title: "BeConRx — Intelligence-led healthcare communications",
  description:
    "A division of BeConGroup. Connecting medical, market, and competitive signals to brand strategy, market activation, and the outcomes that drive business.",
};

export default function RxPage() {
  return (
    <main>
      {/* ───── HERO ─────────────────────────────────────────── */}
      <Hero
        variant="compact"
        eyebrow="Intelligence-led healthcare communications"
        title={
          <>
            From signal to opportunity. From opportunity to <em>brand outcomes.</em>
          </>
        }
        subtitle="Connecting medical, market, and competitive signals to brand strategy, market activation, and the outcomes that drive business."
        primaryCta={{ href: "/contact", label: "Start the conversation" }}
        secondaryCta={{ href: "#model", label: "See the model" }}
      />

      {/* ───── HERO SIGNAL STRIP ────────────────────────────── */}
      <Section bg="paper" size="sm">
        <SignalStrip
          left={{
            label: "Where it starts",
            title: "Medical Signal",
            description: "What the market weighs first.",
          }}
          middle={{
            label: "The model",
            title: "Signal-to-Outcomes delivers targeted brand advantage.",
          }}
          right={{
            label: "Where it lands",
            title: "Market Activation",
            description: "Communications built to drive outcomes.",
          }}
        />
      </Section>

      {/* ───── THE MODEL ────────────────────────────────────── */}
      <Section bg="white" id="model">
        <SectionHeader
          eyebrow="The Model"
          eyebrowTone="blue"
          title={
            <>
              One connected model.
              <br />
              <em>From signal to brand advantage.</em>
            </>
          }
          subtitle="Medical signal sets the foundation. Market, competitive, and audience signals shape the strategy, activation, and outcomes that follow. The Signal-to-Outcomes model runs end to end."
          size="lg"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <ModelCard
            number="01"
            title="Medical Signal"
            body="Clinical evidence, expert insight, and outcomes are translated into a clear foundation for brand strategy."
            tone="blue-soft"
          />
          <ModelCard
            number="02"
            title="Brand Strategy"
            body="Market, competitive, and audience signals are shaped into the opportunity. The result is positioning and a go-to-market strategy."
            tone="white"
          />
          <ModelCard
            number="03"
            title="Creative Intelligence"
            body="This is creative built on signal. Brand strategy becomes a brand plan, content systems, and experiences that carry the evidence and learn from engagement."
            tone="orange-soft"
            badge="The Rx Difference"
          />
          <ModelCard
            number="04"
            title="Market Activation"
            body="Agile, market-ready communications are built for execution, consistency, and measurable brand outcomes."
            tone="paper"
          />
        </div>
      </Section>

      {/* ───── HOW CLIENTS ENGAGE ───────────────────────────── */}
      <Section bg="orange" id="engage">
        <SectionHeader
          eyebrow="How Clients Engage"
          eyebrowTone="navy"
          title={
            <>
              Five engagements. <em>One connected model.</em>
            </>
          }
          subtitle="Engage one capability or the full model — each designed to connect signal, strategy, activation, and outcomes."
          size="lg"
        />

        <div className="mt-12">
          <EngagementRow
            items={[
              { number: "01", title: "Scientific Narrative Platform" },
              { number: "02", title: "Launch & Lifecycle Strategy" },
              { number: "03", title: "HCP Omnichannel Engagement" },
              { number: "04", title: "Global-to-Local Activation" },
              { number: "05", title: "Content Production & Adaptation" },
            ]}
          />
        </div>
      </Section>

      {/* ───── WHAT WE DELIVER ──────────────────────────────── */}
      <Section bg="blue-bold" id="deliver">
        <SectionHeader
          eyebrow="What We Deliver"
          eyebrowTone="white"
          title={
            <>
              Strategic platforms, programs, and{" "}
              <em>market-ready content.</em>
            </>
          }
          subtitle="Actionable outputs, built through one connected model — from scientific foundation to market-ready activation."
          size="lg"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <BuildColumn
            heading="Medical Signal"
            headTone="ink"
            items={[
              "Scientific narrative platform",
              "HCP engagement content",
              "Expert insight development",
              "Evidence-to-strategy brief",
            ]}
          />
          <BuildColumn
            heading="Brand Strategy"
            headTone="navy"
            items={[
              "Positioning & brand narrative",
              "Stakeholder & audience segmentation",
              "Messaging architecture",
              "Launch & lifecycle plan",
            ]}
          />
          <BuildColumn
            heading="Creative Intelligence"
            headTone="ink"
            items={[
              "Engagement platform",
              "Content & experience architecture",
              "HCP & patient journey design",
              "Modular content system",
            ]}
          />
          <BuildColumn
            heading="Production & Adaptation"
            headTone="navy"
            items={[
              "Modular asset development",
              "Content adaptation & versioning",
              "Scientific accuracy checks",
              "Content production",
            ]}
          />
        </div>
      </Section>

      {/* ───── WHY BECON RX ─────────────────────────────────── */}
      <Section bg="navy" id="why">
        <SectionHeader
          eyebrow="Why BeCon Rx"
          eyebrowTone="orange"
          title={
            <>
              Nimble specialist model. <em>Senior integration. Market-ready.</em>
            </>
          }
          size="lg"
          className="text-white"
        />
        <div className="mt-12">
          <WhyBlock
            tone="dark"
            stats={[
              { value: "3", label: "Senior partners" },
              { value: "20+", label: "Years avg. experience" },
              { value: "1", label: "Connected model" },
            ]}
            reasons={[
              {
                title: "Senior partners in the work, brief to delivery",
                body: "Director-level leadership stays on the work.",
              },
              {
                title: "Designed to reduce loss at handoffs",
                body: "Signal, strategy, creative, production, and activation stay connected.",
              },
              {
                title: "Faster evidence-to-engagement",
                body: "Evidence and framing are settled before execution begins.",
              },
              {
                title: "A modern operating model, with group backing",
                body: "Senior specialists and connected systems run a modern operating discipline, backed by BeCon Group.",
              },
              {
                title: "Built around the outcomes that deliver the opportunity",
                body: "We define the outcomes first: narrative clarity, engagement readiness, and content usability. Then we build to them.",
              },
            ]}
          />
        </div>
      </Section>

      {/* ───── THERAPY & MARKET FLUENCY ─────────────────────── */}
      <Section bg="white" id="fluency">
        <SectionHeader
          eyebrow="Therapy & Market Fluency"
          eyebrowTone="blue"
          title={
            <>
              Experience across <em>complex categories.</em>
            </>
          }
          size="md"
        />
        <div className="mt-10">
          <FluencyBlock
            groups={[
              {
                label: "Therapy areas",
                items: [
                  "Oncology & hematology",
                  "Immunology & inflammation",
                  "Rare & orphan disease",
                  "CNS & neurology",
                  "Cardiovascular & metabolic",
                  "Respiratory",
                  "Infectious disease",
                  "Dermatology",
                  "Endocrinology",
                  "Pain",
                ],
              },
              {
                label: "Market contexts",
                items: [
                  "Global brand strategy",
                  "Local market intelligence",
                  "Regional adaptation",
                  "Cross-market consistency",
                  "Regulatory fluency",
                ],
              },
            ]}
          />
        </div>
      </Section>

      {/* ───── CLOSE ────────────────────────────────────────── */}
      <CloseCta
        eyebrow="BeCon Rx"
        title={
          <>
            Connect your brand, evidence, and{" "}
            <em>commercial reality</em> to the outcomes that drive results.
          </>
        }
        subtitle="Medical Signal → Brand Strategy → Market Activation → Outcomes."
        primaryCta={{ href: "/contact", label: "Start the conversation" }}
      />
    </main>
  );
}
