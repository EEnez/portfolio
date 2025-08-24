/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // === JAPANESE-INSPIRED PALETTE ===
        
        border: {
          DEFAULT: "hsl(var(--border))",
          light: "hsl(var(--border-light))",
          dark: "hsl(var(--border-dark))",
        },
        background: {
          DEFAULT: "hsl(var(--background))",
          lighter: "hsl(var(--background-lighter))",
          card: "hsl(var(--background-card))",
          hover: "hsl(var(--background-hover))",
          secondary: "hsl(var(--background-secondary))",
        },
        foreground: "hsl(var(--foreground))",
        
        // Urushi Red System
        interactive: {
          primary: "hsl(var(--interactive-primary))",
          hover: "hsl(var(--interactive-hover))",
          active: "hsl(var(--interactive-active))",
          light: "hsl(var(--interactive-light))",
          dark: "hsl(var(--interactive-dark))",
        },
        
        // Cyan Tech System
        accent: {
          tech: "hsl(var(--accent-tech))",
          "tech-hover": "hsl(var(--accent-tech-hover))",
          "tech-muted": "hsl(var(--accent-tech-muted))",
        },
        
        // System Colors
        solid: {
          primary: "hsl(var(--solid-primary))",
          secondary: "hsl(var(--solid-secondary))",
          accent: "hsl(var(--solid-accent))",
          success: "hsl(var(--solid-success))",
          warning: "hsl(var(--solid-warning))",
          error: "hsl(var(--solid-error))",
          info: "hsl(var(--solid-info))",
        },
        
        // Enhanced Text System
        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
          muted: "hsl(var(--text-muted))",
          accent: "hsl(var(--text-accent))",
          tech: "hsl(var(--text-tech))",
          light: "hsl(var(--text-light))",
          dark: "hsl(var(--text-dark))",
          white: "hsl(var(--text-white))",
          hover: "hsl(var(--text-hover))",
        },
        
        // Legacy aliases for compatibility
        primary: "hsl(var(--interactive-primary))",
        secondary: "hsl(var(--solid-accent))",
        dark: "hsl(var(--background))",
        light: "hsl(var(--text-primary))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "sans-serif"],
        mono: ["Consolas", "Monaco", "Courier New", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.1)',
        'floating': '0 4px 20px hsl(var(--background) / 0.3), 0 2px 4px hsl(var(--interactive-primary) / 0.1)',
        'tech': '0 4px 20px hsl(var(--background) / 0.3), 0 2px 4px hsl(var(--accent-tech) / 0.1)',
        'japanese': '0 8px 32px hsl(var(--background) / 0.4), 0 4px 12px hsl(var(--interactive-primary) / 0.15)',
      },
    },
  },
  plugins: [],
}; 