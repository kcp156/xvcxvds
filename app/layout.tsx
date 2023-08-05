import "../styles/globals.css";
import './globals.css'
import { Metadata } from "next";
import { GlobalNav } from "../ui/global-nav";
import { AddressBar } from "../ui/address-bar";
import Byline from "../ui/byline";
import { ClerkProvider, UserButton } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: {
    default: "Next.js App Router",
    template: "%s | Next.js App Router",
  },
  description:
    "A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.",
  openGraph: {
    title: "Next.js App Router Playground",
    description:
      "A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.",
    images: [`/api/og?title=Next.js App Router`],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en" className="[color-scheme:dark]">
      <body className=" overflow-y-scroll bg-[url('/grid.svg')] pb-36 h-full">
        <GlobalNav />
        <div className="xl:pl-72">
          <div className="mx-auto  space-y-8 px-2 pt-16 lg:px-4 lg:py-4">
            <div className="  p-px ">
              <div className=" p-3">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
