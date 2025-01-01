import localFont from "next/font/local";

export const Rubik = localFont({
  src: [
    {
      path: "../../public/fonts/Rubik-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Rubik-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Rubik-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Rubik-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Rubik-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-rubik",
});
