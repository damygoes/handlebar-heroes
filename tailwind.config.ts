import formsPlugin from '@tailwindcss/forms'
import tailwindcssTypographyPlugin from '@tailwindcss/typography'
import tailwindcssAnimatePlugin from 'tailwindcss-animate'
import debugScreensPlugin from 'tailwindcss-debug-screens'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './src/stories/**/*.{ts,tsx}',
    './src/**/*.stories.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },

    colors: {
      border: 'rgba(var(--border))',
      input: 'rgba(var(--border))',
      ring: 'rgba(var(--foreground))',
      background: 'rgba(var(--background))',
      foreground: 'rgba(var(--foreground))',
      primary: {
        DEFAULT: 'rgba(var(--primary))',
        foreground: 'rgba(var(--primary-content))',
        light: 'rgba(var(--primary-light))',
        dark: 'rgba(var(--primary-dark))'
      },
      secondary: {
        DEFAULT: 'rgba(var(--secondary))',
        foreground: 'rgba(var(--secondary-content))',
        light: 'rgba(var(--secondary-light))',
        dark: 'rgba(var(--secondary-dark))'
      },
      destructive: {
        DEFAULT: 'rgba(var(--error))',
        foreground: 'rgba(var(--error-content))'
      },
      muted: {
        DEFAULT: 'rgba(var(--secondary))',
        foreground: 'rgba(var(--copy))'
      },
      accent: {
        DEFAULT: 'rgba(var(--secondary))',
        foreground: 'rgba(var(--secondary-content))'
      },
      popover: {
        DEFAULT: 'rgba(var(--background))',
        foreground: 'rgba(var(--foreground))'
      },
      card: {
        DEFAULT: 'rgba(var(--background))',
        foreground: 'rgba(var(--foreground))'
      },
      success: {
        DEFAULT: 'rgba(var(--success))',
        foreground: 'rgba(var(--success-content))'
      },
      warning: {
        DEFAULT: 'rgba(var(--warning))',
        foreground: 'rgba(var(--warning-content))'
      },
      copy: {
        DEFAULT: 'rgba(var(--copy))',
        light: 'rgba(var(--copy-light))',
        lighter: 'rgba(var(--copy-lighter))'
      }
    },

    borderRadius: {
      full: '9999px',
      xl: 'calc(var(--radius) + 12px)',
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)'
    },
    keyframes: {
      'accordion-down': {
        from: { height: '0' },
        to: { height: 'var(--radix-accordion-content-height)' }
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' }
      }
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out'
    },
    extend: {
      animation: {
        spotlight: 'spotlight 2s ease .75s 1 forwards'
      },
      keyframes: {
        spotlight: {
          '0%': {
            opacity: 0,
            transform: 'translate(-72%, -62%) scale(0.5)'
          },
          '100%': {
            opacity: 1,
            transform: 'translate(-50%,-40%) scale(1)'
          }
        }
      }
    }
  },
  plugins: [
    formsPlugin,
    tailwindcssAnimatePlugin,
    tailwindcssTypographyPlugin,
    debugScreensPlugin
  ]
}
