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
      minWidth: {
        xxxs: "12rem",
        xxs: "16rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
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
          strong: {
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
