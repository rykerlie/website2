import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0D0D10',
        'bg-secondary': '#1A1A1F',
        'accent-primary': '#FFFFFF',
        'accent-secondary': '#A0A0B0',
        'cta-vibrant': '#7D5FFF',
        'borders-dividers': '#2C2C34',
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
