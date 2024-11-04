import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

export const poppins = Poppins({
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const montserrat = Montserrat({
  weight: ["200", "300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "My Friend AI",
  description:
    "My Friend is an AI therapist company specifically designed for women,",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
