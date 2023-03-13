/* eslint-disable @next/next/no-head-element */
import { Navigation } from "@/components/molecules/Navigation";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        {children}
        <Navigation />
      </body>
    </html>
  );
}
