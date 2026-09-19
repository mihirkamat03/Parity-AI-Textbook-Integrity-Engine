import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Maximize2, Sparkles } from 'lucide-react';

export function EngineVideoPreview({ className = '' }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(24);
  const [isMuted, setIsMuted] = useState(true);
  const [activeSegment, setActiveSegment] = useState(1);

  // Simulated playback timer for the video preview
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            return 0;
          }
          const next = prev + 0.8;
          // Dynamically shift visual scan phases based on progress
          if (next > 70) setActiveSegment(3);
          else if (next > 35) setActiveSegment(2);
          else setActiveSegment(1);
          return next;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(p => !p);
  const toggleMute = () => setIsMuted(m => !m);
  const restart = () => {
    setProgress(0);
    setActiveSegment(1);
    setIsPlaying(true);
  };

  const currentTime = (progress * 0.18).toFixed(1);

  return (
    <div className={`relative rounded-3xl overflow-hidden border border-white/[0.1] bg-[#0A0C10] shadow-[0_20px_50px_rgba(0,0,0,0.6)] group transition-all duration-300 hover:border-[#FF7A18]/40 ${className}`}>
      {/* Top Video Chrome Bar */}
      <div className="h-10 px-4 bg-[#0D0F14]/90 border-b border-white/[0.08] flex items-center justify-between backdrop-blur-md select-none z-10 relative">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D3D]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5B942]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
          </div>
          <span className="text-[11px] font-mono text-zinc-400 font-medium ml-2 flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF7A18] animate-pulse" />
            PARITY_Bilingual_Alignment_Scan.mp4
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.06] text-zinc-300 border border-white/[0.08]">
            1080P • 60 FPS
          </span>
          <span className="text-[10px] font-mono text-[#FF7A18] bg-[#FF7A18]/10 px-2 py-0.5 rounded-full border border-[#FF7A18]/25 font-semibold">
            SYNCHRONIZED
          </span>
        </div>
      </div>

      {/* Main Video Viewport (Simulated High-Tech Inspection Film) */}
      <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-gradient-to-br from-[#06080B] via-[#0A0D14] to-[#050608] flex items-center justify-center">
        {/* Subtle grid backdrop */}
        <div 
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 122, 24, 0.4) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Ambient Light Flares */}
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-[#FF7A18]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-[#F5B942]/10 blur-3xl pointer-events-none" />

        {/* Dynamic Scan Line Bar moving with progress */}
        <div 
          className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#FF7A18] to-transparent shadow-[0_0_15px_#FF7A18] z-20 pointer-events-none transition-all duration-75"
          style={{ left: `${progress}%` }}
        >
          <div className="absolute top-3 -translate-x-1/2 px-1.5 py-0.5 rounded text-[9px] font-mono bg-[#FF7A18] text-black font-bold whitespace-nowrap shadow-md">
            SCAN {(progress).toFixed(0)}%
          </div>
        </div>

        {/* Dual Document Alignment Visual Representation */}
        <div className="relative z-10 w-full px-6 grid grid-cols-2 gap-4 select-none">
          {/* Source Document Card (English) */}
          <div className={`p-4 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
            activeSegment === 1 
              ? 'border-[#FF7A18]/60 bg-[#FF7A18]/[0.06] shadow-[0_0_20px_rgba(255,122,24,0.15)]' 
              : 'border-white/[0.08] bg-white/[0.02]'
          }`}>
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] mb-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                Source (EN)
              </span>
              <span className="text-[10px] font-mono text-zinc-500">SEC 4.1</span>
            </div>
            <div className="space-y-2 text-left">
              <div className="text-xs font-mono font-semibold text-zinc-200">
                F = G · (m₁ · m₂) / r²
              </div>
              <div className="text-[11px] font-sans text-zinc-400 leading-relaxed">
                "Gravitational force is inversely proportional to the square of the distance."
              </div>
              <div className="flex items-center gap-2 pt-1 font-mono text-[10px] text-zinc-500">
                <span className="px-1.5 py-0.5 rounded bg-white/[0.05]">AST: BinaryExpr</span>
                <span className="text-emerald-400">Balanced LHS/RHS</span>
              </div>
            </div>
          </div>

          {/* Target Document Card (Marathi) */}
          <div className={`p-4 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
            activeSegment === 3 
              ? 'border-[#FF4D3D]/60 bg-[#FF4D3D]/[0.06] shadow-[0_0_20px_rgba(255,77,61,0.15)]' 
              : activeSegment === 2 
                ? 'border-[#F5B942]/60 bg-[#F5B942]/[0.06]' 
                : 'border-white/[0.08] bg-white/[0.02]'
          }`}>
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] mb-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Target (MR)
              </span>
              <span className="text-[10px] font-mono text-zinc-500">SEC 4.1</span>
            </div>
            <div className="space-y-2 text-left">
              <div className="text-xs font-mono font-semibold text-[#FF4D3D] flex items-center gap-1.5">
                <span>F = G · (m₁ · m₂) / r</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-[#FF4D3D]/20 border border-[#FF4D3D]/40 font-bold">MISSING ²</span>
              </div>
              <div className="text-[11px] font-sans text-zinc-400 leading-relaxed">
                "गुरुत्वाकर्षण बल हे अंतराच्या व्यस्त प्रमाणात असते."
              </div>
              <div className="flex items-center gap-2 pt-1 font-mono text-[10px]">
                <span className="px-1.5 py-0.5 rounded bg-white/[0.05] text-zinc-400">AST: ExponentMismatch</span>
                <span className="text-[#FF4D3D] font-bold flex items-center gap-1">
                  High Risk Discrepancy
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Alignment Vector Overlay in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 flex flex-col items-center gap-1">
          <div className="px-3 py-1 rounded-full bg-[#0D0F14]/90 border border-white/[0.15] text-[10px] font-mono text-[#FF7A18] font-bold shadow-lg backdrop-blur-md flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#FF7A18]" />
            CROSS-LINGUAL EMBEDDING MATCH: 94.2%
          </div>
        </div>

        {/* Big play button overlay when paused */}
        {!isPlaying && (
          <button 
            onClick={togglePlay}
            className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#FF7A18] text-black flex items-center justify-center shadow-[0_0_30px_#FF7A18] hover:scale-110 transition-transform z-30 cursor-pointer"
          >
            <Play className="w-6 h-6 ml-0.5 fill-black" />
          </button>
        )}
      </div>

      {/* Bottom Interactive Video Scrubber & Playback Controls */}
      <div className="p-3.5 bg-[#0A0C10]/95 border-t border-white/[0.08] backdrop-blur-md space-y-2.5 select-none">
        {/* Progress Bar Scrubber */}
        <div 
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickPos = (e.clientX - rect.left) / rect.width;
            setProgress(Math.max(0, Math.min(100, clickPos * 100)));
          }}
          className="h-1.5 w-full rounded-full bg-zinc-800/80 hover:h-2 transition-all cursor-pointer relative overflow-hidden group/bar"
        >
          {/* Buffer track */}
          <div className="absolute left-0 top-0 bottom-0 bg-white/[0.08] w-[85%]" />
          {/* Playhead progress */}
          <div 
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#FF7A18] to-[#F5B942] rounded-full transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Control Buttons & Timestamp */}
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="p-1.5 rounded-full hover:bg-white/[0.08] text-zinc-300 hover:text-white transition-colors cursor-pointer"
              title={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            </button>

            <button
              onClick={restart}
              className="p-1.5 rounded-full hover:bg-white/[0.08] text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
              title="Restart video"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <span className="text-[11px] text-zinc-400 font-medium">
              00:{currentTime.padStart(4, '0')} <span className="text-zinc-600">/ 00:18.0</span>
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="hidden sm:flex items-center gap-1 text-[11px] text-zinc-500 mr-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Live Engine Telemetry</span>
            </div>

            <button
              onClick={toggleMute}
              className="p-1.5 rounded-full hover:bg-white/[0.08] text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
              title={isMuted ? "Unmute narration" : "Mute narration"}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={() => alert("Full screen demonstration mode enabled")}
              className="p-1.5 rounded-full hover:bg-white/[0.08] text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
              title="Maximize"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
