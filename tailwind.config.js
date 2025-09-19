module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
           fontFamily: {
              'display': ['Italiana', 'serif'],
              'body': ['Inter', 'sans-serif']
              },
      colors: {
        'daily-dev-tips': "#F89283"
      },
                          animation: {
                        'fade-in': 'fadeIn 1s ease-in-out',
                        'slide-up': 'slideUp 0.8s ease-out',
                        'float': 'float 3s ease-in-out infinite',
                        'pulse-slow': 'pulse 3s infinite'
                    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}