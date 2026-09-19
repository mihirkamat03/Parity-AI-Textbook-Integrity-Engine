import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useVerification } from '../context/useVerification';
import { OverviewHero } from '../components/dashboard/OverviewHero';
import { TelemetryStrip } from '../components/dashboard/TelemetryStrip';
import { EquivalenceVisualizer } from '../components/dashboard/EquivalenceVisualizer';
import { Capabilities } from '../components/dashboard/Capabilities';
import { PipelineVisualizer } from '../components/dashboard/PipelineVisualizer';

export function OverviewView() {
  const { setActiveView, startPipeline } = useVerification();
  const heroRef = useRef(null);

  useEffect(() => {
    // GSAP staggered cinematic entrance timeline
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(".telemetry-band", { opacity: 0, y: 10, duration: 0.4, delay: 0.8 });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="w-full px-6 sm:px-8 lg:px-12 py-8 sm:py-10 space-y-14 bg-ambient-warm">
      <OverviewHero 
        onStartDemo={startPipeline}
        onStartVerification={() => setActiveView('new')}
      />

      <div className="telemetry-band">
        <TelemetryStrip />
      </div>

      <Capabilities />

      <EquivalenceVisualizer />

      <PipelineVisualizer />
    </div>
  );
}
