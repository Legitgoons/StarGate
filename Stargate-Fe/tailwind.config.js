import { Plugin } from 'tailwindcss';

// tailwindcss 모듈에서 Config라는 타입을 임포트
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // 모든 html 파일 경로 등록
    "./**/*.html",
    "./src/**/*.{html,js}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        400: '400px',
        500: '500px',
        550: '550px',
        600: '600px',
      },
      colors: {
        g1: '#f6f6f6',
        g2: '#e7e7e7',
        g3: '#d1d1d1',
        g4: '#b0b0b0',
        g5: '#8c8c8c',
        g6: '#6d6d6d',
        g7: '#5d5d5d',
        g8: '#4f4f4f',
        g9: '#454545',
        g10: '#3d3d3d',
        g11: '#262626',

        b1: '#e7f1ff',
        b2: '#d4e6ff',
        b3: '#b2d0ff',
        b4: '#83afff',
        b5: '#537eff',
        b6: '#2c4eff',
        b7: '#081aff',
        mainblue: '#0010ff',
        b9: '#0312c3',
        b10: '#0e1da1',
        b11: '#080e5e',

        o1: '#fff7ed',
        o2: '#ffecd5',
        o3: '#ffd09e',
        o4: '#ffb772',
        o5: '#fd8e3a',
        o6: '#fc6e13',
        o7: '#ed5209',
        o8: '#c43c0a',
        o9: '#9c3010',
        o10: '#7d2a11',
        o11: '#441306',

        p1: '#f8f7fb',
        p2: '#f0f0f7',
        p3: '#e5e3f1',
        p4: '#d0cde5',
        p5: '#aea7d0',
        p6: '#9b90c2',
        p7: '#8776b1',
        p8: '#75639e',
        p9: '#625384',
        p10: '#52456d',
        p11: '#342c49',

        y1: '#fefce8',
        y2: '#fffac2',
        y3: '#fff189',
        y4: '#ffe038',
        y5: '#fdcf12',
        y6: '#ecb506',
        y7: '#cc8c02',
        y8: '#a36305',
        y9: '#864d0d',
        y10: '#723f11',
        y11: '#432005',

        red: '#DC2626',
        admingray: '#DADADA',
      },
      fontFamily: {
        suit: ['SUIT', 'sans-serif'],
        kreon: ['KREON', 'sans-serif'],
      },
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        28: '28px',
        32: '32px',
        48: '48px',
        60: '60px',
        80: '80px',
        160: '160px',
      },
      lineHeight: {
        120: '120%',
        130: '130%',
        140: '140%',
      },
      fontWeight: {
        normal: 400,
        semibold: 600,
      },
      transitionDuration: {
        0: '0ms',
        100: '100ms',
        slow: '200ms',
        300: '300ms',
        normal: '400ms',
        500: '500ms',
        fast: '600ms',
        700: '700ms',
        800: '800ms',
        900: '900ms',
        1000: '1000ms',
      },
      borderRadius: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '32px',
      }
    },
  },
  plugins: [
    // plugin(function ({ addUtilities }) {
    //   const newUtilities = {
    //     ".medium-white": {
    //       "@apply font-suit text-28 font-semibold text-white": "",
    //     },
    //     ".medium-blue": {
    //       "@apply font-suit text-28 font-semibold text-[#0010FF]": "",
    //     },
    //   };
    // }),
  ],
}

