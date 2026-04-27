import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ServiceNow Agent Army",
  description:
    "Twenty advisors led by Pierrondi EA — the value-first headliner. Outcome before output. Turns a one-line ServiceNow problem into AI Agent Studio specs, workflow JSON, ATF tests, and Now Assist Skill Kit prompts.",
  metadataBase: new URL("https://servicenow-agent-army.vercel.app"),
  openGraph: {
    title: "ServiceNow Agent Army",
    description:
      "Council plus working app for ServiceNow AI agents, GenAI skills, and agentic workflows.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const analyticsEnabled =
    process.env.NEXT_PUBLIC_VERCEL_ANALYTICS !== "false" && process.env.NODE_ENV === "production";

  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        {analyticsEnabled ? (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        ) : null}
      </body>
    </html>
  );
}
