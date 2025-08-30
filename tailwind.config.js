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
        // Core colors using CYBER AMBER PALETTE
        primary: {
          DEFAULT: "hsl(var(--primary))",
          hover: "hsl(var(--primary-hover))",
          active: "hsl(var(--primary-active))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
        },
        
        accent: {
          DEFAULT: "hsl(var(--accent))",
          hover: "hsl(var(--accent-hover))",
          muted: "hsl(var(--accent-muted))",
        },
        
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          hover: "hsl(var(--secondary-hover))",
          muted: "hsl(var(--secondary-muted))",
        },
        
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          hover: "hsl(var(--tertiary-hover))",
          muted: "hsl(var(--tertiary-muted))",
        },
        
        background: {
          DEFAULT: "hsl(var(--background))",
          lighter: "hsl(var(--background-lighter))",
          card: "hsl(var(--background-card))",
          hover: "hsl(var(--background-hover))",
          secondary: "hsl(var(--background-secondary))",
        },
        
        surface: {
          DEFAULT: "hsl(var(--surface))",
          secondary: "hsl(var(--surface-secondary))",
        },
        
        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
          muted: "hsl(var(--text-muted))",
          accent: "hsl(var(--text-accent))",
          light: "hsl(var(--text-light))",
          dark: "hsl(var(--text-dark))",
          white: "hsl(var(--text-white))",
          hover: "hsl(var(--text-hover))",
        },
        
        border: {
          DEFAULT: "hsl(var(--border))",
          light: "hsl(var(--border-light))",
          dark: "hsl(var(--border-dark))",
        },
        
        // Interactive colors - CYBER AMBER
        interactive: {
          primary: "hsl(var(--interactive-primary))",
          hover: "hsl(var(--interactive-hover))",
          active: "hsl(var(--interactive-active))",
          light: "hsl(var(--interactive-light))",
          dark: "hsl(var(--interactive-dark))",
        },
        
        // Legacy aliases - CYBER AMBER
        "accent-tech": "hsl(var(--accent-tech))",
        "accent-tech-hover": "hsl(var(--accent-tech-hover))",
        "accent-tech-muted": "hsl(var(--accent-tech-muted))",
        
        "jade-electric": "hsl(var(--electric-jade))",
        "jade-hover": "hsl(var(--electric-jade-hover))",
        "jade-muted": "hsl(var(--electric-jade-muted))",
        
        "clay-sunset": "hsl(var(--sunset-clay))",
        "clay-hover": "hsl(var(--sunset-clay-hover))",
        "clay-muted": "hsl(var(--sunset-clay-muted))",
        
        "gold-rose": "hsl(var(--gold-rose))",
        "gold-rose-hover": "hsl(var(--gold-rose-hover))",
        "gold-rose-muted": "hsl(var(--gold-rose-muted))",
        
        solid: {
          primary: "hsl(var(--solid-primary))",
          secondary: "hsl(var(--solid-secondary))",
          accent: "hsl(var(--solid-accent))",
          success: "hsl(var(--solid-success))",
          warning: "hsl(var(--solid-warning))",
          error: "hsl(var(--solid-error))",
          info: "hsl(var(--solid-info))",
        },
        
        // Additional aliases for existing code
        foreground: "hsl(var(--foreground))",
        "text-tech": "hsl(var(--text-tech))",
      },
      
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "sans-serif"],
        mono: ["Consolas", "Monaco", "Courier New", "monospace"],
      },
      
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-in-out",
        "wiggle": "wiggle 0.5s ease-out",
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
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      
      boxShadow: {
        'floating': '0 4px 20px hsl(var(--background) / 0.3), 0 2px 4px hsl(var(--primary) / 0.1)',
      },
    },
  },
  plugins: [],
}; 