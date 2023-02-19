module.exports = {
  purge: false,
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {
        c: {
          purple: '#6743FF',
          blue: '#332DE9',
          navy: '#4B24CD',
          steel: '#303B59',
        },
      },
    },
  },
  plugins: [],
};
