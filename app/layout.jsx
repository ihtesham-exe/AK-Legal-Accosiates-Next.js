// ...existing code...
import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppWidget from "@/components/whatsapp-widget";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600"], // SemiBold
  variable: "--font-montserrat",
});
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "AK Legal Associates | Professional Legal Services",
  description:
    "Premier legal services firm providing expert counsel in corporate, litigation, and contract law.",
  generator: "v0.app",
};
// ...existing code...

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans antialiased font-semibold`}
      >
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
