import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Inter, IBM_Plex_Serif } from "next/font/google";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        {children}
    </main>
  );
}
