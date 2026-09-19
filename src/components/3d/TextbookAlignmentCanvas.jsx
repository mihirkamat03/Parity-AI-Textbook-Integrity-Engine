import React, { useRef, useState, useEffect, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';

const PARTICLE_COUNT = 55;
const INITIAL_PARTICLE_POSITIONS = (() => {
  const pos = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const seedX = ((i * 137.5) % 100) / 100;
    const seedY = ((i * 224.3) % 100) / 100;
    const seedZ = ((i * 351.7) % 100) / 100;
    pos[i * 3] = (seedX - 0.5) * 2.8;
    pos[i * 3 + 1] = (seedY - 0.5) * 2.6;
    pos[i * 3 + 2] = (seedZ - 0.5) * 0.5;
  }
  return pos;
})();

// Authentic Verification Engine 3D Scene
function VerificationEngineScene({ scanning = true }) {
  const scanLineRef = useRef();
  const particlesRef = useRef();
  const particlePositions = useMemo(() => new Float32Array(INITIAL_PARTICLE_POSITIONS), []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Vertical scanning beam movement
    if (scanLineRef.current && scanning) {
      scanLineRef.current.position.y = Math.sin(t * 1.1) * 1.5;
    }

    // Stream particles across the semantic alignment channel (from English to Marathi)
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        positions[i * 3] += 0.018;
        if (positions[i * 3] > 1.6) {
          positions[i * 3] = -1.6;
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group position={[0, -0.05, 0]}>
      {/* 1. English Source Document Surface */}
      <group position={[-1.75, 0, 0]}>
        {/* Textbook Page Base */}
        <mesh>
          <planeGeometry args={[2.4, 3.4]} />
          <meshStandardMaterial
            color="#0A0B0E"
            roughness={0.4}
            metalness={0.8}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Delicate Page Edge Light */}
        <lineSegments>
          <edgesGeometry args={[new THREE.PlaneGeometry(2.4, 3.4)]} />
          <lineBasicMaterial color="#FF7A18" transparent opacity={0.4} />
        </lineSegments>

        {/* Document Header Indicator */}
        <mesh position={[-0.6, 1.4, 0.02]}>
          <planeGeometry args={[0.7, 0.08]} />
          <meshBasicMaterial color="#FF7A18" transparent opacity={0.8} />
        </mesh>

        {/* Text paragraph lines representation */}
        {[-1.1, -0.6, 0.0, 0.5, 0.95].map((y, idx) => (
          <mesh key={idx} position={[0, y, 0.02]}>
            <planeGeometry args={[1.9, 0.035]} />
            <meshBasicMaterial color="#C8CCD4" transparent opacity={idx === 1 ? 0.9 : 0.25} />
          </mesh>
        ))}

        {/* Formula Node representation: F = m × a (LHS/RHS Balanced) */}
        <mesh position={[0, -0.6, 0.04]}>
          <planeGeometry args={[1.6, 0.36]} />
          <meshBasicMaterial color="#16181F" transparent opacity={0.9} />
        </mesh>
        <lineSegments position={[0, -0.6, 0.04]}>
          <edgesGeometry args={[new THREE.PlaneGeometry(1.6, 0.36)]} />
          <lineBasicMaterial color="#FF7A18" transparent opacity={0.6} />
        </lineSegments>

        {/* Text label for English formula */}
        <Text
          position={[0, -0.6, 0.06]}
          fontSize={0.13}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
        >
          F = m × a
        </Text>

        <Text
          position={[-0.8, 1.15, 0.03]}
          fontSize={0.09}
          color="#FF8A24"
          anchorX="left"
        >
          SOURCE [EN]
        </Text>
      </group>

      {/* 2. Marathi Translated Document Surface */}
      <group position={[1.75, 0, 0]}>
        {/* Textbook Page Base */}
        <mesh>
          <planeGeometry args={[2.4, 3.4]} />
          <meshStandardMaterial
            color="#0A0B0E"
            roughness={0.4}
            metalness={0.8}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Delicate Page Edge Light */}
        <lineSegments>
          <edgesGeometry args={[new THREE.PlaneGeometry(2.4, 3.4)]} />
          <lineBasicMaterial color="#F5B942" transparent opacity={0.4} />
        </lineSegments>

        {/* Document Header Indicator */}
        <mesh position={[-0.6, 1.4, 0.02]}>
          <planeGeometry args={[0.7, 0.08]} />
          <meshBasicMaterial color="#F5B942" transparent opacity={0.8} />
        </mesh>

        {/* Text paragraph lines representation */}
        {[-1.1, -0.6, 0.0, 0.5, 0.95].map((y, idx) => (
          <mesh key={idx} position={[0, y, 0.02]}>
            <planeGeometry args={[1.9, 0.035]} />
            <meshBasicMaterial color="#C8CCD4" transparent opacity={idx === 1 ? 0.9 : 0.25} />
          </mesh>
        ))}

        {/* Formula Node representation: F = m × v (CRITICAL DISCREPANCY: 'v' instead of 'a') */}
        <mesh position={[0, -0.6, 0.04]}>
          <planeGeometry args={[1.6, 0.36]} />
          <meshBasicMaterial color="#1E1214" transparent opacity={0.9} />
        </mesh>
        <lineSegments position={[0, -0.6, 0.04]}>
          <edgesGeometry args={[new THREE.PlaneGeometry(1.6, 0.36)]} />
          <lineBasicMaterial color="#FF4D3D" transparent opacity={0.9} />
        </lineSegments>

        {/* Text label for Marathi formula with discrepancy highlighted */}
        <Text
          position={[0, -0.6, 0.06]}
          fontSize={0.13}
          color="#FF6353"
          anchorX="center"
          anchorY="middle"
        >
          F = m × v
        </Text>

        <Text
          position={[-0.8, 1.15, 0.03]}
          fontSize={0.09}
          color="#F5B942"
          anchorX="left"
        >
          TRANSLATION [MR]
        </Text>
      </group>

      {/* 3. Semantic Alignment Paths & Active Discrepancy Connector */}
      <SemanticConnectors />

      {/* 4. Restrained Particle Lattice Flow */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.length / 3}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#FFC857"
          transparent
          opacity={0.65}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* 5. Scanning Beam Sweep across both surfaces */}
      {scanning && (
        <group ref={scanLineRef} position={[0, 0, 0.08]}>
          <mesh>
            <planeGeometry args={[6.2, 0.025]} />
            <meshBasicMaterial color="#FF7A18" transparent opacity={0.85} />
          </mesh>
          <mesh>
            <planeGeometry args={[6.2, 0.22]} />
            <meshBasicMaterial color="#FF7A18" transparent opacity={0.1} />
          </mesh>
        </group>
      )}
    </group>
  );
}

function SemanticConnectors() {
  const lines = [
    { from: [-0.55, 0.95, 0.04], to: [0.55, 0.95, 0.04], color: '#F5B942', opacity: 0.25 },
    { from: [-0.55, 0.5, 0.04], to: [0.55, 0.5, 0.04], color: '#FF7A18', opacity: 0.3 },
    { from: [-0.55, 0.0, 0.04], to: [0.55, 0.0, 0.04], color: '#10B981', opacity: 0.45 }, // Verified equivalent
    { from: [-0.55, -0.6, 0.06], to: [0.55, -0.6, 0.06], color: '#FF4D3D', opacity: 0.95 }, // High-Risk Formula Discrepancy
    { from: [-0.55, -1.1, 0.04], to: [0.55, -1.1, 0.04], color: '#FF7A18', opacity: 0.25 },
  ];

  return (
    <group>
      {lines.map((l, i) => {
        const points = [new THREE.Vector3(...l.from), new THREE.Vector3(...l.to)];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial color={l.color} transparent opacity={l.opacity} linewidth={1.5} />
          </line>
        );
      })}

      {/* Center Discrepancy Callout Node between the formulas */}
      <mesh position={[0, -0.6, 0.08]}>
        <planeGeometry args={[0.9, 0.22]} />
        <meshBasicMaterial color="#180C0E" transparent opacity={0.95} />
      </mesh>
      <lineSegments position={[0, -0.6, 0.08]}>
        <edgesGeometry args={[new THREE.PlaneGeometry(0.9, 0.22)]} />
        <lineBasicMaterial color="#FF4D3D" transparent opacity={0.8} />
      </lineSegments>
      <Text
        position={[0, -0.6, 0.1]}
        fontSize={0.08}
        color="#FF4D3D"
        anchorX="center"
        anchorY="middle"
      >
        AST MISMATCH
      </Text>
    </group>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export function TextbookAlignmentCanvas({ scanning = true, className = "h-96 w-full" }) {
  const [reducedMotion, setReducedMotion] = useState(() => 
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const fallbackUI = (
    <div className={`relative flex items-center justify-center rounded-xl border border-white/[0.08] bg-[#0A0B0E] p-6 ${className}`}>
      <div className="flex w-full max-w-lg items-center justify-between gap-6 font-mono text-xs">
        <div className="flex-1 rounded-lg border border-[#FF7A18]/30 bg-[#121418] p-4 text-center">
          <div className="text-[10px] text-[#FF7A18] font-semibold">SOURCE [EN]</div>
          <div className="mt-2 text-white text-sm font-sans font-medium">Newton's Second Law</div>
          <div className="mt-1 text-zinc-300 font-mono text-xs">F = m × a</div>
        </div>
        <div className="flex flex-col items-center gap-1 text-zinc-500">
          <span className="text-[9px] text-[#FF4D3D] font-mono font-bold">AST MISMATCH</span>
          <div className="h-0.5 w-14 bg-[#FF4D3D]" />
        </div>
        <div className="flex-1 rounded-lg border border-[#FF4D3D]/30 bg-[#121418] p-4 text-center">
          <div className="text-[10px] text-[#FF4D3D] font-semibold">TRANSLATION [MR]</div>
          <div className="mt-2 text-white text-sm font-sans font-medium">गतीचा दुसरा नियम</div>
          <div className="mt-1 text-[#FF4D3D] font-mono text-xs">F = m × v</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`relative rounded-xl border border-white/[0.08] bg-gradient-to-b from-[#0B0D12] to-[#07080A] overflow-hidden ${className}`}>
      {/* Subtle coordinate grid overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(#FF7A18 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Floating System Status Pill */}
      <div className="absolute top-3.5 left-4 z-10 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A18] shadow-[0_0_8px_#FF7A18]" />
        <span className="font-mono text-[11px] text-zinc-400">
          TEXTBOOK INTEGRITY SCAN • EN ⟷ MR
        </span>
      </div>

      <div className="absolute bottom-3.5 right-4 z-10 font-mono text-[10px] text-zinc-500">
        DIMENSIONAL AST ANALYSIS • ACTIVE DISCREPANCY HIGHLIGHT
      </div>

      <ErrorBoundary fallback={fallbackUI}>
        <Canvas
          camera={{ position: [0, 0, 4.4], fov: 46 }}
          gl={{ antialias: true, alpha: true }}
          className="cursor-grab active:cursor-grabbing"
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 8, 5]} intensity={1.5} color="#FFF9F5" />
          <pointLight position={[-4, -2, 2]} color="#FF7A18" intensity={1.8} />
          <pointLight position={[4, -2, 2]} color="#F5B942" intensity={1.8} />

          <Suspense fallback={null}>
            {reducedMotion ? (
              <VerificationEngineScene scanning={false} />
            ) : (
              <Float speed={1.1} rotationIntensity={0.08} floatIntensity={0.15}>
                <VerificationEngineScene scanning={scanning} />
              </Float>
            )}
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
