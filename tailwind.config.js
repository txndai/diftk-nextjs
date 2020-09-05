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
        hrtoby: "var(--hr-color)",
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
          h1: {
            color: 'var(--writing-color)',
          },
          h2: {
            color: 'var(--writing-color)',
          },
          h3: {
            color: 'var(--writing-color)',
          },
          h4: {
            color: 'var(--writing-color)',
          },
          h5: {
            color: 'var(--writing-color)',
          },
          h6: {
            color: 'var(--writing-color)',
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
