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
        border: {
          DEFAULT: "hsla(0, 0%, 20%, 1)", // Gris très foncé
          light: "hsla(0, 60%, 50%, 0.2)", // Rouge transparent
          dark: "hsla(0, 0%, 15%, 1)", // Gris plus foncé pour les bordures sombres
        },
        background: {
          DEFAULT: "hsl(0, 0%, 4%)", // Noir profond
          lighter: "hsl(0, 0%, 8%)", // Noir légèrement plus clair
          card: "hsl(0, 0%, 6%)", // Noir pour les cartes
          hover: "hsl(0, 0%, 10%)", // Pour les états hover
        },
        foreground: "hsl(0, 0%, 98%)", // Blanc cassé
        interactive: {
          primary: "hsl(0, 85%, 45%)", // Rouge japonais (vermillon)
          hover: "hsl(0, 85%, 55%)", // Rouge plus vif au survol
          active: "hsl(0, 85%, 40%)", // Rouge plus sombre à l'activation
          light: "hsl(0, 85%, 65%)", // Rouge plus clair pour les accents légers
          dark: "hsl(0, 85%, 35%)", // Rouge plus foncé pour les accents sombres
        },
        solid: {
          primary: "hsl(0, 0%, 8%)", // Noir légèrement plus clair
          secondary: "hsl(0, 85%, 45%)", // Rouge japonais (vermillon)
          accent: "hsl(350, 80%, 40%)", // Rouge bordeaux
          success: "hsl(120, 60%, 40%)", // Vert
          warning: "hsl(32, 95%, 49%)",  // Orange
          error: "hsl(0, 90%, 60%)",     // Rouge vif
          info: "hsl(195, 94%, 48%)",    // Bleu info
        },
        text: {
          primary: "hsl(0, 0%, 98%)",    // Blanc cassé
          secondary: "hsl(0, 0%, 75%)",  // Gris clair
          muted: "hsl(0, 0%, 55%)",      // Gris moyen
          accent: "hsl(0, 85%, 55%)",    // Rouge vif
          light: "hsl(0, 0%, 90%)",      // Presque blanc
          dark: "hsl(0, 0%, 12%)",       // Presque noir
          white: "hsl(0, 0%, 100%)",     // Blanc pur
          hover: "hsl(0, 0%, 95%)",      // Pour les états hover
        },
        // Rétrocompatibilité minimale pour les classes legacy
        primary: "hsl(0, 85%, 45%)",
        secondary: "hsl(350, 80%, 40%)", // Rouge bordeaux (pour compatibilité)
        accent: "hsl(0, 85%, 55%)",      // Rouge vif (pour compatibilité)
        dark: "hsl(0, 0%, 4%)",          // Noir profond (pour compatibilité)
        light: "hsl(0, 0%, 98%)",        // Blanc cassé (pour compatibilité)
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
        'accent': '0 4px 6px rgba(255, 0, 0, 0.1), 0 2px 4px rgba(255, 0, 0, 0.05)',
        'primary': '0 4px 6px rgba(255, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.1)',
        'floating': '0 10px 25px -5px rgba(0, 0, 0, 0.25), 0 8px 10px -6px rgba(255, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}; 