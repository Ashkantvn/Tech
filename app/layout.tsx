import Header from "@/components/header/header";
import { Metadata } from "next";

export const metadata  = {
  title: "TECH - news, and information about digital devices",
  viewport: "width=device-width, initial-scale=1.0",
  description:
    "The website, helps you to check news, compare devices, and get some information about digital devices.",
  keywords:
    "technology, technology news, digital devices, digital products, electronic device, smartphone, laptop, tablet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
