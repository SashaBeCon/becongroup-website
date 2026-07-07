import type { Metadata } from "next";
import { Hero } from "@/components/site/hero";
import { SignalStrip } from "@/components/site/signal-strip";
import { ModelCard } from "@/components/site/model-card";
import { EngagementRow } from "@/components/site/engagement-row";
import { BuildColumn } from "@/components/site/build-column";
import { WhyBlock } from "@/components/site/why-block";
import { FluencyBlock } from "@/components/site/fluency-block";
import { CloseCta } from "@/components/site/close-cta";

export const metadata: Metadata = {
  title: "BeConRx — Where medical signal becomes market impact",
  description:
    "A division of BeConGroup. We turn complex medical, market, and customer insights into brand strategy, creative intelligence, and activation that drive meaningful outcomes.",
};

export default function RxPage() {
  return (
    <main>
      {/* ───── HERO ───────────────────────────────────────────── */}
      <Hero
        brand="rx"
        eyebrow="Intelligence-Led Healthcare Communications"
        title={
          <>
            Where Medical Signal
            <br />
            Becomes <span className="orange">Market Impact</span>
          </>
        }
        subtitle="We turn complex medical, market, and customer insights into brand strategy, creative intelligence, and activation that drive meaningful outcomes."
        primaryCta={{ href: "/contact", label: "Start the conversation" }}
        secondaryCta={{ href: "#model", label: "See the model" }}
      />

      {/* ───── PIPELINE RAIL ──────────────────────────────────── */}
      <section className="section sec-band2">
        <div className="wrap">
          <div className="eyebrow">
            <i />
            <b>The Model, in one line</b>
          </div>
          <h2 className="h2" style={{ maxWidth: "680px", marginBottom: "44px" }}>
            Signal-to-Outcomes delivers targeted brand advantage.
          </h2>
          <SignalStrip
            items={[
              {
                kicker: "Where it starts",
                title: "Medical Signal",
                desc: "What the market weighs first — clinical evidence, expert insight, and outcomes.",
              },
              {
                kicker: "The model",
                title: "Brand Strategy & Creative",
                desc: "Market, competitive, and audience signals shaped into strategy, activation, and content systems.",
              },
              {
                kicker: "Where it lands",
                title: "Market Activation",
                desc: "Communications built to drive outcomes.",
              },
            ]}
          />
        </div>
      </section>

      {/* ───── THE MODEL (white) ──────────────────────────────── */}
      <section className="section sec-white" id="model">
        <div className="wrap">
          <div className="eyebrow blue">
            <i />
            <b>The Model</b>
          </div>
          <h2 className="h2" style={{ maxWidth: "640px" }}>
            One connected model.
            <br />
            <span className="em-focal">From signal to brand advantage.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: "640px", marginTop: "16px" }}>
            Medical signal sets the foundation. Market, competitive, and audience signals shape the
            strategy, activation, and outcomes that follow. The Signal-to-Outcomes model runs end to
            end.
          </p>
          <div className="model">
            <ModelCard number="01" title="Medical Signal" tc="#5B86E8" body="Clinical evidence, expert insight, and outcomes are translated into a clear foundation for brand strategy." />
            <ModelCard number="02" title="Brand Strategy" tc="#2366E8" body="Market, competitive, and audience signals are shaped into the opportunity. The result is positioning and a go-to-market strategy." />
            <ModelCard number="03" title="Creative Intelligence" tc="#E85D06" badge="The Rx Difference" body="This is creative built on signal. Brand strategy becomes a brand plan, content systems, and experiences that carry the evidence and learn from engagement." />
            <ModelCard number="04" title="Market Activation" tc="#8FA9D9" body="Agile, market-ready communications are built for execution, consistency, and measurable brand outcomes." />
          </div>
        </div>
      </section>

      {/* ───── HOW CLIENTS ENGAGE (ice) ───────────────────────── */}
      <section className="section sec-band" id="engage">
        <div className="wrap">
          <div className="eyebrow">
            <i />
            <b>How Clients Engage</b>
          </div>
          <h2 className="h2">
            Five engagements. <span className="em">One connected model.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: "640px", marginTop: "16px" }}>
            Engage one capability or the full model — each designed to connect signal, strategy,
            activation, and outcomes.
          </p>
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
      </section>

      {/* ───── WHAT WE DELIVER (white) ────────────────────────── */}
      <section className="section sec-white" id="deliver">
        <div className="wrap">
          <div className="eyebrow">
            <i />
            <b>What We Deliver</b>
          </div>
          <h2 className="h2">
            Strategic platforms, programs, and <span className="em">market-ready content.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: "660px", marginTop: "16px" }}>
            Actionable outputs are built through one connected model, from scientific foundation to
            market-ready activation.
          </p>
          <div className="build cols-4 cards">
            <BuildColumn heading="Medical Signal" bullet="orange" items={["Scientific narrative platform", "HCP scientific engagement content", "Expert insight development", "Evidence-to-strategy brief"]} />
            <BuildColumn heading="Brand Strategy" bullet="orange" items={["Positioning & brand narrative", "Stakeholder & audience segmentation", "Messaging architecture", "Launch & lifecycle plan"]} />
            <BuildColumn heading="Creative Intelligence" bullet="orange" items={["Engagement platform", "Content & experience architecture", "HCP & patient journey design", "Modular content system"]} />
            <BuildColumn heading="Market Activation" bullet="orange" accent items={["Modular asset development", "Content adaptation & versioning", "Scientific accuracy checks", "Content production"]} />
          </div>
        </div>
      </section>

      {/* ───── WHY BECON RX (dark band) ───────────────────────── */}
      <section className="section band-dark" id="why">
        <div className="wrap">
          <div className="eyebrow">
            <i />
            <b>Why BeCon Rx</b>
          </div>
          <h2 className="h2">
            Nimble specialist model.{" "}
            <span style={{ fontStyle: "italic", color: "var(--peach)" }}>
              Senior integration. Market-ready.
            </span>
          </h2>
          <WhyBlock
            stats={[
              { value: "3", label: "Senior partners" },
              { value: "20+", label: "Years avg. experience" },
              { value: "1", label: "Connected model", hl: true },
            ]}
            reasons={[
              { title: "Senior partners in the work, brief to delivery", body: "Director-level leadership stays on the work." },
              { title: "Designed to reduce loss at handoffs", body: "Signal, strategy, creative, production, and activation stay connected." },
              { title: "Faster evidence-to-engagement", body: "Evidence and framing are settled before execution begins." },
              { title: "A modern operating model, with group backing", body: "Senior specialists and connected systems run a modern operating discipline, backed by BeCon Group." },
              { title: "Built around the outcomes that deliver the opportunity", body: "We define the outcomes first: narrative clarity, engagement readiness, and content usability. Then we build to them." },
            ]}
          />
        </div>
      </section>

      {/* ───── THERAPY & MARKET FLUENCY (ice) ─────────────────── */}
      <section className="section sec-band" id="fluency">
        <div className="wrap">
          <div className="eyebrow blue">
            <i />
            <b>Therapy & Market Fluency</b>
          </div>
          <h2 className="h2">
            Experience across <span className="em">complex categories.</span>
          </h2>
          <FluencyBlock
            groups={[
              {
                label: "Therapy areas",
                items: ["Oncology & hematology", "Immunology & inflammation", "Rare & orphan disease", "CNS & neurology", "Cardiovascular & metabolic", "Respiratory", "Infectious disease", "Dermatology", "Endocrinology", "Pain"],
              },
              {
                label: "Market contexts",
                items: ["Global brand strategy", "Local market intelligence", "Regional adaptation", "Cross-market consistency", "Regulatory fluency"],
              },
            ]}
          />
        </div>
      </section>

      {/* ───── CLOSE ──────────────────────────────────────────── */}
      <CloseCta
        eyebrow="BeCon Rx"
        title={
          <>
            Connect your brand, evidence, and <span className="orange">commercial reality</span> to
            the outcomes that drive results.
          </>
        }
        subtitle="Medical Signal → Brand Strategy → Market Activation → Outcomes."
        primaryCta={{ href: "/contact", label: "Start the conversation" }}
      />
    </main>
  );
}
