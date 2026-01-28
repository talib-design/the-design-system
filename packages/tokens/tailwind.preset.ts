import type { Config } from "tailwindcss";

const preset: Config = {
  theme: {
    extend: {
      colors: {
        "vert-luxy": {
          50: "var(--ds-color-vert-luxy-50)",
          100: "var(--ds-color-vert-luxy-100)",
          200: "var(--ds-color-vert-luxy-200)",
          300: "var(--ds-color-vert-luxy-300)",
          400: "var(--ds-color-vert-luxy-400)",
          500: "var(--ds-color-vert-luxy-500)",
          600: "var(--ds-color-vert-luxy-600)",
          700: "var(--ds-color-vert-luxy-700)",
          800: "var(--ds-color-vert-luxy-800)",
          900: "var(--ds-color-vert-luxy-900)",
          950: "var(--ds-color-vert-luxy-950)"
        },
        purple: {
          50: "var(--ds-color-purple-50)",
          100: "var(--ds-color-purple-100)",
          200: "var(--ds-color-purple-200)",
          300: "var(--ds-color-purple-300)",
          400: "var(--ds-color-purple-400)",
          500: "var(--ds-color-purple-500)",
          600: "var(--ds-color-purple-600)",
          700: "var(--ds-color-purple-700)",
          800: "var(--ds-color-purple-800)",
          900: "var(--ds-color-purple-900)",
          950: "var(--ds-color-purple-950)"
        },
        blue: {
          50: "var(--ds-color-blue-50)",
          100: "var(--ds-color-blue-100)",
          200: "var(--ds-color-blue-200)",
          300: "var(--ds-color-blue-300)",
          400: "var(--ds-color-blue-400)",
          500: "var(--ds-color-blue-500)",
          600: "var(--ds-color-blue-600)",
          700: "var(--ds-color-blue-700)",
          800: "var(--ds-color-blue-800)",
          900: "var(--ds-color-blue-900)",
          950: "var(--ds-color-blue-950)"
        },
        yellow: {
          50: "var(--ds-color-yellow-50)",
          100: "var(--ds-color-yellow-100)",
          200: "var(--ds-color-yellow-200)",
          300: "var(--ds-color-yellow-300)",
          400: "var(--ds-color-yellow-400)",
          500: "var(--ds-color-yellow-500)",
          600: "var(--ds-color-yellow-600)",
          700: "var(--ds-color-yellow-700)",
          800: "var(--ds-color-yellow-800)",
          900: "var(--ds-color-yellow-900)",
          950: "var(--ds-color-yellow-950)"
        },
        green: {
          50: "var(--ds-color-green-50)",
          100: "var(--ds-color-green-100)",
          200: "var(--ds-color-green-200)",
          300: "var(--ds-color-green-300)",
          400: "var(--ds-color-green-400)",
          500: "var(--ds-color-green-500)",
          600: "var(--ds-color-green-600)",
          700: "var(--ds-color-green-700)",
          800: "var(--ds-color-green-800)",
          900: "var(--ds-color-green-900)",
          950: "var(--ds-color-green-950)"
        },
        red: {
          50: "var(--ds-color-red-50)",
          100: "var(--ds-color-red-100)",
          200: "var(--ds-color-red-200)",
          300: "var(--ds-color-red-300)",
          400: "var(--ds-color-red-400)",
          500: "var(--ds-color-red-500)",
          600: "var(--ds-color-red-600)",
          700: "var(--ds-color-red-700)",
          800: "var(--ds-color-red-800)",
          900: "var(--ds-color-red-900)",
          950: "var(--ds-color-red-950)"
        },
        orange: {
          50: "var(--ds-color-orange-50)",
          100: "var(--ds-color-orange-100)",
          200: "var(--ds-color-orange-200)",
          300: "var(--ds-color-orange-300)",
          400: "var(--ds-color-orange-400)",
          500: "var(--ds-color-orange-500)",
          600: "var(--ds-color-orange-600)",
          700: "var(--ds-color-orange-700)",
          800: "var(--ds-color-orange-800)",
          900: "var(--ds-color-orange-900)",
          950: "var(--ds-color-orange-950)"
        },
        neutral: {
          50: "var(--ds-color-neutral-50)",
          100: "var(--ds-color-neutral-100)",
          200: "var(--ds-color-neutral-200)",
          300: "var(--ds-color-neutral-300)",
          400: "var(--ds-color-neutral-400)",
          500: "var(--ds-color-neutral-500)",
          600: "var(--ds-color-neutral-600)",
          700: "var(--ds-color-neutral-700)",
          800: "var(--ds-color-neutral-800)",
          900: "var(--ds-color-neutral-900)",
          950: "var(--ds-color-neutral-950)",
          white: "var(--ds-color-neutral-white)"
        },
        fg: {
          primary: "var(--ds-text-primary)",
          secondary: "var(--ds-text-secondary)",
          placeholder: "var(--ds-text-placeholder)",
          brand: "var(--ds-text-brand)",
          invert: "var(--ds-text-invert)",
          danger: "var(--ds-text-danger)",
          success: "var(--ds-text-success)",
          warning: "var(--ds-text-warning)",
          error: "var(--ds-text-error)"
        },
        bg: {
          page: "var(--ds-bg-page)",
          layer100: "var(--ds-bg-layer100)",
          layer200: "var(--ds-bg-layer200)",
          system: {
            success: "var(--ds-bg-system-success)",
            info: "var(--ds-bg-system-info)",
            warning: "var(--ds-bg-system-warning)",
            danger: "var(--ds-bg-system-danger)"
          },
          tooltip: {
            DEFAULT: "var(--ds-bg-tooltip-default)"
          },
          success: {
            surface: "var(--ds-bg-success-surface)",
            solid: "var(--ds-bg-success-solid)",
            hover: "var(--ds-bg-success-hover)",
            active: "var(--ds-bg-success-active)"
          },
          warning: {
            surface: "var(--ds-bg-warning-surface)",
            solid: "var(--ds-bg-warning-solid)",
            hover: "var(--ds-bg-warning-hover)",
            active: "var(--ds-bg-warning-active)"
          },
          error: {
            surface: "var(--ds-bg-error-surface)",
            solid: "var(--ds-bg-error-solid)",
            hover: "var(--ds-bg-error-hover)",
            active: "var(--ds-bg-error-active)"
          },
          brand: {
            filled: {
              DEFAULT: "var(--ds-bg-brand-filled-default)",
              hover: "var(--ds-bg-brand-filled-hover)",
              active: "var(--ds-bg-brand-filled-active)"
            },
            transparent: {
              DEFAULT: "var(--ds-bg-brand-transparent-default)",
              hover: "var(--ds-bg-brand-transparent-hover)",
              active: "var(--ds-bg-brand-transparent-active)"
            }
          }
        },
        border: {
          DEFAULT: "var(--ds-border-default)",
          strong: "var(--ds-border-strong)",
          light: "var(--ds-border-light)",
          brand: "var(--ds-border-brand)",
          danger: "var(--ds-border-danger)",
          success: "var(--ds-border-success)",
          warning: "var(--ds-border-warning)",
          error: "var(--ds-border-error)"
        }
      },
      spacing: {
        0: "var(--ds-space-0)",
        "0.5": "var(--ds-space-0_5)",
        1: "var(--ds-space-1)",
        2: "var(--ds-space-2)",
        3: "var(--ds-space-3)",
        4: "var(--ds-space-4)",
        5: "var(--ds-space-5)",
        6: "var(--ds-space-6)"
      },
      borderRadius: {
        none: "var(--ds-radius-none)",
        sm: "var(--ds-radius-sm)",
        DEFAULT: "var(--ds-radius-default)",
        md: "var(--ds-radius-md)",
        lg: "var(--ds-radius-lg)",
        xl: "var(--ds-radius-xl)",
        "2xl": "var(--ds-radius-2xl)",
        "3xl": "var(--ds-radius-3xl)",
        full: "var(--ds-radius-full)"
      },
      borderWidth: {
        DEFAULT: "var(--ds-border-base)",
        md: "var(--ds-border-md)",
        lg: "var(--ds-border-lg)",
        xl: "var(--ds-border-xl)"
      },
      boxShadow: {
        "brand-md": "var(--ds-shadow-brand-md)",
        "brand-lg": "var(--ds-shadow-brand-lg)",
        "neutral-sm": "var(--ds-shadow-neutral-sm)",
        "neutral-md": "var(--ds-shadow-neutral-md)",
        "neutral-lg": "var(--ds-shadow-neutral-lg)"
      },
      opacity: {
        disabled: "var(--ds-opacity-disabled)"
      },
      fontSize: {
        xs: ["var(--ds-text-xs)", "var(--ds-text-base)"],
        sm: ["var(--ds-text-sm)", "var(--ds-text-xl)"],
        base: ["var(--ds-text-base)", "var(--ds-text-2xl)"],
        xl: ["var(--ds-text-xl)", "var(--ds-text-2xl)"],
        "2xl": ["var(--ds-text-2xl)", "var(--ds-text-4xl)"],
        "3xl": ["var(--ds-text-3xl)", "var(--ds-text-4xl)"],
        "4xl": ["var(--ds-text-4xl)", "var(--ds-text-4xl)"],
        "5xl": ["var(--ds-text-5xl)", "var(--ds-text-5xl)"],
        "6xl": ["var(--ds-text-6xl)", "var(--ds-text-6xl)"]
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        number: ["Inter", "sans-serif"]
      },
      screens: {
        xs: "370px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
      }
    }
  }
};

export default preset;
