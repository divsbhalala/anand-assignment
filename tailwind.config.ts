import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        'heading-h-4-desktop-medium-font-family': 'Avenir-Medium, sans-serif',
        'heading-h-3-mobile-medium-font-family': 'Avenir-Medium, sans-serif',
        'button-desktop-medium-font-family': 'Avenir-Medium, sans-serif',
        'body-1-desktop-medium-font-family': 'Avenir-Medium, sans-serif',
        'subtitle-1-desktop-heavy-font-family': 'Avenir-Heavy, sans-serif'
      },
      fontSize: {
        'heading-h-4-desktop-medium-font-size': '28px',
        'heading-h-3-mobile-medium-font-size': '20px',
        'button-desktop-medium-font-size': '16px',
        'body-1-desktop-medium-font-size': '16px',
        'subtitle-1-desktop-heavy-font-size': '20px'
      },
      fontWeight: {
        'heading-h-4-desktop-medium-font-weight': '500',
        'heading-h-3-mobile-medium-font-weight': '500',
        'button-desktop-medium-font-weight': '500',
        'body-1-desktop-medium-font-weight': '500',
        'subtitle-1-desktop-heavy-font-weight': '400'
      },
      lineHeight: {
        'heading-h-4-desktop-medium-line-height': '32px',
        'heading-h-3-mobile-medium-line-height': '140%',
        'button-desktop-medium-line-height': '150%',
        'body-1-desktop-medium-line-height': '20px',
        'subtitle-1-desktop-heavy-line-height': '140%'
      },
      borderRadius: {},
      colors: {
        'neutral-850-main': '#1a1402',
        'neutral-600': '#6b6556',
        'neutral-800': '#393426',
        'primary-500-main': '#e5b62c',
        'shades-white': '#ffffff',
        'gray-300': '#e2e2df'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
export default config
