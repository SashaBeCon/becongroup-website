import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Start a conversation",
  description: "Tell us where you are and what you need. We'll respond within one business day.",
};

export default function ContactPage() {
  return (
    <main>
      <Section bg="paper" size="lg">
        <SectionHeader
          eyebrow="Start a conversation"
          title={
            <>
              Tell us <em>where you are.</em>
            </>
          }
          subtitle="Smart intent form lands in task #8. Until then, the fastest path is direct email."
          size="lg"
        />
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="mailto:info@becongroup.io" variant="accent" size="lg" withArrow>
            Email info@becongroup.io
          </Button>
          <Button href="/" variant="ghost" size="lg">
            Back to home
          </Button>
        </div>
      </Section>
    </main>
  );
}
