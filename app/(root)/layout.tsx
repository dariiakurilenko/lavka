import type { Metadata } from "next";


import { Header } from "@/shared/components/shared/header";
import { Suspense } from "react";


export const metadata: Metadata = {
  title: "Lavka | Главная",
};

export default function HomeLayout({
  modal,
  children
}: Readonly<{
  modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Suspense>
        <Header />
      </Suspense>
      {modal}
      {children}
    </main>
  );
}