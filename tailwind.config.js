// tailwind.config.js
module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-reverse': 'spin 3s linear infinite reverse',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
