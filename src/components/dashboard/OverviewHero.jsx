import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Play, AlertTriangle } from 'lucide-react';
import { Button } from '../ui/Button';

export function OverviewHero({ onStartDemo, onStartVerification }) {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      // Text animations
      tl.from(".hero-text-element", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15
      });
      
      // 2.5D visual animations
      tl.from(".document-source", {
        x: -50,
        y: 50,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        opacity: 0,
        duration: 1
      }, "-=0.6");
      
      tl.from(".document-target", {
        x: 50,
        y: -50,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        opacity: 0,
        duration: 1
      }, "-=0.8");
      
      // Scanner beam animation
      gsap.to(".scanner-beam", {
        y: "200%",
        duration: 2.5,
        repeat: -1,
        ease: "linear",
        yoyo: true
      });
      
      // Highlight the formula mismatch after documents appear
      tl.from(".mismatch-badge", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
      }, "-=0.2");
      
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8 min-h-[500px]">
      {/* Left Side: Editorial Typography (45%) */}
      <div className="w-full lg:w-[45%] space-y-6 z-10">
        <div className="hero-text-element inline-flex items-center gap-2 text-xs font-sans text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A18]" />
          <span className="tracking-wider uppercase font-medium">POST-TRANSLATION TEXTBOOK INTEGRITY ENGINE</span>
        </div>
        
        <div className="hero-text-element space-y-2">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.02]">
            VERIFY. COMPARE.
          </h1>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.02]">
            <span className="italic text-[#FF7A18]">PRESERVE.</span>
          </h1>
        </div>
        
        <p className="hero-text-element text-base sm:text-lg text-zinc-300 font-sans leading-relaxed max-w-lg">
          PARITY verifies whether translated textbooks preserve the meaning, technical correctness, 
          and instructional integrity of the original scientific curriculum.
        </p>
        
        <div className="hero-text-element flex flex-wrap items-center gap-3 pt-4">
          <Button
            size="lg"
            variant="primary"
            icon={ArrowRight}
            onClick={onStartVerification}
          >
            Start Verification
          </Button>
          
          <Button
            size="lg"
            variant="secondary"
            icon={Play}
            onClick={onStartDemo}
          >
            Explore Demo
          </Button>
        </div>
      </div>
      
      {/* Right Side: 2.5D Visualization (55%) */}
      <div className="w-full lg:w-[55%] relative h-[450px] flex items-center justify-center [perspective:1200px]">
        {/* Source Document */}
        <div 
          className="document-source absolute left-[15%] top-[10%] w-[65%] h-[80%] bg-[#101113] border border-white/[0.1] rounded-lg shadow-2xl p-6 [transform:rotateX(20deg)_rotateY(-15deg)_rotateZ(5deg)_translateZ(-100px)]"
        >
          <div className="flex items-center justify-between mb-8 border-b border-white/[0.05] pb-3">
            <span className="font-mono text-xs text-zinc-400">SOURCE: ENGLISH</span>
            <span className="font-mono text-xs text-zinc-500">ID: PHY-CH4-EN</span>
          </div>
          <div className="space-y-4">
            <div className="h-2 w-3/4 bg-white/[0.05] rounded"></div>
            <div className="h-2 w-full bg-white/[0.05] rounded"></div>
            <div className="h-2 w-5/6 bg-white/[0.05] rounded"></div>
            
            <div className="mt-8 p-4 bg-white/[0.02] border border-white/[0.05] rounded flex flex-col items-center justify-center font-mono text-lg text-zinc-300">
              <span className="text-xs text-zinc-500 mb-2 w-full text-left">ORIGINAL FORMULA</span>
              <span>F = m × a</span>
            </div>
            
            <div className="h-2 w-full bg-white/[0.05] rounded mt-8"></div>
            <div className="h-2 w-2/3 bg-white/[0.05] rounded"></div>
          </div>
        </div>
        
        {/* Target Document */}
        <div 
          className="document-target absolute right-[5%] top-[15%] w-[65%] h-[80%] bg-[#101113]/95 backdrop-blur-md border border-[#FF7A18]/30 rounded-lg shadow-2xl p-6 overflow-hidden [transform:rotateX(20deg)_rotateY(-15deg)_rotateZ(5deg)_translateZ(50px)]"
        >
          <div className="flex items-center justify-between mb-8 border-b border-white/[0.05] pb-3">
            <span className="font-mono text-xs text-[#FF7A18]">TARGET: MARATHI</span>
            <span className="font-mono text-xs text-zinc-500">ID: PHY-CH4-MR</span>
          </div>
          
          {/* Scanner Beam */}
          <div className="scanner-beam absolute left-0 right-0 h-32 bg-scan-gradient -top-32 pointer-events-none z-20 mix-blend-screen opacity-70"></div>
          
          <div className="space-y-4 relative z-10">
            <div className="h-2 w-3/4 bg-white/[0.05] rounded"></div>
            <div className="h-2 w-full bg-white/[0.05] rounded"></div>
            <div className="h-2 w-5/6 bg-white/[0.05] rounded"></div>
            
            <div className="mt-8 p-4 bg-[#FF4D3D]/5 border border-[#FF4D3D]/30 rounded flex flex-col items-center justify-center font-mono text-lg text-[#FF4D3D] relative">
              <span className="text-xs text-[#FF4D3D]/70 mb-2 w-full text-left">TRANSLATED FORMULA</span>
              <span>F = m × v</span>
              
              <div className="mismatch-badge absolute -top-3 -right-3 bg-[#FF4D3D] text-white text-[9px] font-bold px-2 py-1 rounded shadow-lg flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                FORMULA MISMATCH
              </div>
            </div>
            
            <div className="h-2 w-full bg-white/[0.05] rounded mt-8"></div>
            <div className="h-2 w-2/3 bg-white/[0.05] rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
