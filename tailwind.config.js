// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

delete colors.lightBlue;
delete colors.blueGray;
delete colors.trueGray;
delete colors.coolGray;
delete colors.warmGray;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        light: '#703CD0',
        DEFAULT: '#703CD0',
        dark: '#D2BCFF',
      },
      secondary: {
        light: '#005EB2',
        DEFAULT: '#005EB2',
        dark: '#A7C8FF',
      },
      error: {
        light: '#BA1437',
        DEFAULT: '#BA1437',
        dark: '#FFB3B5',
      },
      green: {
        light: '#056E00',
        DEFAULT: '#056E00',
      },
      orange: {
        light: '#FF8022',
        DEFAULT: '#FF8022',
      },
      pink: {
        light: '#ED24D9',
        DEFAULT: '#ED24D9',
      },
      yellow: {
        light: '#EBC13E',
        DEFAULT: '#EBC13E',
      },
      ...colors,
    },
    extend: {
      animation: {},
      keyframes: {},
      fontSize: {
        'display-large': ['3.5625rem', { fontWeight: 400, lineHeight: '4rem' }],
        'display-medium': [
          '2.8125rem',
          { fontWeight: 400, lineHeight: '3.25rem' },
        ],
        'display-small': [
          '2.25rem',
          { fontWeight: 400, lineHeight: '2.75rem' },
        ],
        'headline-large': ['2rem', { fontWeight: 400, lineHeight: '2.5rem' }],
        'headline-medium': [
          '1.75rem',
          { fontWeight: 400, lineHeight: '2.25rem' },
        ],
        'headline-small': ['1.5rem', { fontWeight: 400, lineHeight: '2rem' }],
        'body-large': ['1rem', { fontWeight: 400, lineHeight: '1.5rem' }],
        'body-medium': [
          '0.875rem',
          {
            fontWeight: 400,
            lineHeight: '1.25rem',
          },
        ],
        'body-small': ['0.75rem', { fontWeight: 400, lineHeight: '1rem' }],
        'label-large': [
          '0.875rem',
          {
            fontWeight: 500,
            lineHeight: '1.25rem',
          },
        ],
        'label-medium': ['0.75rem', { fontWeight: 500, lineHeight: '1rem' }],
        'label-small': ['0.875rem', { fontWeight: 500, lineHeight: '1.25rem' }],
        'title-large': ['1.375rem', { fontWeight: 700, lineHeight: '1.5rem' }],
        'title-semi-bold': [
          '0.875rem',
          {
            fontWeight: 600,
            lineHeight: '1.25rem',
          },
        ],
        'title-semi-large': [
          '1.125rem',
          {
            fontWeight: 700,
            lineHeight: '1.375rem',
          },
        ],
        'title-medium': ['1rem', { fontWeight: 600, lineHeight: '1.5rem' }],
        'title-small': [
          '0.875rem',
          {
            fontWeight: 500,
            lineHeight: '1.25rem',
          },
        ],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
  important: true,
};
