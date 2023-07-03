/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: 'var(--font-plex)',
      },
      colors: {
        purple: {
          1: '#D3B7FF',
          2: '#A166FE',
          3: '#A166FE',
          4: '#8643EE',
          5: '#6D28D9',
          6: '#5610C3',
          7: '#3A0096',
          8: '#2D0073',
          9: '#1C0048',
          10: '#100028',
        },
        grey: {
          1: '#F8F8F8',
          2: '#EDEDED',
          3: '#D7D7D7',
          4: '#B3B3B3',
          5: '#8F8F8F',
          6: '#696969',
          7: '#454545',
          8: '#323232',
          9: '#1B1B1B',
          10: '#0C0C0C',
        },
        card: '#1D2433',
        decorator: '#1B1433',
        background: '#111827',
      },
      boxShadow: {
        button:
          ' 0px 1px 33px 12px rgba(134, 67, 238, 0.10), 0px 0px 8px 0px rgba(211, 183, 255, 0.25), 0px 0px 13px -2px rgba(0, 0, 0, 0.28)',
      },
      screens: {
        '2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        lg: { max: '1100px' },
        // => @media (max-width: 1023px) { ... }

        md: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '639px' },
        // => @media (max-width: 639px) { ... }
      },
      // backgroundImage: {
      //   shadow:
      //     'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 12.5%, transparent 12.5%, transparent)',
      // },
    },
  },
  plugins: [],
}
