import { Rubik } from "@/util/customFont";
import { GoogleAnalytics } from "@/components/util/google-analytics";
import { FacebookPixel } from "@/components/util/facebook-pixel";
import { CSPostHogProvider } from '@/app/providers'
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Rubik.className}>
        {children}
        <GoogleAnalytics />
        <FacebookPixel />
      </body>
      <CSPostHogProvider />
    </html>
  );
}
