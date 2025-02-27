import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}", // Include Material Tailwind components
  ],
  theme: {
    extend: {
      height: {
        nav: "100px",
      },
      fontFamily: {
        jost: ["var(--font-geist-jost)"],
        manrope: ["var(--manrope)"],
        light_poppins: ["var(--font-light-poppins)"],
        poppins: ["var(--font-regular-poppins)"],
        semibold_poppins: ["var(--font-semibold-poppins)"],
      },
      fontWeight: {
        500: "500",
      },
      colors: {
        homepage_background: "var(--homepage-background)",
        homepage_foreground: "var(--homepage-foreground)",
        platform_background: "var(--platform-background)",
        background: "var(--background)",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "menu-dropdown-zoom-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "menu-dropdown-zoom-out": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.9)", opacity: "0" },
        },
      },
      animation: {
        "menu-dropdown-in": "menu-dropdown-zoom-in 0.3s ease-out forwards",
        "menu-dropdown-out": "menu-dropdown-zoom-out 0.3s ease-in forwards",
      },
    },
    // Add the nodrag class under the `extend` section
    nodrag: {
      DEFAULT: {
        userSelect: "none",
        WebkitUserDrag: "none",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
});
