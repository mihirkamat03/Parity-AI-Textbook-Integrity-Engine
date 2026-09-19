/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#070809',
        'canvas-subtle': '#0B0C0E',
        card: '#101113',
        'card-hover': '#15161A',
        surface: '#0B0C0E',
        'surface-elevated': '#181A1F',
        border: 'rgba(255, 255, 255, 0.08)',
        'border-subtle': 'rgba(255, 255, 255, 0.06)',
        'border-light': '#2A2E37',
        parity: {
          bg: '#070809',
          surface: '#0B0C0E',
          panel: '#101113',
          orange: '#FF7A18',
          'orange-bright': '#FF8A24',
          'orange-dim': 'rgba(255, 122, 24, 0.12)',
          gold: '#F5B942',
          'gold-bright': '#FFC857',
          'gold-dim': 'rgba(245, 185, 66, 0.12)',
          green: '#10B981',
          red: '#E63B32',
          'red-bright': '#FF4D3D',
          'red-dim': 'rgba(230, 59, 50, 0.12)',
          border: 'rgba(255, 255, 255, 0.08)',
          muted: 'rgba(255, 255, 255, 0.4)',
        },
        risk: {
          high: '#E63B32',
          'high-bg': 'rgba(230, 59, 50, 0.12)',
          'high-border': 'rgba(230, 59, 50, 0.35)',
          medium: '#F5B942',
          'medium-bg': 'rgba(245, 185, 66, 0.12)',
          'medium-border': 'rgba(245, 185, 66, 0.35)',
          low: '#71717A',
          'low-bg': 'rgba(113, 113, 122, 0.12)',
          'low-border': 'rgba(113, 113, 122, 0.3)',
          valid: '#10B981',
          'valid-bg': 'rgba(16, 185, 129, 0.12)',
          'valid-border': 'rgba(16, 185, 129, 0.35)',
        }
      },
      backgroundImage: {
        'scan-gradient': 'linear-gradient(to bottom, transparent, rgba(255, 122, 24, 0.2), transparent)',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'glow-orange': '0 0 35px -8px rgba(255, 122, 24, 0.28)',
        'glow-red': '0 0 30px -8px rgba(230, 59, 50, 0.28)',
        'glow-gold': '0 0 30px -8px rgba(245, 185, 66, 0.22)',
        'inner-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      }
    },
  },
  plugins: [],
}
