module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    applyComplexClasses: true,
  },
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      width: {
        'fit-content': 'fit-content',
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        highlight: "var(--highlight-color)",
        background: "var(--bg-color)",
        header: "var(--header)",
        writing: "var(--writing-body)",
        button: "var(--button-bg)",
      },
    },
    typography: {
      default: {
        css: {
          color: 'var(--writing-body)',
          blockquote: {
            color: 'var(--writing-body)',
          },
          a: {
            color: 'var(--primary-color)',
            '&:hover': {
              color: 'var(--highlight-color)',
            },
          },
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
