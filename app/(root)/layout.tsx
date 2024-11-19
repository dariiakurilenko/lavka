import type { Metadata } from "next";
import {Nunito} from "next/font/google";

import { Header } from "@/components/shared/header";


export const metadata: Metadata = {
  title: "Lavka | Главная",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
    </main>
  );
}