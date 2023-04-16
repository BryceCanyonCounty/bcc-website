module.exports = {
    plugins: [require('daisyui'), require('@tailwindcss/typography')],
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "dark",
        themes: [
          {
            bcc: {
              "color-scheme": "dark",
              "primary": "#0391BB",
              "secondary": "#7CBB32",
              "accent": "#D7B575",
              "neutral": "#57534e",
              "info": "#8BE9FD",
              "success": "#50FA7B",
              "warning": "#F1FA8C",
              "error": "#FF5555",
              "base-100": "#2A303C",
              "base-200": "#242933",
              "base-300": "#20252E",
              "base-content": "#A6ADBB",
            },
          },
        ]
      }
};
